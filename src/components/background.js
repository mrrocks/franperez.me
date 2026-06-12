import * as THREE from "three";

// Core constants
const TAU = Math.PI * 2;
const BLOB_COUNT = 4;
const LOBES_PER_BLOB = 3;

const CONFIG = {
  speed: 1.08,
  gap: 16, // guaranteed minimum gap between blobs, in CSS px
  smoothK: 110, // smin fusion strength between lobes (px) — higher = gooier
  noiseAmp: 14, // organic edge ripple amplitude (px)
  noiseFreq: 0.0035, // ripple spatial frequency
  blobScale: 0.62, // lobe radius as fraction of base size
  squareness: 0.3, // 0 = circular lobes, 1 = square — subtle values fill the center more
  sync: 0.6, // 0 = each blob morphs independently, 1 = all morph in the same rhythm
  orbitScale: 0.3, // how far lobes wander from their quadrant anchor
  breathingRange: 0.05,
  colorStep: 0.001,
  timeScale: 0.36, // matches old timeStep (0.006) at 60fps
};

const BLOBS = [
  { x: 0, y: 0, size: 1.1, color: "oklch(0.98 0.04 66)" },
  { x: 1, y: 0, size: 0.9, color: "oklch(0.98 0.04 2)" },
  { x: 0, y: 1, size: 0.9, color: "oklch(0.98 0.04 285)" },
  { x: 1, y: 1, size: 1.1, color: "oklch(0.98 0.04 163)" },
];

// Color utilities (OKLCH -> sRGB, since shaders speak RGB)
function parseOklch(color) {
  const [, l, c, h] = color.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/).map(Number);
  return { l, c, h };
}

function lerpHue(h1, h2, t) {
  const diff = h2 - h1;
  if (Math.abs(diff) > 180) h1 += diff > 0 ? 360 : -360;
  return (((h1 + (h2 - h1) * t) % 360) + 360) % 360;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function oklchToSrgb({ l, c, h }) {
  const hr = (h * Math.PI) / 180;
  const A = c * Math.cos(hr);
  const B = c * Math.sin(hr);

  const l_ = (l + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m_ = (l - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s_ = (l - 0.0894841775 * A - 1.291485548 * B) ** 3;

  const lr = 4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_;
  const lg = -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_;
  const lb = -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_;

  const gamma = (x) => {
    x = Math.min(1, Math.max(0, x));
    return x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
  };

  return [gamma(lr), gamma(lg), gamma(lb)];
}

// Shaders
const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  #define BLOB_COUNT ${BLOB_COUNT}
  #define LOBES_PER_BLOB ${LOBES_PER_BLOB}
  #define LOBE_COUNT ${BLOB_COUNT * LOBES_PER_BLOB}

  uniform vec2 uResolution; // CSS px
  uniform float uDpr;
  uniform float uTime;
  uniform float uGap;
  uniform float uSmoothK;
  uniform float uNoiseAmp;
  uniform float uNoiseFreq;
  uniform float uSquareness;
  uniform float uSync;
  uniform vec3 uLobes[LOBE_COUNT]; // xy = center (CSS px), z = radius
  uniform vec3 uColors[BLOB_COUNT];

  // --- value noise + fbm ---
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.5 * noise(p);
    v += 0.25 * noise(p * 2.17);
    return v / 0.75; // normalize to ~[0,1]
  }

  // polynomial smooth-min: fuses lobe circles into one organic mass.
  // It only ever underestimates distance, so the gap test stays
  // conservative: real gap >= uGap.
  float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  // rounded-box SDF: exact distance field, so the gap guarantee holds.
  // half-size b with corner radius r*(1-squareness) -> circle at 0, square at 1
  float sdSquircle(vec2 p, float r) {
    vec2 q = abs(p) - vec2(r) + r * (1.0 - uSquareness);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r * (1.0 - uSquareness);
  }

  // SDF of blob i: smin of its lobes + low-freq organic ripple
  float blobSdf(int i, vec2 p, float t) {
    float d = 1e6;
    for (int k = 0; k < LOBES_PER_BLOB; k++) {
      vec3 lobe = uLobes[i * LOBES_PER_BLOB + k];
      d = smin(d, sdSquircle(p - lobe.xy, lobe.z), uSmoothK);
    }
    // ripple: blend each blob's own noise with a shared field -> synced but still organic
    vec2 q = p * uNoiseFreq + vec2(t * 14.0, -t * 11.0) * uNoiseFreq * 10.0;
    float n = mix(fbm(q + float(i) * 17.31), fbm(q), uSync);
    return d + (n - 0.5) * 2.0 * uNoiseAmp;
  }

  void main() {
    vec2 p = gl_FragCoord.xy / uDpr;
    float t = uTime;

    float d[BLOB_COUNT];
    int best = 0;
    for (int i = 0; i < BLOB_COUNT; i++) {
      d[i] = blobSdf(i, p, t);
      if (d[i] < d[best]) best = i;
    }

    // distance to the nearest *other* blob
    float dOther = 1e6;
    for (int i = 0; i < BLOB_COUNT; i++) {
      if (i != best) dOther = min(dOther, d[i]);
    }

    // pixel is painted only if inside the closest blob AND at least
    // uGap away from every other blob -> guaranteed minimum channel.
    // AA fringes are biased inward so paint never crosses the boundary.
    float aaIn = fwidth(d[best]) + 1.0;
    float inside = 1.0 - smoothstep(-aaIn, 0.0, d[best]);
    float aaGap = fwidth(dOther) + 1.0;
    float gapMask = smoothstep(uGap, uGap + aaGap, dOther);

    vec3 color = mix(vec3(1.0), uColors[best], inside * gapMask);
    gl_FragColor = vec4(color, 1.0);
  }
`;

// Lobe motion state — lobe k of every blob shares a base rhythm,
// with a random deviation scaled by (1 - sync)
const LOBE_BASES = Array.from({ length: LOBES_PER_BLOB }, () => ({
  phase: Math.random() * TAU,
  angularSpeed: 0.3 + Math.random() * 0.25, // always positive -> one shared flow direction
  radialFreq: 0.2 + Math.random() * 0.3,
  radiusPhase: Math.random() * TAU,
}));

class Lobe {
  constructor(blobIndex, k) {
    const base = LOBE_BASES[k];
    const wobble = 1 - CONFIG.sync;
    this.blobIndex = blobIndex;
    this.phase = base.phase + (Math.random() - 0.5) * TAU * wobble;
    this.angularSpeed = base.angularSpeed + (Math.random() - 0.5) * 0.25 * wobble;
    this.radialFreq = base.radialFreq + (Math.random() - 0.5) * 0.2 * wobble;
    this.radiusPhase = base.radiusPhase + (Math.random() - 0.5) * TAU * wobble;
    this.breathing = Math.random() * CONFIG.breathingRange;
  }

  position(t, anchorX, anchorY, baseSize) {
    // constant-direction orbit: tangential velocity never reverses,
    // a slow radial sway keeps the path organic instead of a perfect circle
    const angle = t * this.angularSpeed + this.phase;
    const sway = 1 + Math.sin(t * this.radialFreq + this.radiusPhase) * 0.3;
    const orbit = baseSize * CONFIG.orbitScale * sway;
    const x = anchorX + Math.cos(angle) * orbit;
    const y = anchorY + Math.sin(angle) * orbit;
    const r = baseSize * CONFIG.blobScale * (1 + Math.sin(t * 0.4 + this.radiusPhase) * this.breathing);
    return [x, y, r];
  }
}

const lobes = BLOBS.flatMap((_, i) => Array.from({ length: LOBES_PER_BLOB }, (_, k) => new Lobe(i, k)));

// Color cycling (same behavior as before, per-blob phase offset)
const colorTimes = BLOBS.map((_, i) => i * (Math.PI / 2));

function cycledColor(i) {
  colorTimes[i] += CONFIG.colorStep * CONFIG.speed;
  const progress = ((colorTimes[i] % TAU) / TAU) * BLOBS.length;
  const curr = Math.floor(progress);
  const next = (curr + 1) % BLOBS.length;
  const t = progress % 1;

  const c1 = parseOklch(BLOBS[curr].color);
  const c2 = parseOklch(BLOBS[next].color);

  return oklchToSrgb({
    l: lerp(c1.l, c2.l, t),
    c: lerp(c1.c, c2.c, t),
    h: lerpHue(c1.h, c2.h, t),
  });
}

// Three.js setup
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
const dpr = Math.min(window.devicePixelRatio || 1, 2);
renderer.setPixelRatio(dpr);

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

// The noise ripple makes the field steeper than a true distance field by up
// to its worst-case gradient, so "gap in the field" can undershoot on screen.
// Compensate the threshold so the *visual* gap never drops below CONFIG.gap.
const NOISE_SLOPE = 2 * CONFIG.noiseAmp * 2.1 * CONFIG.noiseFreq;
const EFFECTIVE_GAP = CONFIG.gap * (1 + NOISE_SLOPE);

const uniforms = {
  uResolution: { value: new THREE.Vector2() },
  uDpr: { value: dpr },
  uTime: { value: 0 },
  uGap: { value: EFFECTIVE_GAP },
  uSmoothK: { value: CONFIG.smoothK },
  uNoiseAmp: { value: CONFIG.noiseAmp },
  uNoiseFreq: { value: CONFIG.noiseFreq },
  uSquareness: { value: CONFIG.squareness },
  uSync: { value: CONFIG.sync },
  uLobes: { value: lobes.map(() => new THREE.Vector3()) },
  uColors: { value: BLOBS.map((b) => new THREE.Vector3(...oklchToSrgb(parseOklch(b.color)))) },
};

const quad = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms })
);
quad.frustumCulled = false;
scene.add(quad);

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  uniforms.uResolution.value.set(w, h);
}

resize();
window.addEventListener("resize", resize);

// Animation loop
const clock = new THREE.Clock();

function animate() {
  const t = clock.getElapsedTime() * CONFIG.timeScale * CONFIG.speed;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const baseSize = Math.max(w / 2, h / 2);

  lobes.forEach((lobe, i) => {
    const blob = BLOBS[lobe.blobIndex];
    // anchor in GL coords (y up), so flip the CSS-space quadrant y
    const anchorX = blob.x * w;
    const anchorY = (1 - blob.y) * h;
    const [x, y, r] = lobe.position(t, anchorX, anchorY, baseSize * blob.size);
    uniforms.uLobes.value[i].set(x, y, r);
  });

  BLOBS.forEach((_, i) => {
    uniforms.uColors.value[i].set(...cycledColor(i));
  });

  uniforms.uTime.value = t;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

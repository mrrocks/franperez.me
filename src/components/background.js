import {
  BufferAttribute,
  BufferGeometry,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

const TAU = Math.PI * 2;
const CURVE_SUBDIVISIONS = 16;

const CONFIG = {
  speed: 1.08,
  pointCount: 14,
  scale: 1,
  padding: 60,
  breathingRange: 0.03,
  centerPull: 0.4,
  smoothing: 0.05,
  maxDistance: 0.7,
  morphIntensity: 0.02,
  morphRandomness: 0.02,
  rippleAmplitude: 0.7,
  smoothness: 0.2,
  timeStep: 0.006,
  colorStep: 0.001,
};

const BLOB_DEFINITIONS = [
  { x: 0, y: 0, size: 1.1, color: "oklch(0.98 0.04 66)" },
  { x: 1, y: 0, size: 0.9, color: "oklch(0.98 0.04 2)" },
  { x: 0, y: 1, size: 0.9, color: "oklch(0.98 0.04 285)" },
  { x: 1, y: 1, size: 1.1, color: "oklch(0.98 0.04 163)" },
];

function parseOklch(color) {
  const [, l, c, h] = color.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/).map(Number);
  return { l, c, h };
}

function lerp(a, b, amount) {
  return a + (b - a) * amount;
}

function lerpHue(from, to, amount) {
  const difference = to - from;
  const adjustedFrom = Math.abs(difference) > 180 ? from + (difference > 0 ? 360 : -360) : from;
  return (((lerp(adjustedFrom, to, amount) % 360) + 360) % 360);
}

function oklchToSrgb({ l, c, h }) {
  const hue = (h * Math.PI) / 180;
  const a = c * Math.cos(hue);
  const b = c * Math.sin(hue);
  const lPrime = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const mPrime = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const sPrime = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const linearRed = 4.0767416621 * lPrime - 3.3077115913 * mPrime + 0.2309699292 * sPrime;
  const linearGreen = -1.2684380046 * lPrime + 2.6097574011 * mPrime - 0.3413193965 * sPrime;
  const linearBlue = -0.0041960863 * lPrime - 0.7034186147 * mPrime + 1.707614701 * sPrime;
  const gammaCorrect = (value) => {
    const clamped = MathUtils.clamp(value, 0, 1);
    return clamped <= 0.0031308 ? 12.92 * clamped : 1.055 * clamped ** (1 / 2.4) - 0.055;
  };

  return [gammaCorrect(linearRed), gammaCorrect(linearGreen), gammaCorrect(linearBlue)];
}

function sampleCubicBezier(start, controlStart, controlEnd, end, amount) {
  const inverse = 1 - amount;
  return (
    inverse ** 3 * start +
    3 * inverse ** 2 * amount * controlStart +
    3 * inverse * amount ** 2 * controlEnd +
    amount ** 3 * end
  );
}

const palette = BLOB_DEFINITIONS.map(({ color }) => parseOklch(color));
const contourVertexCount = CONFIG.pointCount * CURVE_SUBDIVISIONS;

class Blob {
  constructor(index, baseSize, viewport) {
    this.index = index;
    this.definition = BLOB_DEFINITIONS[index];
    this.points = new Float32Array(CONFIG.pointCount * 2);
    this.rotation = Math.random() * TAU;
    this.rotationSpeed = 0.002 * (Math.random() - 0.5) * CONFIG.speed;
    this.time = Math.random() * TAU;
    this.phase = Math.random() * TAU;
    this.frequency = 0.5 + Math.random();
    this.sizePhase = Math.random() * TAU;
    this.breathingAmount = Math.random() * CONFIG.breathingRange;
    this.pointOffsets = Array.from({ length: CONFIG.pointCount }, () => Math.random() * TAU);
    this.distortion = CONFIG.morphIntensity + Math.random() * CONFIG.morphRandomness;
    this.colorTime = index * (Math.PI / 2);
    this.geometry = this.createGeometry();
    this.material = new MeshBasicMaterial({
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = index;
    this.resize(baseSize, viewport);
    this.updateColor(false);
  }

  createGeometry() {
    const positions = new Float32Array((contourVertexCount + 1) * 3);
    const indices = new Uint16Array(contourVertexCount * 3);

    for (let index = 0; index < contourVertexCount; index++) {
      const offset = index * 3;
      indices[offset] = 0;
      indices[offset + 1] = ((index + 1) % contourVertexCount) + 1;
      indices[offset + 2] = index + 1;
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(positions, 3));
    geometry.setIndex(new BufferAttribute(indices, 1));
    return geometry;
  }

  resize(baseSize, viewport) {
    this.baseRadius = baseSize * this.definition.size;
    this.radius = this.baseRadius;
    this.x = this.definition.x * viewport.width;
    this.y = this.definition.y * viewport.height;
    this.updateShape();
    this.updateGeometry();
  }

  update(blobs, viewport) {
    this.updateMovement(viewport);
    this.resolveCollisions(blobs);
    this.updateShape();
    this.updateGeometry();
    this.updateColor();
  }

  updateMovement(viewport) {
    const centerX = this.definition.x * viewport.width;
    const centerY = this.definition.y * viewport.height;
    const distanceFromCenter = Math.hypot(centerX - this.x, centerY - this.y);
    const maximumDistance = this.baseRadius * CONFIG.maxDistance;
    const range = this.baseRadius * 0.0008;

    this.time += CONFIG.timeStep * CONFIG.speed;
    this.rotation += this.rotationSpeed;
    this.radius = this.baseRadius * (1 + Math.sin(this.time * 0.4 + this.sizePhase) * this.breathingAmount);

    const targetX = this.x + Math.sin(this.time * 0.2 * this.frequency + this.phase) * range;
    const targetY = this.y + Math.cos(this.time * 0.3 * this.frequency + this.phase) * range;
    const pull =
      distanceFromCenter > maximumDistance * 0.5
        ? Math.min(1, (distanceFromCenter - maximumDistance * 0.5) / maximumDistance) *
          CONFIG.centerPull *
          distanceFromCenter
        : 0;
    const pullX = pull ? ((centerX - this.x) / distanceFromCenter) * pull : 0;
    const pullY = pull ? ((centerY - this.y) / distanceFromCenter) * pull : 0;

    this.x += (targetX - this.x + pullX) * CONFIG.smoothing;
    this.y += (targetY - this.y + pullY) * CONFIG.smoothing;
  }

  resolveCollisions(blobs) {
    blobs.forEach((other) => {
      if (other === this) return;

      const deltaX = this.x - other.x;
      const deltaY = this.y - other.y;
      const distance = Math.hypot(deltaX, deltaY);
      const minimumDistance = this.radius + other.radius + CONFIG.padding;

      if (distance >= minimumDistance) return;

      const angle = Math.atan2(deltaY, deltaX);
      const movement = (minimumDistance - distance) / 2;
      const movementX = Math.cos(angle) * movement;
      const movementY = Math.sin(angle) * movement;

      this.x += movementX;
      this.y += movementY;
      other.x -= movementX;
      other.y -= movementY;
    });
  }

  updateShape() {
    const angleStep = TAU / CONFIG.pointCount;
    const time = this.time * 0.9;

    for (let index = 0; index < CONFIG.pointCount; index++) {
      const angle = index * angleStep + this.rotation;
      const distortion =
        Math.sin(time + this.pointOffsets[index]) * this.distortion +
        Math.sin(time * 1.5 + this.pointOffsets[(index + 3) % CONFIG.pointCount]) *
          this.distortion *
          CONFIG.rippleAmplitude;
      const radius = this.radius * (1 + distortion);
      const offset = index * 2;

      this.points[offset] = this.x + Math.cos(angle) * radius;
      this.points[offset + 1] = this.y + Math.sin(angle) * radius;
    }
  }

  updateGeometry() {
    const positions = this.geometry.attributes.position.array;
    const curve = CONFIG.smoothness * (this.radius / this.baseRadius);
    positions[0] = this.x;
    positions[1] = this.y;

    for (let index = 0; index < CONFIG.pointCount; index++) {
      const current = index * 2;
      const next = ((index + 1) % CONFIG.pointCount) * 2;
      const following = ((index + 2) % CONFIG.pointCount) * 2;
      const previous = ((index - 1 + CONFIG.pointCount) % CONFIG.pointCount) * 2;
      const startX = this.points[current];
      const startY = this.points[current + 1];
      const endX = this.points[next];
      const endY = this.points[next + 1];
      const controlStartX = startX + (endX - this.points[previous]) * curve;
      const controlStartY = startY + (endY - this.points[previous + 1]) * curve;
      const controlEndX = endX - (this.points[following] - startX) * curve;
      const controlEndY = endY - (this.points[following + 1] - startY) * curve;

      for (let sample = 0; sample < CURVE_SUBDIVISIONS; sample++) {
        const amount = sample / CURVE_SUBDIVISIONS;
        const vertex = 1 + index * CURVE_SUBDIVISIONS + sample;
        const offset = vertex * 3;
        positions[offset] = sampleCubicBezier(startX, controlStartX, controlEndX, endX, amount);
        positions[offset + 1] = sampleCubicBezier(startY, controlStartY, controlEndY, endY, amount);
      }
    }

    this.geometry.attributes.position.needsUpdate = true;
  }

  updateColor(advance = true) {
    if (advance) this.colorTime += CONFIG.colorStep * CONFIG.speed;
    const progress = ((this.colorTime % TAU) / TAU) * palette.length;
    const current = Math.floor(progress);
    const next = (current + 1) % palette.length;
    const amount = progress % 1;
    const color = oklchToSrgb({
      l: lerp(palette[current].l, palette[next].l, amount),
      c: lerp(palette[current].c, palette[next].c, amount),
      h: lerpHue(palette[current].h, palette[next].h, amount),
    });

    this.material.color.setRGB(color[0], color[1], color[2], SRGBColorSpace);
  }
}

const canvas = document.querySelector("canvas");
const renderer = new WebGLRenderer({
  canvas,
  alpha: false,
  antialias: true,
});
const scene = new Scene();
const camera = new OrthographicCamera(0, 1, 0, 1, 0, 2);
const viewport = {
  width: window.innerWidth,
  height: window.innerHeight,
};
let baseSize = Math.max(viewport.width / 2, viewport.height / 2) * CONFIG.scale;

renderer.outputColorSpace = SRGBColorSpace;
renderer.setClearColor(0xffffff, 1);
camera.position.z = 1;

const blobs = BLOB_DEFINITIONS.map((_, index) => new Blob(index, baseSize, viewport));
blobs.forEach(({ mesh }) => scene.add(mesh));

function renderFrame() {
  blobs.forEach((blob) => blob.update(blobs, viewport));
  renderer.render(scene, camera);
}

function animate() {
  renderFrame();
}

function resize() {
  viewport.width = window.innerWidth;
  viewport.height = window.innerHeight;
  baseSize = Math.max(viewport.width / 2, viewport.height / 2) * CONFIG.scale;

  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(viewport.width, viewport.height, false);

  camera.left = 0;
  camera.right = viewport.width;
  camera.top = 0;
  camera.bottom = viewport.height;
  camera.updateProjectionMatrix();

  blobs.forEach((blob) => blob.resize(baseSize, viewport));
  renderer.render(scene, camera);
}

function updateMotionPreference() {
  renderer.setAnimationLoop(null);

  if (motionPreference.matches) {
    renderer.render(scene, camera);
    return;
  }

  renderer.setAnimationLoop(animate);
}

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
window.addEventListener("resize", resize);
motionPreference.addEventListener("change", updateMotionPreference);

resize();
updateMotionPreference();

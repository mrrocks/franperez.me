// Core constants
const TAU = Math.PI * 2;
const DPR = window.devicePixelRatio || 1;

// Canvas setup
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });

// Configuration objects
const BLOB_CONFIG = {
  speed: 0.8,
  count: 14,
  scale: 1,
  padding: 56,
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

const BLOBS = [
  { x: 0, y: 0, size: 1.1, color: "oklch(0.98 0.04 66)" },
  { x: 1, y: 0, size: 0.9, color: "oklch(0.98 0.04 2)" },
  { x: 0, y: 1, size: 0.9, color: "oklch(0.98 0.04 285)" },
  { x: 1, y: 1, size: 1.1, color: "oklch(0.98 0.04 163)" },
];

// Utility functions
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

// Canvas management
function updateCanvasSize() {
  canvas.width = window.innerWidth * DPR;
  canvas.height = window.innerHeight * DPR;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.scale(DPR, DPR);
  return Math.max(window.innerWidth / 2, window.innerHeight / 2) * BLOB_CONFIG.scale;
}

let baseSize = updateCanvasSize();

// Blob class definition
class Blob {
  constructor(i) {
    const { size, color } = BLOBS[i];
    this.color = color;
    this.points = new Float32Array(BLOB_CONFIG.count * 2);
    this.index = i;
    this.baseSize = size;

    this.initializeProperties();
    this.updateRadius();
    this.setPosition();
  }

  initializeProperties() {
    this.rotation = Math.random() * TAU;
    this.rotationSpeed = 0.002 * (Math.random() - 0.5) * BLOB_CONFIG.speed;
    this.time = Math.random() * TAU;
    this.phase = Math.random() * TAU;
    this.freq = 0.5 + Math.random();
    this.sizePhase = Math.random() * TAU;
    this.breathingAmount = Math.random() * BLOB_CONFIG.breathingRange;
    this.pointOffsets = Array.from({ length: BLOB_CONFIG.count }, () => Math.random() * TAU);
    this.distortion = BLOB_CONFIG.morphIntensity + Math.random() * BLOB_CONFIG.morphRandomness;
    this.colorTime = this.index * (Math.PI / 2);
  }

  updateRadius() {
    this.baseRadius = baseSize * this.baseSize;
  }

  setPosition() {
    const { x, y } = BLOBS[this.index];
    const { width, height } = canvas;
    this.x = (x * width) / DPR;
    this.y = (y * height) / DPR;
    this.radius = this.baseRadius;
  }

  update(blobs) {
    this.updateMovement();
    this.resolveCollisions(blobs);
    this.updateShape();
    this.updateColor();
  }

  updateMovement() {
    const centerX = (BLOBS[this.index].x * canvas.width) / DPR;
    const centerY = (BLOBS[this.index].y * canvas.height) / DPR;
    const range = this.baseRadius * 0.0008;
    const dist = Math.hypot(centerX - this.x, centerY - this.y);
    const maxDist = this.baseRadius * BLOB_CONFIG.maxDistance;

    this.time += BLOB_CONFIG.timeStep * BLOB_CONFIG.speed;
    this.rotation += this.rotationSpeed;
    this.radius = this.baseRadius * (1 + Math.sin(this.time * 0.4 + this.sizePhase) * this.breathingAmount);

    const tx = this.x + Math.sin(this.time * 0.2 * this.freq + this.phase) * range;
    const ty = this.y + Math.cos(this.time * 0.3 * this.freq + this.phase) * range;

    const pull =
      dist > maxDist * 0.5 ? Math.min(1, (dist - maxDist * 0.5) / maxDist) * BLOB_CONFIG.centerPull * dist : 0;

    const dx = pull ? ((centerX - this.x) / dist) * pull : 0;
    const dy = pull ? ((centerY - this.y) / dist) * pull : 0;

    this.x += (tx - this.x + dx) * BLOB_CONFIG.smoothing;
    this.y += (ty - this.y + dy) * BLOB_CONFIG.smoothing;
  }

  resolveCollisions(blobs) {
    blobs.forEach((other) => {
      if (other === this) return;
      const [dx, dy] = [this.x - other.x, this.y - other.y];
      const dist = Math.hypot(dx, dy);
      const minDist = this.radius + other.radius + BLOB_CONFIG.padding;

      if (dist < minDist) {
        const angle = Math.atan2(dy, dx);
        const move = (minDist - dist) / 2;
        const [mx, my] = [Math.cos(angle) * move, Math.sin(angle) * move];
        this.x += mx;
        this.y += my;
        other.x -= mx;
        other.y -= my;
      }
    });
  }

  updateShape() {
    const step = TAU / BLOB_CONFIG.count;
    for (let i = 0; i < BLOB_CONFIG.count; i++) {
      const angle = i * step + this.rotation;
      const time = this.time * 0.9;
      const dist = this.calculateDistortion(i, time);
      const r = this.radius * (1 + dist);

      this.points[i * 2] = this.x + Math.cos(angle) * r;
      this.points[i * 2 + 1] = this.y + Math.sin(angle) * r;
    }
  }

  calculateDistortion(i, time) {
    return (
      Math.sin(time + this.pointOffsets[i]) * this.distortion +
      Math.sin(time * 1.5 + this.pointOffsets[(i + 3) % BLOB_CONFIG.count]) *
        (this.distortion * BLOB_CONFIG.rippleAmplitude)
    );
  }

  updateColor() {
    this.colorTime += BLOB_CONFIG.colorStep * BLOB_CONFIG.speed;
    const colors = BLOBS.length;
    const cycle = TAU;
    const progress = ((this.colorTime % cycle) / cycle) * colors;
    const curr = Math.floor(progress);
    const next = (curr + 1) % colors;
    const t = progress % 1;

    const c1 = parseOklch(BLOBS[curr].color);
    const c2 = parseOklch(BLOBS[next].color);

    this.color = `oklch(${lerp(c1.l, c2.l, t)} ${lerp(c1.c, c2.c, t)} ${lerpHue(c1.h, c2.h, t)})`;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.points[0], this.points[1]);
    this.drawCurves();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  drawCurves() {
    const points = this.points;
    const count = BLOB_CONFIG.count * 2;
    const curve = BLOB_CONFIG.smoothness * (this.radius / this.baseRadius);

    for (let i = 0; i < count; i += 2) {
      const next = (i + 2) % count;
      const nextNext = (i + 4) % count;
      const prev = (i - 2 + count) % count;

      const cx1 = points[i] + (points[next] - points[prev]) * curve;
      const cy1 = points[i + 1] + (points[next + 1] - points[prev + 1]) * curve;
      const cx2 = points[next] - (points[nextNext] - points[i]) * curve;
      const cy2 = points[next + 1] - (points[nextNext + 1] - points[i + 1]) * curve;

      ctx.bezierCurveTo(cx1, cy1, cx2, cy2, points[next], points[next + 1]);
    }
  }
}

// Animation setup and execution
const blobs = Array.from({ length: BLOBS.length }, (_, i) => new Blob(i));

function animate() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  blobs.forEach((blob) => {
    blob.update(blobs);
    blob.draw();
  });
  requestAnimationFrame(animate);
}

// Event listeners
window.addEventListener("resize", () => {
  baseSize = updateCanvasSize();
  blobs.forEach((blob) => {
    blob.updateRadius();
    blob.setPosition();
  });
});

// Start animation
animate();

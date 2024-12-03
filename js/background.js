// Canvas Setup
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });
const DPR = window.devicePixelRatio || 1;
ctx.imageSmoothingEnabled = false;

// Constants
const TWO_PI = Math.PI * 2;
const CANVAS_SCALE = 1.65;
const POINTS_COUNT = 12;
const POINT_ARRAY_SIZE = POINTS_COUNT * 2;
const MIN_COLLISION_DISTANCE = 24;
const BLOB_COUNT = 4;
const BASE_RADIUS_MULTIPLIER = 0.4;

// Configuration
const QUADRANT_CONFIG = [
  { pos: [0, 0], size: 1.1, color: "#F7C59520" },
  { pos: [1, 0], size: 0.9, color: "#F97F9C20" },
  { pos: [0, 1], size: 0.9, color: "#ACFED430" },
  { pos: [1, 1], size: 1.1, color: "#8083CF20" },
];

const BLOB_SETTINGS = {
  ROTATION: {
    SPEED_RANGE: 0.002,
    BASE_SPEED: 0.003,
  },
  SIZE: {
    MIN_VARIATION: 0.02,
    VARIATION_RANGE: 0.03,
    SCALE: 0.97,
  },
  MOVEMENT: {
    MIN_SPEED: 0.001,
    SPEED_RANGE: 0.001,
    CENTER_ATTRACTION: 0.03,
    MAX_DISTANCE_MULTIPLIER: 1.2,
    SMOOTHING: 0.05,
  },
  DISTORTION: {
    MIN: 0.02,
    RANGE: 0.015,
    TIME_SCALE: 0.8,
    SECONDARY_SCALE: 0.7,
    TIME_MULTIPLIER: 1.5,
  },
  CURVE: {
    BASE_INFLUENCE: 0.18,
  },
};

// Canvas Utilities
function updateCanvasSize() {
  canvas.width = window.innerWidth * DPR;
  canvas.height = window.innerHeight * DPR;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.scale(DPR, DPR);
  return Math.min(window.innerWidth, window.innerHeight) * CANVAS_SCALE;
}

let baseSize = updateCanvasSize();

// Blob Class
class Blob {
  constructor(i) {
    this.initializeProperties(i);
    this.initializePosition();
  }

  initializeProperties(i) {
    const {
      pos: [x, y],
      size,
      color,
    } = QUADRANT_CONFIG[i];
    this.baseRadius = baseSize * BASE_RADIUS_MULTIPLIER * size;
    this.color = color;
    this.points = new Float32Array(POINT_ARRAY_SIZE);
    this.quadrantIndex = i;
    this.initializeRandomProperties();
  }

  initializeRandomProperties() {
    this.rotation = Math.random() * TWO_PI;
    this.rotationSpeed = BLOB_SETTINGS.ROTATION.SPEED_RANGE * (Math.random() - 0.5);
    this.time = Math.random() * TWO_PI;
    this.phaseOffset = Math.random() * TWO_PI;
    this.freqOffset = 0.5 + Math.random();
    this.sizeOffset = Math.random() * TWO_PI;
    this.sizeVariation = BLOB_SETTINGS.SIZE.MIN_VARIATION + Math.random() * BLOB_SETTINGS.SIZE.VARIATION_RANGE;
    this.moveSpeed = BLOB_SETTINGS.MOVEMENT.MIN_SPEED + Math.random() * BLOB_SETTINGS.MOVEMENT.SPEED_RANGE;
    this.pointOffsets = Array.from({ length: POINTS_COUNT }, () => Math.random() * TWO_PI);
    this.distortionScale = BLOB_SETTINGS.DISTORTION.MIN + Math.random() * BLOB_SETTINGS.DISTORTION.RANGE;
    this.centerAttraction = BLOB_SETTINGS.MOVEMENT.CENTER_ATTRACTION;
  }

  initializePosition() {
    const {
      pos: [x, y],
    } = QUADRANT_CONFIG[this.quadrantIndex];
    const dpr = window.devicePixelRatio || 1;
    this.canvasWidth = canvas.width / dpr;
    this.canvasHeight = canvas.height / dpr;
    this.x = x * this.canvasWidth;
    this.y = y * this.canvasHeight;
    this.radius = this.baseRadius;
  }

  handleCollisions(x, y, otherBlobs, pushStrength = 1) {
    let newX = x;
    let newY = y;

    otherBlobs.forEach((otherBlob) => {
      if (otherBlob === this) return;

      const dx = newX - otherBlob.x;
      const dy = newY - otherBlob.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = this.radius + otherBlob.radius + MIN_COLLISION_DISTANCE;

      if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const pushDistance = (minDistance - distance) * pushStrength;
        newX += Math.cos(angle) * pushDistance;
        newY += Math.sin(angle) * pushDistance;
      }
    });

    return { x: newX, y: newY };
  }

  reset(i, otherBlobs) {
    const {
      pos: [xRatio, yRatio],
    } = QUADRANT_CONFIG[i];
    const dpr = window.devicePixelRatio || 1;
    let newX = (xRatio * canvas.width) / dpr;
    let newY = (yRatio * canvas.height) / dpr;
    this.radius = this.baseRadius;

    let attempts = 0;
    while (attempts < 50) {
      const result = this.handleCollisions(newX, newY, otherBlobs.slice(0, i), 1);
      if (result.x === newX && result.y === newY) break;
      newX = result.x;
      newY = result.y;
      attempts++;
    }

    const maxX = canvas.width / DPR + this.baseRadius;
    const maxY = canvas.height / DPR + this.baseRadius;

    this.x = Math.max(-this.baseRadius, Math.min(maxX, newX));
    this.y = Math.max(-this.baseRadius, Math.min(maxY, newY));
  }

  getQuadrantCenter() {
    const {
      pos: [x, y],
    } = QUADRANT_CONFIG[this.quadrantIndex];
    const dpr = window.devicePixelRatio || 1;
    return {
      x: (x * canvas.width) / dpr,
      y: (y * canvas.height) / dpr,
    };
  }

  update() {
    this.time += BLOB_SETTINGS.ROTATION.BASE_SPEED;
    this.rotation += this.rotationSpeed;
    this.radius = this.baseRadius * (1 + Math.sin(this.time * 0.4 + this.sizeOffset) * this.sizeVariation);

    const moveRange = this.baseRadius * this.moveSpeed;
    const center = this.getQuadrantCenter();

    const dx = center.x - this.x;
    const dy = center.y - this.y;
    const distToCenter = Math.sqrt(dx * dx + dy * dy);

    let targetX = this.x + Math.sin(this.time * 0.2 * this.freqOffset + this.phaseOffset) * moveRange;
    let targetY = this.y + Math.cos(this.time * 0.3 * this.freqOffset + this.phaseOffset) * moveRange;

    const maxDistance = this.baseRadius * BLOB_SETTINGS.MOVEMENT.MAX_DISTANCE_MULTIPLIER;
    if (distToCenter > maxDistance) {
      const attraction = (distToCenter - maxDistance) * this.centerAttraction;
      targetX += (dx / distToCenter) * attraction;
      targetY += (dy / distToCenter) * attraction;
    }

    const result = this.handleCollisions(targetX, targetY, blobs, 5);
    this.x += (result.x - this.x) * BLOB_SETTINGS.MOVEMENT.SMOOTHING;
    this.y += (result.y - this.y) * BLOB_SETTINGS.MOVEMENT.SMOOTHING;

    this.updatePoints();
  }

  updatePoints() {
    const angleStep = TWO_PI / POINTS_COUNT;
    for (let i = 0; i < POINTS_COUNT; i++) {
      const angle = i * angleStep + this.rotation;
      const timeBase = this.time * BLOB_SETTINGS.DISTORTION.TIME_SCALE;
      const distortion =
        Math.sin(timeBase + this.pointOffsets[i]) * this.distortionScale +
        Math.sin(timeBase * BLOB_SETTINGS.DISTORTION.TIME_MULTIPLIER + this.pointOffsets[(i + 3) % POINTS_COUNT]) *
          (this.distortionScale * BLOB_SETTINGS.DISTORTION.SECONDARY_SCALE);
      const dist = this.radius * (BLOB_SETTINGS.SIZE.SCALE + distortion);

      this.points[i * 2] = this.x + Math.cos(angle) * dist;
      this.points[i * 2 + 1] = this.y + Math.sin(angle) * dist;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.points[0], this.points[1]);

    for (let i = 0; i < POINT_ARRAY_SIZE; i += 2) {
      const nextI = (i + 2) % POINT_ARRAY_SIZE;
      const nextNextI = (i + 4) % POINT_ARRAY_SIZE;
      const prevI = (i - 2 + POINT_ARRAY_SIZE) % POINT_ARRAY_SIZE;

      const controlInfluence = BLOB_SETTINGS.CURVE.BASE_INFLUENCE * (this.radius / this.baseRadius);

      const cx1 = this.points[i] + (this.points[nextI] - this.points[prevI]) * controlInfluence;
      const cy1 = this.points[i + 1] + (this.points[nextI + 1] - this.points[prevI + 1]) * controlInfluence;
      const cx2 = this.points[nextI] - (this.points[nextNextI] - this.points[i]) * controlInfluence;
      const cy2 = this.points[nextI + 1] - (this.points[nextNextI + 1] - this.points[i + 1]) * controlInfluence;

      ctx.bezierCurveTo(cx1, cy1, cx2, cy2, this.points[nextI], this.points[nextI + 1]);
    }

    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Animation Setup
const blobs = Array.from({ length: BLOB_COUNT }, (_, i) => new Blob(i));
blobs.forEach((blob, i) => blob.reset(i, blobs));

function animate() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  blobs.forEach((blob) => {
    blob.update();
    blob.draw();
  });
  requestAnimationFrame(animate);
}

// Event Listeners
window.addEventListener("resize", () => {
  baseSize = updateCanvasSize();
  blobs.forEach((blob, i) => {
    blob.baseRadius = baseSize * BASE_RADIUS_MULTIPLIER * QUADRANT_CONFIG[i].size;
    blob.reset(i, blobs);
  });
});

// Start Animation
animate();

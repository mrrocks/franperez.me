// Canvas Setup
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });
const DPR = window.devicePixelRatio || 1;
ctx.imageSmoothingEnabled = false;

// Configuration
const CANVAS = {
  TWO_PI: Math.PI * 2,
  SCALE: 1.65,
  POINTS: 14,
  MIN_COLLISION_DIST: 28,
  BLOB_COUNT: 4,
  BASE_RADIUS: 0.4
};

const QUADRANT_CONFIG = [
  { pos: [0, 0], size: 1, color: "#F7C59520" },
  { pos: [1, 0], size: 1, color: "#F97F9C20" },
  { pos: [0, 1], size: 1, color: "#ACFED430" },
  { pos: [1, 1], size: 1, color: "#8083CF20" },
];

const BLOB_SETTINGS = {
  spin: {
    base: 0.004,
    random: 0.004
  },
  pulse: {
    base: 0.02,
    range: 0.03,
    scale: 1
  },
  drift: {
    speed: 0.0008,
    pull: 0.2,
    ease: 0.06,
    limit: 0.7
  },
  morph: {
    amount: 0.02,
    variety: 0.02,
    speed: 0.9,
    wave: {
      secondary: 0.7,
      frequency: 1.5
    }
  },
  smooth: 0.18
};

// Add this utility function after the BLOB_SETTINGS definition
function isPointVisible(x, y, radius) {
  return (
    x + radius >= 0 &&
    x - radius <= window.innerWidth &&
    y + radius >= 0 &&
    y - radius <= window.innerHeight
  );
}

// Canvas Utilities
function updateCanvasSize() {
  canvas.width = window.innerWidth * DPR;
  canvas.height = window.innerHeight * DPR;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.scale(DPR, DPR);
  return Math.min(window.innerWidth, window.innerHeight) * CANVAS.SCALE;
}

let baseSize = updateCanvasSize();

// Blob Class
class Blob {
  constructor(i) {
    this.initializeProperties(i);
    this.initializePosition();
  }

  initializeProperties(i) {
    const { pos, size, color } = QUADRANT_CONFIG[i];
    this.baseRadius = baseSize * CANVAS.BASE_RADIUS * size;
    this.color = color;
    this.points = new Float32Array(CANVAS.POINTS * 2);
    this.quadrantIndex = i;
    
    this.rotation = Math.random() * CANVAS.TWO_PI;
    this.rotationSpeed = BLOB_SETTINGS.spin.random * (Math.random() - 0.5);
    this.time = Math.random() * CANVAS.TWO_PI;
    this.phaseOffset = Math.random() * CANVAS.TWO_PI;
    this.freqOffset = 0.5 + Math.random();
    this.sizeOffset = Math.random() * CANVAS.TWO_PI;
    this.sizeVariation = BLOB_SETTINGS.pulse.base + Math.random() * BLOB_SETTINGS.pulse.range;
    this.moveSpeed = BLOB_SETTINGS.drift.speed;
    this.pointOffsets = Array.from({ length: CANVAS.POINTS }, () => Math.random() * CANVAS.TWO_PI);
    this.distortionScale = BLOB_SETTINGS.morph.amount + Math.random() * BLOB_SETTINGS.morph.variety;
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

    // Skip collision check if this blob is not visible
    if (!isPointVisible(x, y, this.radius + CANVAS.MIN_COLLISION_DIST)) {
      return { x, y };
    }
    otherBlobs.forEach((otherBlob) => {
      if (otherBlob === this) return;

      // Skip collision check if the other blob is not visible
      if (!isPointVisible(otherBlob.x, otherBlob.y, otherBlob.radius + CANVAS.MIN_COLLISION_DIST)) {
        return;
      }

      const dx = newX - otherBlob.x;
      const dy = newY - otherBlob.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = this.radius + otherBlob.radius + CANVAS.MIN_COLLISION_DIST;

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

  // Simplified update method
  update() {
    this.time += BLOB_SETTINGS.spin.base;
    this.rotation += this.rotationSpeed;
    this.radius = this.baseRadius * (1 + Math.sin(this.time * 0.4 + this.sizeOffset) * this.sizeVariation);

    const center = this.getQuadrantCenter();
    const moveRange = this.baseRadius * this.moveSpeed;
    
    let targetX = this.x + Math.sin(this.time * 0.2 * this.freqOffset + this.phaseOffset) * moveRange;
    let targetY = this.y + Math.cos(this.time * 0.3 * this.freqOffset + this.phaseOffset) * moveRange;
    
    const dx = center.x - this.x;
    const dy = center.y - this.y;
    const distToCenter = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = this.baseRadius * BLOB_SETTINGS.drift.limit;
    
    if (distToCenter > maxDistance * 0.5) {
        const pullStrength = Math.min(1, (distToCenter - maxDistance * 0.5) / maxDistance);
        const attraction = distToCenter * BLOB_SETTINGS.drift.pull * pullStrength;
        targetX += (dx / distToCenter) * attraction;
        targetY += (dy / distToCenter) * attraction;
    }
    
    const { x, y } = this.handleCollisions(targetX, targetY, blobs, 3);
    this.x += (x - this.x) * BLOB_SETTINGS.drift.ease;
    this.y += (y - this.y) * BLOB_SETTINGS.drift.ease;

    this.updatePoints();
  }

  updatePoints() {
    const angleStep = CANVAS.TWO_PI / CANVAS.POINTS;
    for (let i = 0; i < CANVAS.POINTS; i++) {
      const angle = i * angleStep + this.rotation;
      const timeBase = this.time * BLOB_SETTINGS.morph.speed;
      const distortion =
        Math.sin(timeBase + this.pointOffsets[i]) * this.distortionScale +
        Math.sin(timeBase * BLOB_SETTINGS.morph.wave.frequency + this.pointOffsets[(i + 3) % CANVAS.POINTS]) *
          (this.distortionScale * BLOB_SETTINGS.morph.wave.secondary);
      const dist = this.radius * (BLOB_SETTINGS.pulse.scale + distortion);

      this.points[i * 2] = this.x + Math.cos(angle) * dist;
      this.points[i * 2 + 1] = this.y + Math.sin(angle) * dist;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.points[0], this.points[1]);

    for (let i = 0; i < CANVAS.POINTS * 2; i += 2) {
      const nextI = (i + 2) % (CANVAS.POINTS * 2);
      const nextNextI = (i + 4) % (CANVAS.POINTS * 2);
      const prevI = (i - 2 + (CANVAS.POINTS * 2)) % (CANVAS.POINTS * 2);

      const controlInfluence = BLOB_SETTINGS.smooth * (this.radius / this.baseRadius);

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
const blobs = Array.from({ length: CANVAS.BLOB_COUNT }, (_, i) => new Blob(i));
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

// Event Handlers
window.addEventListener("resize", () => {
  baseSize = updateCanvasSize();
  blobs.forEach((blob, i) => {
    blob.baseRadius = baseSize * CANVAS.BASE_RADIUS * QUADRANT_CONFIG[i].size;
    blob.reset(i, blobs);
  });
});

// Start Animation
animate();


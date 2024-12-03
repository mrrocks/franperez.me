const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d", { alpha: false });

const DPR = window.devicePixelRatio || 1;

ctx.imageSmoothingEnabled = false;

function updateCanvasSize() {
  canvas.width = window.innerWidth * DPR;
  canvas.height = window.innerHeight * DPR;

  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  ctx.scale(DPR, DPR);

  return Math.min(window.innerWidth, window.innerHeight) * 1.65;
}

let baseSize = updateCanvasSize();

const colors = ["#F7C59520", "#F97F9C20", "#ACFED430", "#8083CF20"];

const quadrants = [
  [0, 0, 1.1], // top-left
  [1, 0, 0.9], // top-right
  [0, 1, 0.9], // bottom-left
  [1, 1, 1.1], // bottom-right
];

class Blob {
  constructor(i) {
    const [x, y, size] = quadrants[i];
    this.baseRadius = baseSize * 0.4 * size;
    this.color = colors[i];
    this.points = new Float32Array(24);
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = 0.002 * (Math.random() - 0.5);
    this.time = Math.random() * Math.PI * 2;
    this.phaseOffset = Math.random() * Math.PI * 2;
    this.freqOffset = 0.5 + Math.random() * 1;
    this.sizeOffset = Math.random() * Math.PI * 2;
    this.sizeVariation = 0.02 + Math.random() * 0.03;
    this.moveSpeed = 0.001 + Math.random() * 0.001;
    this.pointOffsets = Array.from({ length: 12 }, () => Math.random() * Math.PI * 2);
    this.distortionScale = 0.02 + Math.random() * 0.015;
    this.quadrantIndex = i;
    this.centerAttraction = 0.03;

    // Initialize position without collision check
    const [xRatio, yRatio] = quadrants[i];
    const dpr = window.devicePixelRatio || 1;
    this.canvasWidth = canvas.width / dpr;
    this.canvasHeight = canvas.height / dpr;
    this.x = xRatio * this.canvasWidth;
    this.y = yRatio * this.canvasHeight;
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
      const minDistance = this.radius + otherBlob.radius + 24;

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
    const [xRatio, yRatio] = quadrants[i];
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
    const [x, y] = quadrants[this.quadrantIndex];
    const dpr = window.devicePixelRatio || 1;
    return {
      x: (x * canvas.width) / dpr,
      y: (y * canvas.height) / dpr,
    };
  }

  update() {
    this.time += 0.003;
    this.rotation += this.rotationSpeed;
    this.radius = this.baseRadius * (1 + Math.sin(this.time * 0.4 + this.sizeOffset) * this.sizeVariation);

    const moveRange = this.baseRadius * this.moveSpeed;
    const center = this.getQuadrantCenter();

    // Calculate distance from quadrant center
    const dx = center.x - this.x;
    const dy = center.y - this.y;
    const distToCenter = Math.sqrt(dx * dx + dy * dy);

    // Add center attraction to movement
    let targetX = this.x + Math.sin(this.time * 0.2 * this.freqOffset + this.phaseOffset) * moveRange;
    let targetY = this.y + Math.cos(this.time * 0.3 * this.freqOffset + this.phaseOffset) * moveRange;

    // Apply attraction to center when too far
    const maxDistance = this.baseRadius * 1.2;
    if (distToCenter > maxDistance) {
      const attraction = (distToCenter - maxDistance) * this.centerAttraction;
      targetX += (dx / distToCenter) * attraction;
      targetY += (dy / distToCenter) * attraction;
    }

    const result = this.handleCollisions(targetX, targetY, blobs, 5);
    this.x += (result.x - this.x) * 0.05;
    this.y += (result.y - this.y) * 0.05;

    this.updatePoints();
  }

  updatePoints() {
    const angleStep = (Math.PI * 2) / 12;
    for (let i = 0; i < 12; i++) {
      const angle = i * angleStep + this.rotation;
      const timeBase = this.time * 0.8;
      const distortion =
        Math.sin(timeBase + this.pointOffsets[i]) * this.distortionScale +
        Math.sin(timeBase * 1.5 + this.pointOffsets[(i + 3) % 12]) * (this.distortionScale * 0.7);
      const dist = this.radius * (0.97 + distortion);

      this.points[i * 2] = this.x + Math.cos(angle) * dist;
      this.points[i * 2 + 1] = this.y + Math.sin(angle) * dist;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.points[0], this.points[1]);

    for (let i = 0; i < 24; i += 2) {
      const nextI = (i + 2) % 24;
      const nextNextI = (i + 4) % 24;
      const prevI = (i - 2 + 24) % 24;

      // Reduce base influence for softer curves
      const baseInfluence = 0.18;
      const controlInfluence = baseInfluence * (this.radius / this.baseRadius);

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

const blobs = Array.from({ length: 4 }, (_, i) => new Blob(i));

// After initialization, run reset on all blobs to handle collisions
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

animate();

window.addEventListener("resize", () => {
  baseSize = updateCanvasSize();
  blobs.forEach((blob, i) => {
    blob.baseRadius = baseSize * 0.4 * quadrants[i][2];
    blob.reset(i, blobs);
  });
});

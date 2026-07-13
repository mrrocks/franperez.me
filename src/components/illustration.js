import { animate, createTimeline, utils } from "animejs";
import { watchPageVisibility } from "../utils/page-visibility.js";

const illustration = document.querySelector(".illustration");
const parser = new DOMParser();
const FRACTAL_BOUNDS = { x: 0, y: 320, width: 240, height: 120 };
const MAX_FRACTAL_PIXEL_RATIO = 2;
const greenPalette = ["#94f4c3", "#a2f8cc", "#acfed4", "#b0fbd5", "#b9feda", "#c2fee0", "#c5fee1", "#d4fee9"];
const greenPaletteRgb = greenPalette.map((color) => [
  Number.parseInt(color.slice(1, 3), 16),
  Number.parseInt(color.slice(3, 5), 16),
  Number.parseInt(color.slice(5, 7), 16),
]);
const greenFills = new Set(greenPalette);
const angles = {
  dial: 0,
  disc: 0,
  gear: 0,
  smallDial: 0,
  splitDisc: 0,
};
const colorAnimations = new Set();
let parts;
let fractalAnimation;
let fractalMesh;
let cycleTimer;
let timeline;
let timelineRunning = false;
let previousMotionGroup;
let pageVisible = false;

function scopeIds(svg, prefix) {
  const idMap = new Map();

  svg.querySelectorAll("[id]").forEach((element) => {
    const currentId = element.id;
    const nextId = `${prefix}-${currentId}`;
    idMap.set(currentId, nextId);
    element.id = nextId;
  });

  svg.querySelectorAll("*").forEach((element) => {
    for (const attribute of element.attributes) {
      let value = attribute.value;
      idMap.forEach((nextId, currentId) => {
        value = value.replaceAll(`url(#${currentId})`, `url(#${nextId})`);
        if (value === `#${currentId}`) value = `#${nextId}`;
      });
      attribute.value = value;
    }
  });
}

async function loadLayer(selector, url, prefix) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to load ${url}`);

  const document = parser.parseFromString(await response.text(), "image/svg+xml");
  const svg = document.documentElement;
  scopeIds(svg, prefix);
  svg.classList.add("illustration__svg");
  illustration.querySelector(selector).replaceChildren(svg);
  return svg;
}

function centeredIn(element, { x, y, width, height }) {
  const bounds = element.getBBox();
  const centerX = bounds.x + bounds.width / 2;
  const centerY = bounds.y + bounds.height / 2;
  return centerX >= x && centerX <= x + width && centerY >= y && centerY <= y + height;
}

function addPartClass(elements, name) {
  elements.forEach((element) => element.classList.add("illustration__part", `illustration__part--${name}`));
  return elements;
}

function parseLinearPath(pathData) {
  const tokens = pathData.match(/[a-zA-Z]|[-+]?(?:\d*\.)?\d+(?:e[-+]?\d+)?/g) ?? [];
  const subpaths = [];
  let command;
  let currentSubpath;
  let currentX = 0;
  let currentY = 0;
  let startX = 0;
  let startY = 0;
  let index = 0;

  const isCommand = (token) => /^[a-zA-Z]$/.test(token);
  const hasNumber = () => index < tokens.length && !isCommand(tokens[index]);
  const readNumber = () => Number(tokens[index++]);
  const addPoint = (x, y) => {
    currentX = x;
    currentY = y;
    currentSubpath.push({ x, y });
  };

  while (index < tokens.length) {
    if (isCommand(tokens[index])) command = tokens[index++];
    if (!command) throw new Error(`Invalid path data: ${pathData}`);

    const relative = command === command.toLowerCase();

    switch (command.toUpperCase()) {
      case "M": {
        let firstPoint = true;
        while (hasNumber()) {
          const x = readNumber() + (relative ? currentX : 0);
          const y = readNumber() + (relative ? currentY : 0);

          if (firstPoint) {
            currentSubpath = [];
            subpaths.push(currentSubpath);
            startX = x;
            startY = y;
            firstPoint = false;
          }

          addPoint(x, y);
        }
        command = relative ? "l" : "L";
        break;
      }
      case "L":
        while (hasNumber()) {
          const x = readNumber() + (relative ? currentX : 0);
          const y = readNumber() + (relative ? currentY : 0);
          addPoint(x, y);
        }
        break;
      case "H":
        while (hasNumber()) {
          const x = readNumber() + (relative ? currentX : 0);
          addPoint(x, currentY);
        }
        break;
      case "V":
        while (hasNumber()) {
          const y = readNumber() + (relative ? currentY : 0);
          addPoint(currentX, y);
        }
        break;
      case "Z":
        currentX = startX;
        currentY = startY;
        command = undefined;
        break;
      default:
        throw new Error(`Unsupported path command: ${command}`);
    }
  }

  return subpaths;
}

function interpolateGreenShade(amount) {
  const position = Math.min(1, Math.max(0, amount)) * (greenPalette.length - 1);
  const lowerIndex = Math.floor(position);
  const upperIndex = Math.min(greenPalette.length - 1, lowerIndex + 1);
  const progress = position - lowerIndex;
  const lower = greenPaletteRgb[lowerIndex];
  const upper = greenPaletteRgb[upperIndex];
  const channels = lower.map((channel, index) => Math.round(channel + (upper[index] - channel) * progress));

  return `rgb(${channels.join(" ")})`;
}

function createFractalMesh(paths) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { alpha: true });
  const svg = paths[0].ownerSVGElement;
  const background = [...svg.querySelectorAll(":scope > path[fill]")].find((path) => {
    const bounds = path.getBBox();
    return (
      bounds.x === FRACTAL_BOUNDS.x &&
      bounds.y === FRACTAL_BOUNDS.y &&
      bounds.width === FRACTAL_BOUNDS.width &&
      bounds.height === FRACTAL_BOUNDS.height
    );
  });
  const verticesByPosition = new Map();
  const shapes = paths.map((path) => {
    const bounds = path.getBBox();
    const fill = path.getAttribute("fill");

    return {
      centerX: bounds.x + bounds.width / 2,
      centerY: bounds.y + bounds.height / 2,
      originalShade: greenPalette.indexOf(fill.toLowerCase()) / (greenPalette.length - 1),
      subpaths: parseLinearPath(path.getAttribute("d")).map((subpath) =>
        subpath.map(({ x, y }) => {
          const key = `${x.toFixed(3)},${y.toFixed(3)}`;

          if (!verticesByPosition.has(key)) {
            verticesByPosition.set(key, {
              baseX: x,
              baseY: y,
              x,
              y,
            });
          }

          return verticesByPosition.get(key);
        }),
      ),
    };
  });
  const movingVertices = [...verticesByPosition.values()].filter(
    ({ baseX, baseY }) => baseX !== 0 && baseX !== 240 && baseY !== 320 && baseY !== 440,
  );
  const state = { progress: 0 };
  let pixelRatio = 0;

  canvas.className = "illustration__fractal";
  canvas.setAttribute("aria-hidden", "true");
  svg.parentElement.prepend(canvas);
  background.style.visibility = "hidden";
  paths.forEach((path) => {
    path.style.visibility = "hidden";
  });

  movingVertices.forEach((vertex, index) => {
    const boundaryDistance = Math.min(
      vertex.baseX,
      240 - vertex.baseX,
      vertex.baseY - 320,
      440 - vertex.baseY,
    );

    vertex.amplitudeX = Math.min(16, Math.max(6, boundaryDistance * 0.38));
    vertex.amplitudeY = Math.min(12, Math.max(5, boundaryDistance * 0.3));
    vertex.phase = (index * 2.399) % (Math.PI * 2);
  });

  const resize = () => {
    const nextPixelRatio = Math.min(window.devicePixelRatio || 1, MAX_FRACTAL_PIXEL_RATIO);
    if (pixelRatio === nextPixelRatio) return;

    pixelRatio = nextPixelRatio;
    canvas.width = FRACTAL_BOUNDS.width * pixelRatio;
    canvas.height = FRACTAL_BOUNDS.height * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const render = () => {
    resize();
    context.clearRect(0, 0, FRACTAL_BOUNDS.width, FRACTAL_BOUNDS.height);

    const primaryWave = Math.sin(state.progress);
    const secondaryWave = Math.sin(state.progress * 2) * 0.4;

    movingVertices.forEach((vertex) => {
      vertex.x =
        vertex.baseX +
        vertex.amplitudeX *
          (primaryWave * Math.cos(vertex.phase) + secondaryWave * Math.sin(vertex.phase));
      vertex.y =
        vertex.baseY +
        vertex.amplitudeY *
          (primaryWave * Math.sin(vertex.phase) - secondaryWave * Math.cos(vertex.phase));
    });

    const lightX = Math.cos(state.progress);
    const lightY = Math.sin(state.progress);

    shapes.forEach(({ centerX, centerY, originalShade, subpaths }) => {
      const normalizedX = (centerX - 120) / 120;
      const normalizedY = (centerY - 380) / 60;
      const directionalLight = Math.min(
        1,
        Math.max(0, (normalizedX * lightX + normalizedY * lightY + 1.4) / 2.8),
      );

      context.beginPath();
      subpaths.forEach(([first, ...remaining]) => {
        context.moveTo(first.x - FRACTAL_BOUNDS.x, first.y - FRACTAL_BOUNDS.y);
        remaining.forEach(({ x, y }) => {
          context.lineTo(x - FRACTAL_BOUNDS.x, y - FRACTAL_BOUNDS.y);
        });
        context.closePath();
      });
      context.fillStyle = interpolateGreenShade(
        originalShade + (directionalLight - 0.5) * 0.65,
      );
      context.fill();
    });
  };

  return {
    render,
    state,
  };
}

function identifyParts(base, top) {
  const basePaths = [...base.querySelectorAll(":scope > path")];
  const disc = addPartClass(
    basePaths.filter((element) => centeredIn(element, { x: 404, y: 64, width: 60, height: 60 })),
    "disc",
  );
  const splitDisc = addPartClass(
    basePaths.filter((element) => centeredIn(element, { x: 144, y: 224, width: 20, height: 20 })),
    "split-disc",
  );
  const gear = addPartClass([[...base.querySelectorAll(":scope > g[mask]")][1]], "gear")[0];
  const dial = [...top.querySelectorAll(":scope > g[mask]")][0];
  const dialBackground = [...dial.querySelectorAll(":scope > path")][0];
  const dialMask = top.querySelector(":scope > mask");
  const dialMaskPath = addPartClass([dialMask.querySelector(":scope > path")], "dial-mask")[0];
  const dialCap = addPartClass(
    [top.querySelector(':scope > path[fill="#6439ED"]:last-of-type')],
    "dial-cap",
  )[0];
  const smallDialBackground = top.querySelector(':scope > rect[x="44"]');
  const smallDialReveal = smallDialBackground.cloneNode();
  const smallDialSegment = [...top.querySelectorAll(':scope > path[fill="#F7C595"]')].find(
    (element) => centeredIn(element, { x: 44, y: 414, width: 52, height: 26 }),
  );
  const smallDialMask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
  const smallDialMaskPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  smallDialMask.id = "illustration-small-dial-mask";
  smallDialMask.setAttribute("maskUnits", "userSpaceOnUse");
  smallDialMask.setAttribute("x", "44");
  smallDialMask.setAttribute("y", "426");
  smallDialMask.setAttribute("width", "28");
  smallDialMask.setAttribute("height", "28");
  smallDialMaskPath.setAttribute("d", "M44 440h28v14H44z");
  smallDialMaskPath.setAttribute("fill", "#fff");
  smallDialMask.append(smallDialMaskPath);
  top.prepend(smallDialMask);
  smallDialBackground.after(smallDialReveal);
  smallDialReveal.setAttribute("mask", `url(#${smallDialMask.id})`);
  addPartClass([smallDialMaskPath], "small-dial-mask");
  dial.before(dialBackground);
  dialMask.setAttribute("x", "234");
  dialMask.setAttribute("y", "434");
  dialMask.setAttribute("width", "252");
  dialMask.setAttribute("height", "252");
  const fractal = [...top.querySelectorAll(":scope > path[fill]")].filter((element) => {
    const bounds = element.getBBox();
    return greenFills.has(element.getAttribute("fill").toLowerCase()) &&
      centeredIn(element, { x: 0, y: 320, width: 240, height: 120 }) &&
      bounds.width * bounds.height < 20000;
  });

  return {
    dialCap,
    dialCircle: dial.querySelector(":scope > circle"),
    dialEllipse: dial.querySelector(":scope > ellipse"),
    dialMaskPath,
    disc,
    fractal,
    gear,
    knob: base.querySelector(':scope > rect[x="345"]'),
    smallDialMaskPath,
    smallDialReveal,
    smallDialSegment,
    splitDisc,
  };
}

function themeColor(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function randomBetween(minimum, maximum) {
  return minimum + Math.random() * (maximum - minimum);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function paletteIndex(angle) {
  return ((Math.round(angle / 90) % 4) + 4) % 4;
}

function normalizeAngle(angle, step) {
  const snapped = Math.round(angle / step) * step;
  return ((snapped % 360) + 360) % 360;
}

function settleMotionGroup(group) {
  if (group === "gear") {
    angles.gear = normalizeAngle(angles.gear, 90);
    utils.set(parts.gear, { rotate: angles.gear });
    return;
  }

  if (group === "disc") {
    angles.disc = normalizeAngle(angles.disc, 90);
    angles.splitDisc = normalizeAngle(angles.splitDisc, 90);
    utils.set(parts.disc, { rotate: angles.disc });
    utils.set(parts.splitDisc, { rotate: angles.splitDisc });
    return;
  }

  if (group === "dial") {
    angles.dial = normalizeAngle(angles.dial, 90);
    utils.set([parts.dialMaskPath, parts.dialCap], { rotate: angles.dial });
    return;
  }

  angles.smallDial = normalizeAngle(angles.smallDial, 90);
  utils.set(parts.smallDialMaskPath, { rotate: angles.smallDial });
}

function settleRotations() {
  ["gear", "disc", "dial", "smallDial"].forEach(settleMotionGroup);
}

function trackColorAnimation(target, property, color, delay = 0) {
  const originalColor = target.getAttribute(property);
  const animation = animate(target, {
    [property]: [originalColor, color, originalColor],
    opacity: [1, 0.82, 1],
    delay,
    duration: randomBetween(1200, 1700),
    ease: "inOut(3)",
    onComplete: () => colorAnimations.delete(animation),
  });

  colorAnimations.add(animation);
}

function animateColors() {
  trackColorAnimation(parts.knob, "fill", themeColor("--color-secondary"), 180);
}

function startFractalMotion() {
  if (fractalAnimation) {
    fractalAnimation.play();
    return;
  }

  fractalAnimation = animate(fractalMesh.state, {
    progress: Math.PI * 2,
    duration: 8000,
    ease: "linear",
    loop: true,
    onUpdate: () => fractalMesh.render(),
  });
}

function pickMotionGroup(excluded = []) {
  const groups = ["gear", "disc", "dial", "smallDial"];
  const candidates = groups.filter(
    (group) => group !== previousMotionGroup && !excluded.includes(group),
  );

  return randomItem(candidates.length ? candidates : groups);
}

function addMotionGroup(sequence, group, startAt) {
  const duration = randomBetween(680, 1080);

  if (group === "gear") {
    angles.gear -= randomItem([90, 180]);
    sequence.add(
      parts.gear,
      { rotate: angles.gear, duration, onComplete: () => settleMotionGroup(group) },
      startAt,
    );
    return;
  }

  if (group === "disc") {
    angles.disc += randomItem([90, 180]);
    sequence.add(
      parts.disc,
      { rotate: angles.disc, duration, onComplete: () => settleMotionGroup(group) },
      startAt,
    );

    if (Math.random() < 0.7) {
      angles.splitDisc -= randomItem([90, 180]);
      sequence.add(
        parts.splitDisc,
        { rotate: angles.splitDisc, duration: duration * 0.8 },
        startAt + randomBetween(duration * 0.08, duration * 0.15),
      );
    }
    return;
  }

  const accent = themeColor("--color-accent");
  const highlight = themeColor("--color-highlight");
  const primary = themeColor("--color-primary");
  const secondary = themeColor("--color-secondary");
  const warm = "#f7c595";

  if (group === "dial") {
    angles.dial += randomItem([90, 90, 180]);
    const index = paletteIndex(angles.dial);
    const ellipsePalette = [highlight, primary, secondary, warm];
    const circlePalette = [accent, secondary, warm, primary];
    const capPalette = [primary, warm, highlight, secondary];

    sequence
      .add(
        parts.dialMaskPath,
        { rotate: angles.dial, duration, onComplete: () => settleMotionGroup(group) },
        startAt,
      )
      .add(
        parts.dialCap,
        { fill: capPalette[index], rotate: angles.dial, duration },
        startAt,
      )
      .add(parts.dialEllipse, { fill: ellipsePalette[index], duration }, startAt)
      .add(parts.dialCircle, { fill: circlePalette[index], duration }, startAt);
    return;
  }

  angles.smallDial -= randomItem([90, 90, 180]);
  const index = paletteIndex(Math.abs(angles.smallDial));
  const segmentPalette = [warm, secondary, accent, warm];
  const revealPalette = [accent, warm, highlight, secondary];

  sequence
    .add(
      parts.smallDialSegment,
      { fill: segmentPalette[index], duration },
      startAt,
    )
    .add(
      parts.smallDialMaskPath,
      {
        rotate: angles.smallDial,
        duration,
        onComplete: () => settleMotionGroup(group),
      },
      startAt,
    )
    .add(
      parts.smallDialReveal,
      { fill: revealPalette[index], duration },
      startAt,
    );
}

function scheduleCycle(delay = randomBetween(350, 950)) {
  window.clearTimeout(cycleTimer);
  if (!pageVisible || !parts) return;
  cycleTimer = window.setTimeout(runCycle, delay);
}

function runCycle() {
  if (!pageVisible || !parts || timelineRunning) return;

  const primaryGroup = pickMotionGroup();
  const secondaryGroup =
    Math.random() < 0.45 ? pickMotionGroup([primaryGroup]) : undefined;
  previousMotionGroup = primaryGroup;

  if (!colorAnimations.size && Math.random() < 0.35) animateColors();
  timelineRunning = true;

  timeline = createTimeline({
    defaults: { ease: "inOut(3)" },
    onComplete: () => {
      settleRotations();
      timelineRunning = false;
      scheduleCycle(randomBetween(350, 950));
    },
  });

  addMotionGroup(timeline, primaryGroup, 0);
  if (secondaryGroup) {
    addMotionGroup(timeline, secondaryGroup, randomBetween(180, 360));
  }
}

function updatePageVisibility(visible) {
  pageVisible = visible;
  window.clearTimeout(cycleTimer);

  if (pageVisible) {
    startFractalMotion();

    if (timelineRunning) {
      timeline?.play();
      colorAnimations.forEach((animation) => animation.play());
    } else {
      scheduleCycle(500);
    }

    return;
  }

  if (timelineRunning) {
    timeline?.complete();
  }
  colorAnimations.forEach((animation) => animation.complete());
  fractalAnimation?.pause();
}

async function initialize() {
  const [base, top] = await Promise.all([
    loadLayer(".base", "/assets/illus-b.svg", "illustration-base"),
    loadLayer(".top", "/assets/illus-t.svg", "illustration-top"),
  ]);

  parts = identifyParts(base, top);
  fractalMesh = createFractalMesh(parts.fractal);
  fractalMesh.render();
  illustration.classList.add("illustration--interactive");
  watchPageVisibility(updatePageVisibility);
}

initialize().catch((error) => console.error(error));

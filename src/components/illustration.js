import { animate, createTimeline, utils } from "animejs";
import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Color,
  ColorManagement,
  DirectionalLight,
  DoubleSide,
  DynamicDrawUsage,
  Mesh,
  MeshStandardMaterial,
  OrthographicCamera,
  Scene,
  ShapeUtils,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
} from "three";
import {
  DisplayP3ColorSpace,
  DisplayP3ColorSpaceImpl,
} from "three/addons/math/ColorSpaces.js";
import { watchPageVisibility } from "../utils/page-visibility.js";

const illustration = document.querySelector(".illustration");
const parser = new DOMParser();
const FRACTAL_BOUNDS = { x: 0, y: 320, width: 240, height: 120 };
const MAX_FRACTAL_PIXEL_RATIO = 2;
const FRACTAL_CONFIG = {
  depth: 18,
  duration: 8000,
  roughness: 0.86,
  saturation: 1.22,
  ambientIntensity: 2.85,
  lightIntensity: 1.15,
  interactionRadius: 155,
  interactionStrength: 1.75,
  interactionLift: 1.15,
  interactionFollow: 0.26,
  interactionRelease: 0.055,
  interactionTargetDecay: 0.86,
  lightSmoothing: 0.18,
  lightDecay: 0.82,
  maximumInteractionSpeed: 14,
};
const FRACTAL_PALETTE = [
  "#94f4c3",
  "#a2f8cc",
  "#acfed4",
  "#b0fbd5",
  "#b9feda",
  "#c2fee0",
  "#c5fee1",
  "#d4fee9",
];
const greenFills = new Set(FRACTAL_PALETTE);
ColorManagement.spaces[DisplayP3ColorSpace] = DisplayP3ColorSpaceImpl;
const FRACTAL_COLOR_SPACE = window.matchMedia("(color-gamut: p3)").matches
  ? DisplayP3ColorSpace
  : SRGBColorSpace;
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

function normalizeSubpath(subpath) {
  const first = subpath[0];
  const last = subpath.at(-1);
  return first.x === last.x && first.y === last.y ? subpath.slice(0, -1) : subpath;
}

function createFractalColor(value) {
  const color =
    FRACTAL_COLOR_SPACE === SRGBColorSpace
      ? new Color(value)
      : new Color().setRGB(
          ...[1, 3, 5].map(
            (index) => Number.parseInt(value.slice(index, index + 2), 16) / 255,
          ),
          FRACTAL_COLOR_SPACE,
        );
  const luminance = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;

  color.r = luminance + (color.r - luminance) * FRACTAL_CONFIG.saturation;
  color.g = luminance + (color.g - luminance) * FRACTAL_CONFIG.saturation;
  color.b = luminance + (color.b - luminance) * FRACTAL_CONFIG.saturation;
  return color;
}

function createFractalTopology(paths) {
  const vertices = [];
  const vertexIndicesByPosition = new Map();
  const triangleVertexIndices = [];
  const colors = [];

  const getVertexIndex = ({ x, y }) => {
    const key = `${x.toFixed(3)},${y.toFixed(3)}`;

    if (!vertexIndicesByPosition.has(key)) {
      const baseX = x - FRACTAL_BOUNDS.x;
      const baseY = y - FRACTAL_BOUNDS.y;
      const boundaryDistance = Math.min(
        baseX,
        FRACTAL_BOUNDS.width - baseX,
        baseY,
        FRACTAL_BOUNDS.height - baseY,
      );
      const normalizedX = baseX / FRACTAL_BOUNDS.width;
      const normalizedY = baseY / FRACTAL_BOUNDS.height;

      vertexIndicesByPosition.set(key, vertices.length);
      vertices.push({
        baseX,
        baseY,
        x: baseX,
        y: baseY,
        z: 0,
        amplitudeX: boundaryDistance ? Math.min(16, Math.max(6, boundaryDistance * 0.38)) : 0,
        amplitudeY: boundaryDistance ? Math.min(12, Math.max(5, boundaryDistance * 0.3)) : 0,
        amplitudeZ: boundaryDistance
          ? Math.min(FRACTAL_CONFIG.depth, Math.max(6, boundaryDistance * 0.5))
          : 0,
        interactionX: 0,
        interactionY: 0,
        interactionZ: 0,
        interactionTargetX: 0,
        interactionTargetY: 0,
        interactionTargetZ: 0,
        phase: (normalizedX * 1.25 + normalizedY * 0.75) * Math.PI,
      });
    }

    return vertexIndicesByPosition.get(key);
  };

  paths.forEach((path) => {
    const color = createFractalColor(path.getAttribute("fill"));

    parseLinearPath(path.getAttribute("d")).forEach((rawSubpath) => {
      const subpath = normalizeSubpath(rawSubpath);
      const vertexIndices = subpath.map(getVertexIndex);
      const contour = subpath.map(({ x, y }) => new Vector2(x, y));

      ShapeUtils.triangulateShape(contour, []).forEach((triangle) => {
        triangle.forEach((index) => {
          triangleVertexIndices.push(vertexIndices[index]);
          colors.push(color.r, color.g, color.b);
        });
      });
    });
  });

  return {
    colors: new Float32Array(colors),
    triangleVertexIndices: new Uint16Array(triangleVertexIndices),
    vertices,
  };
}

function createFractalMesh(paths) {
  const canvas = document.createElement("canvas");
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
  const { colors, triangleVertexIndices, vertices } = createFractalTopology(paths);
  const positions = new Float32Array(triangleVertexIndices.length * 3);
  const positionAttribute = new BufferAttribute(positions, 3);
  const geometry = new BufferGeometry();
  const material = new MeshStandardMaterial({
    metalness: 0,
    roughness: FRACTAL_CONFIG.roughness,
    side: DoubleSide,
    vertexColors: true,
  });
  const mesh = new Mesh(geometry, material);
  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas,
    powerPreference: "high-performance",
  });
  const scene = new Scene();
  const camera = new OrthographicCamera(
    0,
    FRACTAL_BOUNDS.width,
    0,
    FRACTAL_BOUNDS.height,
    0.1,
    500,
  );
  const ambientLight = new AmbientLight(0xffffff, FRACTAL_CONFIG.ambientIntensity);
  const keyLight = new DirectionalLight(0xffffff, FRACTAL_CONFIG.lightIntensity);
  const state = { progress: 0 };
  const interaction = {
    active: false,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    targetVelocityX: 0,
    targetVelocityY: 0,
    velocityX: 0,
    velocityY: 0,
  };
  let pixelRatio = 0;
  let previousRenderTime = performance.now();

  canvas.className = "illustration__fractal";
  canvas.setAttribute("aria-hidden", "true");
  svg.parentElement.prepend(canvas);
  background.style.visibility = "hidden";
  paths.forEach((path) => {
    path.style.visibility = "hidden";
  });

  positionAttribute.setUsage(DynamicDrawUsage);
  geometry.setAttribute("position", positionAttribute);
  geometry.setAttribute("color", new BufferAttribute(colors, 3));
  mesh.frustumCulled = false;

  camera.position.z = 200;
  keyLight.target.position.set(FRACTAL_BOUNDS.width / 2, FRACTAL_BOUNDS.height / 2, 0);
  scene.add(mesh, ambientLight, keyLight, keyLight.target);

  renderer.outputColorSpace = FRACTAL_COLOR_SPACE;
  renderer.setClearColor(0, 0);

  const deactivateInteraction = () => {
    interaction.active = false;
    interaction.lastTime = 0;
    interaction.targetVelocityX = 0;
    interaction.targetVelocityY = 0;
    vertices.forEach((vertex) => {
      vertex.interactionTargetX = 0;
      vertex.interactionTargetY = 0;
      vertex.interactionTargetZ = 0;
    });
  };

  const updateInteraction = (event) => {
    const bounds = canvas.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * FRACTAL_BOUNDS.width;
    const y = ((event.clientY - bounds.top) / bounds.height) * FRACTAL_BOUNDS.height;
    const inside =
      x >= 0 && x <= FRACTAL_BOUNDS.width && y >= 0 && y <= FRACTAL_BOUNDS.height;

    if (!inside) {
      deactivateInteraction();
      return;
    }

    if (!interaction.active) {
      interaction.active = true;
      interaction.lastX = x;
      interaction.lastY = y;
      interaction.lastTime = event.timeStamp;
    } else {
      const elapsed = Math.min(50, Math.max(8, event.timeStamp - interaction.lastTime));
      const frameScale = 1000 / 60 / elapsed;
      let velocityX = (x - interaction.lastX) * frameScale;
      let velocityY = (y - interaction.lastY) * frameScale;
      let speed = Math.hypot(velocityX, velocityY);

      if (speed > FRACTAL_CONFIG.maximumInteractionSpeed) {
        const scale = FRACTAL_CONFIG.maximumInteractionSpeed / speed;
        velocityX *= scale;
        velocityY *= scale;
        speed = FRACTAL_CONFIG.maximumInteractionSpeed;
      }

      interaction.targetVelocityX = velocityX;
      interaction.targetVelocityY = velocityY;

      vertices.forEach((vertex) => {
        if (!vertex.amplitudeX) return;

        const distance = Math.hypot(vertex.x - x, vertex.y - y);
        const proximity = Math.max(0, 1 - distance / FRACTAL_CONFIG.interactionRadius) ** 2;

        vertex.interactionTargetX =
          velocityX * FRACTAL_CONFIG.interactionStrength * proximity;
        vertex.interactionTargetY =
          velocityY * FRACTAL_CONFIG.interactionStrength * proximity;
        vertex.interactionTargetZ = speed * FRACTAL_CONFIG.interactionLift * proximity;
      });

      interaction.lastX = x;
      interaction.lastY = y;
      interaction.lastTime = event.timeStamp;
    }

    interaction.x = x;
    interaction.y = y;
  };

  svg.parentElement.addEventListener("pointermove", updateInteraction, { passive: true });
  svg.parentElement.addEventListener("pointerleave", deactivateInteraction);

  const resize = () => {
    const nextPixelRatio = Math.min(window.devicePixelRatio || 1, MAX_FRACTAL_PIXEL_RATIO);
    if (pixelRatio === nextPixelRatio) return;

    pixelRatio = nextPixelRatio;
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(FRACTAL_BOUNDS.width, FRACTAL_BOUNDS.height, false);
  };

  const render = () => {
    resize();

    const currentTime = performance.now();
    const frameScale = Math.min(2, (currentTime - previousRenderTime) / (1000 / 60));
    previousRenderTime = currentTime;

    interaction.velocityX +=
      (interaction.targetVelocityX - interaction.velocityX) *
      FRACTAL_CONFIG.lightSmoothing *
      frameScale;
    interaction.velocityY +=
      (interaction.targetVelocityY - interaction.velocityY) *
      FRACTAL_CONFIG.lightSmoothing *
      frameScale;
    interaction.targetVelocityX *= FRACTAL_CONFIG.lightDecay ** frameScale;
    interaction.targetVelocityY *= FRACTAL_CONFIG.lightDecay ** frameScale;

    vertices.forEach((vertex) => {
      const primaryWave = Math.sin(state.progress + vertex.phase);
      const secondaryWave = Math.sin(state.progress * 2 - vertex.phase * 0.5);
      const targetMagnitude =
        Math.abs(vertex.interactionTargetX) +
        Math.abs(vertex.interactionTargetY) +
        Math.abs(vertex.interactionTargetZ);
      const response =
        targetMagnitude > 0.05
          ? FRACTAL_CONFIG.interactionFollow
          : FRACTAL_CONFIG.interactionRelease;
      const blend = 1 - (1 - response) ** frameScale;

      vertex.interactionX += (vertex.interactionTargetX - vertex.interactionX) * blend;
      vertex.interactionY += (vertex.interactionTargetY - vertex.interactionY) * blend;
      vertex.interactionZ += (vertex.interactionTargetZ - vertex.interactionZ) * blend;
      vertex.interactionTargetX *= FRACTAL_CONFIG.interactionTargetDecay ** frameScale;
      vertex.interactionTargetY *= FRACTAL_CONFIG.interactionTargetDecay ** frameScale;
      vertex.interactionTargetZ *= FRACTAL_CONFIG.interactionTargetDecay ** frameScale;

      vertex.x =
        vertex.baseX +
        vertex.amplitudeX * (primaryWave * 0.72 + secondaryWave * 0.28) +
        vertex.interactionX;
      vertex.y =
        vertex.baseY +
        vertex.amplitudeY *
          (Math.cos(state.progress + vertex.phase * 0.8) * 0.72 +
            Math.sin(state.progress * 2 + vertex.phase) * 0.28) +
        vertex.interactionY;
      vertex.z =
        vertex.amplitudeZ *
          (Math.sin(state.progress - vertex.phase) * 0.72 +
            Math.sin(state.progress * 2 + vertex.phase * 0.5) * 0.28) +
        vertex.interactionZ;
    });

    triangleVertexIndices.forEach((vertexIndex, index) => {
      const vertex = vertices[vertexIndex];
      const offset = index * 3;
      positions[offset] = vertex.x;
      positions[offset + 1] = vertex.y;
      positions[offset + 2] = vertex.z;
    });

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
    keyLight.position.set(
      FRACTAL_BOUNDS.width / 2 +
        Math.cos(state.progress) * FRACTAL_BOUNDS.width +
        interaction.velocityX * 3,
      FRACTAL_BOUNDS.height / 2 +
        Math.sin(state.progress) * FRACTAL_BOUNDS.height +
        interaction.velocityY * 3,
      140,
    );
    renderer.render(scene, camera);
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
    duration: FRACTAL_CONFIG.duration,
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

import { animate, createTimeline } from "animejs";
import { watchMotionPreference } from "../utils/motion.js";

const illustration = document.querySelector(".illustration");
const parser = new DOMParser();
const greenPalette = ["#94f4c3", "#a2f8cc", "#acfed4", "#b0fbd5", "#b9feda", "#c2fee0", "#c5fee1", "#d4fee9"];
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
let reducedMotion = false;

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
  const toRgb = (color) => [
    Number.parseInt(color.slice(1, 3), 16),
    Number.parseInt(color.slice(3, 5), 16),
    Number.parseInt(color.slice(5, 7), 16),
  ];
  const lower = toRgb(greenPalette[lowerIndex]);
  const upper = toRgb(greenPalette[upperIndex]);
  const channels = lower.map((channel, index) => Math.round(channel + (upper[index] - channel) * progress));

  return `rgb(${channels.join(" ")})`;
}

function createFractalMesh(paths) {
  const verticesByPosition = new Map();
  const shapes = paths.map((path) => {
    const bounds = path.getBBox();
    const originalFill = path.getAttribute("fill");

    return {
      centerX: bounds.x + bounds.width / 2,
      centerY: bounds.y + bounds.height / 2,
      originalFill,
      originalShade: greenPalette.indexOf(originalFill.toLowerCase()) / (greenPalette.length - 1),
      path,
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
  const format = (value) => Number(value.toFixed(3));

  movingVertices.forEach((vertex, index) => {
    const boundaryDistance = Math.min(
      vertex.baseX,
      240 - vertex.baseX,
      vertex.baseY - 320,
      440 - vertex.baseY,
    );

    vertex.amplitudeX = Math.min(12, Math.max(5, boundaryDistance * 0.3));
    vertex.amplitudeY = Math.min(9, Math.max(4, boundaryDistance * 0.22));
    vertex.phase = (index * 2.399) % (Math.PI * 2);
  });

  const render = (showLighting = true) => {
    movingVertices.forEach((vertex) => {
      const primaryWave = Math.sin(state.progress);
      const secondaryWave = Math.sin(state.progress * 2) * 0.35;

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

    shapes.forEach(({ centerX, centerY, originalFill, originalShade, path, subpaths }) => {
      const pathData = subpaths
        .map((subpath) => {
          const [first, ...remaining] = subpath;
          const lines = remaining.map(({ x, y }) => `L${format(x)} ${format(y)}`).join("");
          return `M${format(first.x)} ${format(first.y)}${lines}Z`;
        })
        .join("");

      path.setAttribute("d", pathData);
      if (!showLighting) {
        path.setAttribute("fill", originalFill);
        return;
      }

      const normalizedX = (centerX - 120) / 120;
      const normalizedY = (centerY - 380) / 60;
      const directionalLight = Math.min(
        1,
        Math.max(0, (normalizedX * lightX + normalizedY * lightY + 1.4) / 2.8),
      );
      path.setAttribute("fill", interpolateGreenShade(originalShade + (directionalLight - 0.5) * 0.5));
    });
  };

  return {
    render,
    reset() {
      state.progress = 0;
      render(false);
    },
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

function trackColorAnimation(target, property, color, delay = 0) {
  const originalColor = target.getAttribute(property);
  const animation = animate(target, {
    [property]: [originalColor, color, originalColor],
    opacity: [1, 0.82, 1],
    delay,
    duration: 1600,
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
    fractalAnimation.restart();
    return;
  }

  fractalAnimation = animate(fractalMesh.state, {
    progress: Math.PI * 2,
    duration: 10000,
    ease: "linear",
    loop: true,
    onUpdate: () => fractalMesh.render(),
  });
}

function scheduleCycle(delay = 4200) {
  window.clearTimeout(cycleTimer);
  if (reducedMotion || !parts) return;
  cycleTimer = window.setTimeout(runCycle, delay);
}

function runCycle() {
  if (reducedMotion || !parts) return;

  angles.gear -= 90;
  angles.disc += 180;
  angles.splitDisc -= 180;
  angles.dial += 90;
  angles.smallDial -= 90;
  const dialPalette = [
    themeColor("--color-highlight"),
    themeColor("--color-accent"),
    themeColor("--color-primary"),
    themeColor("--color-secondary"),
  ];
  const dialQuarter = (angles.dial / 90) % dialPalette.length;
  const smallDialQuarter =
    ((Math.abs(angles.smallDial) / 90) % dialPalette.length + dialPalette.length) %
    dialPalette.length;
  const smallDialSegmentPalette = [
    "#f7c595",
    themeColor("--color-highlight"),
    themeColor("--color-accent"),
    themeColor("--color-secondary"),
  ];
  const smallDialRevealPalette = [
    themeColor("--color-primary"),
    themeColor("--color-accent"),
    themeColor("--color-secondary"),
    themeColor("--color-highlight"),
  ];
  animateColors();

  timeline = createTimeline({
    defaults: { ease: "inOut(3)" },
    onComplete: () => scheduleCycle(),
  });

  timeline
    .add(parts.gear, { rotate: angles.gear, duration: 900 }, 0)
    .add(parts.disc, { rotate: angles.disc, duration: 1000 }, 120)
    .add(parts.splitDisc, { rotate: angles.splitDisc, duration: 720 }, 260)
    .add(parts.dialMaskPath, { rotate: angles.dial, duration: 1200 }, 360)
    .add(
      parts.dialCap,
      {
        fill: dialPalette[(dialQuarter + 2) % dialPalette.length],
        rotate: angles.dial,
        duration: 1200,
      },
      360,
    )
    .add(
      parts.dialEllipse,
      { fill: dialPalette[dialQuarter], duration: 1200 },
      360,
    )
    .add(
      parts.dialCircle,
      { fill: dialPalette[(dialQuarter + 1) % dialPalette.length], duration: 1200 },
      360,
    )
    .add(
      parts.smallDialSegment,
      {
        fill: smallDialSegmentPalette[smallDialQuarter],
        duration: 900,
      },
      520,
    )
    .add(parts.smallDialMaskPath, { rotate: angles.smallDial, duration: 900 }, 520)
    .add(
      parts.smallDialReveal,
      {
        fill: smallDialRevealPalette[smallDialQuarter],
        duration: 900,
      },
      520,
    );
}

function updateMotionPreference(matches) {
  reducedMotion = matches;
  window.clearTimeout(cycleTimer);

  if (!matches) {
    startFractalMotion();
    scheduleCycle(1000);
    return;
  }

  timeline?.pause();
  colorAnimations.forEach((animation) => animation.pause());
  fractalAnimation?.pause();
  fractalMesh?.reset();
  colorAnimations.clear();
}

async function initialize() {
  const [base, top] = await Promise.all([
    loadLayer(".base", "/assets/illus-b.svg", "illustration-base"),
    loadLayer(".top", "/assets/illus-t.svg", "illustration-top"),
  ]);

  parts = identifyParts(base, top);
  fractalMesh = createFractalMesh(parts.fractal);
  illustration.classList.add("illustration--interactive");
  watchMotionPreference(updateMotionPreference);
}

initialize().catch((error) => console.error(error));

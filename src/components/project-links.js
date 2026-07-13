import { animate } from "animejs";

const namespace = "http://www.w3.org/2000/svg";
const links = [...document.querySelectorAll(".project-link, .links a")];
let controllers = [];
let resizeFrame;

function createElement(name, attributes = {}) {
  const element = document.createElementNS(namespace, name);
  Object.entries(attributes).forEach(([attribute, value]) => element.setAttribute(attribute, value));
  return element;
}

function createController(link, index) {
  const label = link.textContent;
  const textNode = [...link.childNodes].find(({ nodeType }) => nodeType === Node.TEXT_NODE);
  const bounds = link.getBoundingClientRect();
  const style = getComputedStyle(link);
  const context = document.createElement("canvas").getContext("2d");
  context.font = style.font;
  const metrics = context.measureText(label);
  const baseline =
    (bounds.height - metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2 +
    metrics.actualBoundingBoxAscent;
  const lineTop = baseline + 3.5;
  const patternId = `project-link-pattern-${index}`;
  const maskId = `project-link-mask-${index}`;
  const svg = createElement("svg", {
    class: "project-link__underline",
    viewBox: `0 0 ${bounds.width} ${bounds.height}`,
    "aria-hidden": "true",
    focusable: "false",
  });
  const definitions = createElement("defs");
  let wavePath = "M-12 2";
  for (let x = -12; x < 24; x += 6) {
    wavePath += `C${x + 1} 0 ${x + 2} 0 ${x + 3} 2S${x + 5} 4 ${x + 6} 2`;
  }
  const pattern = createElement("pattern", {
    id: patternId,
    x: "0",
    y: String(lineTop),
    width: "12",
    height: "4",
    patternUnits: "userSpaceOnUse",
  });
  const wave = createElement("path", {
    d: wavePath,
    fill: "none",
    "shape-rendering": "geometricPrecision",
    stroke: "#6439ed",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-opacity": ".55",
    "stroke-width": "1.2",
  });
  const mask = createElement("mask", {
    id: maskId,
    x: "-4",
    y: "0",
    width: String(bounds.width + 8),
    height: String(bounds.height),
    maskUnits: "userSpaceOnUse",
  });
  const maskBackground = createElement("rect", {
    x: "-4",
    y: "0",
    width: String(bounds.width + 8),
    height: String(bounds.height),
    fill: "#fff",
  });
  const descenderCutouts = [...label].flatMap((character, characterIndex) => {
    if (!/[gjpqy]/i.test(character)) return [];

    const characterRange = document.createRange();
    characterRange.setStart(textNode, characterIndex);
    characterRange.setEnd(textNode, characterIndex + 1);
    const characterBounds = characterRange.getBoundingClientRect();
    const cutoutWidth = characterBounds.width + 0.75;

    return [
      createElement("rect", {
        x: String(
          characterBounds.left - bounds.left + (characterBounds.width - cutoutWidth) / 2,
        ),
        y: String(lineTop - 2),
        width: String(cutoutWidth),
        height: "8",
        rx: "0.5",
        fill: "#000",
      }),
    ];
  });
  const underline = createElement("rect", {
    x: "0",
    y: String(lineTop),
    width: String(bounds.width),
    height: "4",
    fill: `url(#${patternId})`,
    mask: `url(#${maskId})`,
  });
  const state = { offset: 0 };
  let animation;

  pattern.append(wave);
  mask.append(maskBackground, ...descenderCutouts);
  definitions.append(pattern, mask);
  svg.append(definitions, underline);
  link.append(svg);

  const start = () => {
    if (!animation) {
      animation = animate(state, {
        offset: 12,
        duration: 800,
        ease: "linear",
        loop: true,
        onUpdate: () => pattern.setAttribute("x", String(state.offset)),
      });
      return;
    }

    animation.play();
  };
  const stop = () => {
    animation?.pause();
  };
  const handleMouseLeave = () => {
    if (!link.matches(":focus-visible")) stop();
  };
  const handleBlur = () => {
    if (!link.matches(":hover")) stop();
  };

  link.addEventListener("mouseenter", start);
  link.addEventListener("mouseleave", handleMouseLeave);
  link.addEventListener("focus", start);
  link.addEventListener("blur", handleBlur);
  if (link.matches(":hover, :focus-visible")) start();

  return {
    destroy() {
      animation?.pause();
      link.removeEventListener("mouseenter", start);
      link.removeEventListener("mouseleave", handleMouseLeave);
      link.removeEventListener("focus", start);
      link.removeEventListener("blur", handleBlur);
      svg.remove();
    },
  };
}

function initialize() {
  controllers.forEach(({ destroy }) => destroy());
  controllers = links.map(createController);
}

document.fonts.ready.then(initialize);
window.addEventListener("resize", () => {
  window.cancelAnimationFrame(resizeFrame);
  resizeFrame = window.requestAnimationFrame(initialize);
});

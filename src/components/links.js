import anime from "animejs";

const zigzag = document.querySelector(".zigzag path");
const links = document.querySelectorAll(".links a");

const pathLength = zigzag.getTotalLength();
zigzag.style.strokeDasharray = pathLength;
zigzag.style.strokeDashoffset = -pathLength;

const colors = {
  mail: "#CDFEE5",
  twitter: "#DBDDF0",
  linkedin: "#FCE5CF",
};

let currentPathAnimation = null;
let currentColorAnimation = null;

const createPathAnimation = (from, to) => {
  const currentPosition = currentPathAnimation ? parseFloat(zigzag.style.strokeDashoffset) : from;

  if (currentPathAnimation) currentPathAnimation.pause();

  currentPathAnimation = anime({
    targets: ".zigzag path",
    strokeDashoffset: [currentPosition, to],
    easing: "easeInOutQuad",
    duration: (1200 * Math.abs(to - currentPosition)) / pathLength,
  });
};

const createColorAnimation = (color) => {
  if (currentColorAnimation) currentColorAnimation.pause();

  currentColorAnimation = anime({
    targets: ".zigzag path",
    stroke: color,
    easing: "easeInOutQuad",
    duration: 300,
  });
};

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const currentOffset = parseFloat(zigzag.style.strokeDashoffset);
    const color = colors[link.id];
    createPathAnimation(currentOffset, 0);
    createColorAnimation(color);
  });

  link.addEventListener("mouseleave", () => {
    const currentOffset = parseFloat(zigzag.style.strokeDashoffset);
    createPathAnimation(currentOffset, -pathLength);
    createColorAnimation(colors.mail);
  });
});

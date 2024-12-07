import anime from "animejs";

const zigzag = document.querySelector(".zigzag path");
const links = document.querySelectorAll(".links a");
const pathLength = zigzag.getTotalLength();

const COLORS = {
  mail: "#B9FEDA",
  twitter: "#DBDDF0",
  linkedin: "#FCE5CF",
};

const ANIMATION_CONFIG = {
  easing: "easeInOutQuad",
  duration: 300,
};

const durationFactor = 800 / pathLength;

class PathAnimator {
  constructor() {
    this.currentPath = null;
    this.currentColor = null;
    this.lastColor = COLORS.mail;

    zigzag.style.strokeDasharray = pathLength;
    zigzag.style.strokeDashoffset = -pathLength;
  }

  animatePath = (to) => {
    const from = this.currentPath ? parseFloat(zigzag.style.strokeDashoffset) : -pathLength;

    this.currentPath?.pause();
    this.currentPath = anime({
      targets: ".zigzag path",
      strokeDashoffset: [from, to],
      ...ANIMATION_CONFIG,
      duration: Math.abs(to - from) * durationFactor,
    });
  };

  animateColor = (color) => {
    this.currentColor?.pause();
    this.lastColor = color;
    this.currentColor = anime({
      targets: ".zigzag path",
      stroke: color,
      ...ANIMATION_CONFIG,
    });
  };

  setColorImmediately = (color) => {
    this.currentColor?.pause();
    this.lastColor = color;
    zigzag.style.stroke = color;
  };
}

const animator = new PathAnimator();

links.forEach((link) => {
  const handleHover = (isEntering) => {
    const currentOffset = parseFloat(zigzag.style.strokeDashoffset);
    const pathIsHidden = currentOffset <= -pathLength;

    if (isEntering) {
      if (pathIsHidden) {
        animator.setColorImmediately(COLORS[link.id]);
      } else {
        animator.animateColor(COLORS[link.id]);
      }
      animator.animatePath(0);
    } else {
      animator.animatePath(-pathLength);
    }
  };

  link.addEventListener("mouseenter", () => handleHover(true));
  link.addEventListener("mouseleave", () => handleHover(false));
});

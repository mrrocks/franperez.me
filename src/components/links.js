import anime from "animejs";

const zigzag = document.querySelector(".zigzag path");
const links = document.querySelectorAll(".links a");
const pathLength = zigzag.getTotalLength();

const COLORS = {
  mail: "#CDFEE5",
  twitter: "#DBDDF0",
  linkedin: "#FCE5CF",
};

const ANIMATION_CONFIG = {
  easing: "easeInOutQuad",
  duration: 300,
};

class PathAnimator {
  constructor() {
    this.currentPath = null;
    this.currentColor = null;
    this.lastColor = COLORS.mail;

    zigzag.style.strokeDasharray = pathLength;
    zigzag.style.strokeDashoffset = -pathLength;
  }

  animatePath(to) {
    const from = this.currentPath ? parseFloat(zigzag.style.strokeDashoffset) : -pathLength;

    this.currentPath?.pause();
    this.currentPath = anime({
      targets: ".zigzag path",
      strokeDashoffset: [from, to],
      ...ANIMATION_CONFIG,
      duration: (800 * Math.abs(to - from)) / pathLength,
    });
  }

  animateColor(color) {
    this.currentColor?.pause();
    this.lastColor = color;
    this.currentColor = anime({
      targets: ".zigzag path",
      stroke: color,
      ...ANIMATION_CONFIG,
    });
  }
}

const animator = new PathAnimator();

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    animator.animatePath(0);
    animator.animateColor(COLORS[link.id]);
  });

  link.addEventListener("mouseleave", () => {
    animator.animatePath(-pathLength);
    animator.animateColor(animator.lastColor);
  });
});

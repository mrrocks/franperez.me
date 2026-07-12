export const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

export function watchMotionPreference(listener) {
  const handleChange = ({ matches }) => listener(matches);

  listener(motionPreference.matches);
  motionPreference.addEventListener("change", handleChange);

  return () => motionPreference.removeEventListener("change", handleChange);
}

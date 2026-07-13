import { engine } from "animejs";

engine.pauseOnDocumentHidden = true;

export function watchPageVisibility(listener) {
  const notify = () => listener(document.visibilityState === "visible");

  notify();
  document.addEventListener("visibilitychange", notify);

  return () => document.removeEventListener("visibilitychange", notify);
}

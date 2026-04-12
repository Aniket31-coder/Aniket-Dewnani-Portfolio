import type { MotionProps, Transition } from "framer-motion";
export const baseRevealTransition: Transition = { duration: 0.55, ease: "easeOut" };
export function getReveal(prefersReducedMotion: boolean): MotionProps {
  if (prefersReducedMotion) return {};
  return {
	initial: { opacity: 0, y: 18 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.22 },
	transition: baseRevealTransition,
  };
}

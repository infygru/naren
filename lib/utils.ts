import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Stagger delay helper */
export function staggerDelay(index: number, base = 0.1) {
  return index * base;
}

/** Clamp number */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Common Framer Motion variants */
export const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } },
};

export const fadeInLeft = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] } },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
};

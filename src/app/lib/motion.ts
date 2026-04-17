import type { Variants, Transition } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT = { once: true, margin: "-80px" } as const;

const spring: Transition = { type: "spring", duration: 0.55, bounce: 0 };
const springSmall: Transition = { type: "spring", duration: 0.45, bounce: 0 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: spring },
};

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(3px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: springSmall },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const iconSwap: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: springSmall },
  exit: { opacity: 0, scale: 0.8, filter: "blur(4px)", transition: { duration: 0.18 } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

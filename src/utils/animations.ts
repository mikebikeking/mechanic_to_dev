import type { Variants } from 'framer-motion';

export const MECHANICAL_EASE = [0.76, 0, 0.24, 1];

export const slideIn: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.8, ease: MECHANICAL_EASE },
  },
};

export const slideUp: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.8, ease: MECHANICAL_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.6, ease: MECHANICAL_EASE },
  },
};

export const gearHover = {
  rotate: 90,
  transition: { duration: 0.3 },
};

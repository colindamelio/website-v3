const easing = [0.48, 0.15, 0.25, 0.96];

export const fadeIn = {
  initial: {
    x: 30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

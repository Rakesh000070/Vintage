import { Variants } from "motion/react";

/* Premium Fade Up */
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Luxury Fade In */
export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Smooth Scale Entrance */
export const scaleUpVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

/* Stagger Container */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

/* Slide Left */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
    rotate: -3,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

/* Slide Right */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    rotate: 3,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

/* Cinematic Text Reveal */
export const textRevealVariant: Variants = {
  hidden: {
    y: "120%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

/* Floating Logo/Image */
export const floatVariant: Variants = {
  animate: {
    y: [-12, 12],
    rotate: [-1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

/* Premium Parallax Entrance */
export const parallaxVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* Premium Button */
export const buttonHoverVariant: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 12,
    },
  },
  tap: {
    scale: 0.96,
  },
};
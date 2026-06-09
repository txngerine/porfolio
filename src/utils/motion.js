// Premium Framer Motion Variants

// Global transition easing (Cubic Bezier for premium, smooth animation)
export const premiumEase = [0.215, 0.61, 0.355, 1];

// Default section reveal variant
export const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase
    }
  }
};

// Fade up animation for individual elements
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: premiumEase,
      ...custom
    }
  })
};

// Image reveal animation (fade in + slight scale)
export const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: premiumEase
    }
  }
};

// Stagger container animation
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// Stagger child animation (opacity: 0 -> 1, y: 30 -> 0)
export const staggerChild = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: premiumEase
    }
  }
};

// Premium button animation states
export const buttonHover = {
  y: -2,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: premiumEase
  }
};

export const buttonTap = {
  scale: 0.98
};

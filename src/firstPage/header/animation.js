const transition = { duration: 1, ease: [0.86, 0, 0.07, 1] };

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition,
  },
  close: {
    opacity: 0,
    transition,
  },
};

export const translateLogo = {
  initial: {
    left: "-2rem",
    opacity: 0,
  },
  enter: {
    left: 0,
    opacity: 1,
    transition,
  },
  exit: {
    left: "-2rem",
    opacity: 0,
    transition,
  },
};

export const translateHeaderMainRight = {
  initial: {
    x: "2rem",
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition,
  },
  close: {
    x: "2rem",
    opacity: 0,
    transition,
  },
};

export const translateNavLinks = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.445, 0.05, 0.55, 0.95],
      delay: i[0],
    },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.445, 0.05, 0.55, 0.95],
      delay: i[1],
    },
  }),
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition: { ...transition, duration: 0.9 },
  },
};

export const heightBackground = {
  initial: {
    height: 0,
  },
  enter: {
    height: "100dvh",
    transition,
  },
  exit: {
    height: 0,
    transition: { ...transition, duration: 0.9 },
  },
};

export const blur = {
  initial: {
    filter: "blur(0)",
  },
  open: {
    filter: "blur(6px)",
    transition: { ...transition, duration: 0.2 },
  },
  close: {
    filter: "blur(0)",
    transition: { ...transition, duration: 0.1 },
  },
};

const colors = {
  blue: {
    blue1: "#2370f4",
    blue2: "#2a55e5",
    blue3: "#2455f4",
    blue4: "#b3d7ff",
    blue5: "#2874F0",
  },
  orange: {
    orange1: "#FFC400",
  },
  gray: {
    gray1: "#172337",
    gray2: "#212121",
    gray3: "#c2c2c2",
    gray4: "#878787",
    gray5: "#9e9e9e",
  },
};
// Destructure all color values
const {
  blue: { blue1, blue2, blue3, blue4, blue5 },
  orange: { orange1 },
  gray: { gray1, gray2, gray3, gray4, gray5 },
} = colors;

// Export all destructured values
export {
  blue1,
  blue2,
  blue3,
  blue4,
  blue5,
  orange1,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
};

const sizes = {
  xs: 320,
  sm: 480,
  md: 576,
  lg: 768,
  xl: 992,
  xxl: 1200,
  xxxl: 1400
} as const;

export const Theme = {
  breakpoints: {
    xs: `${sizes.xs}px`,
    sm: `${sizes.sm}px`,
    md: `${sizes.md}px`,
    lg: `${sizes.lg}px`,
    xl: `${sizes.xl}px`,
    xxl: `${sizes.xxl}px`,
    xxxl: `${sizes.xxxl}px`
  },
  fontSizes: {
    headings: {
      heading1: "4rem",
      heading2: "3.6rem",
      heading3: "3.2rem",
      heading4: "2.8rem",
      heading5: "2.4rem",
      heading6: "2rem",
      heading7: "1.6rem"
    },
    body: {
      bodyLarge: "2rem",
      bodyMedium: "1.8rem",
      bodyNormal: "1.6rem",
      bodySmall: "1.4rem"
    },
    label: {
      labelExtraSmall: "0.8rem",
      labelSmall: "1rem",
      labelLarge: "1.2rem"
    }
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  fontFamilies: {
    manrope: "'Manrope Variable', sans-serif",
    sora: "'Sora Variable', sans-serif"
  },
  borderRadius: {
    xxs: "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
    circle: "50%"
  },
  spacings: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px"
  },
  zIndex: {
    zMinus: "-1",
    z0: "0",
    z10: "10",
    z20: "20",
    z30: "30",
    z40: "40",
    z50: "50",
    zAuto: "auto"
  },
  colors: {
    customColor: "" as string,
    red: {
      100: "#FFCDD2",
      500: "#F44336",
      700: "#B40649"
    },
    pink: {
      100: "#F8BBD0",
      500: "#E91E63"
    },
    purple: {
      100: "#EDE7F6",
      500: "#9C27B0"
    },
    deepPurple: {
      100: "#D1C4E9",
      500: "#673AB7"
    },
    indigo: {
      100: "#C5CAE9",
      500: "#3F51B5"
    },
    blue: {
      100: "#c2d6f0",
      500: "#005489",
      600: "#004066"
    },
    cyanBlue: {
      100: "#B2EBF2",
      500: "#00BCD4"
    },
    teal: {
      100: "#B2DFDB",
      500: "#009688"
    },
    green: {
      100: "#C8E6C9",
      500: "#4CAF50"
    },
    lime: {
      100: "#F0F4C3",
      500: "#CDDC39",
      700: "#8AC53E"
    },
    amber: {
      100: "#FFECB3",
      500: "#FFC107"
    },
    orange: {
      100: "#FFCCBC",
      500: "#FF9800"
    },
    brown: {
      100: "#D7CCC8",
      500: "#795548"
    },
    alerts: {
      error: "#FF0000",
      warning: "#FFBD00",
      info: "#0063F7",
      success: "#06C270",
      darkError: "#FF3B3B33",
      darkWarning: "#FFCC0033",
      darkInfo: "#0063F733",
      darkSuccess: "#06C27033"
    },
    light: {
      light: "#FDFDFD",
      light1: "#FAFAFA",
      light2: "#F5F5F5",
      light3: "#E7E7E7",
      light4: "#D0D0D0",
      light5: "#BDBDBD"
    },
    dark: {
      dark1: "#212121",
      dark2: "#2E2E2E",
      dark3: "#4A5052",
      dark4: "#80898D",
      dark5: "#8080808C"
    },
    lightBlue: {
      100: "#EBF5FF",
      500: "#03A9F4",
      700: "#007AFF"
    },
    lightGreen: {
      100: "#DCEDC8",
      500: "#8BC34A"
    },
    lightBrown: {
      100: "#B78470"
    },
    yellow: {
      100: "#FFF9C4",
      500: "#FFEB3B"
    },
    deepOrange: {
      100: "#FFCCBC",
      500: "#FF7E07",
      700: "#FF5722"
    },
    darkGreen: {
      100: "#06C27033"
    },
    overlays: {
      overlay: "#00000080"
    },
    shadow: {
      shadow1: "#ededed",
      shadow2: "#a1a1a4"
    }
  }
} as const;

import merge from "merge";
import { components } from "./components";
import { typography } from "./typhography";
import { themeColors } from "../theme/themeColors";
import { createTheme, responsiveFontSizes } from "@mui/material";

const THEMES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const themesOptions = {
  [THEMES.LIGHT]: {
    breakpoints,
    components: {
      ...components,
    },
    palette: {
      ...themeColors,
      background: {
        default: "#f0f0f0",
        paper: "#ffffff",
      },
      mode: "light",
    },
    typography,
  },
  [THEMES.DARK]: {
    breakpoints,
    components: {
      ...components,
    },
    palette: {
      ...themeColors,
      background: {
        default: "#171c24",
        paper: "#222b36",
      },
      mode: "dark",
      text: {
        primary: "#ffffff",
        secondary: "#919eab",
      },
      grey: {
        50: "#ffffff",
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        main: "#ffffff",
        600: "#ffffff",
        700: "#ffffff",
        800: "#ffffff",
        dark: "#ffffff",
        light: "#ffffff",
      },
    },
  },
  typography,
};

type themeSettingsTypes = {
  theme: string;
  direction: "ltr" | "rtl" | string;
  roundedCorners?: boolean;
  responsiveFontSizes?: boolean;
};
export const chatTheme = (config: themeSettingsTypes) => {
  let themeOptions = themesOptions[config.theme];
  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  let theme = createTheme(
    merge(
      {},
      themeOptions,
      { ...(config.roundedCorners && { shape: { borderRadius: 16 } }) },
      { direction: config.direction }
    )
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }
  return theme;
};

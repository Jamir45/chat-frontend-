const primary = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#ddd6fe",
  300: "#c4b5fd",
  400: "#a78bfa",
  light: "#a27cf7",
  main: "#8b5cf6",
  dark: "#6140ac",
};

const secondary = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  main: "#2196f3",
};

const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#EEEEEE",
  300: "#e0e0e0",
  400: "#bdbdbd",
  main: "#9e9e9e", // main
  600: "#757575",
  700: "#616161",
  800: "#424242",
  dark: "#202020",
  light: "#6b7280",
};

const text = {
  primary: "#47404f",
  secondary: grey[50],
  darkGrey: grey.dark,
  black: "#000000",
};

const error = {
  light: "#f26969",
  main: "#ef4444",
  dark: "#a72f2f",
};

const info = {
  light: "#629bf7",
  main: "#3b82f6",
  dark: "#295bac",
};

const success = {
  light: "#a27cf7",
  main: "#10b981",
  dark: "#0b815a",
};

const warning = {
  light: "#f7b13b",
  main: "#f59e0b",
  dark: "#ab6e07",
};

export const themeShadows = {
  1: "0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)",
  2: "0px 0px 21px 1px rgba(0, 0, 0, 0.07)",
  3: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  4: "0px 7px 30px 3px rgba(0, 0, 0, 0.05)",
};

export const themeColors = {
  text,
  info,
  grey,
  error,
  primary,
  secondary,
  warning,
  success,
}

// // src/lib/theme.ts
// import { createTheme } from "@mui/material/styles";

// export const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     background: {
//       default: "#BCECFFFF",
//       paper: "#BCECFFFF",
//     },
//     primary: {
//       main: "#1797FFFF",
//     },
//     secondary: {
//       main: "#f48fb1",
//     },
//     text: {
//       primary: "#000000FF",
//       secondary: "#aaa",
//     },
//   },
//   typography: {
//     fontFamily: "'Roboto', sans-serif",
//     button: {
//       textTransform: "none",
//       fontWeight: 500,
//     },
//   },
//   shape: {
//     borderRadius: 6,
//   },
// });

// export const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     background: {
//       default: "#FFFFFFFF",
//       paper: "#F7F7F7FF",
//     },
//     primary: {
//       main: "#1797FFFF",
//     },
//     secondary: {
//       main: "#f48fb1",
//     },
//     text: {
//       primary: "#000000FF",
//       secondary: "#aaa",
//     },
//   },
//   typography: {
//     fontFamily: "'Roboto', sans-serif",
//     button: {
//       textTransform: "none",
//       fontWeight: 500,
//     },
//   },
//   shape: {
//     borderRadius: 6,
//   },
// });

import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";

const baseColors = {
  brandPrimary: "#0D47A1",
  brandSecondary: "#1976D2",
  accent: "#FFC107",
  neutralLight: "#F5F5F5",
  neutralDark: "#212121",
  colorBgBase: "#607d8B",
  colorBgBaseSecondary: "#90a4ae",
  colorText: "#ffffff",
  gradientColor:
    "linear-gradient(rgb(120, 75, 248), rgb(104, 51, 242), rgb(175, 100, 245))",
  colorPrimary: "#0D47A1",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: blue[800] },
    secondary: { main: grey[800] },
    // text: { primary: purple[800], secondary: green[800] },

    background: { default: baseColors.neutralLight, paper: "#FFFFFF" },
    customColors: {
      ...baseColors,
      neutralDark: grey[900],
    },
  },
  typography: {
    h1: { fontSize: "2.5rem", fontWeight: 700 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8 } },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: blue[400] },
    secondary: { main: grey[300] },
    background: { default: "#121212", paper: grey[900] },
    customColors: {
      ...baseColors,
      neutralLight: grey[800],
    },
  },
});

// design-tokens.js
export const tokens = {
  color: {
    primary: "#6200ee",
    secondary: "#03dac6",
    text: { light: "#333", dark: "#fff" },
  },
  spacing: [0, 4, 8, 16, 32, 64],
  fontSize: { sm: 10, md: 20, lg: 35, xl: 50 },
};

export const muiTheme = createTheme({
  palette: {
    primary: { main: tokens.color.primary },
    secondary: { main: tokens.color.secondary },
    text: { primary: tokens.color.text.light },
  },
  spacing: (v: number) => tokens.spacing[v],
  typography: { fontSize: tokens.fontSize.md },
});

// src/lib/theme.ts
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#FFFFFFFF",
      paper: "#F7F7F7FF",
    },
    primary: {
      main: "#1797FFFF",
    },
    secondary: {
      main: "#f48fb1",
    },
    text: {
      primary: "#000000FF",
      secondary: "#aaa",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4F46E5" }, // Indigo
    secondary: { main: "#10B981" }, // Emerald
    error: { main: "#F43F5E" }, // Rose
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

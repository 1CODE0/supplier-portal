// useThemePalette.ts

import { useTheme, Theme } from "@mui/material/styles";

export interface ThemePalette {
  text: Theme["palette"]["text"];
  background: Theme["palette"]["background"];
  primary: Theme["palette"]["primary"];
  custom: Theme["palette"]["customColors"];
}

export default function useThemePalette(): ThemePalette {
  const theme = useTheme();
  const palette = theme.palette;
  return {
    text: palette.text,
    background: palette.background,
    primary: palette.primary,
    custom: palette.customColors,
  };
}

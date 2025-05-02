import { Theme, useTheme } from "@mui/material";

import { useSettings } from "./useSettings";

const getPaletteFromThemeObj = (themeObj: Theme) => {
  return {
    textPalette: themeObj.palette.text,
    errorPalette: themeObj.palette.error,
    successPalette: themeObj.palette.success,
    warningPalette: themeObj.palette.warning,
    infoPalette: themeObj.palette.info,
    primaryPalette: themeObj.palette.primary,
    secondaryPalette: themeObj.palette.secondary,
    customPalette: themeObj.palette.customColors,
  };
};

const useThemePalette = () => {
  const theme = useTheme();
  const { settings } = useSettings();

  const lightThemeObj = theme;
  const darkThemeObj = theme;

  const palette =
    settings.mode === "light"
      ? getPaletteFromThemeObj(lightThemeObj)
      : getPaletteFromThemeObj(darkThemeObj);

  return palette;
};

export default useThemePalette;

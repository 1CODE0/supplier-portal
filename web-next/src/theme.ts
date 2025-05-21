import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material'
import { PaletteMode } from '@mui/material'

const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  const lightPalette = {
    primary: { main: '#544BFFFF' },
    secondary: { main: '#10B981' },
    error: { main: '#F43F5E' },
    custom: { main: '#4F2CB1FF', text: 'white' },
    background: { default: '#fafafa', paper: '#ffffff' }
  }

  const darkPalette = {
    primary: { main: '#41B4E9FF' },
    secondary: { main: '#1CE491CC' },
    error: { main: '#e57373' },
    custom: { main: '#4F2CB1FF', text: 'white' },
    background: { default: '#121212', paper: '#1e1e1e' }
  }

  const palette = mode === 'light' ? lightPalette : darkPalette

  return {
    palette: {
      mode,
      ...palette
    },
    typography: {
      fontFamily: 'Roboto, sans-serif'
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: palette.primary.main
          }
        }
      }
    }
  }
}

export function getTheme(mode: PaletteMode) {
  let theme = createTheme(getDesignTokens(mode))
  theme = responsiveFontSizes(theme)
  return theme
}

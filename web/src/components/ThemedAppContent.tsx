'use client'

import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { useSettings } from '@/hooks/useSettings'
import { getTheme } from '@/theme'
import CustomToastContainer from '@/utilities/CustomToastContainer'
import { DrawerProvider } from '@/contexts/DrawerContext'
import NavBar from '@/utilities/NavBar'

export default function ThemedAppContent({ children }: { children: React.ReactNode }) {
  const { mode } = useSettings()
  const theme = getTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='md' sx={{ my: 4 }}>
        <DrawerProvider>
          <NavBar />
          {children}
        </DrawerProvider>
      </Container>
      <CustomToastContainer />
    </ThemeProvider>
  )
}

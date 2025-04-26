'use client'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Providers } from '@/providers'

import { Box, Container, Typography } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: { main: '#4F46E5' }, // Indigo
    secondary: { main: '#10B981' }, // Emerald
    error: { main: '#F43F5E' } // Rose
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <header>
              {/* You can swap AppBar for your own header */}
              <Box component='header' sx={{ bgcolor: 'primary.main', color: '#fff', py: 2 }}>
                <Container maxWidth='md'>
                  <Typography variant='h6'>Smart Supplier Portal</Typography>
                </Container>
              </Box>
            </header>
            <Container maxWidth='md' sx={{ my: 4 }}>
              {children}
            </Container>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

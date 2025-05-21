'use client'

import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { getTheme } from '@/theme'
import { useSettings } from '@/hooks/useSettings'
import { QueryProvider } from '@/providers/QueryProvider'
import { AuthProvider } from '@/providers/AuthProvider'
import { AuthGuard } from '@/components/AuthGuard'
import { DrawerProvider } from '@/contexts/DrawerContext'
import NavBar from '@/utilities/NavBar'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const { mode } = useSettings()
  const theme = getTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryProvider>
        <AuthProvider>
          <AuthGuard>
            <Container maxWidth='md' sx={{ my: 4 }}>
              <DrawerProvider>
                <NavBar />
                {children}
              </DrawerProvider>
            </Container>
          </AuthGuard>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}

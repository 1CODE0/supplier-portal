'use client'

import React, { createContext, useState } from 'react'
import { setModeCookie } from '@/utilities/cookieUtils'

export type ThemeMode = 'light' | 'dark'

export interface SettingsContextType {
  mode: ThemeMode
  toggleMode: () => void
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export const SettingsProvider: React.FC<{
  children: React.ReactNode
  initialMode: ThemeMode
}> = ({ children, initialMode }) => {
  const [mode, setMode] = useState<ThemeMode>(initialMode)

  const toggleMode = () => {
    const next = mode === 'light' ? 'dark' : 'light'
    setMode(next)
    setModeCookie(next)
  }

  return <SettingsContext.Provider value={{ mode, toggleMode }}>{children}</SettingsContext.Provider>
}

import Cookies from 'js-cookie'
import { PaletteMode } from '@mui/material'

const COOKIE_KEY = 'appSettings'

export interface SettingsCookie {
  mode: PaletteMode
}

// Read settings (or fallback to system preference)
export function getSettingsFromCookie(): SettingsCookie {
  const cookie = Cookies.get(COOKIE_KEY)
  if (cookie) {
    try {
      return JSON.parse(cookie) as SettingsCookie
    } catch {
      // invalid JSON
    }
  }
  const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  return { mode: prefersDark ? 'dark' : 'light' }
}

// Persist updated settings
export function setSettingsCookie(settings: SettingsCookie) {
  Cookies.set(COOKIE_KEY, JSON.stringify(settings), {
    expires: 30,
    sameSite: 'strict',
    path: '/'
  })
}

// Convenience for toggling mode
export function setModeCookie(mode: PaletteMode) {
  setSettingsCookie({ mode })
}

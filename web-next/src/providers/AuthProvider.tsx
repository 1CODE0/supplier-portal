'use client'
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react'

export enum eAuthStatus {
  PENDING = 0,
  AUTHENTICATED = 1,
  UNAUTHENTICATED = 2
}

interface AuthContextProps {
  user: string | null
  status: eAuthStatus
  login: (u: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be in AuthProvider')
  return ctx
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null)
  const [status, setStatus] = useState<eAuthStatus>(eAuthStatus.PENDING)

  useEffect(() => {
    // Synchronously read localStorage
    const stored = localStorage.getItem('user')
    if (stored) {
      setUser(stored)
      setStatus(eAuthStatus.AUTHENTICATED)
    } else {
      setStatus(eAuthStatus.UNAUTHENTICATED)
    }
  }, [])

  const login = useCallback(async (username: string) => {
    setStatus(eAuthStatus.PENDING)
    // simulate API call
    await new Promise(r => setTimeout(r, 1000))
    localStorage.setItem('user', username)
    setUser(username)
    setStatus(eAuthStatus.AUTHENTICATED)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('user')
    setUser(null)
    setStatus(eAuthStatus.UNAUTHENTICATED)
  }, [])

  return <AuthContext.Provider value={{ user, login, logout, status }}>{children}</AuthContext.Provider>
}

'use client'

import React, { useEffect } from 'react'
import { useAuth, eAuthStatus } from '@/providers/AuthProvider'
import { useRouter, usePathname } from 'next/navigation'
import { ePathVariables } from '@/config/SupplierConfig'
import { CustomLoader } from '@/utilities/CustomLoader'

const PUBLIC_ROUTES: string[] = [ePathVariables.LOGIN, '/register']

export const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { status } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === eAuthStatus.PENDING) return

    if (status === eAuthStatus.UNAUTHENTICATED && !PUBLIC_ROUTES.includes(pathname)) {
      router.replace(ePathVariables.LOGIN)
      return
    }

    if (status === eAuthStatus.AUTHENTICATED && PUBLIC_ROUTES.includes(pathname)) {
      router.replace(ePathVariables.ORDERS)
      return
    }
  }, [status, pathname, router])

  // Show loader while pending or during any redirect phase
  const isRedirecting =
    (status === eAuthStatus.UNAUTHENTICATED && !PUBLIC_ROUTES.includes(pathname)) ||
    (status === eAuthStatus.AUTHENTICATED && PUBLIC_ROUTES.includes(pathname))

  if (status === eAuthStatus.PENDING || isRedirecting) return <CustomLoader />

  return <>{children}</>
}

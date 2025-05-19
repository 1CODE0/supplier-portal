// // src/router/AuthGuard.tsx
// 'use client'
// import { useNav } from '@/hooks/useNav'
// import { useAuth } from '../providers/AuthProvider'
// import { useEffect } from 'react'
// import { ePathVariables } from '@/config/SupplierConfig'

// export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
//   const { user } = useAuth()

//   console.log('🚀 ~ AuthGuard.tsx:11 ~ AuthGuard ~ user:', user)
//   const { replace } = useNav()

//   useEffect(() => {
//     if (!user) {
//       replace(ePathVariables.LOGIN)
//     }
//   }, [user])

//   return children
// }

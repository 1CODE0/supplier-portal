'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export const useNav = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return {
    push: router.push,
    replace: router.replace,
    back: router.back,
    pathname,
    search: searchParams.toString(),
    getParam: (key: string) => searchParams.get(key)
  }
}

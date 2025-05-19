'use server'

import { cookies } from 'next/headers'
import { SettingsProvider, ThemeMode } from '@/contexts/settingsContext'
import ThemedAppContent from '@/components/ThemedAppContent'
import { QueryProvider } from '@/providers/QueryProvider'
import { AuthProvider } from '@/providers/AuthProvider'
import { AuthGuard } from '@/components/AuthGuard'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Server-side read
  const cookieStore = await cookies()
  const raw = cookieStore.get('appSettings')?.value

  let initialMode: ThemeMode = 'light'

  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      if (parsed.mode === 'dark') initialMode = 'dark'
    } catch {
      console.error('Invalid Json')
    }
  }

  return (
    <html lang='en'>
      <body>
        <QueryProvider>
          <AuthProvider>
            <AuthGuard>
              <SettingsProvider initialMode={initialMode}>
                <ThemedAppContent>{children}</ThemedAppContent>
              </SettingsProvider>
            </AuthGuard>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

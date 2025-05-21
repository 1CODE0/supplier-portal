'use server'

import { cookies } from 'next/headers'
import { SettingsProvider, ThemeMode } from '@/contexts/settingsContext'
import ClientProviders from '@/providers/ClientProviders'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const raw = cookieStore.get('appSettings')?.value

  let initialMode: ThemeMode = 'light'
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      if (parsed.mode === 'dark') initialMode = 'dark'
    } catch {
      console.error('Invalid appSettings cookie')
    }
  }

  return (
    <html lang='en'>
      <body>
        <SettingsProvider initialMode={initialMode}>
          <ClientProviders>{children}</ClientProviders>
        </SettingsProvider>
      </body>
    </html>
  )
}

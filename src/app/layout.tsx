'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import { AppShell, ColorSchemeScript, Group, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import Navagation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#fcfcfc' }}>
        <Providers>
          <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding="md">
            <AppShell.Header>
              <Group h="100%" pl="15px" justify="center">
                <Title order={3}>차량 방문등록</Title>
              </Group>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
            <AppShell.Footer>
              <Navagation />
            </AppShell.Footer>
          </AppShell>
        </Providers>
      </body>
    </html>
  )
}

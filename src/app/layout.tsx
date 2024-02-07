'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import { AppShell, ColorSchemeScript, Group, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

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
      <body className={inter.className}>
        <Providers>
          <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Header>
              <Group h="100%" pl="15px" justify="center">
                <Title order={3}>차량 방문등록</Title>
              </Group>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </Providers>
      </body>
    </html>
  )
}

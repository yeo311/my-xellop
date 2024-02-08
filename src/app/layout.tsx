import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import { ColorSchemeScript, Title } from '@mantine/core'
import { Metadata, Viewport } from 'next'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: {
    template: '차량 방문등록 | %s',
    default: '차량 방문등록',
  },
  appleWebApp: {
    capable: true,
  },
  icons: [
    {
      url: 'android/android-launchericon-512-512.png',
      sizes: '512x512',
    },
    {
      url: 'android/android-launchericon-192-192.png',
      sizes: '192x192',
    },
    {
      url: 'android/android-launchericon-144-144.png',
      sizes: '144x144',
    },
    {
      url: 'android/android-launchericon-96-96.png',
      sizes: '96x96',
    },
    {
      url: 'android/android-launchericon-72-72.png',
      sizes: '72x72',
    },
    {
      url: 'android/android-launchericon-48-48.png',
      sizes: '48x48',
    },
    {
      url: 'ios/16.png',
      sizes: '16x16',
    },
    {
      url: 'ios/20.png',
      sizes: '20x20',
    },
    {
      url: 'ios/29.png',
      sizes: '29x29',
    },
    {
      url: 'ios/32.png',
      sizes: '32x32',
    },
    {
      url: 'ios/40.png',
      sizes: '40x40',
    },
    {
      url: 'ios/50.png',
      sizes: '50x50',
    },
    {
      url: 'ios/57.png',
      sizes: '57x57',
    },
    {
      url: 'ios/58.png',
      sizes: '58x58',
    },
    {
      url: 'ios/60.png',
      sizes: '60x60',
    },
    {
      url: 'ios/64.png',
      sizes: '64x64',
    },
    {
      url: 'ios/72.png',
      sizes: '72x72',
    },
    {
      url: 'ios/76.png',
      sizes: '76x76',
    },
    {
      url: 'ios/80.png',
      sizes: '80x80',
    },
    {
      url: 'ios/87.png',
      sizes: '87x87',
    },
    {
      url: 'ios/100.png',
      sizes: '100x100',
    },
    {
      url: 'ios/114.png',
      sizes: '114x114',
    },
    {
      url: 'ios/120.png',
      sizes: '120x120',
    },
    {
      url: 'ios/128.png',
      sizes: '128x128',
    },
    {
      url: 'ios/144.png',
      sizes: '144x144',
    },
    {
      url: 'ios/152.png',
      sizes: '152x152',
    },
    {
      url: 'ios/167.png',
      sizes: '167x167',
    },
    {
      url: 'ios/180.png',
      sizes: '180x180',
    },
    {
      url: 'ios/192.png',
      sizes: '192x192',
    },
    {
      url: 'ios/256.png',
      sizes: '256x256',
    },
    {
      url: 'ios/512.png',
      sizes: '512x512',
    },
    {
      url: 'ios/1024.png',
      sizes: '1024x1024',
    },
  ],
}

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
          <>
            <header className="fixed top-0 left-0 right-0 h-14 flex justify-center items-center shadow-md z-10 bg-white">
              <Title order={4}>차량 방문등록</Title>
            </header>
            <main className="pt-20 px-4">{children}</main>
            <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-300">
              <Navigation />
            </footer>
          </>
        </Providers>
      </body>
    </html>
  )
}

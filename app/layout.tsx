import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-luxury',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Veridian Estates | Premier Luxury Real Estate',
  description: 'Discover exceptional luxury properties and estates with Veridian Estates',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/craftyFavicon.png', type: 'image/png', sizes: 'any' },
    ],
    apple: [
      { url: '/craftyFavicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}

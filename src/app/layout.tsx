import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://carroattrezzibrescia24.it'),
  title: {
    template: '%s | Carroattrezzi Brescia 24H',
    default: 'Carroattrezzi a Brescia 24H | Soccorso Stradale',
  },
  description: 'Carroattrezzi a Brescia attivo 24 ore su 24 per traino auto, recupero veicoli e soccorso stradale rapido.',
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Carroattrezzi a Brescia 24H | Soccorso Stradale',
    description: 'Soccorso stradale, traino e recupero veicoli a Brescia e provincia.',
    url: 'https://carroattrezzibrescia24.it',
    siteName: 'Carroattrezzi Brescia 24H',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
      </head>
      <body className={inter.variable + ' text-gray-950 antialiased'}>{children}<script defer src="/privacy-notice.js" />
      </body>
    </html>
  )
}

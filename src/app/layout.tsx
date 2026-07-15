import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://carroattrezzibrescia24.it'),
  title: {
    template: '%s | Carroattrezzi Brescia 24H',
    default: 'Carroattrezzi a Brescia 24H | Soccorso Stradale',
  },
  description: 'Carroattrezzi a Brescia attivo 24 ore su 24 per traino auto, recupero veicoli e soccorso stradale rapido.',
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
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/sitemap.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}

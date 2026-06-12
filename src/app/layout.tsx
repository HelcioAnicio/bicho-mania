import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bicho Mania · Pet Shop, Banho & Tosa e Veterinária em Caxias do Sul',
  description:
    'Pet shop, banho & tosa com cromoterapia e musicoterapia, e clínica veterinária completa no bairro Lourdes, Caxias do Sul / RS. Cuidando de quem você ama desde 2015.',
  keywords: [
    'pet shop caxias do sul',
    'banho e tosa caxias',
    'veterinaria caxias do sul',
    'bicho mania',
    'bairro lourdes',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://bichomania.com.br/' },
  openGraph: {
    type: 'website',
    url: 'https://bichomania.com.br/',
    title: 'Bicho Mania · Pet Shop, Banho & Tosa e Veterinária em Caxias do Sul',
    description:
      'Banho & tosa com cromoterapia, clínica veterinária completa e loja pet — tudo num lugar só, no bairro Lourdes.',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bicho Mania · Pet Shop em Caxias do Sul',
    description: 'Banho & tosa, veterinária e loja pet no bairro Lourdes, Caxias do Sul.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  name: 'Bicho Mania',
  description:
    'Pet shop, banho & tosa com cromoterapia e musicoterapia, e clínica veterinária completa.',
  url: 'https://bichomania.com.br',
  telephone: '+555430667350',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Simão Cembrani, 117',
    addressLocality: 'Caxias do Sul',
    addressRegion: 'RS',
    addressCountry: 'BR',
  },
  openingHours: ['Mo-Fr 08:00-19:00', 'Sa 08:00-12:00'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '400',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-svh antialiased">{children}</body>
    </html>
  )
}

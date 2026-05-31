import type { Metadata } from 'next'
import { bebasNeue, spaceGrotesk, spaceMono } from '@/lib/fonts'
import { Providers } from './providers'
import { CursorDot } from '@/components/ui/CursorDot'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strata — Built different. Delivered on time. | Pune Real Estate Developer',
  description: 'Strata is Pune\'s award-winning real estate developer. Luxury apartments in Koregaon Park, Baner & Kharadi. MahaRERA registered. Zero brokerage. Direct from developer.',
  keywords: 'real estate developer Pune, luxury apartments Pune, Koregaon Park apartments, Baner flats, Kharadi new projects, MahaRERA developer Pune',
  openGraph: {
    title: 'Strata — Where Pune Lives Next',
    description: 'Award-winning real estate developer in Pune. MahaRERA registered. Zero brokerage.',
    url: 'https://strata.in',
    siteName: 'Strata',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata — Pune Real Estate Developer',
    description: 'Premium apartments in Koregaon Park, Baner & Kharadi. MahaRERA registered.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://strata.in',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-body antialiased selection:bg-strata-acid selection:text-strata-acid-text`}>
        <Providers>
          <CursorDot />
          {children}
        </Providers>
      </body>
    </html>
  )
}

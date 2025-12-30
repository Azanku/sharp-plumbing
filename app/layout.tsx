import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sharp Plumbing | Local Plumbers in Independence, MO | (816) 207-3561',
  description: 'Sharp Plumbing - Local, Family Owned Company since 1970. Expert plumbing, HVAC, and gas line services in Independence, MO. Same-day services, free estimates, warranties on all work. Call (816) 207-3561.',
  keywords: 'plumbing, HVAC, Independence MO, plumber, heating, cooling, gas line, water heater, drain cleaning, Sharp Plumbing',
  authors: [{ name: 'Sharp Plumbing' }],
  creator: 'Sharp Plumbing',
  publisher: 'Sharp Plumbing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sharpplumbingkc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sharp Plumbing | Local Plumbers in Independence, MO',
    description: 'Local, Family Owned Company since 1970. Expert plumbing, HVAC, and gas line services. Same-day services available.',
    url: 'https://www.sharpplumbingkc.com',
    siteName: 'Sharp Plumbing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharp Plumbing | Local Plumbers in Independence, MO',
    description: 'Local, Family Owned Company since 1970. Expert plumbing, HVAC, and gas line services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.sharpplumbingkc.com",
              "name": "Sharp Plumbing",
              "image": "https://www.sharpplumbingkc.com/logo.png",
              "description": "Local, Family Owned Company since 1970. Expert plumbing, HVAC, and gas line services in Independence, MO.",
              "url": "https://www.sharpplumbingkc.com",
              "telephone": "(816) 207-3561",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Independence",
                "addressRegion": "MO",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.0911,
                "longitude": -94.4155
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Plumbing and HVAC Services",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "AC Services"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Plumbing Services"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Heating Services"
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Gas Line Services"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


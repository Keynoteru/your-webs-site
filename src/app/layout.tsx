import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Your Webs - Videos de Alta Calidad y Desarrollo Web Profesional",
  description: "Especializados en videos de alta calidad para redes sociales de restaurantes Michelin, Soles de Repsol y proveedores premium. Desarrollo web profesional, apps con IA y análisis Big Data para digitalizar tu empresa.",
  keywords: "videos alta calidad, restaurantes michelin, soles de repsol, desarrollo web, apps IA, big data, digitalización empresarial",
  authors: [{ name: "Your Webs" }],
  creator: "Your Webs",
  publisher: "Your Webs",
  icons: {
    icon: [
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/logo_yourwebs.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/favicon-64x64.png',
    apple: '/favicon-64x64.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-webs.com'),
  openGraph: {
    title: "Your Webs - Videos de Alta Calidad y Desarrollo Web Profesional",
    description: "Especializados en videos de alta calidad para redes sociales de restaurantes Michelin y desarrollo web profesional con IA.",
    url: 'https://your-webs.com',
    siteName: 'Your Webs',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Webs - Producción Audiovisual y Desarrollo Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Webs - Videos de Alta Calidad y Desarrollo Web Profesional",
    description: "Especializados en videos de alta calidad para redes sociales de restaurantes Michelin y desarrollo web profesional con IA.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon-64x64.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon-64x64.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo_yourwebs.ico" type="image/x-icon" sizes="16x16" />
        <link rel="canonical" href="https://your-webs.com" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://stats.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
        
        {/* Google Search Console Verification - Reemplaza con tu código de verificación */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
        
        {/* Preload critical resources - Logo is already prioritized in Header component */}
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Your Webs",
              "url": "https://your-webs.com",
              "logo": "https://your-webs.com/logo_your_webs.svg",
              "description": "Especializados en videos de alta calidad para redes sociales de restaurantes Michelin, Soles de Repsol y proveedores premium. Desarrollo web profesional, apps con IA y análisis Big Data.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-680-548-144",
                "contactType": "customer service",
                "areaServed": "ES",
                "availableLanguage": "es"
              },
              "sameAs": [
                "https://www.instagram.com/yourwebs/",
                "https://www.youtube.com/@YourWebs",
                "https://www.linkedin.com/company/your-webs"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES"
              }
            })
          }}
        />
        
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Your Webs",
              "image": "https://your-webs.com/logo_your_webs.svg",
              "description": "Agencia de producción audiovisual y desarrollo web profesional",
              "url": "https://your-webs.com",
              "telephone": "+34-680-548-144",
              "priceRange": "$$",
              "servesCuisine": "Digital Services",
              "areaServed": {
                "@type": "Country",
                "name": "España"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        {children}
      </body>
    </html>
  );
}

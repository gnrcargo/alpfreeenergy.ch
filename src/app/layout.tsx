import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlpFree Energy | Soluzioni Solari Premium e Indipendenza Energetica",
  description: "Trasforma la tua energia con AlpFree Energy. Impianti fotovoltaici di alta gamma, sistemi di accumulo e consulenza strategica curata da Guner.",
  keywords: ["energia solare svizzera", "fotovoltaico lugano", "pannelli solari premium", "indipendenza energetica", "AlpFree Energy", "Guner solare"],
  alternates: {
    canonical: "https://alpfreeenergy.ch",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AlpFree Energy | Il Futuro dell'Energia Oggi",
    description: "Sistemi fotovoltaici d'avanguardia per la tua casa o azienda.",
    url: "https://alpfreeenergy.ch",
    siteName: "AlpFree Energy",
    locale: "it_CH",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AlpFree Energy Solar Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AlpFree Energy",
    "url": "https://alpfreeenergy.ch",
    "logo": "https://alpfreeenergy.ch/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41-78-657-1066",
      "contactType": "sales",
      "areaServed": "CH",
      "availableLanguage": ["Italian", "German", "English"]
    }
  };

  return (
    <html lang="it" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

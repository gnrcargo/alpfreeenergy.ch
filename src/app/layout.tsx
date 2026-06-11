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
  title: "AlpFree Energy | Installazione Fotovoltaico Lugano e Canton Ticino",
  description: "AlpFree Energy installa impianti fotovoltaici premium a Lugano e in tutto il Canton Ticino. Chalet, ville, abitazioni. Preventivo gratuito. Guner +41 78 657 10 66.",
  keywords: [
    "installazione fotovoltaico Ticino", "pannelli solari Lugano", "impianto solare Ticino",
    "fotovoltaico chalet Ticino", "energia solare Lugano", "installatore solare Ticino",
    "sussidi fotovoltaico Ticino 2026", "Pronovo contributi Ticino", "AlpFree Energy"
  ],
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

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
// Last update: 2026-04-18

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlpFree Energy | Il Tuo Partner per il Solare",
  description: "Soluzioni per l'energia solare e strategie per l'indipendenza energetica. AlpFree Energy offre impianti fotovoltaici di alta qualità.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}

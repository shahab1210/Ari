import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arifa Shaikh | Closing Manager — Real Estate & Bespoke Interiors",
  description:
    "High-performance Closing Manager specializing in luxury real estate advisory and bespoke turnkey interior contracts in Mumbai. 5+ years of deal-closing expertise across premium property developments and custom interior solutions.",
  keywords: [
    "Arifa Shaikh",
    "Closing Manager",
    "Real Estate Mumbai",
    "Luxury Interiors",
    "Bonito Designs",
    "Property Sales",
    "Turnkey Interiors",
    "HNWI Advisory",
  ],
  authors: [{ name: "Arifa Shaikh" }],
  openGraph: {
    title: "Arifa Shaikh | Closing Manager — Real Estate & Bespoke Interiors",
    description:
      "High-performance Closing Manager specializing in luxury real estate advisory and bespoke turnkey interior contracts in Mumbai.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0E] text-[#F4F1EE]">
        {children}
      </body>
    </html>
  );
}

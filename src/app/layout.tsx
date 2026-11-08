import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
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
  metadataBase: new URL("https://arifashaikh.com"),
  title: {
    default: "Arifa Shaikh | Closing Manager - Real Estate & Luxury Interiors (Mumbai, Thane, Mumbra)",
    template: "%s | Arifa Shaikh - Closing Manager",
  },
  description:
    "Arifa Shaikh (Anjum) is a premier Closing Manager in Mumbai, Thane, and Mumbra. Expert in real estate advisory, high-stakes property negotiation, luxury turnkey interior closures, and client relationship management.",
  keywords: [
    "Arifa Shaikh closing manager",
    "Best closing manager in thane",
    "best closing manager in mumbai",
    "Arifa shaikh",
    "Arifa Shaikh anjum",
    "Arifa closing manager",
    "Arifa shaikh mumbra",
    "Closing Manager Mumbai",
    "Real Estate Closing Manager Thane",
    "Luxury Interior Closing Specialist Mumbai",
    "Bonito Designs Closing Manager",
    "The Guardians Real Estate Closing Advisory",
  ],
  authors: [{ name: "Arifa Shaikh", url: "https://www.linkedin.com/in/arifa-shaikh-9955a8254/" }],
  creator: "Arifa Shaikh",
  publisher: "Arifa Shaikh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Arifa",
    lastName: "Shaikh",
    username: "arifa_shaikh",
    gender: "female",
    title: "Arifa Shaikh | Top Closing Manager in Mumbai & Thane",
    description:
      "Proven Closing Manager specializing in high-ticket real estate and luxury interior design sales closures across Mumbai, Thane, and Mumbra.",
    url: "https://arifashaikh.com",
    siteName: "Arifa Shaikh Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "/assets/arifa-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Arifa Shaikh - Closing Manager Real Estate and Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arifa Shaikh | Closing Manager - Mumbai & Thane",
    description:
      "Executive portfolio of Arifa Shaikh, specialist in high-value real estate and bespoke interior sales closures across Mumbai, Thane, and Mumbra.",
    images: ["/assets/arifa-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "P76zUdTUbpnYTMSXNHp8ooVVuL3pzsRMybZ-f3cPUBA",
  },

  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Thane, Mumbra",
    "geo.position": "18.9712;72.8331",
    ICBM: "18.9712, 72.8331",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0E] text-[#F4F1EE]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

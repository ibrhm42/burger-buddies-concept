import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import { Providers } from "@/app/providers";
import { ConceptDisclaimer } from "@/components/brand/concept-disclaimer";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Burger Buddies Ordering Experience — Unofficial Concept",
  title: {
    default: "Burger Buddies Ordering Experience — Unofficial Concept",
    template: "%s — Burger Buddies Unofficial Concept",
  },
  description:
    "An unofficial ordering experience created to demonstrate a possible WhatsApp-assisted menu and checkout flow for Burger Buddies.",
  icons: {
    icon: "/icon.jpg",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Burger Buddies Ordering Experience — Unofficial Concept",
    title: "Burger Buddies Ordering Experience — Unofficial Concept",
    description:
      "An unofficial ordering experience created to demonstrate a possible WhatsApp-assisted menu and checkout flow for Burger Buddies.",
  },
  twitter: {
    card: "summary",
    title: "Burger Buddies Ordering Experience — Unofficial Concept",
    description:
      "An unofficial ordering experience created to demonstrate a possible WhatsApp-assisted menu and checkout flow for Burger Buddies.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0d0d0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${bebasNeue.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
        <ConceptDisclaimer />
      </body>
    </html>
  );
}

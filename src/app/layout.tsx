import type { Metadata } from "next";
import { Bebas_Neue, Hanken_Grotesk } from "next/font/google";
import { Providers } from "@/app/providers";
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
  metadataBase: new URL("https://burger-buddies-concept.example"),
  title: {
    default: "Burger Buddies Ordering Concept",
    template: "%s · Burger Buddies",
  },
  description:
    "An unofficial demonstration of a Burger Buddies ordering experience for Mirpurkhas.",
  icons: {
    icon: "/icon.jpg",
  },
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
      </body>
    </html>
  );
}

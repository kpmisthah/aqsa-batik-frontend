import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AQSHA BATIK SUITS | Women Clothing & Batik Fabric India",
  description: "Shop premium batik fabric, cotton dress material, and stylish women clothing online from AQSHA BATIK SUITS. Trusted wholesale batik manufacturer in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-playfair">
        {children}
      </body>
    </html>
  );
}

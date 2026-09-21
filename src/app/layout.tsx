import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL } from "@/utils/siteConfig";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Batik Prints Suits for Women | Ujjain Batik Manufacturer | AQSHA",
  description: "Shop batik suits for women, batik print fabric for batik print suit & kurti, women dress material and wholesale women’s clothing from AQSHA Batik Suits, a No.1 Ujjain batik manufacturer.",
  keywords: "batik suits for women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} h-full antialiased font-body font-normal font-body`}
    >
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preload" as="image" href="/popup.webp" />
      </head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-58MC4FVH');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-body">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58MC4FVH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  header,
  children,
  footer
}: Readonly<{
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} flex flex-col w-full max-w-[1440px] h-auto overflow-auto`}
        suppressHydrationWarning={true}
        style={{
          marginRight: 'auto !important',
          marginLeft: 'auto !important',
          padding: '0px !important'
        }}>
          {header}
          {children}
          {footer}
      </body>
      <GoogleAnalytics gaId="G-Y2FCGQGZ8S" />
      <Script id="" type="application/ld+json"> 
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "InShorten",
          "url": "https://www.inshorten.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.inshorten.com/about-us{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </Script>
    </html>
  );
}

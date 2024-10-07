"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useState } from "react";
import ThemeToggle from "@/components/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  header,
  children,
  footer,
}: Readonly<{
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}>) {
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-own_bg_secondary text-own_text_primary"
    >
      <body
        className={`${inter.className} flex flex-col w-full max-w-[1440px] h-auto overflow-auto bg-own_bg_secondary text-own_text_primary`}
        suppressHydrationWarning={true}
        style={{
          marginRight: "auto !important",
          marginLeft: "auto !important",
          padding: "0px !important",
        }}
      >
        {isThemeLoaded ? header : null}
        {isThemeLoaded ? children : null}
        {isThemeLoaded ? footer : null}
        <ThemeToggle onThemeLoad={setIsThemeLoaded} />
      </body>
      <GoogleAnalytics gaId="G-Y2FCGQGZ8S" />
      <Script id="" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: "InShorten",
          url: "https://www.inshorten.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.inshorten.com/about-us{search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
    </html>
  );
}

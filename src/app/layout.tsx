import type { Metadata, Viewport } from "next";
import React from "react";
import "../styles.css";
import { Providers } from "./providers";

export const viewport: Viewport = {
  themeColor: "#004D77",
};

export const metadata: Metadata = {
  title: {
    default: "Elevate Roofing Services",
    template: "%s | Elevate Roofing Services",
  },
  description:
    "Premium roofing across Los Angeles County and Orange County.",
  openGraph: {
    siteName: "Elevate Roofing Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

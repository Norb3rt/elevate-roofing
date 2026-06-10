import type { Metadata, Viewport } from "next";
import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles.css";
import { Providers } from "./providers";
import { buildWebSiteSchema, buildOrganizationSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  themeColor: "#004D77",
};

export const metadata: Metadata = {
  title: {
    default: "Elevate Roofing Services",
    template: "%s | Elevate Roofing Services",
  },
  description: "Premium roofing across Los Angeles County and Orange County.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    siteName: "Elevate Roofing Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Global identity schemas — injected once, present on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationSchema()),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}


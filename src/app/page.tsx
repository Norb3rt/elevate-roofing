import type { Metadata } from "next";
import { LandingPage } from "@/components/site/LandingPage";

export const metadata: Metadata = {
  title: "Elevate Roofing Services | LA & Orange County Roofers",
  description:
    "Premium roof installation, repair, and replacement across Los Angeles County and Orange County. Licensed, insured, and built to last. Free estimates.",
  openGraph: {
    title: "Elevate Roofing Services | LA & Orange County Roofers",
    description:
      "Premium roof installation, repair, and replacement across Los Angeles County and Orange County.",
    url: "/",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Elevate Roofing Services",
    areaServed: ["Los Angeles County", "Orange County"],
    telephone: "+1-800-555-0199",
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}

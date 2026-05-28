import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/site/LandingPage";
import { cities, findCity } from "@/data/cities";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const c = findCity(slug);
  if (!c) return {};

  const title = `${c.name} Roofing Services | Elevate Roofing`;
  const desc = `Roof installation, repair & replacement in ${c.name}. ${c.blurb}`.slice(
    0,
    160,
  );

  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      url: `/roofing/${c.slug}`,
      type: "website",
    },
    alternates: {
      canonical: `/roofing/${c.slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = findCity(slug);

  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: `Elevate Roofing Services — ${city.name}`,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: city.county,
    },
    telephone: "+1-800-555-0199",
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage locationName={city.name} countyName={city.county} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/site/LandingPage";
import { cities, findCity } from "@/data/cities";
import { buildCitySchema } from "@/lib/schema";

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
  const desc = `Roof installation, repair & replacement in ${c.name}. ${c.blurb}`.slice(0, 160);

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

  return (
    <>
      {/*
        buildCitySchema() injects a fully Google-compliant LocalBusiness schema:
        - Precise GeoCoordinates (lat/lng from cities.ts)
        - Localized hasOfferCatalog (4 services × city name)
        - Correct containedInPlace as AdministrativeArea object
        - Canonical @id, url, image, openingHours, sameAs
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCitySchema(city)) }}
      />
      <LandingPage locationName={city.name} countyName={city.county} />
    </>
  );
}

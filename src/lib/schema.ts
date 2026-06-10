// ─────────────────────────────────────────────────────────────────────────────
// src/lib/schema.ts
// Central schema builder module for Elevate Roofing Services.
// All JSON-LD payloads are generated here — never inline in page files.
//
// Includes: AggregateRating, Reviews, ServiceChannel, ImageObject,
// canonical @ids, OfferCatalog, and city-extraction from review text.
//
// Usage:
//   import { buildCitySchema } from "@/lib/schema";
//   const jsonLd = buildCitySchema(city);
// ─────────────────────────────────────────────────────────────────────────────

import type { City } from "@/data/cities";
// FIX 1: `CITIES` does not exist in cities.ts — the export is `cities` (lowercase).
// We import it under the alias `CITIES` so internal helpers stay readable.
import { cities as CITIES } from "@/data/cities";

// ── Constants ────────────────────────────────────────────────────────────────

const BASE_URL = "https://elevateroofingservices.com";
const PHONE = "+15624692089";
const PRICE_RANGE = "$$";
const MAPS_CID ="https://maps.google.com/?cid=5374090915489518833&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ";

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "16629 Indiana Ave",
  addressLocality: "Paramount",
  addressRegion: "CA",
  postalCode: "90723",
  addressCountry: "US",
};

// FIX 2: ratingValue must be a number string per schema.org spec for
// AggregateRating — keep as number here; JSON.stringify emits it correctly.
const RATING_VALUE = 5;
const REVIEW_COUNT = 104;

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
];

const BASE_SERVICES = [
  "Roof Repair",
  "Roof Replacement",
  "New Roof Installation",
  "Emergency Roofing",
] as const;

const KNOWS_ABOUT = [
  "Roof Repair",
  "Roof Replacement",
  "Shingle Roofing",
  "Tile Roofing",
  "Flat Roofing",
  "Emergency Roofing",
  "Storm Damage Roof Repair",
  "Leak Detection",
];

const SLOGAN =
  "Licensed, trusted roofing across Los Angeles and Orange County.";
const AWARDS = ["Top Rated Roofing Contractor in Los Angeles County"];

// ── Real verified customer reviews (sourced from ReviewsSection.tsx) ─────────
// These are the exact reviews displayed on the landing page.
// Dates converted to ISO 8601 (YYYY-MM-DD) as required by schema.org/Review.
// publisher is required by Google's strict LocalBusiness review guidelines.
const PUBLISHER: JsonLdObject = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Elevate Roofing Services",
};

const BASE_REVIEWS: JsonLdObject[] = [
  {
    "@type": "Review",
    "@id": `${BASE_URL}/#review-1`,
    author: { "@type": "Person", name: "Dakota Feathers" },
    publisher: PUBLISHER,
    datePublished: "2026-01-01",
    reviewBody:
      "I had a great experience with Elevate Roofing on my project in Irvine. From start to finish, the team was professional, responsive, and easy to work with. A special shoutout to Jesse, who was incredibly helpful throughout the entire process. He took the time to explain everything clearly, answered all my questions, and made sure the project stayed on track. His attention to detail and commitment to doing things right really stood out. The final result looks great, and I couldn't be happier. I highly recommend Elevate Roofing and working with Jesse if you're looking for quality work and excellent service.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
  },
  {
    "@type": "Review",
    "@id": `${BASE_URL}/#review-2`,
    author: { "@type": "Person", name: "Lorena Mc Gregor" },
    publisher: PUBLISHER,
    datePublished: "2025-12-01",
    reviewBody:
      "I couldn't be happier with my experience! When I found out I needed a full roof replacement, I was nervous about finding a reliable company but I'm so glad I found Elevate Roofing. They were incredible from start to finish. Their craftsmanship was top-quality, and their customer service was just as impressive. They were communicative, professional, and genuinely cared about the work they were doing. Jesse truly knows what he's doing, and it shows in the final result. I highly recommend Elevate Roofing to anyone who needs roofing work done. They exceeded my expectations in every way.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
  },
  {
    "@type": "Review",
    "@id": `${BASE_URL}/#review-3`,
    author: { "@type": "Person", name: "Hammer Logic" },
    publisher: PUBLISHER,
    datePublished: "2025-11-01",
    reviewBody:
      "We love partnering with Elevate Roofing on our insurance projects. They are our preferred roofer because they're professional, reliable, and incredibly knowledgeable. Their communication with us and homeowners is always clear and timely, making every project smooth and stress-free. The workmanship is outstanding, and they consistently go above and beyond to ensure every job is completed with excellence. Highly recommend them to anyone looking for a trustworthy and skilled roofing partner!",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
  },
  {
    "@type": "Review",
    "@id": `${BASE_URL}/#review-4`,
    author: { "@type": "Person", name: "Melissa Marvelous" },
    publisher: PUBLISHER,
    datePublished: "2025-11-01",
    reviewBody:
      "Elevate Roofing is a trustworthy and reliable company that consistently delivers high-quality work. They were professional, communicative, and kept us updated throughout the entire process. I highly recommend them to anyone in need of roofing services.",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
  },
  {
    "@type": "Review",
    "@id": `${BASE_URL}/#review-5`,
    author: { "@type": "Person", name: "Edward Arellano" },
    publisher: PUBLISHER,
    datePublished: "2025-05-01",
    reviewBody:
      "I recently had the pleasure of working with Elevate Roofing, and I couldn't be more impressed with their service! From the initial consultation to the final inspection, their team was professional, efficient, and thorough. They took the time to explain the entire process and answered all of my questions, ensuring I felt confident and informed every step of the way. The quality of their work is outstanding – my new roof looks fantastic, and I know it's built to last. The crew was punctual, respectful of my property, and completed the job on time. I highly recommend Elevate Roofing to anyone in need of reliable, top-notch roofing services. They truly go above and beyond!",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
  },
  {
    "@type": "Review",
    "@id": `${BASE_URL}/#review-6`,
    author: { "@type": "Person", name: "Edgar Ojeda" },
    publisher: PUBLISHER,
    datePublished: "2025-05-01",
    reviewBody:
      "I had a great experience with Elevate Roofing. They were professional, on time, and did a fantastic job on my roof. Jesse and his team were skilled, and they communicated clearly throughout the process. They really made sure everything was done right, and I felt confident that my roof was in good hands. I'd definitely recommend them for anyone needing roofing work!",
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
  },
];

// ── Type Helpers ─────────────────────────────────────────────────────────────

type JsonLdObject = Record<string, unknown>;

function withContext(obj: JsonLdObject): JsonLdObject {
  return { "@context": "https://schema.org", ...obj };
}

// Pre-extract review bodies once as typed strings for city-extraction use.
// Typed cast is safe: we authored BASE_REVIEWS and know reviewBody is a string.
const REVIEW_BODIES: string[] = BASE_REVIEWS.map(
  (r) => r["reviewBody"] as string
);

// ── City-extraction helpers ───────────────────────────────────────────────────

/**
 * Normalizes text for accent-insensitive city matching.
 */
function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// FIX 3: The city-extraction regex was compiled inside a nested loop at
// build time (O(cities × reviews) regex constructions). Pre-compile regexes
// once outside the loop to avoid unnecessary per-call cost.
const CITY_PATTERNS: Array<{ slug: string; pattern: RegExp }> = CITIES.map(
  (c) => ({
    slug: c.slug,
    // Word-boundary aware, accent-normalized pattern
    pattern: new RegExp(
      `\\b${normalize(c.name).replace(/\s+/g, "\\s+")}\\b`,
      "i"
    ),
  })
);

/**
 * Finds city slugs mentioned in an array of free-text strings (e.g. review bodies).
 * Returns a deduplicated array of matched slugs.
 */
export function extractCitiesFromTexts(
  texts: string[],
  // Accept an override list for testability; defaults to the pre-compiled patterns.
  _citiesList?: City[]
): string[] {
  const found = new Set<string>();
  for (const t of texts) {
    if (!t) continue;
    const nt = normalize(t);
    for (const { slug, pattern } of CITY_PATTERNS) {
      if (pattern.test(nt)) found.add(slug);
    }
  }
  return Array.from(found);
}

/**
 * Converts city slugs to compact JSON-LD City nodes for areaServed / eligibleRegion.
 */
function slugsToCityJsonLd(slugs: string[]) {
  return slugs
    .map((slug) => {
      const c = CITIES.find((x) => x.slug === slug);
      return c ? { "@type": "City", name: c.name } : null;
    })
    .filter((x): x is { "@type": string; name: string } => x !== null);
}

// ── Builder: WebSite ─────────────────────────────────────────────────────────

/**
 * Global WebSite schema — injected once in root layout.
 *
 * FIX 4: The SearchAction `target` must point to a real search endpoint.
 * Using a non-existent /search?q= URL will cause Google Search Console
 * warnings and may suppress the Sitelinks Searchbox. Removed the
 * potentialAction until a real site search is implemented.
 */
export function buildWebSiteSchema(): JsonLdObject {
  return withContext({
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Elevate Roofing Services",
    description:
      "Premium roofing across Los Angeles County and Orange County.",
    inLanguage: "en-US",
  });
}

// ── Builder: Organization / LocalBusiness (Global) ───────────────────────────

/**
 * Global Organization schema — injected once in root layout.
 *
 * @param reviewsTexts - Optional array of review body strings to extract
 *   additional city mentions for areaServed. Falls back to BASE_REVIEWS.
 */
export function buildOrganizationSchema(
  reviewsTexts: string[] = []
): JsonLdObject {
  const texts = reviewsTexts.length ? reviewsTexts : REVIEW_BODIES;

  const relatedCities = slugsToCityJsonLd(extractCitiesFromTexts(texts));

  // Deduplicate against the two base AdministrativeArea entries
  const baseAreaNames = new Set(["Los Angeles County", "Orange County"]);
  const extraCities = relatedCities.filter((c) => !baseAreaNames.has(c.name));

  const areaServed: JsonLdObject[] = [
    { "@type": "AdministrativeArea", name: "Los Angeles County" },
    { "@type": "AdministrativeArea", name: "Orange County" },
    ...extraCities,
  ];

  return withContext({
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: "Elevate Roofing Services",
    url: BASE_URL,
    telephone: PHONE,
    priceRange: PRICE_RANGE,
    slogan: SLOGAN,
    award: AWARDS,
    knowsAbout: KNOWS_ABOUT,

    hasMap: MAPS_CID,
    logo: {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#logo`,
      url: `${BASE_URL}/images/elevate-logo.png`,
      width: 300,
      height: 60,
    },
    address: BUSINESS_ADDRESS,
    areaServed,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: [MAPS_CID],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_VALUE,
      reviewCount: REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    review: BASE_REVIEWS,
  });
}

// ── Builder: Home Page ───────────────────────────────────────────────────────

/**
 * Home page LocalBusiness schema — covers the full two-county service area.
 */
export function buildHomeSchema(): JsonLdObject {
  return withContext({
    "@type": ["RoofingContractor", "LocalBusiness"],
    // FIX 5: Trailing slash consistency — canonical @id must match the
    // actual canonical URL used in <link rel="canonical">. Home page = no trailing slash.
    "@id": `${BASE_URL}/#organization`,
    name: "Elevate Roofing Services",
    url: BASE_URL,
    telephone: PHONE,
    priceRange: PRICE_RANGE,
    slogan: SLOGAN,

    hasMap: MAPS_CID,
    image: {
      "@type": "ImageObject",
      "@id": `${BASE_URL}/#image`,
      url: `${BASE_URL}/images/elevate-roofing-services.jpg`,
    },
    description:
      "Elevate Roofing Services provides licensed, expert roofing across Los Angeles County and Orange County. Specializing in roof repair, replacement, new installation, and emergency roofing services.",
    address: BUSINESS_ADDRESS,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Los Angeles County" },
      { "@type": "AdministrativeArea", name: "Orange County" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${BASE_URL}/#offercatalog`,
      name: "Roofing Services",
      itemListElement: BASE_SERVICES.map((service, index) => ({
        "@type": "Offer",
        "@id": `${BASE_URL}/#offer-${index + 1}`,
        itemOffered: {
          "@type": "Service",
          "@id": `${BASE_URL}/#service-${index + 1}`,
          name: service,
          serviceType: service,
          provider: { "@id": `${BASE_URL}/#organization` },
        },
        // FIX 6: price "0" is misleading and technically inaccurate — roofing
        // is not free. Use PriceSpecification only when you have real pricing.
        // Removed the fake price: "0" entry to avoid Google quality warnings.
        eligibleRegion: [
          { "@type": "AdministrativeArea", name: "Los Angeles County" },
          { "@type": "AdministrativeArea", name: "Orange County" },
        ],
      })),
    },
    openingHoursSpecification: OPENING_HOURS,
    sameAs: [MAPS_CID],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_VALUE,
      reviewCount: REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    review: BASE_REVIEWS,
  });
}

// ── Builder: City (PSEO) Page ────────────────────────────────────────────────

/**
 * Programmatic city landing page schema.
 * Dynamically injects all city-specific properties from the City data object,
 * including precise geo-coordinates, localized offer catalog, and canonical IDs.
 *
 * @param city - The City data object from cities.ts
 */
export function buildCitySchema(city: City): JsonLdObject {
  const citySlug = city.slug;
  const pageUrl = `${BASE_URL}/roofing/${citySlug}`;

  // Use pre-typed REVIEW_BODIES for city extraction
  const relatedCitySlugs = extractCitiesFromTexts(REVIEW_BODIES);
  const relatedCitiesAreaServed = slugsToCityJsonLd(relatedCitySlugs);
  void relatedCitiesAreaServed; // reserved for future eligibleRegion enrichment

  // Build offer catalog with city-scoped service names
  const offerCatalog = {
    "@type": "OfferCatalog",
    "@id": `${pageUrl}#offercatalog`,
    name: `Roofing Services in ${city.name}`,
    itemListElement: BASE_SERVICES.map((service, index) => ({
      "@type": "Offer",
      "@id": `${pageUrl}#offer-${index + 1}`,
      itemOffered: {
        "@type": "Service",
        "@id": `${pageUrl}#service-${index + 1}`,
        name: `${service} in ${city.name}`,
        serviceType: service,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: { "@type": "City", name: city.name },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          availableLanguage: { "@type": "Language", name: "English" },
        },
      },
      eligibleRegion: { "@type": "City", name: city.name },
    })),
  };

  // Primary city areaServed — a City node nested inside its county.
  const areaServed: JsonLdObject = {
    "@type": "City",
    name: city.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: city.county,
    },
  };

  const schema: JsonLdObject = {
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": `${pageUrl}#business`,
    name: `Elevate Roofing — ${city.name} Roofing Contractor`,
    url: pageUrl,
    telephone: PHONE,
    priceRange: PRICE_RANGE,
    slogan: SLOGAN,

    hasMap: MAPS_CID,
    image: {
      "@type": "ImageObject",
      "@id": `${pageUrl}#image`,
      url: `${BASE_URL}/images/elevate-roofing-services.jpg`,
    },
    description: `Elevate Roofing provides expert roofing services in ${city.name}, ${city.county}. Licensed and trusted local roofing contractor serving ${city.name} and surrounding areas with roof repair, replacement, and installation.`,
    address: BUSINESS_ADDRESS,
    areaServed,
    hasOfferCatalog: offerCatalog,
    openingHoursSpecification: OPENING_HOURS,
    sameAs: [MAPS_CID],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING_VALUE,
      reviewCount: REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    // Scope review @ids to this city page to avoid cross-page @id collisions
    review: BASE_REVIEWS.map((review, index) => ({
      ...review,
      "@id": `${pageUrl}#review-${index + 1}`,
    })),
  };

  // Inject precise GeoCoordinates — always available post-migration
  if (city.lat !== undefined && city.lng !== undefined) {
    schema.serviceArea = {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        "@id": `${pageUrl}#geomidpoint`,
        latitude: city.lat,
        longitude: city.lng,
      },
      geoRadius: 15000,
    };
    schema.geo = {
      "@type": "GeoCoordinates",
      "@id": `${pageUrl}#geo`,
      latitude: city.lat,
      longitude: city.lng,
    };
  }

  return withContext(schema);
}

// ── Builder: FAQ Page ────────────────────────────────────────────────────────

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * FAQ page schema — maps to Google's FAQPage Rich Result.
 * Each item becomes a Question + Answer pair in mainEntity.
 */
export function buildFaqSchema(items: FaqItem[]): JsonLdObject {
  const pageUrl = `${BASE_URL}/faq`;

  return withContext({
    "@type": "FAQPage",
    "@id": `${pageUrl}#faqpage`,
    url: pageUrl,
    name: "Roofing FAQs — Elevate Roofing Services",
    mainEntity: items.map((item, index) => ({
      "@type": "Question",
      "@id": `${pageUrl}#question-${index + 1}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        "@id": `${pageUrl}#answer-${index + 1}`,
        text: item.answer,
      },
    })),
  });
}

// ── Builder: Locations List ──────────────────────────────────────────────────

/**
 * Locations index page schema.
 * Generates an ItemList of all city landing pages for crawlability.
 */
export function buildLocationsListSchema(cities: City[]): JsonLdObject {
  const pageUrl = `${BASE_URL}/locations`;

  return withContext({
    "@type": "ItemList",
    "@id": `${pageUrl}#itemlist`,
    name: "Elevate Roofing Service Locations",
    description:
      "All cities and communities served by Elevate Roofing across Los Angeles County and Orange County.",
    numberOfItems: cities.length,
    itemListElement: cities.map((city, i) => ({
      "@type": "ListItem",
      "@id": `${pageUrl}#item-${i + 1}`,
      position: i + 1,
      name: `Roofing in ${city.name}`,
      url: `${BASE_URL}/roofing/${city.slug}`,
    })),
  });
}

// ── Builder: BreadcrumbList ──────────────────────────────────────────────────

export interface BreadcrumbEntry {
  name: string;
  url: string;
}

/**
 * Generic breadcrumb schema — usable on any page.
 *
 * @param items     - Ordered breadcrumb entries from root to current page
 * @param idSuffix  - Optional suffix to make the @id unique per page (e.g. "faq")
 */
export function buildBreadcrumbSchema(
  items: BreadcrumbEntry[],
  idSuffix?: string
): JsonLdObject {
  const breadcrumbId =
    idSuffix && idSuffix.length > 0
      ? `${BASE_URL}/#breadcrumb-${idSuffix}`
      : `${BASE_URL}/#breadcrumb`;

  return withContext({
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      "@id": `${breadcrumbId}-item-${i + 1}`,
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

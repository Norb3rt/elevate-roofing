import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Service Locations | Elevate Roofing — LA & Orange County",
  description:
    "Browse Elevate Roofing service areas across Los Angeles County and Orange County — local roofers near you.",
  openGraph: {
    title: "Service Locations | Elevate Roofing",
    description: "Local roofing experts across LA and Orange County.",
    url: "/locations",
  },
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  const la = cities.filter((c) => c.county === "Los Angeles County");
  const oc = cities.filter((c) => c.county === "Orange County");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Service Areas
        </p>
        <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
          Local roofers across
          <br />
          <span className="text-primary/70">LA &amp; Orange County</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Same-day inspections and licensed crews serving every neighborhood below.
        </p>
      </section>

      {[
        { title: "Los Angeles County", list: la },
        { title: "Orange County", list: oc },
      ].map((group) => (
        <section key={group.title} className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">{group.title}</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {group.list.map((c) => (
              <Link
                key={c.slug}
                href={`/roofing/${c.slug}`}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <p className="text-base font-semibold text-foreground group-hover:text-primary">
                  Roofing in {c.name}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}

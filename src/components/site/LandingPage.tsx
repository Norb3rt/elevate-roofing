import Link from "next/link";
import { Header } from "@/components/site/Header";
import { RoofingEstimator } from "@/components/site/RoofingEstimator";

import { Footer } from "@/components/site/Footer";
import hero from "@/assets/hero-roofing.jpeg";
import home from "@/assets/home-exterior.jpg";
import inspecting from "@/assets/roofer-inspecting.jpg";
import installation from "@/assets/new-installation.jpg";
import repair from "@/assets/roof-repair.jpg";
import replacement from "@/assets/roof-replacement.jpg";
import portrait from "@/assets/contractor-portrait.jpg";
import team from "@/assets/team-working.jpg";

interface LandingPageProps {
  locationName?: string;
  countyName?: string;
}

const services = [
  {
    title: "New Roof Installation",
    desc: "Transform your home with our cutting-edge roofing systems, delivering unmatched durability in every project.",
    img: installation,
  },
  {
    title: "Expert Roof Repair",
    desc: "Prompt repairs for leaks, storm damage, and wear to extend your roof's life.",
    img: repair,
  },
  {
    title: "Full Roof Replacement",
    desc: "Precision execution for renewed protection and aesthetic upgrade.",
    img: replacement,
  },
];

const process = [
  { n: "01", title: "Free Consultation", desc: "Thorough inspection and no-obligation estimate." },
  {
    n: "02",
    title: "Detailed Plan",
    desc: "Comprehensive plan with materials, timeline, and specs.",
  },
  {
    n: "03",
    title: "Expert Installation",
    desc: "Precision execution with safety and quality standards.",
  },
  { n: "04", title: "Final Inspection", desc: "Thorough inspection and complete cleanup." },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    city: "Pasadena, CA",
    quote:
      "Outstanding service! Our new roof looks amazing, and the team was professional from start to finish.",
    rating: "4.9",
  },
  {
    name: "Mike Rodriguez",
    city: "Long Beach, CA",
    quote:
      "Quick response after storm damage. The repair was perfect, and communication was excellent.",
    rating: "4.9",
  },
  {
    name: "Jennifer Chen",
    city: "Irvine, CA",
    quote:
      "Our roof replacement exceeded expectations. Great quality and fair pricing — perfect and professional.",
    rating: "5.0",
  },
];

export function LandingPage({ locationName, countyName }: LandingPageProps) {
  const where = locationName ? `in ${locationName}` : "across Los Angeles & Orange County";
  const heroLine = locationName ? locationName.toUpperCase() : "";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="px-4 pt-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
          <img
            src={hero.src}
            alt={`Professional roofing ${where}`}
            width={1920}
            height={1080}
            className="h-[78vh] min-h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-primary/70" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
            <h1 className="sr-only">
              {locationName
                ? `Expert Roofing Services in ${locationName}`
                : "Elevate Roofing Services — Premium LA & Orange County Roofers"}
            </h1>
            <div
              aria-hidden="true"
              className="text-balance text-[clamp(3.5rem,12vw,11rem)] font-black leading-[0.85] tracking-tighter text-primary-foreground/95 drop-shadow-sm"
            >
              {heroLine}
            </div>
            <div className="max-w-2xl text-primary-foreground">
              <h2 className="text-balance text-2xl font-semibold leading-tight md:text-4xl">
                Shield Your Home with Sleek,
                <br />
                Modern Roofing Solutions {locationName ? `in ${locationName}` : ""}
              </h2>
              <p className="mt-3 max-w-lg text-sm text-primary-foreground/85 md:text-base">
                From innovative installations to swift repairs, our expert team delivers durability,
                style, and peace of mind {where}. Get your free estimate today!
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg ring-1 ring-primary-foreground/20 transition hover:bg-primary/90"
                >
                  Get Your Free Estimate
                </a>
                <a
                  href="tel:+15624692089"
                  className="inline-flex items-center gap-2 rounded-full bg-card/90 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1z" />
                    </svg>
                  </span>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Primary Home */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Your Primary Home
              <br />
              <span className="text-primary/70">Deserves Top-Tier Roofing</span>
            </h2>
          </div>
          <div className="flex items-start gap-4 md:max-w-sm">
            <img
              src={repair.src}
              alt="Roof close-up"
              width={120}
              height={80}
              loading="lazy"
              className="h-20 w-28 flex-none rounded-2xl object-cover"
            />
            <p className="text-sm text-muted-foreground">
              From innovative installations to swift repairs, our expert team delivers durability,
              style, and peace of mind {where}. Get your free estimate today!
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-[1fr_1.4fr_1fr]">
          <div className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
            <img
              src={home.src}
              alt="Modern home with new tile roof"
              width={1024}
              height={768}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Pricing Starts At
              </p>
              <p className="text-2xl font-bold text-foreground">$6,000</p>
              <a
                href="#services"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Explore Pricing →
              </a>
            </div>
          </div>

          <a
            href="#contact"
            className="group relative block overflow-hidden rounded-3xl h-[320px] md:h-auto"
          >
            <img
              src={inspecting.src}
              alt="Roofer inspecting tile roof"
              width={1280}
              height={896}
              loading="lazy"
              className="h-full max-h-[460px] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mt-1">Instant Roof Estimate</h3>
              <p className="text-sm text-white/80 mt-2 max-w-xs">
                Get a customized cost estimation for your roofing project in seconds.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground w-fit transition group-hover:bg-primary/95">
                Try the Calculator →
              </div>
            </div>
          </a>

          <div className="flex flex-col justify-between rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Top-Rated Southern California Roofers
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Read what your neighbors are saying about our commitment to exceptional
                craftsmanship, speed, and safety.
              </p>
            </div>
            <a
              href="#testimonials"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground hover:bg-accent"
            >
              Read Customer Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 — Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 pb-20 scroll-mt-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm text-muted-foreground">
            From brand-new roof installations to rapid emergency repairs, our expert team delivers
            top-quality craftsmanship and lasting protection to keep your home secure and stylish in
            any situation.
          </p>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Durable, Stylish
              <br />
              <span className="text-primary/70">Roofing Solutions</span>
            </h2>
            <div className="flex gap-2">
              <button
                aria-label="Prev"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-secondary"
              >
                ‹
              </button>
              <button
                aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-6 text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-wider">Call Now</p>
            <img
              src={portrait.src}
              alt="Roofing contractor"
              width={768}
              height={896}
              loading="lazy"
              className="mx-auto mt-2 h-40 w-auto object-contain"
            />
            <a
              href="tel:+15624692089"
              className="mt-4 flex items-center gap-3 rounded-full bg-primary-foreground/15 px-4 py-2 backdrop-blur ring-1 ring-primary-foreground/20"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground text-primary">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1z" />
                </svg>
              </span>
              <span className="text-sm font-semibold">1 (562) 469 2089</span>
            </a>
          </div>

          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <div className="relative">
                <img
                  src={s.img.src}
                  alt={s.title}
                  width={896}
                  height={768}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 4 — Quote band */}
      <section id="about" className="mx-auto max-w-7xl px-6 pb-20 scroll-mt-24">
        <div className="relative overflow-hidden rounded-3xl bg-soft-radial px-6 py-16 text-center md:px-16">
          <div className="absolute inset-0 bg-primary-soft/40" />
          <p className="relative mx-auto max-w-3xl text-balance text-2xl font-semibold leading-snug text-foreground md:text-3xl">
            Roofing is more than a structure — it&apos;s your home&apos;s foundation. We empower{" "}
            {locationName ?? "California"} homeowners with quality craftsmanship, clear pricing, and
            durable solutions for lasting security and value.
          </p>
        </div>
      </section>

      {/* Section 5 — Mission/Vision/Value */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Transform Your Home
              <br />
              <span className="text-primary/70">with Premium Roofing</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Beyond just a roof, it&apos;s the cornerstone of your home&apos;s protection. We
              empower homeowners with expert craftsmanship, clear pricing, and durable solutions for
              lasting security and value.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              More About Us
            </a>
          </div>
          <div className="grid grid-cols-[1.1fr_1fr] gap-4">
            <img
              src={team.src}
              alt="Roofing team working"
              width={1024}
              height={896}
              loading="lazy"
              className="h-full max-h-[420px] w-full rounded-3xl object-cover"
            />
            <div className="flex flex-col gap-3">
              <details
                open
                className="group rounded-2xl bg-brand-gradient p-5 text-primary-foreground"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                  Our Mission
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/20">
                    −
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-primary-foreground/90">
                  We believe a roof is more than just cover — it&apos;s the foundation of your
                  home&apos;s safety, value, and beauty. Our mission is to empower homeowners with
                  superior craftsmanship, transparent pricing, and innovation.
                </p>
              </details>
              <details className="group rounded-2xl bg-card p-5 ring-1 ring-border">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-foreground">
                  Our Vision
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-foreground">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs text-muted-foreground">
                  To be Southern California&apos;s most-trusted roofing partner — known for
                  integrity, durability, and design.
                </p>
              </details>
              <details className="group rounded-2xl bg-card p-5 ring-1 ring-border">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-foreground">
                  Our Value
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-foreground">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-xs text-muted-foreground">
                  Honesty, craftsmanship, and care — delivered on every project, every roof, every
                  time.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Process */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Our Simple
              <br />
              <span className="text-primary/70">Process</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              From consultation to completion, we make roofing seamless.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <span className="text-sm font-bold">{p.n}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 pb-20 scroll-mt-24">
        <h2 className="text-center text-4xl font-bold text-foreground md:text-5xl">
          Clients Speak for Us
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="overflow-hidden rounded-3xl bg-card ring-1 ring-border">
              <img
                src={team.src}
                alt={t.name}
                width={1024}
                height={896}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <figcaption className="space-y-3 p-5">
                <blockquote className="text-sm text-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground">{t.city}</p>
                  </div>
                  <p className="font-semibold text-primary">★ {t.rating}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Section 8 — Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 pb-20 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-sm">
          <RoofingEstimator locationName={locationName} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/**
 * ServiceAreaMap — premium service-area map section
 *
 * Architecture:
 *  A standard, clean Google Maps embed iframe that displays the real business
 *  location of Elevate Roofing in Paramount, CA.
 *
 *  No custom pins, absolute-positioned UI overlays, or dynamic tracking layers.
 *  Strictly shows the native Google Maps location profile.
 */

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.268522475126!2d-118.1538034!3d33.88273759999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe8d4fd261c481b%3A0x4a949b36e86814f1!2sElevate%20Roofing!5e0!3m2!1sen!2sus!4v1780934813552!5m2!1sen!2sus";

/* ─── Location chips shown beneath the map ─────────────────────────── */
const SERVICE_AREAS = [
  { label: "Los Angeles", accent: true },
  { label: "Long Beach",  accent: false },
  { label: "Anaheim",     accent: false },
  { label: "Santa Ana",   accent: false },
  { label: "Irvine",      accent: true },
  { label: "Downey",      accent: false },
  { label: "Fullerton",   accent: false },
  { label: "Torrance",    accent: false },
];

/* ─── Main component ──────────────────────────────────────────────── */
export function ServiceAreaMap() {
  return (
    <section
      id="service-area"
      aria-labelledby="service-area-title"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6"
    >
      {/* ── Section header ──────────────────────────────────────────── */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
          Where We Work
        </p>
        <h2
          id="service-area-title"
          className="text-4xl font-bold text-foreground md:text-5xl"
        >
          Our Service{" "}
          <span className="text-primary/70">Area</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
          Proudly serving Los Angeles County &amp; Orange County
        </p>
      </div>

      {/* ── Premium card wrapper ────────────────────────────────────── */}
      <div className="service-map-card overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-sm">
        {/* ── Map container ────────────────────────────────────────── */}
        <div className="relative w-full">
          {/* Responsive aspect-ratio frame */}
          <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[21/9]">
            {/* Google Maps iframe */}
            <iframe
              title="Elevate Roofing service area — Los Angeles County and Orange County"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
              style={{
                filter: "saturate(0.85) brightness(1.04) contrast(1.05)",
              }}
            />

            {/* Subtle inset vignette for depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
            />
          </div>
        </div>

        {/* ── Service area chips ────────────────────────────────────── */}
        <div className="border-t border-border/60 px-5 py-4 sm:px-8 sm:py-5">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* Leading location icon */}
            <span className="mr-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </span>

            {SERVICE_AREAS.map((area) => (
              <span
                key={area.label}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  area.accent
                    ? "bg-primary/10 text-primary ring-1 ring-primary/20"
                    : "bg-secondary text-secondary-foreground ring-1 ring-border/50"
                }`}
              >
                {area.label}
              </span>
            ))}

            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
              + Many More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

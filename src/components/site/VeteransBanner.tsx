/* ──────────────────────────────────────────────────────────────
   VeteransBanner — Full-scale promotional section for veterans.
   ──────────────────────────────────────────────────────────────
   • Easily editable: change DISCOUNT_VALUE, HEADLINE, etc. below.
   • Fully responsive: two-column on md+, clean stack on mobile.
   • Matches the site's design tokens and premium visual language.
   ────────────────────────────────────────────────────────────── */

/* ── Editable content ────────────────────────────────────────── */
const DISCOUNT_VALUE = "10% OFF";
const HEADLINE = "Veterans Save 10%";
const SUBHEADLINE = "Thank you for your service.";
const BODY_COPY =
  "As a small token of our gratitude, all active-duty military, veterans, and their families receive an exclusive 10% discount on any roofing service. Quality protection for those who protected us.";
const CTA_LABEL = "Claim Discount";
const CTA_HREF = "#contact";

export function VeteransBanner() {
  return (
    <section
      id="veterans-promo"
      aria-label="Veterans discount promotion"
      className="mx-auto max-w-7xl px-4 pt-10 md:px-6"
    >
      <div className="veterans-card relative overflow-hidden rounded-3xl bg-card ring-1 ring-border md:rounded-[2rem]">
        {/* Decorative background pattern — subtle geometric texture */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* Soft radial glow behind badge area */}
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-primary/[0.03] blur-3xl" />
          {/* Fine grid pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.025]" aria-hidden="true">
            <defs>
              <pattern id="vet-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0v32" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vet-grid)" />
          </svg>
        </div>

        {/* Main content grid */}
        <div className="relative grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:gap-12 md:p-12 lg:p-14">
          {/* ── Left column: icon + text content ── */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-6 md:gap-8">
            {/* Shield icon container */}
            <div className="flex flex-none flex-col items-center gap-3">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary md:h-[4.5rem] md:w-[4.5rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 md:h-9 md:w-9"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>

              {/* Discount badge — with gentle pulse glow */}
              <span className="veterans-badge inline-flex items-center rounded-lg bg-primary px-3.5 py-1.5 text-sm font-extrabold tracking-wider text-primary-foreground md:text-base">
                {DISCOUNT_VALUE}
              </span>
            </div>

            {/* Text block */}
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-[2rem]">
                {HEADLINE}
                <span className="mt-0.5 block text-lg font-semibold text-primary/70 md:text-xl">
                  {SUBHEADLINE}
                </span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-[0.935rem]">
                {BODY_COPY}
              </p>
            </div>
          </div>

          {/* ── Right column: CTA button ── */}
          <div className="flex sm:justify-start md:justify-end">
            <a
              href={CTA_HREF}
              className="veterans-cta group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 md:px-8 md:py-4 md:text-base"
            >
              {CTA_LABEL}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 md:h-5 md:w-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.97-3.47a.75.75 0 1 1 .99-1.06l5.25 4.59a.75.75 0 0 1 0 1.06l-5.25 4.59a.75.75 0 1 1-.99-1.06l3.97-3.47H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
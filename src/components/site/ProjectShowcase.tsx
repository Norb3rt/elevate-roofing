"use client";

import { useState, useEffect, useCallback } from "react";

/* ── Project Showcase assets ─────────────────────────────────── */
import before1 from "@/assets/roofing-after-before-imgs/before-roof-replacement-1.jpeg";
import during1 from "@/assets/roofing-after-before-imgs/roof-stripped-1.jpeg";
import after1 from "@/assets/roofing-after-before-imgs/after-roof-replacement-1.jpeg";
import before2 from "@/assets/roofing-after-before-imgs/before-roof-replacement-2.jpeg";
import during2 from "@/assets/roofing-after-before-imgs/roof-stripped-2.jpeg";
import after2 from "@/assets/roofing-after-before-imgs/after-roof-replacement-2.jpeg";

/* ─────────────────────────────────────────────────────────────────
 * PROJECT SHOWCASE DATA
 *
 * Each object = one project card row.  To add "Project 3", simply
 * import the three new images above and append another object here.
 * ────────────────────────────────────────────────────────────── */
const showcaseProjects = [
  {
    /* Project 1 — uses -1 suffix assets */
    title: "Full Roof Replacement",
    subtitle: "Project 1",
    steps: [
      {
        label: "Step 1",
        desc: "Aging shingles with visible weather damage, curling edges, and compromised underlayment requiring full replacement.",
        img: before1,
      },
      {
        label: "Step 2",
        desc: "Complete tear-off revealing the roof deck, followed by fresh felt-paper and precision flashing installation.",
        img: during1,
      },
      {
        label: "Step 3",
        desc: "Brand-new architectural shingles delivering a clean profile and decades of lasting protection.",
        img: after1,
      },
    ],
  },
  {
    /* Project 2 — uses -2 suffix assets */
    title: "Full Roof Replacement",
    subtitle: "Project 2",
    steps: [
      {
        label: "Step 1",
        desc: "Worn roof showing cracked material, faded color, and multiple water-entry risk areas across the surface.",
        img: before2,
      },
      {
        label: "Step 2",
        desc: "Careful removal and deck re-sheeting with an upgraded waterproof membrane for superior protection.",
        img: during2,
      },
      {
        label: "Step 3",
        desc: "Freshly installed roofing with improved ventilation, a modern finish, and enhanced curb appeal.",
        img: after2,
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────
 * LIGHTBOX STATE TYPE
 * ────────────────────────────────────────────────────────────── */
interface LightboxState {
  src: string;
  alt: string;
  label: string;
  desc: string;
}

/* ═════════════════════════════════════════════════════════════════
 * ProjectShowcase — client component (lightbox requires useState)
 * ═════════════════════════════════════════════════════════════ */
export function ProjectShowcase() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  /* Close on Escape key */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    },
    [],
  );

  useEffect(() => {
    if (lightbox) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // prevent scroll while open
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [lightbox, handleKeyDown]);

  return (
    <>
      <section id="showcase" className="mx-auto max-w-7xl px-6 pb-20 scroll-mt-24">
        {/* ── Section heading ────────────────────────────────── */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Real Results
          </p>
          <h2 className="mt-2 text-4xl font-bold text-foreground md:text-5xl">
            Project <span className="text-primary/70">Showcase</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            See the transformation first-hand — from initial assessment through tear-off to the
            finished result. Every project tells a story of craftsmanship.
          </p>
        </div>

        {/* ── Project cards — mapped from the data array ───── */}
        <div className="mt-14 flex flex-col gap-16">
          {showcaseProjects.map((project) => (
            <article key={project.subtitle}>
              {/* Project title bar */}
              <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                  {project.subtitle}
                </span>
              </div>

              {/* 3-step timeline row */}
              <div className="relative grid gap-6 md:grid-cols-3">
                {/* Connector line — visible only on desktop */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[11.5rem] left-[16.6%] right-[16.6%] hidden h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 md:block"
                />

                {project.steps.map((step, idx) => (
                  <button
                    key={step.label}
                    type="button"
                    aria-label={`View full image — ${project.title}, ${step.label}`}
                    onClick={() =>
                      setLightbox({
                        src: step.img.src,
                        alt: `${project.title} — ${step.label}`,
                        label: step.label,
                        desc: step.desc,
                      })
                    }
                    className="group/card relative flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-card text-left shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {/* Step image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={step.img.src}
                        alt={`${project.title} — ${step.label}`}
                        width={896}
                        height={600}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover/card:scale-105"
                      />
                      {/* Step number badge */}
                      <span className="absolute top-3 left-3 grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg">
                        {idx + 1}
                      </span>
                      {/* Expand icon hint */}
                      <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover/card:opacity-100">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </span>
                    </div>

                    {/* Step text */}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {step.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>

                    {/* Timeline dot — visible only on desktop */}
                    <span
                      aria-hidden="true"
                      className="absolute top-[11rem] left-1/2 -translate-x-1/2 hidden h-3.5 w-3.5 rounded-full border-[3px] border-primary bg-card md:block"
                    />
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LIGHTBOX OVERLAY
         ═══════════════════════════════════════════════════════ */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Content container — stop click propagation */}
          <div
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Full-size image */}
            <div className="relative flex-1 overflow-hidden bg-black">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="h-full max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* Description bar */}
            <div className="border-t border-border p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {lightbox.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {lightbox.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

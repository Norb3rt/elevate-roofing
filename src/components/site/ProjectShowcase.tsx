"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { type StaticImageData } from "next/image";

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
 *
 * We store the full step list + current index so the user can
 * navigate prev/next without reopening the modal.
 * We also carry the StaticImageData object (not just the URL string)
 * so the lightbox Image can use intrinsic width/height for proper
 * responsive sizing — avoiding the fill+flex-1 collapse bug.
 * ────────────────────────────────────────────────────────────── */
interface LightboxStep {
  label: string;
  desc: string;
  img: StaticImageData;
  alt: string;
}

interface LightboxState {
  steps: LightboxStep[];
  index: number;
}

/* ═════════════════════════════════════════════════════════════════
 * ProjectShowcase — client component (lightbox requires useState)
 * ═════════════════════════════════════════════════════════════ */
export function ProjectShowcase() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  /* Derived active step */
  const activeStep = lightbox ? lightbox.steps[lightbox.index] : null;

  /* Navigate lightbox prev / next */
  const goPrev = useCallback(() => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index - 1 + lb.steps.length) % lb.steps.length } : lb,
    );
  }, []);

  const goNext = useCallback(() => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + 1) % lb.steps.length } : lb,
    );
  }, []);

  /* Close on Escape, navigate on Arrow keys */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [goPrev, goNext],
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

              {/* 3-step timeline row
               *
               * Mobile Fix: Each step card is split into two elements:
               *   1. A wrapper <div> — carries overflow-hidden + rounded-3xl.
               *      On iOS Safari, overflow:hidden on a <button> is unreliable
               *      and causes fill images to be invisible. A plain <div>
               *      as the clip host fixes this.
               *   2. An inner <button> — click/focus handler only.
               *
               * The timeline dot is outside the button to avoid z-index
               * stacking-context conflicts with the fill image.
               */}
              <div className="relative grid gap-6 md:grid-cols-3">
                {/* Connector line — visible only on desktop */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[11.5rem] left-[16.6%] right-[16.6%] hidden h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 md:block"
                />

                {project.steps.map((step, idx) => (
                  <div
                    key={step.label}
                    className="group/card relative overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Timeline dot — outside button to avoid stacking conflict */}
                    <span
                      aria-hidden="true"
                      className="absolute top-[11rem] left-1/2 z-10 -translate-x-1/2 hidden h-3.5 w-3.5 rounded-full border-[3px] border-primary bg-card md:block"
                    />

                    <button
                      type="button"
                      aria-label={`View full image — ${project.title}, ${step.label}`}
                      onClick={() =>
                        setLightbox({
                          steps: project.steps.map((s, i) => ({
                            label: s.label,
                            desc: s.desc,
                            img: s.img,
                            alt: `${project.title} — ${s.label}`,
                          })),
                          index: idx,
                        })
                      }
                      className="flex w-full cursor-pointer flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {/* Thumbnail image */}
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={step.img}
                          alt={`${project.title} — ${step.label}`}
                          fill
                          loading="lazy"
                          quality={75}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-500 group-hover/card:scale-105"
                        />
                        {/* Step number badge */}
                        <span className="absolute top-3 left-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg">
                          {idx + 1}
                        </span>
                        {/* Expand icon hint */}
                        <span className="absolute bottom-3 right-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover/card:opacity-100">
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
                    </button>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LIGHTBOX OVERLAY
         ═══════════════════════════════════════════════════════ */}
      {lightbox && activeStep && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          {/* ── Modal shell ──────────────────────────────────────
           *
           *  Layout strategy (fixes the "tiny image" bug):
           *
           *  OLD broken approach:
           *    flex-col + max-h-[90vh] outer → flex-1 image div → fill Image
           *    Problem: flex-1 has 0 intrinsic height; fill Image is position:absolute
           *    and doesn't contribute height to its parent, so the flex-1 div
           *    collapses unless min-h is set. min-h only prevents total collapse
           *    but doesn't expand the image to fill the available modal space.
           *
           *  NEW correct approach:
           *    The modal uses w-full max-w-4xl (no height constraint on the shell).
           *    The image uses explicit width={img.width} height={img.height}
           *    with style={{ width: "100%", height: "auto" }} — the "responsive"
           *    Next.js pattern. This lets the browser compute the correct intrinsic
           *    aspect ratio and scale the image to fill the full modal width,
           *    while max-h-[75vh] on the <img> element caps it for tall viewports.
           *    No fill needed → no flex-1 collapse → always full-size rendering.
           */}
          <div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Prev arrow */}
            {lightbox.steps.length > 1 && (
              <button
                type="button"
                aria-label="Previous step"
                onClick={goPrev}
                className="absolute top-1/2 left-4 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Next arrow */}
            {lightbox.steps.length > 1 && (
              <button
                type="button"
                aria-label="Next step"
                onClick={goNext}
                className="absolute top-1/2 right-4 z-20 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            {/* ── Full-size image ──────────────────────────────
             *
             *  Uses the responsive Next.js Image pattern:
             *    - width + height = intrinsic pixel dimensions from static import
             *    - style: width 100%, height auto  → scales to fill container width
             *    - className: max-h-[72vh] object-contain → caps on very tall images
             *    - bg-black fills letterbox bars for non-16:9 images
             *
             *  This is fundamentally different from `fill` mode:
             *    - No position:absolute → image is IN the document flow
             *    - The container gets its height from the image itself
             *    - Result: always full-width, always correctly proportioned
             */}
            <div className="bg-black">
              <Image
                key={activeStep.img.src}
                src={activeStep.img}
                alt={activeStep.alt}
                width={activeStep.img.width}
                height={activeStep.img.height}
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 896px"
                className="block max-h-[72vh] w-full object-contain"
                style={{ height: "auto" }}
              />
            </div>

            {/* Description bar */}
            <div className="border-t border-border p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {activeStep.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeStep.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

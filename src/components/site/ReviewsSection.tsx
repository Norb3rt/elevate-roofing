"use client";

import { useState, useEffect, useCallback } from "react";

/* ── Review data array ─────────────────────────────────────────────── */

const GOOGLE_REVIEWS_URL = "https://share.google/mMuDuStbSgyFOeMoU";

interface Review {
  name: string;
  city?: string;
  date: string;
  quote: string;
  rating: number;
  url?: string;
}

const reviews: Review[] = [
  {
    name: "Dakota Feathers",
    date: "January 2026",
    quote:
      "I had a great experience with Elevate Roofing on my project in Irvine. From start to finish, the team was professional, responsive, and easy to work with. A special shoutout to Jesse, who was incredibly helpful throughout the entire process. He took the time to explain everything clearly, answered all my questions, and made sure the project stayed on track. His attention to detail and commitment to doing things right really stood out. The final result looks great, and I couldn’t be happier. I highly recommend Elevate Roofing and working with Jesse if you’re looking for quality work and excellent service.",
    rating: 5,
     url: "https://maps.app.goo.gl/dnzYS4Lx37GoidTdA", 
  },
  {
    name: "Lorena Mc Gregor",
    date: "December 2025",
    quote:
      "I couldn’t be happier with my experience! When I found out I needed a full roof replacement, I was nervous about finding a reliable company but I’m so glad I found Elevate Roofing. They were incredible from start to finish. Their craftsmanship was top-quality, and their customer service was just as impressive. They were communicative, professional, and genuinely cared about the work they were doing. Jesse truly knows what he’s doing, and it shows in the final result. I highly recommend Elevate Roofing to anyone who needs roofing work done. They exceeded my expectations in every way.",
    rating: 5,
     url: "https://maps.app.goo.gl/6sDR1HJaXeGtktTC8", 
  },
  {
    name: "Hammer Logic",
    date: "November 2025",
    quote:
      "We love partnering with Elevate Roofing on our insurance projects. They are our preferred roofer because they’re professional, reliable, and incredibly knowledgeable. Their communication with us and homeowners is always clear and timely, making every project smooth and stress-free. The workmanship is outstanding, and they consistently go above and beyond to ensure every job is completed with excellence. Highly recommend them to anyone looking for a trustworthy and skilled roofing partner!",
    rating: 5,
    url: "https://maps.app.goo.gl/ffYLoN6XBc5YGX6m9", 
  },
  {
    name: "Melissa Marvelous",
    date: "November 2025",
    quote:
      "Elevate Roofing is a trustworthy and reliable company that consistently delivers high-quality work. They were professional, communicative, and kept us updated throughout the entire process. I highly recommend them to anyone in need of roofing services.",
    rating: 5,
    url: "https://maps.app.goo.gl/jcZ2Fw45a9gyKMGaA", 
  },
  {
    name: "Edward Arellano",
    date: "May 2025",
    quote:
      "I recently had the pleasure of working with Elevate Roofing, and I couldn't be more impressed with their service! From the initial consultation to the final inspection, their team was professional, efficient, and thorough. They took the time to explain the entire process and answered all of my questions, ensuring I felt confident and informed every step of the way. The quality of their work is outstanding – my new roof looks fantastic, and I know it's built to last. The crew was punctual, respectful of my property, and completed the job on time. I highly recommend Elevate Roofing to anyone in need of reliable, top-notch roofing services. They truly go above and beyond!",
    rating: 5,
    url: "https://maps.app.goo.gl/NULC5f5pX7toX2xE7", 
  },
  {
    name: "Edgar Ojeda",
    date: "May 2025",
    quote:
      "I had a great experience with Elevate Roofing. They were professional, on time, and did a fantastic job on my roof. Jesse and his team were skilled, and they communicated clearly throughout the process. They really made sure everything was done right, and I felt confident that my roof was in good hands. I’d definitely recommend them for anyone needing roofing work!",
    rating: 5,
    url: "https://maps.app.goo.gl/QBwvdpXRAnwSaUbo9", 
  },
];

/* ── Custom star icon (site-palette, not Google-branded) ───────────── */

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarsRow({
  count = 5,
  size = "h-5 w-5",
}: {
  count?: number;
  size?: string;
}) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className={`${size} text-primary`} />
      ))}
    </span>
  );
}

/* ── Modal component ───────────────────────────────────────────────── */

function ReviewModal({
  review,
  onClose,
}: {
  review: Review | null;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (review) {
      // Trigger fade-in after mount
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [review]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300); // wait for fade-out
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  if (!review) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`Review by ${review.name}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-foreground/40 transition-all duration-300 ${
          visible ? "backdrop-blur-md" : "backdrop-blur-none"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        className={`review-modal-card relative w-full max-w-lg rounded-3xl bg-card p-8 shadow-2xl ring-1 ring-border transition-all duration-300 ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close review"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-secondary text-muted-foreground transition hover:bg-accent hover:text-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Stars + rating */}
        <div className="flex items-center gap-3">
          <StarsRow size="h-6 w-6" />
          <span className="text-lg font-bold text-foreground">
            {review.rating.toFixed(1)}
          </span>
        </div>

        {/* Quote */}
        <blockquote className="mt-5 text-base leading-relaxed text-foreground">
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-sm font-bold text-primary">
            {review.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {review.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {review.city ? `${review.city} · ` : ""}{review.date}
            </p>
          </div>
        </div>

        {/* View on Google CTA */}
        <a
          href={review.url || GOOGLE_REVIEWS_URL} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary/90"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View on Google
        </a>
      </div>
    </div>
  );
}

/* ── Main Reviews Section ──────────────────────────────────────────── */

export function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <>
      <section
        id="testimonials"
        className="mx-auto max-w-7xl px-6 pb-20 scroll-mt-24"
      >
        {/* ── Section heading ── */}
        <h2 className="text-center text-4xl font-bold text-foreground md:text-5xl">
          Clients Speak for Us
        </h2>

        {/* ── Trust Badge ── */}
        <div className="mt-8 flex justify-center">
          <div className="review-trust-badge inline-flex flex-col items-center gap-3 rounded-2xl bg-card px-8 py-5 shadow-sm ring-1 ring-border sm:flex-row sm:gap-4 sm:rounded-full sm:py-3.5">
            <StarsRow size="h-5 w-5" />
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
              <span className="text-xl font-bold tracking-tight text-foreground">
                5.0 Rating
              </span>
              <span className="hidden text-muted-foreground/50 sm:inline">·</span>
              <span className="text-sm font-medium text-muted-foreground">
                Based on{" "}
                <span className="font-semibold text-foreground">100+</span>{" "}
                Homeowner Reviews
              </span>
            </div>
          </div>
        </div>

        {/* ── Reviews grid ── */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <button
              key={review.name}
              onClick={() => setSelectedReview(review)}
              className="review-card group text-left overflow-hidden rounded-3xl bg-card ring-1 ring-border transition-all hover:shadow-xl hover:ring-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {/* Card content */}
              <div className="p-6">
                {/* Stars */}
                <div className="flex items-center gap-2">
                  <StarsRow size="h-4 w-4" />
                  <span className="text-sm font-bold text-foreground">
                    {review.rating.toFixed(1)}
                  </span>
                </div>

                {/* Truncated quote */}
                <blockquote className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                {/* Author + "Read more" hint */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                      {review.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.city ? `${review.city} · ` : ""}{review.date}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read more →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ── CTA: See All Reviews ── */}
        <div className="mt-12 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="review-cta inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg ring-1 ring-primary-foreground/10 transition hover:bg-primary/90 hover:shadow-xl"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            See All Reviews on Google
          </a>
        </div>
      </section>

      {/* ── Review Modal ── */}
      <ReviewModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
      />
    </>
  );
}

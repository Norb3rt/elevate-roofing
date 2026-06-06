import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

/* ──────────────────────────────────────────────────────────────
 * SEO Metadata
 * Update the description / title if the terms content changes.
 * ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review Elevate Roofing's Terms of Service covering estimates, payment, permits, warranties, and dispute resolution for roofing projects in LA & Orange County.",
  openGraph: {
    title: "Terms of Service | Elevate Roofing Services",
    description:
      "Terms governing Elevate Roofing services including estimates, payments, warranties, and California compliance.",
    url: "/terms-of-service",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

/* ──────────────────────────────────────────────────────────────
 * TERMS OF SERVICE PAGE
 *
 * Content sourced from terms.md — Effective Date: June 5, 2026
 *
 * To update the terms:
 *   1. Edit the JSX sections below (each <section> maps to one
 *      numbered heading from the original document).
 *   2. Update the "Effective Date" in the hero + metadata above.
 * ────────────────────────────────────────────────────────────── */
export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Breadcrumbs ── */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-4xl px-6 pt-10 md:pt-14"
      >
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="select-none">
            →
          </li>
          <li>
            <span className="text-muted-foreground/70">Legal</span>
          </li>
          <li aria-hidden="true" className="select-none">
            →
          </li>
          <li>
            <span className="font-medium text-foreground">
              Terms of Service
            </span>
          </li>
        </ol>
      </nav>

      {/* ── Hero / Introductory Header ── */}
      <header className="mx-auto max-w-4xl px-6 pt-8 pb-10 md:pt-10 md:pb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
          Terms of
          <br />
          <span className="text-primary/70">Service</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed">
          These terms govern your use of our website and roofing services. We
          believe in transparency — please read them carefully so you know
          exactly what to expect when working with Elevate Roofing.
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          Effective Date: June 5, 2026
        </p>
      </header>

      {/* ── Terms Content ── */}
      <article className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-12">
          {/* ── 1. Agreement to Terms ── */}
          <section id="terms-agreement" aria-labelledby="terms-h-agreement">
            <h2
              id="terms-h-agreement"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              1. Agreement to Terms
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a
                legally binding agreement between you (&ldquo;Client,&rdquo;
                &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Elevate Roofing
                (&ldquo;Contractor,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
                or &ldquo;our&rdquo;), a roofing contractor licensed in the
                State of California (C-39 Roofing Contractor License). By
                accessing our website at{" "}
                <a
                  href="https://elevateroofingservices.com"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  elevateroofingservices.com
                </a>
                , requesting a quote, or engaging our services, you agree to be
                bound by these Terms in their entirety.
              </p>
              <p>
                If you do not agree to these Terms, please do not use our
                website or services.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 2. Services ── */}
          <section id="terms-services" aria-labelledby="terms-h-services">
            <h2
              id="terms-h-services"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              2. Services
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                Elevate Roofing provides professional residential and commercial
                roofing services, including but not limited to roof repair, roof
                replacement, roof installation, emergency roofing, and roof
                inspections, in Los Angeles County and Orange County, California.
              </p>
              <p>
                All services are performed by licensed, insured professionals in
                compliance with applicable California building codes, including
                the 2025 California Building Standards Code (Title 24), and all
                applicable local permitting requirements.
              </p>
              <p>
                The specific scope of work, materials, pricing, and timeline for
                each project will be outlined in a separate written contract or
                estimate provided to the Client prior to commencement of work.
                These Terms apply in addition to any such project-specific
                agreement.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 3. Estimates and Quotes ── */}
          <section id="terms-estimates" aria-labelledby="terms-h-estimates">
            <h2
              id="terms-h-estimates"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              3. Estimates and Quotes
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                All estimates and quotes provided by Elevate Roofing are based
                on visible conditions at the time of inspection. We reserve the
                right to revise pricing if additional damage, structural issues,
                or conditions not visible during the initial inspection are
                discovered during the project.
              </p>
              <p>
                Written estimates are valid for thirty (30) days from the date
                of issuance unless otherwise stated in writing. Verbal estimates
                are not binding.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 4. Payment Terms ── */}
          <section id="terms-payment" aria-labelledby="terms-h-payment">
            <h2
              id="terms-h-payment"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              4. Payment Terms
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              Payment terms will be specified in your project agreement. In
              general:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground md:text-base">
              <li>
                A deposit may be required prior to scheduling or ordering
                materials.
              </li>
              <li>
                Final payment is due upon completion of the work unless
                otherwise agreed in writing.
              </li>
              <li>
                Unpaid balances may accrue interest at the maximum rate permitted
                by California law.
              </li>
              <li>
                Elevate Roofing reserves the right to file a mechanics lien
                against the property in accordance with California Civil Code if
                payment is not received in a timely manner.
              </li>
            </ul>
          </section>

          <hr className="border-border/60" />

          {/* ── 5. Permits and Compliance ── */}
          <section id="terms-permits" aria-labelledby="terms-h-permits">
            <h2
              id="terms-h-permits"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              5. Permits and Compliance
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                Elevate Roofing will obtain all required building permits for
                roofing projects where permits are mandated by applicable
                California or local regulations. Permit fees will be included in
                the project estimate unless otherwise noted.
              </p>
              <p>
                Client is responsible for ensuring that Elevate Roofing has
                lawful access to the property and that all HOA approvals or
                other third-party authorizations required for the work are
                obtained prior to the start of the project.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 6. Client Responsibilities ── */}
          <section
            id="terms-client-responsibilities"
            aria-labelledby="terms-h-client"
          >
            <h2
              id="terms-h-client"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              6. Client Responsibilities
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              To facilitate safe and efficient work, Client agrees to:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground md:text-base">
              <li>
                Provide unobstructed access to the roof, attic, and surrounding
                work areas.
              </li>
              <li>
                Remove or protect fragile items, wall hangings, light fixtures,
                and valuables from the interior of the property prior to the
                start of work, as roofing operations may cause minor vibrations
                or disturbance.
              </li>
              <li>
                Cover or protect items stored in the attic from dust and falling
                debris.
              </li>
              <li>
                Keep children, pets, and non-essential personnel away from the
                work area during active roofing operations.
              </li>
              <li>
                Notify us of any known structural concerns, prior roof repairs,
                or hazardous materials (e.g., asbestos) before work begins.
              </li>
            </ul>
          </section>

          <hr className="border-border/60" />

          {/* ── 7. Limitation of Liability ── */}
          <section id="terms-liability" aria-labelledby="terms-h-liability">
            <h2
              id="terms-h-liability"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              7. Limitation of Liability
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              {/* Legal uppercase block preserved intentionally */}
              <p className="rounded-xl border border-border/80 bg-surface p-4 text-xs leading-relaxed md:text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY CALIFORNIA LAW, ELEVATE
                ROOFING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                LIMITED TO LOSS OF USE, LOSS OF PROFITS, OR BUSINESS
                INTERRUPTION, ARISING OUT OF OR RELATED TO THE PERFORMANCE OF
                ROOFING SERVICES, REGARDLESS OF THE CAUSE.
              </p>
              <p>
                Elevate Roofing shall not be responsible for:
              </p>
              <ul className="list-disc space-y-1.5 pl-6">
                <li>
                  Interior drywall cracks, nail pops, or damage to interior
                  finishes resulting from normal roofing operations.
                </li>
                <li>
                  Damage to shrubbery, landscaping, outdoor furniture, decking,
                  sprinkler systems, or driveways during the roofing process.
                </li>
                <li>
                  Pre-existing structural deficiencies, rot, mold, or damage
                  discovered during the project that were not visible during the
                  initial inspection.
                </li>
                <li>
                  Delays caused by weather, material shortages, permit delays, or
                  other circumstances beyond our reasonable control. Such delays
                  do not constitute abandonment of the project.
                </li>
                <li>
                  Damage resulting from Client&apos;s failure to fulfill
                  responsibilities outlined in Section 6.
                </li>
              </ul>
              <p>
                In no event shall Elevate Roofing&apos;s total liability to
                Client for any claim arising out of or related to a roofing
                project exceed the total amount paid by Client for that specific
                project.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 8. Warranty ── */}
          <section id="terms-warranty" aria-labelledby="terms-h-warranty">
            <h2
              id="terms-h-warranty"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              8. Warranty
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                Elevate Roofing stands behind the quality of our workmanship.
                Specific warranty terms, including duration and coverage, will
                be provided in your written project agreement. Workmanship
                warranties cover defects in installation and do not cover damage
                caused by Acts of God, severe weather events (including wind
                exceeding warranty thresholds), improper Client maintenance,
                unauthorized modifications by third parties, or normal wear and
                tear.
              </p>
              <p>
                Manufacturer warranties on roofing materials are separate from
                our workmanship warranty and are subject to the respective
                manufacturer&apos;s terms and conditions.
              </p>
              <p>
                California Civil Code Sections 1797.90 through 1797.96 govern
                roof warranties for newly constructed residential structures.
                Where applicable, we will provide all required disclosures.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 9. Cancellation and Right to Cancel ── */}
          <section
            id="terms-cancellation"
            aria-labelledby="terms-h-cancellation"
          >
            <h2
              id="terms-h-cancellation"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              9. Cancellation and Right to Cancel
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                California law provides consumers certain cancellation rights
                for home improvement contracts. You may have the right to cancel
                this agreement within three (3) business days of signing,
                without penalty, as provided under California Business and
                Professions Code Section 7159 and related statutes.
              </p>
              <p>
                Notice of cancellation must be provided in writing to Elevate
                Roofing at{" "}
                <a
                  href="mailto:info@elevateroofingservices.com"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  info@elevateroofingservices.com
                </a>{" "}
                or by mail to our business address. Cancellation rights and
                timelines will be specified in your signed project contract.
              </p>
              <p>
                After any applicable cancellation period, cancellation of a
                scheduled project may result in forfeiture of any deposit paid
                to cover materials ordered or work already performed.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 10. Dispute Resolution ── */}
          <section id="terms-disputes" aria-labelledby="terms-h-disputes">
            <h2
              id="terms-h-disputes"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              10. Dispute Resolution
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                In the event of a dispute arising from our services, the parties
                agree to first attempt resolution through good-faith
                negotiation. If negotiation fails, disputes may be submitted to
                the California Contractors State License Board (CSLB) for
                mediation or arbitration as provided under California law.
              </p>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of California. Any legal action not
                resolved through the CSLB shall be brought exclusively in the
                state or federal courts located in Los Angeles County,
                California, and you consent to personal jurisdiction in such
                courts.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 11. Indemnification ── */}
          <section
            id="terms-indemnification"
            aria-labelledby="terms-h-indemnification"
          >
            <h2
              id="terms-h-indemnification"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              11. Indemnification
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              Client agrees to indemnify, defend, and hold harmless Elevate
              Roofing, its owners, employees, subcontractors, and agents from
              and against any claims, liabilities, damages, losses, and expenses
              (including reasonable attorneys&apos; fees) arising out of or in
              any way connected with Client&apos;s breach of these Terms,
              Client&apos;s misrepresentation of property ownership or
              authority, or Client&apos;s failure to fulfill their
              responsibilities under Section 6.
            </p>
          </section>

          <hr className="border-border/60" />

          {/* ── 12. Website Use ── */}
          <section id="terms-website-use" aria-labelledby="terms-h-website">
            <h2
              id="terms-h-website"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              12. Website Use
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              Your use of our website at{" "}
              <a
                href="https://elevateroofingservices.com"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                elevateroofingservices.com
              </a>{" "}
              is subject to the following conditions:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground md:text-base">
              <li>You may use our website for lawful purposes only.</li>
              <li>
                You may not attempt to gain unauthorized access to any portion
                of our website or its related systems.
              </li>
              <li>
                You may not use our website to transmit harmful, fraudulent, or
                misleading content.
              </li>
              <li>
                All content on our website, including text, images, logos, and
                service descriptions, is the property of Elevate Roofing and may
                not be copied, reproduced, or used without our express written
                permission.
              </li>
            </ul>
          </section>

          <hr className="border-border/60" />

          {/* ── 13. Disclaimer of Warranties ── */}
          <section id="terms-disclaimer" aria-labelledby="terms-h-disclaimer">
            <h2
              id="terms-h-disclaimer"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              13. Disclaimer of Warranties
            </h2>
            {/* Legal uppercase block preserved intentionally */}
            <p className="mt-4 rounded-xl border border-border/80 bg-surface p-4 text-xs leading-relaxed text-muted-foreground md:text-sm">
              OUR WEBSITE AND ITS CONTENT ARE PROVIDED ON AN &ldquo;AS
              IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT ANY
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. ELEVATE ROOFING DOES
              NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE,
              OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <hr className="border-border/60" />

          {/* ── 14. Changes to These Terms ── */}
          <section id="terms-changes" aria-labelledby="terms-h-changes">
            <h2
              id="terms-h-changes"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              14. Changes to These Terms
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              Elevate Roofing reserves the right to modify these Terms of
              Service at any time. Updated Terms will be posted on our website
              with a revised Effective Date. Continued use of our website or
              services after such changes constitutes your acceptance of the
              updated Terms.
            </p>
          </section>

          <hr className="border-border/60" />

          {/* ── 15. Contact Us ── */}
          <section id="terms-contact" aria-labelledby="terms-h-contact">
            <h2
              id="terms-h-contact"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              15. Contact Us
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              For questions about these Terms of Service, please contact us:
            </p>
            <address className="mt-4 not-italic text-sm text-muted-foreground leading-relaxed md:text-base space-y-1">
              <p className="font-semibold text-foreground">Elevate Roofing</p>
              <p>
                Website:{" "}
                <a
                  href="https://elevateroofingservices.com"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  elevateroofingservices.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+15624692089"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  (562) 469-2089
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@elevateroofingservices.com"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  info@elevateroofingservices.com
                </a>
              </p>
              <p>
                Service Area: Los Angeles County and Orange County, California
              </p>
            </address>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}

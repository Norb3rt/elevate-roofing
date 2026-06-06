import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

/* ──────────────────────────────────────────────────────────────
 * SEO Metadata
 * Update the description / title if the policy content changes.
 * ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Elevate Roofing's Privacy Policy explains how we collect, use, and protect your personal information in compliance with California law (CCPA / CalOPPA).",
  openGraph: {
    title: "Privacy Policy | Elevate Roofing Services",
    description:
      "Learn how Elevate Roofing safeguards your data. Covers CCPA rights, cookies, data retention, and more.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

/* ──────────────────────────────────────────────────────────────
 * PRIVACY POLICY PAGE
 *
 * Content sourced from privacy.md — Effective Date: June 5, 2026
 *
 * To update the policy:
 *   1. Edit the JSX sections below (each <section> maps to one
 *      numbered heading from the original document).
 *   2. Update the "Effective Date" in the hero + metadata above.
 * ────────────────────────────────────────────────────────────── */
export default function PrivacyPolicyPage() {
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
            <span className="font-medium text-foreground">Privacy Policy</span>
          </li>
        </ol>
      </nav>

      {/* ── Hero / Introductory Header ── */}
      <header className="mx-auto max-w-4xl px-6 pt-8 pb-10 md:pt-10 md:pb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
          Privacy
          <br />
          <span className="text-primary/70">Policy</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed">
          At Elevate Roofing, your privacy matters. This page outlines exactly
          how we collect, use, and safeguard your personal information — so you
          can trust us with your home and your data.
        </p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          Effective Date: June 5, 2026
        </p>
      </header>

      {/* ── Policy Content ── */}
      <article className="mx-auto max-w-4xl px-6 pb-24">
        <div className="space-y-12">
          {/* ── 1. Introduction ── */}
          <section id="privacy-introduction" aria-labelledby="privacy-h-intro">
            <h2
              id="privacy-h-intro"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              1. Introduction
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                Elevate Roofing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) operates the website{" "}
                <a
                  href="https://elevateroofingservices.com"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  elevateroofingservices.com
                </a>{" "}
                and provides professional roofing services throughout Los Angeles
                County and Orange County, California. We are committed to
                protecting the privacy and personal information of every visitor
                and customer. This Privacy Policy explains what information we
                collect, how we use it, how we protect it, and your rights as a
                California resident under the California Consumer Privacy Act
                (CCPA) and the California Online Privacy Protection Act
                (CalOPPA).
              </p>
              <p>
                By using our website or contacting us for services, you agree to
                the practices described in this Privacy Policy.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 2. Information We Collect ── */}
          <section
            id="privacy-information-collected"
            aria-labelledby="privacy-h-info"
          >
            <h2
              id="privacy-h-info"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              2. Information We Collect
            </h2>

            {/* 2A */}
            <h3 className="mt-6 text-base font-semibold text-foreground md:text-lg">
              A. Information You Provide
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed md:text-base">
              When you contact us through our website, request a quote, or
              schedule a service, we may collect:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground md:text-base">
              <li>Full name</li>
              <li>Home or property address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Roofing project details and service inquiries</li>
              <li>Insurance information (if applicable to your claim)</li>
              <li>
                Any other information you voluntarily submit through our contact
                forms
              </li>
            </ul>

            {/* 2B */}
            <h3 className="mt-8 text-base font-semibold text-foreground md:text-lg">
              B. Automatically Collected Information
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed md:text-base">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground md:text-base">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and version</li>
              <li>Device type (desktop, mobile, tablet)</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or search engine</li>
              <li>Cookie and tracking data (see Section 6)</li>
            </ul>
          </section>

          <hr className="border-border/60" />

          {/* ── 3. How We Use Your Information ── */}
          <section id="privacy-usage" aria-labelledby="privacy-h-usage">
            <h2
              id="privacy-h-usage"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              3. How We Use Your Information
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              We use the information we collect solely for legitimate business
              purposes, including:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground md:text-base">
              <li>Responding to your roofing inquiries and service requests</li>
              <li>Preparing and delivering quotes and estimates</li>
              <li>
                Scheduling and performing roofing services at your property
              </li>
              <li>
                Communicating project updates, appointments, and follow-ups
              </li>
              <li>Processing payments and maintaining billing records</li>
              <li>Improving our website and marketing effectiveness</li>
              <li>
                Complying with applicable California laws and regulations
              </li>
              <li>
                Protecting the legal rights and interests of Elevate Roofing
              </li>
            </ul>
          </section>

          <hr className="border-border/60" />

          {/* ── 4. How We Share Your Information ── */}
          <section id="privacy-sharing" aria-labelledby="privacy-h-sharing">
            <h2
              id="privacy-h-sharing"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              4. How We Share Your Information
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                Elevate Roofing does{" "}
                <strong className="text-foreground">NOT</strong> sell your
                personal information to third parties. We may share your
                information only in the following limited circumstances:
              </p>
              <ul className="list-disc space-y-1.5 pl-6">
                <li>
                  <strong className="text-foreground">
                    Service Providers:
                  </strong>{" "}
                  Trusted vendors who assist us in operating our website, running
                  our business, or servicing you (e.g., scheduling software,
                  payment processors, marketing platforms), subject to
                  confidentiality obligations.
                </li>
                <li>
                  <strong className="text-foreground">
                    Legal Compliance:
                  </strong>{" "}
                  If required by law, court order, or governmental authority, or
                  to protect the rights, property, or safety of Elevate Roofing,
                  our employees, or the public.
                </li>
                <li>
                  <strong className="text-foreground">
                    Business Transfer:
                  </strong>{" "}
                  In the event of a merger, acquisition, or sale of company
                  assets, your information may be transferred as part of that
                  transaction.
                </li>
                <li>
                  <strong className="text-foreground">
                    With Your Consent:
                  </strong>{" "}
                  We may share your information for any other purpose with your
                  explicit written consent.
                </li>
              </ul>
              <p>
                We do not share your information with unrelated third parties
                for their own marketing purposes.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 5. Data Retention ── */}
          <section id="privacy-retention" aria-labelledby="privacy-h-retention">
            <h2
              id="privacy-h-retention"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              5. Data Retention
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, maintain our
              business records, or comply with legal obligations under California
              law. In general, customer records are retained for a minimum of
              four (4) years in compliance with applicable contractor licensing
              requirements enforced by the California Contractors State License
              Board (CSLB).
            </p>
          </section>

          <hr className="border-border/60" />

          {/* ── 6. Cookies and Tracking Technologies ── */}
          <section id="privacy-cookies" aria-labelledby="privacy-h-cookies">
            <h2
              id="privacy-h-cookies"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              6. Cookies and Tracking Technologies
            </h2>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              <p>
                Our website may use cookies, web beacons, and similar tracking
                technologies to enhance your experience. These technologies help
                us understand how visitors use our site and improve our content
                and advertising.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, some features of
                our website may not function properly if cookies are disabled.
              </p>
              <p>
                We may use third-party analytics services such as Google
                Analytics. These services have their own privacy policies
                governing how they use data collected from our site.
              </p>
            </div>
          </section>

          <hr className="border-border/60" />

          {/* ── 7. Your California Privacy Rights (CCPA) ── */}
          <section id="privacy-ccpa" aria-labelledby="privacy-h-ccpa">
            <h2
              id="privacy-h-ccpa"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              7. Your California Privacy Rights (CCPA)
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              As a California resident, you have the following rights under the
              California Consumer Privacy Act (CCPA), as amended by the
              California Privacy Rights Act (CPRA):
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground md:text-base">
              <li>
                <strong className="text-foreground">Right to Know:</strong> You
                may request disclosure of the categories and specific pieces of
                personal information we have collected about you in the past 12
                months, the sources of that information, our business purpose
                for collecting it, and any third parties with whom it has been
                shared.
              </li>
              <li>
                <strong className="text-foreground">Right to Delete:</strong>{" "}
                You may request that we delete your personal information,
                subject to certain legal exceptions.
              </li>
              <li>
                <strong className="text-foreground">Right to Correct:</strong>{" "}
                You may request that we correct inaccurate personal information
                we hold about you.
              </li>
              <li>
                <strong className="text-foreground">Right to Opt-Out:</strong>{" "}
                You have the right to opt out of the sale or sharing of your
                personal information. We do not sell your personal information.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to Non-Discrimination:
                </strong>{" "}
                We will not discriminate against you for exercising any of your
                CCPA rights.
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              To exercise any of these rights, please contact us using the
              information in Section 10. We will respond to verifiable requests
              within 45 days as required by law. We may need to verify your
              identity before processing your request.
            </p>
          </section>

          <hr className="border-border/60" />

          {/* ── 8. Data Security ── */}
          <section id="privacy-security" aria-labelledby="privacy-h-security">
            <h2
              id="privacy-h-security"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              8. Data Security
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              Elevate Roofing takes reasonable and industry-standard precautions
              to protect your personal information from unauthorized access,
              disclosure, alteration, or destruction. However, no method of
              transmission over the Internet or method of electronic storage is
              100% secure. While we strive to protect your personal data, we
              cannot guarantee absolute security.
            </p>
          </section>

          <hr className="border-border/60" />

          {/* ── 9. Third-Party Links ── */}
          <section
            id="privacy-third-party"
            aria-labelledby="privacy-h-third-party"
          >
            <h2
              id="privacy-h-third-party"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              9. Third-Party Links
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              We encourage you to review the privacy policy of any third-party
              site you visit.
            </p>
          </section>

          <hr className="border-border/60" />

          {/* ── 10. Contact Us ── */}
          <section id="privacy-contact" aria-labelledby="privacy-h-contact">
            <h2
              id="privacy-h-contact"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              10. Contact Us
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal information, please contact us:
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

          <hr className="border-border/60" />

          {/* ── 11. Changes to This Privacy Policy ── */}
          <section id="privacy-changes" aria-labelledby="privacy-h-changes">
            <h2
              id="privacy-h-changes"
              className="text-xl font-bold text-foreground md:text-2xl"
            >
              11. Changes to This Privacy Policy
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:text-base">
              We may update this Privacy Policy from time to time. When we make
              changes, we will post the updated version on our website and
              revise the &ldquo;Effective Date&rdquo; at the top of this page.
              Your continued use of our website or services after any changes
              constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}

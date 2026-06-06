import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <Logo variant="footer" />
          <p className="max-w-xs text-sm text-muted-foreground">
            Your trusted roofing partner across Los Angeles County and Orange County. Licensed,
            insured, and committed to excellence.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Pages</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <a href="/#services" className="hover:text-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-foreground">
                Calculator
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <Link href="/locations" className="hover:text-foreground">
                Locations
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <a href="tel:+15624692089" className="hover:text-foreground">
                1 (562) 469 2089
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>License #1098221</li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="border-t border-border/70 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-5">
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@elevateroofingsocal?_r=1&_t=ZT-96weNuEfUPl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground opacity-70 transition-opacity duration-200 hover:opacity-100 hover:translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.6 5.82A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/elevateroofing_socal?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground opacity-70 transition-opacity duration-200 hover:opacity-100 hover:translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/Elevate-Roofing/61567636463190/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground opacity-70 transition-opacity duration-200 hover:opacity-100 hover:translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/elevateroofer?s=11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-muted-foreground opacity-70 transition-opacity duration-200 hover:opacity-100 hover:translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-border/70 py-10">
        <p className="mx-auto max-w-7xl select-none px-6 text-[clamp(3rem,12vw,11rem)] font-black uppercase leading-none tracking-tighter text-primary/10">
          Elevate Roofing
        </p>
      </div>
    </footer>
  );
}

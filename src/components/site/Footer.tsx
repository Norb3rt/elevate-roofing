import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <Logo variant="footer" />
          <p className="max-w-xs text-sm text-muted-foreground">
            Your trusted roofing partner across Los Angeles County and Orange
            County. Licensed, insured, and committed to excellence.
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
          <h4 className="mb-3 text-sm font-semibold text-foreground">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Help</li>
            <li>FAQ</li>
            <li>
              <a href="tel:+15624692089">1 (562) 469 2089</a>
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
      <div className="border-t border-border/70 py-10">
        <p className="mx-auto max-w-7xl select-none px-6 text-[clamp(3rem,12vw,11rem)] font-black uppercase leading-none tracking-tighter text-primary/10">
          Elevate Roofing
        </p>
      </div>
    </footer>
  );
}

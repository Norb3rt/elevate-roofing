"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Wrench, Info, Calculator, MapPin, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";

type NavItem = {
  label: string;
  href: string;
  sectionId?: string;
  icon?: React.ElementType;
};

const nav: NavItem[] = [
  { label: "Home", href: "/", sectionId: "__home__", icon: Home },
  { label: "Services", href: "/#services", sectionId: "services", icon: Wrench },
  { label: "About", href: "/#about", sectionId: "about", icon: Info },
  { label: "Calculator", href: "/#contact", sectionId: "contact", icon: Calculator },
  { label: "Locations", href: "/locations", icon: MapPin },
];

// DOM order of tracked sections (must match page layout order)
const SECTION_IDS = ["services", "about", "contact"];

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("__home__");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrollingClickRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Remembers the last section that was active so we don't snap back to
  // "Home" when the user is scrolling through gaps between sections.
  const lastSectionRef = useRef<string>("__home__");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Sync from URL hash and clicks
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h && SECTION_IDS.includes(h)) setActiveSection(h);
      else setActiveSection("__home__");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [pathname]);

  // Scroll spy
  useEffect(() => {
    if (pathname !== "/") return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (!els.length) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        if (isScrollingClickRef.current) return;
        if (visible.size === 0) {
          // Only reset to Home when genuinely near the top of the page.
          // Otherwise keep the last known section active — prevents the
          // "snap back to Home" glitch when scrolling between sections.
          if (window.scrollY < 120) {
            lastSectionRef.current = "__home__";
            setActiveSection("__home__");
          }
          // No else: leave activeSection at whatever lastSectionRef holds.
        } else {
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0][0];
          lastSectionRef.current = top;
          setActiveSection(top);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Detect scroll settle to re-enable scroll spy after a click-triggered scroll
  useEffect(() => {
    const onScroll = () => {
      if (!isScrollingClickRef.current) return;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingClickRef.current = false;
      }, 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  /**
   * Unified click handler for every nav Link.
   *
   * Home  → if already on "/", smooth-scroll to top and prevent navigation.
   * Hash  → if already on "/", smooth-scroll to section and prevent navigation
   *          so the URL stays clean (no "#services" appended).
   *          If coming from another page, let Next.js navigate to "/#section"
   *          — the browser then scrolls to the hash automatically.
   * Route → plain Next.js routing (Locations); no special handling needed.
   */
  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    const { href, sectionId } = item;

    if (href === "/" && sectionId === "__home__") {
      // Home link
      setActiveSection("__home__");
      lastSectionRef.current = "__home__";
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (sectionId && SECTION_IDS.includes(sectionId)) {
      // Section links (Services / About / Calculator)
      isScrollingClickRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingClickRef.current = false;
      }, 1200);
      setActiveSection(sectionId);
      lastSectionRef.current = sectionId;

      if (pathname === "/") {
        // Already on home: smooth-scroll without modifying the URL
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
      // On other pages: fall through → Next.js navigates to "/#section"
      // and the browser scrolls to the hash once the page loads.
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/70 p-1 md:flex">
          {nav.map((item) => {
            const base = "rounded-full px-4 py-1.5 text-sm font-medium transition-colors";

            let isActive = false;
            if (item.href === "/locations") {
              isActive = pathname.startsWith("/locations");
            } else if (pathname === "/" || pathname.startsWith("/roofing/")) {
              isActive = item.sectionId === activeSection;
            }

            const cls = `${base} ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cls}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex"
          onClick={(e) =>
            handleNavClick(e, { label: "Contact Us", href: "/#contact", sectionId: "contact" })
          }
        >
          Contact Us
        </Link>

        {/* Hamburger Menu Trigger for Mobile */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>

      {/* Mobile Menu Overlay Background */}
      <div 
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel - Full-Screen Slide-Out from Right */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full sm:max-w-sm flex-col bg-card px-6 py-6 shadow-2xl transition-transform duration-500 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 flex flex-1 flex-col gap-3 overflow-y-auto">
          {nav.map((item) => {
            const Icon = item.icon;
            
            let isActive = false;
            if (item.href === "/locations") {
              isActive = pathname.startsWith("/locations");
            } else if (pathname === "/" || pathname.startsWith("/roofing/")) {
              isActive = item.sectionId === activeSection;
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
                onClick={(e) => {
                  handleNavClick(e, item);
                  setIsMenuOpen(false);
                }}
              >
                <div className="flex items-center gap-4">
                  {Icon && (
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isActive 
                        ? "bg-primary/20 text-primary" 
                        : "bg-secondary text-muted-foreground group-hover:bg-background group-hover:text-foreground group-hover:shadow-sm"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </span>
                  )}
                  {item.label}
                </div>
                <ChevronRight className={`h-5 w-5 transition-transform ${
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground/50 group-hover:translate-x-1 group-hover:text-foreground"
                }`} />
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 pb-8">
          <Link
            href="/#contact"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.98]"
            onClick={(e) => {
              handleNavClick(e, { label: "Get a Quote", href: "/#contact", sectionId: "contact" });
              setIsMenuOpen(false);
            }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}

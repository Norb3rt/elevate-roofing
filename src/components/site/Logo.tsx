import Link from "next/link";
import logoSrc from "@/assets/elevate-logo.png";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const height = variant === "footer" ? "h-14" : "h-11";
  return (
    <Link
      href="/"
      aria-label="Elevate Roofing Services — Home"
      className={`group inline-flex items-center ${className}`}
    >
      <span className="logo-reveal relative inline-block">
        <img
          src={logoSrc.src}
          alt="Elevate Roofing Services"
          className={`${height} w-auto select-none drop-shadow-[0_2px_6px_rgba(0,77,119,0.15)] transition-transform duration-500 group-hover:scale-[1.02]`}
          draggable={false}
        />
        <span aria-hidden className="logo-shimmer" />
      </span>
    </Link>
  );
}

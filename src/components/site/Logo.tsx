import Link from "next/link";
import Image from "next/image";
import logoSrc from "@/assets/elevate-logo.png";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const h = variant === "footer" ? 56 : 44;
  return (
    <Link
      href="/"
      aria-label="Elevate Roofing Services — Home"
      className={`group inline-flex items-center ${className}`}
    >
      <span className="logo-reveal relative inline-block">
        <Image
          src={logoSrc}
          alt="Elevate Roofing Services"
          width={Math.round(h * (logoSrc.width / logoSrc.height))}
          height={h}
          priority
          quality={85}
          className={`${variant === "footer" ? "h-14" : "h-11"} w-auto select-none drop-shadow-[0_2px_6px_rgba(0,77,119,0.15)] transition-transform duration-500 group-hover:scale-[1.02]`}
          style={{ width: "auto", height: "auto" }}
          draggable={false}
        />
        <span aria-hidden className="logo-shimmer" />
      </span>
    </Link>
  );
}

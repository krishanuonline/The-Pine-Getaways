import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/layout/LogoMark";

interface LogoProps {
  className?: string;
  /** "light" for use over a dark/transparent hero, "dark" for solid nav/footer. */
  variant?: "light" | "dark";
}

function Logo({ className, variant = "dark" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${siteConfig.name} — ${siteConfig.tagline}`}
    >
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-serif text-lg leading-tight font-semibold tracking-tight",
            isLight ? "text-cream-50" : "text-forest-900"
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "hidden text-[0.6rem] font-medium tracking-[0.15em] uppercase sm:block",
            isLight ? "text-cream-50/70" : "text-foreground/50"
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}

export { Logo };

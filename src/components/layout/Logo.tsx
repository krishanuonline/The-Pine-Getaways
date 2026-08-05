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
      aria-label={siteConfig.name}
    >
      <LogoMark
        className={cn("h-9 w-9 shrink-0", isLight ? "text-cream-50" : "text-forest-800")}
      />
      <span
        className={cn(
          "font-serif text-lg leading-tight font-semibold tracking-tight",
          isLight ? "text-cream-50" : "text-forest-900"
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}

export { Logo };

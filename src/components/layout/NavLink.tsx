"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavLink as NavLinkType } from "@/config/site";

interface NavLinkProps extends NavLinkType {
  className?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
  active?: boolean;
  /** Namespaces the shared layout animation so desktop/mobile nav pills don't collide. */
  layoutGroup?: string;
}

function NavLink({
  label,
  href,
  className,
  onClick,
  variant = "dark",
  active = false,
  layoutGroup = "desktop",
}: NavLinkProps) {
  const isLight = variant === "light";

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300",
        active
          ? isLight
            ? "text-cream-50"
            : "text-forest-900"
          : isLight
            ? "text-cream-50/75 hover:text-cream-50"
            : "text-foreground/70 hover:text-foreground",
        className
      )}
    >
      {active && (
        <motion.span
          layoutId={`nav-active-pill-${layoutGroup}`}
          className={cn(
            "absolute inset-0 -z-10 rounded-full",
            isLight ? "bg-cream-50/15" : "bg-gold-500/15"
          )}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      {label}
    </Link>
  );
}

export { NavLink };

import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Use light text for placement on a dark (forest) section background. */
  variant?: "dark" | "light";
  className?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = variant === "light";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase",
            isLight ? "text-gold-300" : "text-gold-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        as="h2"
        className={cn("mt-3", isLight ? "text-cream-50" : "text-forest-900")}
      >
        {title}
      </Heading>
      <span
        className={cn(
          "mt-4 block h-0.5 w-14 rounded-full bg-gold-500",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            isLight ? "text-cream-100/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export { SectionHeading };

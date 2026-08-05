import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconBadgeVariants = cva("inline-flex shrink-0 items-center justify-center rounded-full", {
  variants: {
    variant: {
      forest: "bg-forest-800 text-cream-50",
      gold: "bg-gold-100 text-gold-600",
      sage: "bg-sage-100 text-forest-700",
    },
    size: {
      sm: "h-9 w-9 [&>svg]:h-4 [&>svg]:w-4",
      md: "h-12 w-12 [&>svg]:h-5 [&>svg]:w-5",
      lg: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
    },
  },
  defaultVariants: {
    variant: "sage",
    size: "md",
  },
});

export interface IconBadgeProps extends VariantProps<typeof iconBadgeVariants> {
  icon: LucideIcon;
  className?: string;
}

function IconBadge({ icon: Icon, variant, size, className }: IconBadgeProps) {
  return (
    <span className={cn(iconBadgeVariants({ variant, size }), className)}>
      <Icon strokeWidth={1.5} />
    </span>
  );
}

export { IconBadge };

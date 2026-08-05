import * as React from "react";
import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PlaceholderImageProps {
  /** Caption describing the real photo this will become. */
  label: string;
  icon?: LucideIcon;
  className?: string;
  /** Hide the caption pill for dense grids (e.g. gallery thumbnails). */
  showLabel?: boolean;
}

/**
 * Stand-in for a real photograph. Swap for a <Image src="..." /> once real
 * assets are available — every image slot in the app renders through this
 * single component, so that's the only place that needs to change.
 */
function PlaceholderImage({
  label,
  icon: Icon = ImageIcon,
  className,
  showLabel = true,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden bg-linear-to-br from-forest-700 via-forest-800 to-forest-950",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,var(--color-cream-50)_1px,transparent_0)] [background-size:16px_16px]"
      />
      <Icon
        aria-hidden
        className="absolute top-1/2 left-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-cream-50/25"
        strokeWidth={1.25}
      />
      {showLabel && (
        <span className="relative z-10 m-3 rounded-full bg-forest-950/60 px-3 py-1 text-xs font-medium text-cream-100/90 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}

export { PlaceholderImage };

import { cn } from "@/lib/utils";

interface MountainDividerProps {
  /** Tailwind text-color class controlling the ridge fill (via currentColor). */
  className?: string;
}

/**
 * Soft rolling hill line sitting at the bottom edge of a section, filled with
 * the color of the section beneath it — a gentle curve rather than a jagged
 * zigzag, so it reads as a horizon instead of a torn edge. Place absolutely
 * at the bottom of a `relative overflow-hidden` section.
 */
function MountainDivider({ className }: MountainDividerProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-16 sm:h-24">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className={cn("h-full w-full", className)}
        fill="currentColor"
      >
        <path
          d="M0,160 L0,92
             C120,60 240,60 360,84
             C480,108 600,108 720,80
             C840,52 960,52 1080,76
             C1200,100 1320,100 1440,68
             L1440,160 Z"
        />
      </svg>
    </div>
  );
}

export { MountainDivider };

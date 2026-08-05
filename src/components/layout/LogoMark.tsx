import * as React from "react";

/**
 * Placeholder circular emblem standing in for the real Pine Getaways logo
 * (round badge: pine trees + mountains + cabin). Swap the <path> content
 * with the real artwork later — everything else (sizing, color via
 * currentColor) stays the same.
 */
function LogoMark({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />

      {/* mountains */}
      <path
        d="M9 29L17 16L22.5 25L26 19.5L39 29H9Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* pine tree, left */}
      <path
        d="M14.5 21L17 25.5H12L14.5 21Z M14.5 18L17.5 23.5H11.5L14.5 18Z"
        fill="currentColor"
      />
      {/* pine tree, right */}
      <path
        d="M33 20L35.5 24.5H30.5L33 20Z M33 17L36 22.5H30L33 17Z"
        fill="currentColor"
      />
      {/* cabin */}
      <path d="M20.5 29V25.5L24 23L27.5 25.5V29H20.5Z" fill="currentColor" />
    </svg>
  );
}

export { LogoMark };

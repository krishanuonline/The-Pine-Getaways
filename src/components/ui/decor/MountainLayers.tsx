"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";

interface MountainLayersProps {
  /** Section to link the scroll-parallax progress to. */
  target: React.RefObject<HTMLElement | null>;
}

/**
 * Three hand-drawn mountain ridgelines with layered depth: they drift at
 * different speeds as the user scrolls past `target`, and shift gently with
 * the cursor for a constant, alive parallax even before anyone scrolls.
 */
function MountainLayers({ target }: MountainLayersProps) {
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end start"] });
  const { x: mouseX } = useMouseParallax();

  const yBack = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, 280]);

  const xBack = useTransform(mouseX, (v) => v * 8);
  const xMid = useTransform(mouseX, (v) => v * 16);
  const xFront = useTransform(mouseX, (v) => v * 26);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.svg
        style={{ y: yBack, x: xBack }}
        className="absolute inset-x-0 bottom-0 h-2/3 w-[106%] -left-[3%] text-forest-900"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M0,500 L0,320 L160,190 L340,300 L500,140 L680,290 L860,110 L1040,270 L1220,160 L1440,300 L1440,500 Z"
          opacity="0.55"
        />
      </motion.svg>

      <motion.svg
        style={{ y: yMid, x: xMid }}
        className="absolute inset-x-0 bottom-0 h-1/2 w-[110%] -left-[5%] text-forest-800"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M0,420 L0,260 L220,130 L420,250 L620,80 L860,230 L1080,100 L1300,240 L1440,150 L1440,420 Z"
          opacity="0.8"
        />
      </motion.svg>

      <motion.svg
        style={{ y: yFront, x: xFront }}
        className="absolute inset-x-0 bottom-0 h-1/3 w-[116%] -left-[8%] text-forest-950"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,320 L0,210 L180,100 L360,200 L560,50 L800,190 L1020,70 L1240,210 L1440,130 L1440,320 Z" />
      </motion.svg>
    </div>
  );
}

export { MountainLayers };

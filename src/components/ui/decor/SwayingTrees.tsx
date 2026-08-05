"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TREE_ASPECT = 24 / 40; // matches PineTreeShape's viewBox

const trees = [
  { left: "4%", scale: 0.85, duration: 4.4, delay: 0 },
  { left: "16%", scale: 1.1, duration: 3.8, delay: 0.5 },
  { left: "29%", scale: 0.7, duration: 4.6, delay: 1.0 },
  { left: "43%", scale: 1.0, duration: 4.0, delay: 0.3 },
  { left: "57%", scale: 0.8, duration: 4.3, delay: 1.3 },
  { left: "71%", scale: 1.05, duration: 3.9, delay: 0.7 },
  { left: "85%", scale: 0.75, duration: 4.5, delay: 0.2 },
];

/** A single continuous three-tier silhouette — no separate trunk, so nothing
 * appears to float once it sits on the horizon line. */
function PineTreeShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 40" className={className} fill="currentColor">
      <path d="M12,0 L20,16 L16,16 L22,30 L17,30 L24,40 L0,40 L7,30 L2,30 L8,16 L4,16 Z" />
    </svg>
  );
}

/** A soft foreground tree line along the base of the hero, each tree swaying
 * gently and independently for a light "wind through the forest" feel. */
function SwayingTrees({ className, baseHeight = 84 }: { className?: string; baseHeight?: number }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 z-[1] overflow-hidden", className)}
      style={{ height: baseHeight * 1.15 }}
    >
      {trees.map((t, i) => {
        const height = baseHeight * t.scale;
        const width = height * TREE_ASPECT;
        return (
          <motion.div
            key={i}
            className="absolute bottom-0 text-forest-950/90"
            style={{ left: t.left, height, width, transformOrigin: "bottom center" }}
            animate={{ rotate: [-1.25, 1.25, -1.25] }}
            transition={{ duration: t.duration, delay: t.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <PineTreeShape className="h-full w-full" />
          </motion.div>
        );
      })}
    </div>
  );
}

export { SwayingTrees };

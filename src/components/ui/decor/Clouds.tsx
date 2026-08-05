"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const clouds = [
  { top: "10%", width: 260, duration: 55, delay: 0, opacity: 0.16 },
  { top: "24%", width: 180, duration: 42, delay: 8, opacity: 0.12 },
  { top: "5%", width: 220, duration: 66, delay: 20, opacity: 0.14 },
  { top: "34%", width: 150, duration: 38, delay: 3, opacity: 0.1 },
];

function CloudShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} fill="currentColor">
      <ellipse cx="60" cy="50" rx="55" ry="26" />
      <ellipse cx="112" cy="36" rx="44" ry="30" />
      <ellipse cx="152" cy="50" rx="40" ry="22" />
      <ellipse cx="92" cy="58" rx="72" ry="20" />
    </svg>
  );
}

/** Slow, continuous cloud drift across the sky — independent of scroll. */
function Clouds({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute text-cream-50"
          style={{ top: c.top, width: c.width, opacity: c.opacity }}
          initial={{ x: "-30vw" }}
          animate={{ x: "130vw" }}
          transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "linear" }}
        >
          <CloudShape className="w-full" />
        </motion.div>
      ))}
    </div>
  );
}

export { Clouds };

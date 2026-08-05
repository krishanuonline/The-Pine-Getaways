"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const wisps = [
  { top: "8%", duration: 20, delay: 0, opacity: 0.14, height: 28 },
  { top: "30%", duration: 26, delay: 2, opacity: 0.16, height: 36 },
  { top: "50%", duration: 23, delay: 4, opacity: 0.14, height: 32 },
  { top: "68%", duration: 18, delay: 1, opacity: 0.2, height: 40 },
];

/** Slow-drifting mist bands — pure decoration, no interaction. */
function MistLayer({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {wisps.map((wisp, i) => (
        <motion.div
          key={i}
          className="absolute w-[170%] rounded-full bg-cream-50 blur-3xl"
          style={{ top: wisp.top, left: "-35%", height: wisp.height, opacity: wisp.opacity }}
          animate={{ x: ["-4%", "6%", "-4%"] }}
          transition={{ duration: wisp.duration, delay: wisp.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export { MistLayer };

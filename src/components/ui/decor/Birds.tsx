"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const birds = [
  { top: "16%", width: 22, duration: 24, delay: 2 },
  { top: "26%", width: 16, duration: 30, delay: 13 },
];

function BirdShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <path d="M0,6 Q6,0 12,6 Q18,0 24,6" />
    </svg>
  );
}

/** A couple of birds gliding slowly across the sky, on an endless loop. */
function Birds({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {birds.map((b, i) => (
        <motion.div
          key={i}
          className="absolute text-cream-100/40"
          style={{ top: b.top, width: b.width }}
          initial={{ x: "-10vw" }}
          animate={{ x: "110vw" }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            animate={{ y: [0, -5, 0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <BirdShape className="w-full" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export { Birds };

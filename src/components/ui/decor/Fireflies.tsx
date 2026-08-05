"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 6.2 + 3) % 100}%`,
  delay: (i % 8) * 0.7,
  duration: 6 + (i % 5) * 1.3,
  drift: i % 2 === 0 ? 22 : -22,
  size: i % 3 === 0 ? 6 : 4,
}));

/** Small floating gold points drifting upward — used on dark forest sections. */
function Fireflies({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-gold-300"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 10px 3px rgba(216,180,92,0.7)",
          }}
          animate={{
            y: [0, -260, -300],
            x: [0, p.drift, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export { Fireflies };

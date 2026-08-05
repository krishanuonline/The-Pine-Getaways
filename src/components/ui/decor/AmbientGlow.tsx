"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** A soft, slowly breathing light source — reads as distant moonlight through mist. */
function AmbientGlow({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-[14%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-200/15 blur-3xl sm:h-96 sm:w-96",
        className
      )}
      animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.15, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export { AmbientGlow };

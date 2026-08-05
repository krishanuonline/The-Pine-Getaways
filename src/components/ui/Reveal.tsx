"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds, useful when revealing a list of siblings in sequence. */
  delay?: number;
  y?: number;
  as?: "div" | "li";
}

function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Component>
  );
}

export { Reveal };

"use client";

import * as React from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

/**
 * Smoothed pointer position normalized to roughly -1..1 on each axis,
 * relative to the viewport center. Updates a MotionValue directly (no
 * React re-renders) so it's cheap to drive continuous parallax with.
 */
export function useMouseParallax(): { x: MotionValue<number>; y: MotionValue<number> } {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 40, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 40, damping: 20, mass: 0.6 });

  React.useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      rawX.set((event.clientX / window.innerWidth) * 2 - 1);
      rawY.set((event.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [rawX, rawY]);

  return { x, y };
}

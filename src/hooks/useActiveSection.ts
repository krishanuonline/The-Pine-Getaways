"use client";

import * as React from "react";

/**
 * Tracks which of the given section ids is currently "active" (nearest the
 * top of the viewport, below the fixed header) as the user scrolls.
 * Pass a stable (module-level or memoized) `ids` array — order doesn't need
 * to match DOM order, the comparison below is order-independent.
 */
export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = React.useState<string>(ids[0] ?? "");

  React.useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    function recompute() {
      // Among sections whose top edge has scrolled up past the "active
      // line" just under the fixed header, the current section is whichever
      // one's top is closest to that line (i.e. the most recently entered).
      const activeLine = 96;
      let current = elements[0];
      let currentTop = -Infinity;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top <= activeLine && top > currentTop) {
          current = el;
          currentTop = top;
        }
      }
      setActiveId(current.id);
    }

    recompute();
    window.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      window.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
    };
  }, [ids]);

  return activeId;
}

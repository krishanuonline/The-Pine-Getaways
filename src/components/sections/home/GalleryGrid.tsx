"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { GalleryCategory, GalleryItem } from "@/types";

const categories: (GalleryCategory | "All")[] = [
  "All",
  "Property",
  "Rooms",
  "Views",
  "Food",
  "Experiences",
];

const sizeClasses: Record<GalleryItem["size"], string> = {
  sm: "h-48",
  md: "h-64",
  lg: "h-80",
};

function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = React.useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              active === category
                ? "bg-forest-800 text-cream-50"
                : "bg-sage-50 text-foreground/70 hover:bg-sage-100"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <PlaceholderImage
            key={item.label}
            label={item.label}
            className={cn("mb-4 w-full break-inside-avoid rounded-lg", sizeClasses[item.size])}
          />
        ))}
      </div>
    </div>
  );
}

export { GalleryGrid };

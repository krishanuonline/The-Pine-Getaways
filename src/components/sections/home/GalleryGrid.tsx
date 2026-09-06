"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { GalleryCategory, GalleryItem } from "@/types";

const categories: (GalleryCategory | "All")[] = [
  "All",
  "Rooms",
  "Views",
  "Food",
  "Experiences",
];

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
            suppressHydrationWarning
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

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((item) => (
          <div
            key={item.label}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            ) : (
              <PlaceholderImage label={item.label} showLabel={false} className="absolute inset-0" />
            )}

            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-forest-950/85 via-forest-950/15 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <p className="text-[0.65rem] font-semibold tracking-[0.15em] text-gold-300 uppercase">
                {item.category}
              </p>
              <p className="text-sm font-medium text-cream-50">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { GalleryGrid };

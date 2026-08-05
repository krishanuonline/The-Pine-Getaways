"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PriceTagProps {
  price: number;
  originalPrice?: number;
  unit?: string;
  className?: string;
}

function formatInr(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

/** Price display that leads with the deal — struck-through original price
 * plus a pulsing "% OFF" badge — instead of a plain number. */
function PriceTag({ price, originalPrice, unit = "/ person / night", className }: PriceTagProps) {
  const hasDiscount = !!originalPrice && originalPrice > price;
  const discountPct = hasDiscount ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className={cn(className)}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-serif text-2xl font-bold text-forest-900">{formatInr(price)}</span>
        {hasDiscount && (
          <>
            <span className="text-sm text-muted-foreground line-through">
              {formatInr(originalPrice)}
            </span>
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full bg-gold-500 px-2 py-0.5 text-xs font-bold text-forest-950 shadow-[0_0_0_3px_var(--color-gold-100)]"
            >
              {discountPct}% OFF
            </motion.span>
          </>
        )}
      </div>
      <span className="text-xs text-muted-foreground">{unit}</span>
    </div>
  );
}

export { PriceTag };

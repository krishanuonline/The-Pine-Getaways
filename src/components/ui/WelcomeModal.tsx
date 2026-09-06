"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Trees, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Fireflies } from "@/components/ui/decor/Fireflies";
import { siteConfig } from "@/config/site";

const highlights = [
  "Scenic mountain views",
  "Authentic homestay experience",
  "Comfortable accommodation",
  "Peaceful surroundings",
  "Family-friendly",
  "Perfect for couples and groups",
];

/** Greeting shown every time the site is opened, a beat after the page loads. */
function WelcomeModal() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const close = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-forest-950/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-modal-title"
            className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-md flex-col overflow-y-auto rounded-2xl bg-cream-50 shadow-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative h-24 shrink-0 overflow-hidden bg-linear-to-br from-forest-700 via-forest-800 to-forest-950 sm:h-28">
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,var(--color-cream-50)_1px,transparent_0)] [background-size:16px_16px]"
              />
              <Fireflies className="opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Trees className="h-9 w-9 text-cream-50/90 sm:h-10 sm:w-10" strokeWidth={1.25} />
              </div>

              <button
                type="button"
                suppressHydrationWarning
                onClick={close}
                aria-label="Close welcome message"
                className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-forest-950/40 text-cream-50 backdrop-blur-sm transition-colors hover:bg-forest-950/60"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
                Welcome
              </p>
              <h2
                id="welcome-modal-title"
                className="mt-2 font-serif text-xl leading-tight font-semibold text-forest-900 sm:text-2xl"
              >
                {siteConfig.name}
              </h2>
              <p className="mt-0.5 text-xs font-medium tracking-[0.15em] text-gold-600 uppercase">
                {siteConfig.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Three homes, each in a different corner of the Kalimpong hills — chosen
                for the view, and run by people who live there. No crowds, no itinerary
                pressure, just mountains and quiet.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Button asChild size="md" className="flex-1" onClick={close}>
                  <Link href="/#homestays">Explore Homestays</Link>
                </Button>
                <Button variant="ghost" size="md" onClick={close}>
                  Maybe later
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { WelcomeModal };

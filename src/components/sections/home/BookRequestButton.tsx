"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BookingForm } from "@/components/sections/home/BookingForm";

/** Opens a WhatsApp booking form pre-filled with this homestay, in a modal. */
function BookRequestButton({ homestayName }: { homestayName: string }) {
  const [open, setOpen] = React.useState(false);
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
    <>
      <Button size="sm" variant="outline" suppressHydrationWarning onClick={() => setOpen(true)}>
        Book Request
      </Button>

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
              aria-labelledby="book-request-title"
              className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-lg flex-col overflow-y-auto rounded-2xl bg-cream-50 p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <button
                type="button"
                suppressHydrationWarning
                onClick={close}
                aria-label="Close booking form"
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground/70 transition-colors hover:bg-border"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
                Book Request
              </p>
              <h2
                id="book-request-title"
                className="mt-2 font-serif text-xl font-semibold text-forest-900 sm:text-2xl"
              >
                {homestayName}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us your dates — we&apos;ll confirm availability over WhatsApp.
              </p>

              <div className="mt-6">
                <BookingForm defaultHomestay={homestayName} onSubmitted={close} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { BookRequestButton };

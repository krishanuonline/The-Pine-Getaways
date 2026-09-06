"use client";

import * as React from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/layout/NavLink";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  variant?: "light" | "dark";
  activeId?: string;
}

function MobileNav({ variant = "dark", activeId }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const isLight = variant === "light" && !open;

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        suppressHydrationWarning
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
          isLight ? "bg-forest-950/30 text-cream-50 backdrop-blur-sm" : "text-forest-800 hover:bg-muted"
        )}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-background shadow-sm">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                variant="dark"
                className="py-2"
                active={link.sectionId === activeId}
                layoutGroup="mobile"
                onClick={() => setOpen(false)}
              />
            ))}
            <Button variant="outline" size="sm" asChild className="mt-2 gap-1.5">
              <a
                href={siteConfig.brochureUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </a>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}

export { MobileNav };

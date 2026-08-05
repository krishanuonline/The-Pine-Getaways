"use client";

import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NavLink } from "@/components/layout/NavLink";
import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, navSectionIds } from "@/config/site";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

function Header() {
  const scrolled = useScrolled();
  const activeId = useActiveSection(navSectionIds);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-cream-50/95 shadow-sm backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Logo variant={scrolled ? "dark" : "light"} />

        <nav className="hidden md:flex md:items-center md:gap-1">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              variant={scrolled ? "dark" : "light"}
              active={link.sectionId === activeId}
            />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <Link href="/#contact">Book Your Stay</Link>
          </Button>
        </div>

        <MobileNav variant={scrolled ? "dark" : "light"} activeId={activeId} />
      </Container>
    </header>
  );
}

export { Header };

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { destinations } from "@/data/destinations";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-forest-950 text-cream-100">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
            {siteConfig.name} — your gateway to the Eastern Himalayas. Three quiet
            homestays in the hills of North Bengal.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream-100/70 transition-colors hover:text-cream-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
            Destinations
          </h3>
          <ul className="mt-4 space-y-2.5">
            {destinations.map((destination) => (
              <li key={destination.name} className="text-sm text-cream-100/70">
                {destination.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.contact.phones.slice(0, 2).map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-sm text-cream-100/70 transition-colors hover:text-cream-50"
                >
                  <Phone className="h-3.5 w-3.5 text-gold-400" />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream-100/70 transition-colors hover:text-cream-50"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-gold-400" />
                {siteConfig.contact.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-cream-100/70">
              <MapPin className="h-3.5 w-3.5 text-gold-400" />
              {siteConfig.contact.location}
            </li>
          </ul>
          <WhatsAppButton size="sm" className="mt-5" />
        </div>
      </Container>

      <div className="border-t border-cream-50/10">
        <Container className="flex flex-col items-center gap-2 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-serif text-sm text-cream-100/80 italic">
            Come as Guests, Leave as Family.
          </p>
          <p className="text-xs text-cream-100/50">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export { Footer };

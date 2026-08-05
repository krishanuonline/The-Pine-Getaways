import { Phone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { BookingForm } from "@/components/sections/home/BookingForm";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";

function Booking() {
  return (
    <Section id="contact" className="bg-background">
      <SectionHeading
        eyebrow="Let's Plan Your Getaway"
        title="Send Us Your Details"
        description="Fill in your dates and preferences — hit send and we'll pick up the conversation on WhatsApp, including Silk Route routing and vehicle pickup."
        align="center"
        className="mx-auto"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardContent className="p-6 sm:p-8">
            <BookingForm />
          </CardContent>
        </Card>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="flex h-full flex-col justify-center rounded-lg bg-forest-950 p-8 text-cream-100">
            <h3 className="font-serif text-xl font-semibold text-cream-50">Contact Us</h3>
            <p className="mt-2 text-sm text-cream-100/70">
              Prefer to talk it through? Call or WhatsApp us directly.
            </p>

            <ul className="mt-6 space-y-3">
              {siteConfig.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-sm text-cream-100/85 transition-colors hover:text-cream-50"
                  >
                    <Phone className="h-4 w-4 text-gold-400" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3 border-t border-cream-50/10 pt-6">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-cream-100/85 transition-colors hover:text-cream-50"
              >
                <InstagramIcon className="h-4 w-4 text-gold-400" />
                {siteConfig.contact.instagramHandle}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-cream-100/85">
                <MapPin className="h-4 w-4 text-gold-400" />
                {siteConfig.contact.location}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export { Booking };

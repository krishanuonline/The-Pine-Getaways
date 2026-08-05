import { PawPrint, Droplets } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { HomestayCard } from "@/components/sections/home/HomestayCard";
import { homestays } from "@/data/homestays";

function Homestays() {
  return (
    <Section id="homestays" className="bg-sage-50">
      <SectionHeading
        eyebrow="Our Homestays"
        title="Three Beautiful Locations"
        description="Each home sits in a different corner of Kalimpong district — a ridge, a valley and a pine forest — so you can choose the view you wake up to."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {homestays.map((homestay, i) => (
          <HomestayCard key={homestay.slug} homestay={homestay} delay={i * 0.1} />
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8 space-y-3">
        <div className="flex items-center gap-4 rounded-xl border border-gold-300/60 bg-gold-100 px-6 py-5 sm:px-8">
          <IconBadge icon={PawPrint} variant="forest" size="lg" />
          <div>
            <p className="text-base font-semibold text-forest-900 sm:text-lg">
              Pet Friendly
            </p>
            <p className="mt-0.5 text-sm text-forest-900/70">
              Bring your furry companions along — always welcome, no extra charge.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg bg-forest-800 px-5 py-4 text-sm font-medium text-cream-50">
          <Droplets className="h-5 w-5 shrink-0 text-gold-400" />
          Attached washrooms, fresh linen and hot water — every room
        </div>
      </Reveal>
    </Section>
  );
}

export { Homestays };

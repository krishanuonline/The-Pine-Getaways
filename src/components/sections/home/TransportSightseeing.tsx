import { Car, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { pickupPoints, vehicles, sightseeingPlaces } from "@/data/transport";

function TransportSightseeing() {
  return (
    <Section className="bg-sage-50">
      <SectionHeading
        eyebrow="Transport & Sightseeing"
        title="Getting Here, and Getting Around"
        description="Pick-up, drop and local sightseeing arranged end to end — just tell us where you're coming from."
      />

      <Reveal delay={0.1} className="mt-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
          Pick-up & Drop From
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pickupPoints.map((point) => (
            <div
              key={point.name}
              className="rounded-lg border border-border bg-card px-5 py-6 text-center"
            >
              <p className="font-serif text-base font-semibold text-forest-900">{point.name}</p>
              <p className="mt-1.5 text-xs font-semibold tracking-[0.15em] text-gold-600 uppercase">
                {point.duration}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.15} className="h-full rounded-lg border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
            <Car className="h-4 w-4" />
            Vehicles
          </div>
          <h3 className="mt-2 font-serif text-lg font-semibold text-forest-900">
            Choose Your Ride
          </h3>
          <ul className="mt-4 divide-y divide-border">
            {vehicles.map((vehicle) => (
              <li key={vehicle.name} className="flex flex-wrap items-baseline gap-x-2 py-2.5 text-sm">
                <span className="font-semibold text-forest-900">{vehicle.name}</span>
                <span className="text-muted-foreground">· {vehicle.note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground italic">
            Charges as per industry-standard local rates.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="h-full rounded-lg border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
            <MapPin className="h-4 w-4" />
            Sightseeing
          </div>
          <h3 className="mt-2 font-serif text-lg font-semibold text-forest-900">
            Private Vehicles on Hire
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {sightseeingPlaces.map((place) => (
              <span
                key={place}
                className="rounded-full border border-gold-300 bg-gold-100/50 px-3.5 py-1.5 text-sm text-forest-900"
              >
                {place}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground italic">
            Rates as per industry-standard local pricing.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export { TransportSightseeing };

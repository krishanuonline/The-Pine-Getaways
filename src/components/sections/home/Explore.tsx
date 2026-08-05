import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DestinationCard } from "@/components/sections/home/DestinationCard";
import { Clouds } from "@/components/ui/decor/Clouds";
import { Fireflies } from "@/components/ui/decor/Fireflies";
import { MountainDivider } from "@/components/ui/decor/MountainDivider";
import { destinations } from "@/data/destinations";

function Explore() {
  return (
    <Section
      id="explore"
      className="overflow-hidden bg-forest-950"
      decor={
        <>
          <Clouds className="opacity-60" />
          <Fireflies />
          <MountainDivider className="text-background" />
        </>
      }
    >
      <SectionHeading
        variant="light"
        eyebrow="Places to Visit"
        title="Stay Close to the Mountains. Explore More."
        description="Perfectly placed between the plains and the Silk Route — a natural stopover, and a base for going further."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {destinations.map((destination, i) => (
          <DestinationCard key={destination.name} destination={destination} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  );
}

export { Explore };

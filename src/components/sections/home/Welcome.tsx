import { Check, Trees } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  "Scenic mountain views",
  "Authentic homestay experience",
  "Comfortable accommodation",
  "Peaceful surroundings",
  "Family-friendly",
  "Perfect for couples and groups",
];

function Welcome() {
  return (
    <Section className="bg-background">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PlaceholderImage
            label="Homestay lawn, morning light"
            icon={Trees}
            className="aspect-4/5 w-full rounded-lg"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Welcome"
            title="A stay that feels like an escape."
            description="Three homes, each in a different corner of the Kalimpong hills — chosen for the view, and run by people who live there. No crowds, no itinerary pressure, just mountains and quiet."
          />

          <Reveal delay={0.1}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <Check className="h-4 w-4 shrink-0 text-gold-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export { Welcome };

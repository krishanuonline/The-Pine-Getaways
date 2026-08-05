import { Compass } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Destination } from "@/types";

function DestinationCard({ destination, delay = 0 }: { destination: Destination; delay?: number }) {
  return (
    <Reveal delay={delay} className="group relative h-full overflow-hidden rounded-lg">
      <PlaceholderImage
        label={destination.imageLabel}
        icon={Compass}
        showLabel={false}
        className="aspect-3/4 w-full transition-transform duration-500 group-hover:scale-105"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-forest-950 via-forest-950/50 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif text-2xl font-semibold text-cream-50">{destination.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-cream-100/80">{destination.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {destination.points.map((point) => (
            <Badge key={point} variant="outline" className="border-cream-50/30 text-cream-100">
              {point}
            </Badge>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export { DestinationCard };

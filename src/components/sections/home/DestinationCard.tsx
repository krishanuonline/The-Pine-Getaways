import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Destination } from "@/types";

function DestinationCard({ destination, delay = 0 }: { destination: Destination; delay?: number }) {
  return (
    <Reveal delay={delay} className="group relative h-full overflow-hidden rounded-lg">
      <div className="relative aspect-3/4 w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.imageLabel}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
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

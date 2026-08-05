import { Reveal } from "@/components/ui/Reveal";
import type { AttractionCluster } from "@/types";

function AttractionClusterCard({
  cluster,
  index,
  delay = 0,
}: {
  cluster: AttractionCluster;
  index: number;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full rounded-lg bg-sage-50 p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-800 text-sm font-semibold text-cream-50">
            {index + 1}
          </span>
          <h3 className="font-serif text-lg font-semibold text-forest-900">{cluster.title}</h3>
        </div>
        <ul className="mt-4 space-y-2">
          {cluster.places.map((place) => (
            <li key={place} className="flex items-center gap-2 text-sm text-foreground/75">
              <span className="h-1 w-1 shrink-0 rounded-full bg-gold-600" />
              {place}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export { AttractionClusterCard };

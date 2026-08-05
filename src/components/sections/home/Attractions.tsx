import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AttractionClusterCard } from "@/components/sections/home/AttractionClusterCard";
import { attractionClusters } from "@/data/attractions";

function Attractions() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="Nearby Attractions"
        title="Four Clusters, One Base"
        description="Monasteries, viewpoints, waterfalls and cloud-level villages, grouped by the direction you travel — pick a cluster a day and never repeat a road."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {attractionClusters.map((cluster, i) => (
          <AttractionClusterCard key={cluster.title} cluster={cluster} index={i} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}

export { Attractions };

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { experiences } from "@/data/experiences";

function Experiences() {
  return (
    <Section id="experiences" className="bg-background">
      <SectionHeading
        align="center"
        eyebrow="Stay Experience"
        title="More Than Just a Stay"
        description="Full board, warm company, and a slower rhythm than home."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience, i) => (
          <FeatureCard
            key={experience.title}
            icon={experience.icon}
            title={experience.title}
            description={experience.description}
            delay={i * 0.08}
          />
        ))}
      </div>
    </Section>
  );
}

export { Experiences };

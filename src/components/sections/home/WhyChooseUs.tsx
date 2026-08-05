import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

function WhyChooseUs() {
  return (
    <Section className="bg-sage-50">
      <SectionHeading
        align="center"
        eyebrow="Let's Plan Your Getaway"
        title="Why Choose The Pine Getaways"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconVariant="forest"
            delay={i * 0.08}
            className="bg-cream-50"
          />
        ))}
      </div>
    </Section>
  );
}

export { WhyChooseUs };

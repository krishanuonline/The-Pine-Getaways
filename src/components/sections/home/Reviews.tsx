import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/sections/home/ReviewCard";
import { testimonials } from "@/data/testimonials";

function Reviews() {
  return (
    <Section className="bg-sage-50">
      <SectionHeading align="center" eyebrow="Guest Reviews" title="Come as Guests, Leave as Family" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <ReviewCard key={testimonial.name} testimonial={testimonial} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}

export { Reviews };

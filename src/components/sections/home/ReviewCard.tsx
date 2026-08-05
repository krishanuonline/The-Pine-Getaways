import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { Reveal } from "@/components/ui/Reveal";
import type { Testimonial } from "@/types";

function ReviewCard({ testimonial, delay = 0 }: { testimonial: Testimonial; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card className="h-full">
        <CardContent className="flex h-full flex-col p-6">
          <Quote className="h-6 w-6 text-gold-400" fill="currentColor" strokeWidth={0} />
          <Rating value={testimonial.rating} className="mt-4" />
          <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-5 text-sm font-semibold text-forest-900">
            {testimonial.name}
            <span className="font-normal text-muted-foreground"> · {testimonial.location}</span>
          </p>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export { ReviewCard };

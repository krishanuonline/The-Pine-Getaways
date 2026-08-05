import { MapPin, Check, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PriceTag } from "@/components/ui/PriceTag";
import { Reveal } from "@/components/ui/Reveal";
import { BookRequestButton } from "@/components/sections/home/BookRequestButton";
import type { Homestay } from "@/types";

function HomestayCard({ homestay, delay = 0 }: { homestay: Homestay; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Card className="flex h-full flex-col overflow-hidden">
        <PlaceholderImage label={homestay.imageLabel} icon={Home} className="aspect-4/3 w-full" />

        <CardContent className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-gold-600" />
            {homestay.location}
          </div>

          <h3 className="mt-2 font-serif text-xl font-semibold text-forest-900">
            {homestay.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{homestay.tagline}</p>

          <ul className="mt-4 flex-1 space-y-2">
            {homestay.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-5">
            <PriceTag
              price={homestay.priceInr}
              originalPrice={homestay.originalPriceInr}
              unit="/ person / night, all-inclusive"
            />
            <BookRequestButton homestayName={homestay.name} />
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export { HomestayCard };

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBadge, type IconBadgeProps } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconVariant?: IconBadgeProps["variant"];
  delay?: number;
  className?: string;
}

/** Icon + title + description card — the one shape reused across the
 * Experiences and Why Choose Us sections instead of two near-duplicate cards. */
function FeatureCard({ icon, title, description, iconVariant = "sage", delay = 0, className }: FeatureCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className={cn("flex h-full flex-col rounded-lg border border-border bg-card p-6", className)}>
        <IconBadge icon={icon} variant={iconVariant} />
        <h3 className="mt-4 font-serif text-lg font-semibold text-forest-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Reveal>
  );
}

export { FeatureCard };

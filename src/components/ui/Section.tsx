import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Wrap children in the standard max-width Container. Defaults to true. */
  container?: boolean;
  /** Full-bleed content rendered outside the Container (parallax layers, dividers, etc). */
  decor?: React.ReactNode;
}

function Section({
  className,
  as: Tag = "section",
  container = true,
  decor,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn("relative py-16 sm:py-20 lg:py-24", className)} {...props}>
      {decor}
      {container ? <Container className="relative">{children}</Container> : children}
    </Tag>
  );
}

export { Section };

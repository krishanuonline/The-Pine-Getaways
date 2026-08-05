import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-serif font-semibold tracking-tight text-foreground", {
  variants: {
    size: {
      h1: "text-4xl sm:text-5xl lg:text-6xl",
      h2: "text-3xl sm:text-4xl",
      h3: "text-2xl sm:text-3xl",
      h4: "text-xl sm:text-2xl",
      h5: "text-lg sm:text-xl",
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = NonNullable<VariantProps<typeof headingVariants>["size"]>;

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Semantic element to render. Defaults to matching `size`, or "h2". */
  as?: HeadingTag;
  /** Visual size, independent of the semantic tag. Defaults to `as`, or "h2". */
  size?: HeadingSize;
}

function Heading({ className, size, as, children, ...props }: HeadingProps) {
  const Tag: HeadingTag = as ?? (size as HeadingTag) ?? "h2";
  const visualSize: HeadingSize = size ?? (as !== "h6" ? (as as HeadingSize) : "h5") ?? "h2";

  return (
    <Tag className={cn(headingVariants({ size: visualSize }), className)} {...props}>
      {children}
    </Tag>
  );
}

export { Heading, headingVariants };

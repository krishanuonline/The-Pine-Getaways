import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        suppressHydrationWarning
        aria-invalid={invalid}
        className={cn(
          "flex h-11 w-full rounded-md border border-input bg-background px-3.5 text-sm text-foreground",
          "placeholder:text-muted-foreground",
          "transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

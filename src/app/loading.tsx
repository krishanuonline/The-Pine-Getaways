import { LogoMark } from "@/components/layout/LogoMark";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background">
      <LogoMark className="h-10 w-10 animate-pulse text-forest-800" />
      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        The Pine Getaways
      </p>
    </div>
  );
}

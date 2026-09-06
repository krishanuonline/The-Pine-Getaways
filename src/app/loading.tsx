import { LogoMark } from "@/components/layout/LogoMark";
import { siteConfig } from "@/config/site";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background">
      <LogoMark className="h-10 w-10 animate-pulse text-forest-800" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {siteConfig.name}
        </p>
        <p className="text-[0.65rem] tracking-[0.15em] text-muted-foreground/60 uppercase">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}

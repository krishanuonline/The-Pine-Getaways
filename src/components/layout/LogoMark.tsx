import Image from "next/image";
import { cn } from "@/lib/utils";

/** The Pine Getaways emblem — pine tree, mountains and cabin inside a circular badge. */
function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo/logomark.png"
      alt=""
      width={512}
      height={512}
      priority
      className={cn("object-contain", className)}
    />
  );
}

export { LogoMark };

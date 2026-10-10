import Image from "next/image";
import { cn } from "@/lib/utils";

type HalloweenMascotProps = {
  size?: number;
  className?: string;
};

/** Seasonal tip/card mascot — same hippogriff icon, no hat overlay. */
export function HalloweenMascot({ size = 36, className }: HalloweenMascotProps) {
  return (
    <Image
      src="/hippogriff-icon.webp"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 rounded-xl", className)}
      aria-hidden
    />
  );
}

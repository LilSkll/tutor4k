import Image from "next/image";
import { cn } from "@/lib/utils";

type HalloweenMascotProps = {
  size?: number;
  className?: string;
};

/**
 * Existing hippogriff icon + CSS witch hat (no new raster asset).
 */
export function HalloweenMascot({ size = 36, className }: HalloweenMascotProps) {
  return (
    <span
      className={cn("relative inline-flex shrink-0", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Image
        src="/hippogriff-icon.webp"
        alt=""
        width={size}
        height={size}
        className="rounded-xl"
      />
      <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 hw-witch-hat" />
    </span>
  );
}

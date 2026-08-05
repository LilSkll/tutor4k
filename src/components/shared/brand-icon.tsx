import Image from "next/image";
import { cn } from "@/lib/utils";

/** Brand mark — WebP at display size to keep LCP cheap on auth/marketing. */
export function BrandIcon({
  size = 40,
  priority = false,
  className,
  alt = "Spanish with Pavel",
}: {
  size?: number;
  priority?: boolean;
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/hippogriff-icon.webp"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-lg", className)}
    />
  );
}

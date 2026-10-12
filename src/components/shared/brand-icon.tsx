import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Brand mark served as a pre-sized static WebP.
 * `unoptimized` avoids an extra Vercel image-optimizer hop on LCP paths.
 */
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
      unoptimized
      className={cn("rounded-lg", className)}
    />
  );
}

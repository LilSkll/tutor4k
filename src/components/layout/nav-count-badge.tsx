"use client";

import { cn } from "@/lib/utils";

/** Compact count pill for nav homework indicator. */
export function NavCountBadge({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  if (count <= 0) return null;
  const label = count > 99 ? "99+" : String(count);
  return (
    <span
      className={cn(
        "inline-flex min-w-[1.25rem] h-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-primary-foreground tabular-nums",
        className,
      )}
      aria-label={`${label}`}
    >
      {label}
    </span>
  );
}

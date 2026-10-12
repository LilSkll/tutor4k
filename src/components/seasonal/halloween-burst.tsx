"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * One-shot CSS bat burst after Daily completion (1.4s, no layout shift).
 */
export function HalloweenBurst({ active }: { active: boolean }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (!active) return;
    setShow(true);
    const t = window.setTimeout(() => setShow(false), 1400);
    return () => window.clearTimeout(t);
  }, [active]);

  if (!show) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      aria-hidden
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className={cn("hw-bat absolute text-sm opacity-90")}
          style={{
            left: `${12 + i * 14}%`,
            animationDelay: `${i * 70}ms`,
          }}
        >
          🦇
        </span>
      ))}
    </div>
  );
}

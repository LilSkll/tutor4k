"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Thin top bar while the App Router resolves the next soft navigation.
 * Gives immediate feedback so tab switches don't feel frozen.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const prev = useRef(`${pathname}?${searchParams}`);

  useEffect(() => {
    const key = `${pathname}?${searchParams}`;
    if (key === prev.current) return;
    prev.current = key;
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 350);
    return () => window.clearTimeout(t);
  }, [pathname, searchParams]);

  // Capture link clicks early (before RSC finishes).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey)
        return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) {
          return;
        }
        setVisible(true);
      } catch {
        // ignore
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden"
      aria-hidden
    >
      <div className="h-full w-full origin-left animate-[nav-progress_0.8s_ease-out_infinite] bg-gradient-to-r from-primary via-orange-500 to-rose-500" />
    </div>
  );
}

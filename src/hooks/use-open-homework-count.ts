"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * Open (assigned) homework count for nav badge.
 * Refetches on mount, focus, and when leaving /homework (after submit/complete).
 */
export function useOpenHomeworkCount(): number {
  const pathname = usePathname();
  const [count, setCount] = React.useState(0);
  const prevPath = React.useRef(pathname);

  const refresh = React.useCallback(async () => {
    try {
      const res = await fetch("/api/student/homework/badge", {
        cache: "no-store",
      });
      if (!res.ok) return;
      const data = (await res.json()) as { count?: number };
      setCount(typeof data.count === "number" ? data.count : 0);
    } catch {
      // ignore — badge is non-critical
    }
  }, []);

  React.useEffect(() => {
    void refresh();
  }, [refresh]);

  React.useEffect(() => {
    const prev = prevPath.current;
    prevPath.current = pathname;
    if (prev.startsWith("/homework") && !pathname.startsWith("/homework")) {
      void refresh();
    }
    if (pathname.startsWith("/homework")) {
      void refresh();
    }
  }, [pathname, refresh]);

  React.useEffect(() => {
    const onFocus = () => void refresh();
    const onHomeworkChanged = () => void refresh();
    window.addEventListener("focus", onFocus);
    window.addEventListener("homework:changed", onHomeworkChanged);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("homework:changed", onHomeworkChanged);
    };
  }, [refresh]);

  return count;
}

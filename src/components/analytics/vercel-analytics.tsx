"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const AnalyticsBundle = dynamic(
  () =>
    import("@/components/analytics/vercel-analytics-inner").then(
      (m) => m.VercelAnalyticsInner,
    ),
  { ssr: false },
);

/**
 * Loads Vercel Analytics + Speed Insights only after the main thread is idle
 * so they do not compete with auth LCP.
 */
export function VercelAnalytics() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 4000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const t = globalThis.setTimeout(enable, 2000);
    return () => {
      cancelled = true;
      globalThis.clearTimeout(t);
    };
  }, []);

  if (!ready) return null;
  return <AnalyticsBundle />;
}

"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const CookieBanner = dynamic(
  () =>
    import("@/components/legal/cookie-banner").then((m) => m.CookieBanner),
  { ssr: false },
);

/** Mount cookie banner only after main-thread idle so it skips LCP. */
export function IdleCookieBanner() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    const t = globalThis.setTimeout(enable, 1500);
    return () => {
      cancelled = true;
      globalThis.clearTimeout(t);
    };
  }, []);

  if (!ready) return null;
  return <CookieBanner />;
}

"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { scrubAnalyticsUrl } from "@/lib/analytics";

/** Actual Vercel widgets — loaded only after idle via VercelAnalytics wrapper. */
export function VercelAnalyticsInner() {
  return (
    <>
      <Analytics
        beforeSend={(event) => ({
          ...event,
          url: scrubAnalyticsUrl(event.url),
        })}
      />
      <SpeedInsights
        beforeSend={(event) => ({
          ...event,
          url: scrubAnalyticsUrl(event.url),
        })}
      />
    </>
  );
}

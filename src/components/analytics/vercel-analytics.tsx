"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { scrubAnalyticsUrl } from "@/lib/analytics";

/** Vercel Web Analytics + Speed Insights (cookieless, PII-scrubbed URLs). */
export function VercelAnalytics() {
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

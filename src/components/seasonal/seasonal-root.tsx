"use client";

import * as React from "react";
import { getSeasonalTheme } from "@/lib/seasonal";

/** Sets html[data-season] once — CSS accents only, no permanent animation loops. */
export function SeasonalRoot({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const theme = getSeasonalTheme();
    const root = document.documentElement;
    if (theme.enabled && theme.type === "halloween") {
      root.dataset.season = "halloween";
    } else {
      delete root.dataset.season;
    }
    return () => {
      delete root.dataset.season;
    };
  }, []);

  return <>{children}</>;
}

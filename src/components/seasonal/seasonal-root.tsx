"use client";

import * as React from "react";
import { HalloweenBackdrop } from "@/components/seasonal/halloween-backdrop";
import { getSeasonalTheme } from "@/lib/seasonal";

/** Sets html[data-season] once — CSS accents only, no permanent animation loops. */
export function SeasonalRoot({ children }: { children: React.ReactNode }) {
  const [halloween, setHalloween] = React.useState(false);

  React.useEffect(() => {
    const theme = getSeasonalTheme();
    const root = document.documentElement;
    const on = theme.enabled && theme.type === "halloween";
    setHalloween(on);
    if (on) {
      root.dataset.season = "halloween";
    } else {
      delete root.dataset.season;
    }
    return () => {
      delete root.dataset.season;
    };
  }, []);

  return (
    <>
      {halloween ? <HalloweenBackdrop /> : null}
      {children}
    </>
  );
}

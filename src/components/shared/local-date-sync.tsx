"use client";

import * as React from "react";
import { localDateKey } from "@/lib/local-date";

const COOKIE = "st_local_date";

/**
 * Keeps a YYYY-MM-DD cookie in the browser's timezone so server actions
 * (streak / daily_activity) align with the student's calendar day.
 */
export function LocalDateSync() {
  React.useEffect(() => {
    const key = localDateKey();
    document.cookie = `${COOKIE}=${key}; path=/; max-age=172800; SameSite=Lax`;
  }, []);
  return null;
}

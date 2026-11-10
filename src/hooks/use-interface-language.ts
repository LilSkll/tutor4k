"use client";

import { useUIStore } from "@/stores";
import type { InterfaceLanguage } from "@/types";

/**
 * Live interface language for client UI.
 * The Zustand store is updated immediately in Settings and synced from the
 * server profile on layout mount — prefer it over stale server props.
 */
export function useInterfaceLanguage(
  serverFallback?: InterfaceLanguage,
): InterfaceLanguage {
  const storeLanguage = useUIStore((s) => s.interfaceLanguage);
  return storeLanguage ?? serverFallback ?? "ru";
}

export function useActiveCourseId(serverFallback?: string | null): string {
  const storeCourseId = useUIStore((s) => s.activeCourseId);
  // Prefer an explicit server/lesson courseId (homework ?courseId=, chapter page)
  // over a stale persisted store value so glosses/hints match the open lesson.
  const fromServer = serverFallback?.trim();
  if (fromServer) return fromServer;
  return storeCourseId || "spanish";
}

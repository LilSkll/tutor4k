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
  return storeCourseId || serverFallback || "spanish";
}

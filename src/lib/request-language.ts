import { headers } from "next/headers";
import type { InterfaceLanguage } from "@/types";

const SUPPORTED = new Set<InterfaceLanguage>(["ru", "en", "es", "de"]);

/**
 * Best-effort interface language for public RSC shells (auth/marketing).
 * Prefer explicit ?lang=, then Accept-Language; fall back to Russian.
 */
export async function getRequestInterfaceLanguage(
  preferred?: string | null,
): Promise<InterfaceLanguage> {
  const fromQuery = preferred?.trim().slice(0, 2).toLowerCase();
  if (fromQuery && SUPPORTED.has(fromQuery as InterfaceLanguage)) {
    return fromQuery as InterfaceLanguage;
  }

  const headerList = await headers();
  const raw = headerList.get("accept-language") ?? "";
  const tags = raw
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const tag of tags) {
    const primary = tag.slice(0, 2) as InterfaceLanguage;
    if (SUPPORTED.has(primary)) return primary;
  }

  return "ru";
}

import { headers } from "next/headers";
import type { InterfaceLanguage } from "@/types";

const SUPPORTED = new Set<InterfaceLanguage>(["ru", "en", "es", "de"]);

/**
 * Best-effort interface language for public RSC shells (auth/marketing).
 * Prefer Accept-Language; fall back to Russian (product default).
 */
export async function getRequestInterfaceLanguage(): Promise<InterfaceLanguage> {
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

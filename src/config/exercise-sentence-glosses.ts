import type { InterfaceLanguage } from "@/types";
import glosses from "@/config/exercise-sentence-glosses.json";

type GlossRow = Partial<Record<InterfaceLanguage, string>>;
const MAP = glosses as Record<string, GlossRow>;

function normalizeSpanishKey(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[¿?¡!.,…]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function lookupSpanishSentenceGloss(
  spanish: string,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  const trimmed = spanish.trim();
  const row =
    MAP[trimmed] ??
    MAP[normalizeSpanishKey(trimmed)] ??
    MAP[trimmed.toLowerCase()];
  if (!row) return null;
  return row[interfaceLanguage]?.trim() ?? null;
}

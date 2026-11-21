import type { InterfaceLanguage } from "@/types";
import curated from "./curated-question-glosses.json";

const MAP = curated as Record<
  string,
  Partial<Record<InterfaceLanguage, string>>
>;

function glossKeyVariants(question: string): string[] {
  const q = question.trim();
  if (!q) return [];
  const out = new Set<string>([q]);
  out.add(q.replace(/[.]+$/u, ""));
  out.add(q.replace(/[?]+$/u, "?"));
  out.add(`${q.replace(/[.?!]+$/u, "")}.`);
  out.add(`${q.replace(/[.?!]+$/u, "")}?`);
  // Collapse spaces around blanks
  out.add(q.replace(/\s*___+\s*/g, " ___ ").replace(/\s+/g, " ").trim());
  return [...out].filter(Boolean);
}

export function lookupCuratedQuestionGloss(
  question: string,
  lang: InterfaceLanguage,
): string | null {
  for (const key of glossKeyVariants(question)) {
    const row = MAP[key];
    const hit = row?.[lang]?.trim();
    if (hit) return hit;
  }
  return null;
}

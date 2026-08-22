import type { AIMessage, InterfaceLanguage } from "@/types";

export function asInterfaceLanguage(raw: unknown): InterfaceLanguage | null {
  if (raw === "ru" || raw === "en" || raw === "es" || raw === "de") return raw;
  return null;
}

export function asCourseId(raw: unknown): string | null {
  if (raw === "spanish" || raw === "english" || raw === "russian") return raw;
  return null;
}

export function asGrammarSlug(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const s = raw.trim().slice(0, 80);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)) return null;
  return s;
}

export function sanitizeTutorMessages(raw: AIMessage[]): AIMessage[] {
  return raw
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string",
    )
    .slice(-24)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, 4000),
    }))
    .filter((m) => m.content.trim().length > 0);
}

/** Accept a chapter slug only when it exists on the loaded course. */
export function resolveLessonSlug(
  raw: unknown,
  getTopic: (slug: string) => unknown,
): string | null {
  const slug = asGrammarSlug(raw);
  if (!slug) return null;
  return getTopic(slug) ? slug : null;
}

export function shouldUseStaticGrammarFallback(
  content: string,
  grounding: string | null | undefined,
): boolean {
  return Boolean(
    grounding &&
      (content.startsWith("😔") || content.startsWith("⚠️")),
  );
}

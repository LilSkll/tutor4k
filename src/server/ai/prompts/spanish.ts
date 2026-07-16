import type { PromptBuilderOptions } from "./registry";
import { buildUniversalPrompt } from "./universal";

const SPANISH_LEVEL_GUIDE = {
  A1: "A1 (Principiante): vocabulario básico, presente simple, artículos, ser/estar. Frases cortas.",
  A2: "A2 (Básico): pasado perfecto e indefinido, vocabulario cotidiano.",
  B1: "B1 (Intermedio): subjuntivo presente, imperativo, conversación fluida.",
  B2: "B2 (Avanzado): estilo indirecto, voz pasiva, matices.",
  C1: "C1 (Superior): perífrasis verbales, registros estilísticos, matices finos.",
} as const;

/** Spanish course system prompt — never used for other courses. */
export function buildSpanishPrompt(options: PromptBuilderOptions): string {
  return buildUniversalPrompt({
    level: options.level,
    interfaceLanguage: options.interfaceLanguage ?? "ru",
    userName: options.userName,
    retrievedContext: options.retrievedContext,
    learnerContext: options.learnerContext,
    targetLanguageName: "Spanish",
    targetLanguageCode: "es",
    textbookNames: "Дышлевая, Гонсалес-Алимова",
    examName: "DELE",
    levelGuide: SPANISH_LEVEL_GUIDE,
  });
}

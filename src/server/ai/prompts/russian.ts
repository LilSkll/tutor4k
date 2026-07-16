import type { PromptBuilderOptions } from "./registry";
import { buildUniversalPrompt } from "./universal";

const RUSSIAN_LEVEL_GUIDE = {
  A1: "A1: алфавит, базовая лексика, простые предложения.",
  A2: "A2: падежи, прошедшее время, повседневные темы.",
  B1: "B1: виды глагола, сложные предложения, дискуссии.",
  B2: "B2: причастия, деепричастия, стилистика.",
  C1: "C1: идиомы, литературный язык, тонкие оттенки.",
} as const;

/** Russian course system prompt — never used for other courses. */
export function buildRussianPrompt(options: PromptBuilderOptions): string {
  return buildUniversalPrompt({
    level: options.level,
    interfaceLanguage: options.interfaceLanguage ?? "ru",
    userName: options.userName,
    retrievedContext: options.retrievedContext,
    learnerContext: options.learnerContext,
    targetLanguageName: "Russian",
    targetLanguageCode: "ru",
    examName: "ТРКИ",
    levelGuide: RUSSIAN_LEVEL_GUIDE,
  });
}

import type { InterfaceLanguage } from "@/types";

/**
 * Models sometimes drop CJK tokens into otherwise-correct Russian/English
 * explanations (e.g. «выражения命令»). Strip and, when possible, replace
 * known pedagogical leaks with the right interface-language word.
 */

const CJK_RUN =
  /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]+/g;

/** Frequent Chinese glosses that leak into grammar explanations. */
const CJK_GLOSS: Record<
  string,
  Partial<Record<InterfaceLanguage, string>>
> = {
  命令: { ru: "приказов", en: "commands", es: "órdenes", de: "Befehlen" },
  请求: { ru: "просьб", en: "requests", es: "peticiones", de: "Bitten" },
  建议: { ru: "советов", en: "advice", es: "consejos", de: "Ratschlägen" },
  劝告: { ru: "советов", en: "advice", es: "consejos", de: "Ratschlägen" },
  禁止: { ru: "запретов", en: "prohibitions", es: "prohibiciones", de: "Verboten" },
  否定: { ru: "отрицания", en: "negation", es: "negación", de: "Verneinung" },
  肯定: { ru: "утверждения", en: "affirmation", es: "afirmación", de: "Bejahung" },
  动词: { ru: "глагола", en: "verb", es: "verbo", de: "Verbs" },
  名词: { ru: "существительного", en: "noun", es: "sustantivo", de: "Nomens" },
  形容词: { ru: "прилагательного", en: "adjective", es: "adjetivo", de: "Adjektivs" },
  语法: { ru: "грамматики", en: "grammar", es: "gramática", de: "Grammatik" },
  时态: { ru: "времени", en: "tense", es: "tiempo verbal", de: "Zeitform" },
  例句: { ru: "примера", en: "example", es: "ejemplo", de: "Beispiels" },
  注意: { ru: "Важно", en: "Note", es: "Nota", de: "Hinweis" },
};

export function containsCjk(text: string): boolean {
  CJK_RUN.lastIndex = 0;
  return CJK_RUN.test(text);
}

/**
 * Remove / replace CJK characters that must never appear in tutor replies
 * for ru/en/es/de interface languages.
 */
export function scrubScriptLeaks(
  text: string,
  interfaceLanguage: InterfaceLanguage = "ru",
): string {
  if (!text || !containsCjk(text)) return text;

  let out = text;
  for (const [cjk, map] of Object.entries(CJK_GLOSS)) {
    if (!out.includes(cjk)) continue;
    const repl = map[interfaceLanguage] ?? map.en ?? "";
    // Keep word boundaries: «выражения命令» → «выражения приказов»
    out = out.split(cjk).join(repl ? ` ${repl} ` : "");
  }

  out = out.replace(CJK_RUN, "");
  // Clean artifacts left by stripping mid-word: «выражения , просьб»
  out = out
    .replace(/([^\s])\s+([,.;:!?])/g, "$1$2")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ \n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");

  return out;
}

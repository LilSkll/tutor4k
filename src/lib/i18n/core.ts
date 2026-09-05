import type { InterfaceLanguage } from "@/types";
import type { Dictionary } from "./types";

export type { Dictionary };

/** Translate a dot-key. Supports `{var}` interpolation. */
export function createTranslate(
  dictionaries: Record<InterfaceLanguage, Dictionary>,
) {
  return function translate(
    key: string,
    lang: InterfaceLanguage,
    vars?: Record<string, string | number>,
  ): string {
    let text =
      dictionaries[lang]?.[key] ??
      (lang === "de" ? dictionaries.en[key] : undefined) ??
      dictionaries.ru[key] ??
      key;
    if (vars) {
      for (const [name, value] of Object.entries(vars)) {
        text = text.replace(new RegExp(`\\{${name}\\}`, "g"), String(value));
      }
    }
    return text;
  };
}

export function mergeDicts(
  base: Record<InterfaceLanguage, Dictionary>,
  extra: Record<InterfaceLanguage, Dictionary>,
): Record<InterfaceLanguage, Dictionary> {
  return {
    ru: { ...base.ru, ...extra.ru },
    en: { ...base.en, ...extra.en },
    es: { ...base.es, ...extra.es },
    de: { ...base.de, ...extra.de },
  };
}

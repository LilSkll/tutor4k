import type { InterfaceLanguage } from "@/types";
import { createTranslate } from "./i18n/core";
import { STUDENT_DICTS } from "./i18n/student-dicts";
import type { Dictionary } from "./i18n/types";

/**
 * Student / auth / landing dictionary.
 * Teacher Studio strings live in `i18n/with-teacher` so students do not download them.
 */
export const translate = createTranslate(STUDENT_DICTS);

export function getDictionary(lang: InterfaceLanguage): Dictionary {
  return STUDENT_DICTS[lang] ?? (lang === "de" ? STUDENT_DICTS.en : STUDENT_DICTS.ru);
}

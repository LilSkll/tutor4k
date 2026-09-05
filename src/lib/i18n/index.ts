import type { InterfaceLanguage } from "@/types";
import { createTranslate } from "./core";
import { STUDENT_DICTS } from "./student-dicts";
import type { Dictionary } from "./types";

/**
 * Student / auth / landing dictionary.
 * Teacher Studio strings live in `./with-teacher` so students do not download them.
 */
export const translate = createTranslate(STUDENT_DICTS);

export function getDictionary(lang: InterfaceLanguage): Dictionary {
  return STUDENT_DICTS[lang] ?? (lang === "de" ? STUDENT_DICTS.en : STUDENT_DICTS.ru);
}

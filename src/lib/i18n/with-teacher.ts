import type { InterfaceLanguage } from "@/types";
import { createTranslate, mergeDicts } from "./core";
import { STUDENT_DICTS } from "./student-dicts";
import { TEACHER_DICTS } from "./teacher-dicts";
import type { Dictionary } from "./types";

const dictionaries = mergeDicts(STUDENT_DICTS, TEACHER_DICTS);

/** Student + Teacher Studio dictionary (teacher routes only). */
export const translate = createTranslate(dictionaries);

export function getDictionary(lang: InterfaceLanguage): Dictionary {
  return dictionaries[lang] ?? (lang === "de" ? dictionaries.en : dictionaries.ru);
}

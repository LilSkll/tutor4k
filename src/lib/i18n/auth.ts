import type { InterfaceLanguage } from "@/types";
import { createTranslate } from "./core";
import { AUTH_DICTS } from "./auth-dicts";
import type { Dictionary } from "./types";

/**
 * Slim dictionary for login/signup/forgot/reset + cookie banner.
 * Keeps the full student catalog out of auth First Load JS.
 */
export const translate = createTranslate(AUTH_DICTS);

export function getDictionary(lang: InterfaceLanguage): Dictionary {
  return AUTH_DICTS[lang] ?? (lang === "de" ? AUTH_DICTS.en : AUTH_DICTS.ru);
}

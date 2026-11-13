import { isAuthErrorCode } from "@/lib/auth-errors";
import { translate } from "@/lib/i18n/auth";
import type { InterfaceLanguage } from "@/types";

/** Localize ?error= when it is an auth.* code; otherwise show legacy prose as-is. */
export function resolveAuthErrorMessage(
  error: string | undefined,
  language: InterfaceLanguage,
): string | undefined {
  if (!error) return undefined;
  if (isAuthErrorCode(error)) {
    return translate(error, language);
  }
  // Unknown code shaped like auth.error.* — fall back to generic unknown.
  if (error.startsWith("auth.error.")) {
    return translate("auth.error.unknown", language);
  }
  return error;
}

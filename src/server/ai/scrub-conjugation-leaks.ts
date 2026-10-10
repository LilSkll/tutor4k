/**
 * Post-process tutor replies that list wrong Spanish Imperativo forms
 * as if they were the answer key (common LLM slip for vosotros / usted).
 *
 * Negative imperative (no + subjuntivo) is left alone.
 */

const IMPERATIVO_HINT =
  /imperativ|повелительн|afirmativ|утвердител|negativ|отрицател/i;

/**
 * Fix affirmative Imperativo answer-key slips. Safe no-op if the reply
 * is not about Imperativo / commands.
 */
export function scrubSpanishImperativoLeaks(text: string): string {
  if (!text || !IMPERATIVO_HINT.test(text)) return text;

  let out = text;

  // vosotros: habléis / habláis / hablais → hablad (keep "no habléis")
  out = out.replace(
    /(\bno\s+)?(\**vosotros(?:\/as)?\**\s*[:：]\s*\**)(habl[eéáa]is)(\**)/gi,
    (full, noPrefix: string | undefined, lead: string, _form: string, trail: string) => {
      if (noPrefix) return full;
      return `${lead}hablad${trail}`;
    },
  );

  // vosotros: coméis / comeis / comáis → comed (keep "no comáis")
  out = out.replace(
    /(\bno\s+)?(\**vosotros(?:\/as)?\**\s*[:：]\s*\**)(com[eéáa]is)(\**)/gi,
    (full, noPrefix: string | undefined, lead: string, _form: string, trail: string) => {
      if (noPrefix) return full;
      return `${lead}comed${trail}`;
    },
  );

  // vosotros: vivís / viváis → vivid (keep "no viváis")
  out = out.replace(
    /(\bno\s+)?(\**vosotros(?:\/as)?\**\s*[:：]\s*\**)(viv(?:ís|is|[aá]is))(\**)/gi,
    (full, noPrefix: string | undefined, lead: string, _form: string, trail: string) => {
      if (noPrefix) return full;
      return `${lead}vivid${trail}`;
    },
  );

  // usted: hables / comas / vivas → hable / coma / viva
  // (tú-subjuntivo endings are never usted Imperativo)
  out = out.replace(/(\**usted\**\s*[:：]\s*\**)hables(\**)/gi, "$1hable$2");
  out = out.replace(/(\**usted\**\s*[:：]\s*\**)comas(\**)/gi, "$1coma$2");
  out = out.replace(/(\**usted\**\s*[:：]\s*\**)vivas(\**)/gi, "$1viva$2");

  return out;
}

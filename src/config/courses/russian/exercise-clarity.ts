/**
 * Product-clarity gates for RKI exercises (chapters + revision pool).
 * Unclear items must not reach the learner.
 */

export type ClarityDraft = {
  type?: string;
  question?: string;
  answer?: string;
  instruction?: string;
  options?: string[];
};

/** Instruction prints a closed menu that includes the answer. */
export function hasSlashAnswerSpoiler(ex: ClarityDraft): boolean {
  const inst = (ex.instruction ?? "").trim();
  const a = (ex.answer ?? "").trim();
  if (!inst || !a || !/[\/·|]/.test(inst)) return false;
  const parts = inst.split(/[/·|]/).map((p) => p.trim().toLowerCase());
  return parts.includes(a.toLowerCase());
}

/** «Глагол читать» / bare lemma spoilers on fills. */
export function hasVerbLemmaInstructionSpoiler(ex: ClarityDraft): boolean {
  const inst = (ex.instruction ?? "").trim();
  if (/^Глагол\s+\S+/iu.test(inst)) return true;
  if (/^Инфинитив:\s*\S+/iu.test(inst)) return true;
  if (/^Запрет:\s*\S+/iu.test(inst)) return true;
  // «Творительный падеж от «сохранность»» / «СВ от «открывать»»
  if (/\bот\s+[«"]?\p{L}+[»"]?\s*$/iu.test(inst) && /падеж|вид|инфинитив/iu.test(inst)) {
    return true;
  }
  return false;
}

/** Fill with no usable cue: generic «Вставьте слово» on a sparse stem. */
export function hasCueLessFillBlank(ex: ClarityDraft): boolean {
  if (ex.type !== "fill_blank") return false;
  const inst = (ex.instruction ?? "").trim();
  const q = (ex.question ?? "").trim();
  if (!/^Вставьте слово$/iu.test(inst)) return false;
  // Sparse stems: blank is almost the whole meaning
  if (/^(___|Сейчас ___)\.?$/u.test(q)) return true;
  if (/^Где ___?\??$/u.test(q)) return true;
  if (/^___ начинается/u.test(q) && !/\(/u.test(q)) return true;
  return false;
}

/** MC instruction that is just the answer word / near-duplicate. */
export function hasAnswerEchoInstruction(ex: ClarityDraft): boolean {
  if (ex.type !== "multiple_choice") return false;
  const inst = (ex.instruction ?? "").trim().toLowerCase();
  const a = (ex.answer ?? "").trim().toLowerCase();
  if (!inst || !a) return false;
  if (inst === a) return true;
  // One-word instruction matching a conjugated verb answer
  if (!/\s/.test(inst) && a.startsWith(inst.slice(0, Math.min(4, inst.length)))) {
    const verbish = /^(читает|слушает|пишет|смотрит|делает|учимся|учатся|имеем)$/iu;
    if (verbish.test(a) && inst.length >= 4) return true;
  }
  return false;
}

export function russianClarityIssues(ex: ClarityDraft): string[] {
  const issues: string[] = [];
  if (hasSlashAnswerSpoiler(ex)) issues.push("slash_spoiler");
  if (hasVerbLemmaInstructionSpoiler(ex)) issues.push("lemma_spoiler");
  if (hasCueLessFillBlank(ex)) issues.push("cue_less_fill");
  if (hasAnswerEchoInstruction(ex)) issues.push("answer_echo_inst");
  if (/^Вставьте:\s*\S+/iu.test((ex.instruction ?? "").trim())) {
    issues.push("vstavte_lemma");
  }
  return issues;
}

export function isRussianExerciseClear(ex: ClarityDraft): boolean {
  return russianClarityIssues(ex).length === 0;
}

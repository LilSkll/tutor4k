import { isGrammarCategoryInstruction } from "@/lib/exercise-quality";
import type { StaticExercise } from "@/types";

const BY_TYPE: Record<string, string> = {
  multiple_choice: "Выберите правильный вариант",
  fill_blank: "Заполните пропуск",
  translation: "Переведите предложение",
  error_correction: "Исправьте ошибку",
  sentence_building: "Соберите предложение",
};

/** Slash menus that list the answer among options. */
export function hasSlashAnswerSpoilerInstruction(
  instruction: string | undefined,
  answer: string | undefined,
): boolean {
  const inst = (instruction ?? "").trim();
  const a = (answer ?? "").trim();
  if (!inst || !a || !/[\/·|]/.test(inst)) return false;
  return inst
    .split(/[/·|]/)
    .map((p) => p.trim().toLowerCase())
    .includes(a.toLowerCase());
}

/**
 * Replace opaque grammar-tag / slash-spoiler instructions with a clear
 * learner task. Used for EN/ES banks (revision pulls the same banks).
 */
export function normalizeLearnerInstruction(
  type: string | undefined,
  instruction: string | undefined,
  answer?: string,
): string | undefined {
  const inst = (instruction ?? "").trim();
  if (!inst) return BY_TYPE[type ?? ""] ?? instruction;

  if (hasSlashAnswerSpoilerInstruction(inst, answer)) {
    return BY_TYPE[type ?? ""] ?? "Выберите правильный вариант";
  }

  if (isGrammarCategoryInstruction(inst)) {
    return BY_TYPE[type ?? ""] ?? "Выполните задание";
  }

  // Generic pack fillers with no task verb
  if (/^(Fill in the blank|Complete|Arrange the words|Build a .+)$/i.test(inst)) {
    return BY_TYPE[type ?? ""] ?? inst;
  }

  return instruction;
}

export function withNormalizedInstructions<T extends StaticExercise>(
  exercises: T[],
): T[] {
  return exercises.map((ex) => {
    const next = normalizeLearnerInstruction(ex.type, ex.instruction, ex.answer);
    if (next === ex.instruction) return ex;
    return { ...ex, instruction: next };
  });
}

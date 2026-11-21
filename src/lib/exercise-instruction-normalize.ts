import { isGrammarCategoryInstruction } from "@/lib/exercise-quality";

/** Draft or static — instruction fields (+ SB options) for normalize. */
type InstructionNormalizable = {
  type?: string;
  instruction?: string;
  answer?: string;
  question?: string;
  options?: string[];
  acceptableAnswers?: string[];
  explanation?: string;
};

const BY_TYPE: Record<string, string> = {
  multiple_choice: "Выберите правильный вариант",
  fill_blank: "Заполните пропуск",
  translation: "Переведите предложение",
  error_correction: "Исправьте ошибку",
  sentence_building: "Соберите предложение",
};

const BUILD_QUESTION = "Соберите вопрос";

const GENERIC_BUILD_SENTENCE =
  /^(build the sentence|build the sentence from the words|arrange the words|соберите предложение|составьте предложение|составьте предложение из слов|forme la frase|ordena las palabras|bilden sie den satz|ordnen sie die wörter)$/i;

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

export function instructionSignalsQuestion(instruction: string | undefined): boolean {
  return /вопрос|question|pregunta|frage|interrogativ|yes\/no|yes-no|соберите вопрос|build the question|haz la pregunta|bilden sie die frage|forme la pregunta|make.*(question|вопрос)|составьте вопрос/i.test(
    instruction ?? "",
  );
}

/**
 * True when the expected answer is a yes/no or wh-question (not a wh-cleft
 * statement and not an inverted conditional).
 *
 * Same word tiles often build both «She is from Spain» and «Is she from Spain» —
 * without a question cue learners assemble the statement and get marked wrong.
 */
export function isInterrogativeSentenceBuildingAnswer(
  answer: string | undefined,
  question?: string,
): boolean {
  const ans = (answer ?? "").trim();
  if (!ans) return false;
  const q = (question ?? "").trim();
  const combined = `${ans} ${q}`;
  if (/[?¿]/.test(combined)) {
    // Punctuation wins, except Spanish clefts wrongly tagged (rare).
    if (/^Es\b/i.test(ans.replace(/^¿/, "")) && !/[?¿]/.test(ans) && !/[?¿]/.test(q)) {
      return false;
    }
    return true;
  }

  const head = ans.replace(/^[¿¡]\s*/, "");
  // Inverted conditionals: Had I known… / Were it not… / Should you require…
  if (
    /^(Had|Were|Should)\b/i.test(head) &&
    /\b(would|wouldn't|wouldn’t)\b/i.test(ans)
  ) {
    return false;
  }
  // Wh-cleft statements: What I need is rest
  if (/^What\b.+\b(is|was|were)\b/i.test(head) && !/\?/.test(ans)) {
    return false;
  }
  // Spanish ser/estar statements that start with Es/Estoy… (not questions)
  if (
    /^(Es|Son|Soy|Eres|Somos|Sois|Estoy|Estás|Está|Estamos|Estáis|Están|Eres)\b/i.test(
      head,
    )
  ) {
    return false;
  }

  return /^(Am|Is|Are|Was|Were|Do|Does|Did|Have|Has|Had|Can|Could|Will|Would|Shall|Should|May|Might|Must|Bin|Bist|Ist|Sind|Seid|War|Waren|Habe|Hast|Hat|Haben|Habt|Kann|Kannst|Können|Könnt|Muss|Musst|Müssen|Müsst|Wird|Wirst|Werden|Werdet|Was|Wo|Wann|Warum|Wer|Wie|Welch|¿|What|Where|When|Why|Who|How|Which|Whose)\b/i.test(
    head,
  );
}

function withTerminalQuestionMark(answer: string): string {
  const a = answer.trim();
  if (!a || /[?¿]\s*$/.test(a) || a.startsWith("¿")) return a;
  // Dialogue / multi-clause already punctuated elsewhere
  if (/[?¿]/.test(a)) return a;
  return `${a}?`;
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

function clarifySentenceBuildingQuestion<T extends InstructionNormalizable>(
  ex: T,
  instruction: string | undefined,
): T {
  if (ex.type !== "sentence_building") {
    return instruction === ex.instruction ? ex : { ...ex, instruction };
  }
  if (!isInterrogativeSentenceBuildingAnswer(ex.answer, ex.question)) {
    return instruction === ex.instruction ? ex : { ...ex, instruction };
  }

  const nextInst =
    instructionSignalsQuestion(instruction) &&
    !GENERIC_BUILD_SENTENCE.test((instruction ?? "").trim())
      ? instruction
      : BUILD_QUESTION;

  const rawAnswer = (ex.answer ?? "").trim();
  const nextAnswer = withTerminalQuestionMark(rawAnswer);
  const accept = new Set<string>(ex.acceptableAnswers ?? []);
  if (rawAnswer) accept.add(rawAnswer);
  if (nextAnswer && nextAnswer !== rawAnswer) accept.add(nextAnswer);
  // Common learner variants without ?
  accept.add(rawAnswer.replace(/\?\s*$/, "").trim());

  const next: T = {
    ...ex,
    instruction: nextInst,
    answer: nextAnswer || ex.answer,
    acceptableAnswers: [...accept].filter(Boolean),
  };

  if (
    next.instruction === ex.instruction &&
    next.answer === ex.answer &&
    JSON.stringify(next.acceptableAnswers) ===
      JSON.stringify(ex.acceptableAnswers ?? [])
  ) {
    return ex;
  }
  return next;
}

function clarifyTranslationQuestion<T extends InstructionNormalizable>(
  ex: T,
  instruction: string | undefined,
): T {
  if (ex.type !== "translation") {
    return instruction === ex.instruction ? ex : { ...ex, instruction };
  }
  if (!isInterrogativeSentenceBuildingAnswer(ex.answer, ex.question)) {
    return instruction === ex.instruction ? ex : { ...ex, instruction };
  }

  let nextInst = instruction;
  if (
    !instructionSignalsQuestion(instruction) &&
    /переведите|translate/i.test(instruction ?? "")
  ) {
    nextInst = "Переведите вопрос";
  }

  const rawAnswer = (ex.answer ?? "").trim();
  const nextAnswer = withTerminalQuestionMark(rawAnswer);
  const accept = new Set<string>(ex.acceptableAnswers ?? []);
  if (rawAnswer) accept.add(rawAnswer);
  if (nextAnswer && nextAnswer !== rawAnswer) accept.add(nextAnswer);
  accept.add(rawAnswer.replace(/\?\s*$/, "").trim());

  // Fix accidental «?.» on Russian/L1 stems
  let nextQuestion = ex.question;
  if (typeof nextQuestion === "string" && /\?\.\s*$/.test(nextQuestion)) {
    nextQuestion = nextQuestion.replace(/\?\.\s*$/, "?");
  }

  const next: T = {
    ...ex,
    instruction: nextInst,
    answer: nextAnswer || ex.answer,
    question: nextQuestion,
    acceptableAnswers: [...accept].filter(Boolean),
  };

  if (
    next.instruction === ex.instruction &&
    next.answer === ex.answer &&
    next.question === ex.question &&
    JSON.stringify(next.acceptableAnswers) ===
      JSON.stringify(ex.acceptableAnswers ?? [])
  ) {
    return ex;
  }
  return next;
}

export function withNormalizedInstructions<T extends InstructionNormalizable>(
  exercises: T[],
): T[] {
  return exercises.map((ex) => {
    const normalizedInst = normalizeLearnerInstruction(
      ex.type,
      ex.instruction,
      ex.answer,
    );
    const afterSb = clarifySentenceBuildingQuestion(ex, normalizedInst);
    return clarifyTranslationQuestion(afterSb, afterSb.instruction);
  });
}

/** Shared helpers for exercise pack generation (~20 items per type). */

export function mc(q, options, answer, instruction, explanation, g) {
  return {
    type: "multiple_choice",
    question: q,
    options,
    answer,
    instruction,
    explanation,
    grammarTopic: g,
  };
}

export function fb(q, answer, instruction, explanation, g, acceptableAnswers) {
  const acc =
    acceptableAnswers ??
    (answer
      ? [answer[0].toUpperCase() + answer.slice(1), answer]
      : ["—", ""]);
  return {
    type: "fill_blank",
    question: q,
    answer,
    acceptableAnswers: acc,
    instruction,
    explanation,
    grammarTopic: g,
  };
}

export function tr(q, answer, instruction, explanation, g, acceptableAnswers = []) {
  return {
    type: "translation",
    question: q,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
    grammarTopic: g,
  };
}

export function ec(q, answer, instruction, explanation, g, acceptableAnswers = []) {
  return {
    type: "error_correction",
    question: q,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
    grammarTopic: g,
  };
}

export function sb(tokens, answer, instruction, explanation, g, acceptableAnswers = []) {
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options: tokens,
    answer,
    acceptableAnswers,
    instruction,
    explanation,
    grammarTopic: g,
  };
}

export function pack(mcA, fbA, trA, ecA, sbA, perType = 20) {
  return {
    multiple_choice: mcA.slice(0, perType),
    fill_blank: fbA.slice(0, perType),
    translation: trA.slice(0, perType),
    error_correction: ecA.slice(0, perType),
    sentence_building: sbA.slice(0, perType),
  };
}

/** Turn a curated bank item into a generation seed. */
export function exerciseToSeed(ex, lang = "spanish") {
  const grammarTopic = ex.grammarTopic ?? "review";
  const explanation = ex.explanation ?? "";
  const instruction = ex.instruction ?? "";
  const ans = ex.answer?.trim() ? ex.answer.trim() : "—";

  if (ex.type === "multiple_choice") {
    return {
      q: ex.question,
      ans,
      options: ex.options ?? [ans],
      explanation,
      ru: instruction,
      es: ex.answer,
      en: ex.answer,
      grammarTopic,
    };
  }

  if (ex.type === "fill_blank") {
    const filled = ex.question.replace(/___+/g, ans);
    return {
      q: ex.question,
      ans,
      options: [ans, ...(ex.acceptableAnswers ?? [])].slice(0, 4),
      explanation,
      ru: instruction,
      es: filled,
      en: filled,
      grammarTopic,
    };
  }

  if (ex.type === "translation") {
    const target = ex.answer;
    return {
      q: ex.question,
      ans: target.split(/\s+/)[0] ?? target,
      options: [target.split(/\s+/)[0], target.split(/\s+/)[1], "—", "—"].filter(Boolean),
      explanation,
      ru: ex.question,
      es: target,
      en: target,
      acc: [target, target.toLowerCase(), ...(ex.acceptableAnswers ?? [])],
      grammarTopic,
    };
  }

  if (ex.type === "error_correction") {
    return {
      q: ex.question,
      ans: ex.answer.split(/\s+/)[0] ?? ex.answer,
      options: [ex.answer, ex.question.split(/\s+/)[0], "—", "—"],
      explanation,
      ru: instruction,
      es: ex.answer,
      en: ex.answer,
      acc: [ex.answer, ...(ex.acceptableAnswers ?? [])],
      grammarTopic,
    };
  }

  if (ex.type === "sentence_building") {
    const tokens = ex.options?.length
      ? ex.options
      : ex.answer.split(/\s+/).filter(Boolean);
    return {
      q: ex.question,
      ans: tokens[0] ?? ex.answer,
      options: tokens,
      explanation,
      ru: instruction,
      es: ex.answer,
      en: ex.answer,
      tokens,
      answer: ex.answer,
      grammarTopic,
    };
  }

  return null;
}

const CYRILLIC_RE = /[\u0400-\u04FF]/;

function cleanIndexMarks(s) {
  return String(s ?? "")
    .replace(/\s*\[\d+\]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.?!])$/u, "$1")
    .trim();
}

function normKey(s) {
  return cleanIndexMarks(s)
    .replace(/[¿?¡!.,;:'"«»„""''`´…()]/g, "")
    .replace(/[-–—_/\\|→]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * Build a real EC pair: wrong token substituted into a full target sentence.
 * Never invents Cyrillic prompts or `[n]` markers into graded answers.
 */
function buildErrorCorrection(s, options, lang, topic) {
  const wrong = options.find((o) => o !== s.ans && o !== "—" && o !== `${s.ans}?`);
  if (!wrong || !s.ans) return null;

  const blankStem = cleanIndexMarks(s.q || "");
  let broken;
  let filled;

  if (/___+/.test(blankStem)) {
    filled = blankStem.replace(/___+/g, s.ans);
    broken = blankStem.replace(/___+/g, wrong);
  } else {
    const target = cleanIndexMarks(
      lang === "english" ? s.en || s.acc?.[0] || s.es || "" : s.es || s.en || s.acc?.[0] || "",
    );
    if (!target || CYRILLIC_RE.test(target)) return null;
    const re = new RegExp(`\\b${s.ans.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    if (!re.test(target)) return null;
    filled = target;
    broken = target.replace(re, wrong);
  }

  broken = cleanIndexMarks(broken);
  filled = cleanIndexMarks(filled);
  if (!broken || !filled || normKey(broken) === normKey(filled)) return null;
  if (CYRILLIC_RE.test(broken) || CYRILLIC_RE.test(filled)) return null;

  return ec(
    broken,
    filled,
    lang === "english" ? "Correct the mistake" : "Исправьте ошибку",
    lang === "english"
      ? `Use «${s.ans}», not «${wrong}».`
      : `Нужно «${s.ans}», не «${wrong}».`,
    s.grammarTopic,
    [filled, filled.toLowerCase()],
  );
}

export function chapterFromSeeds(g, topic, seeds, lang = "spanish", perType = 20) {
  const mcA = [];
  const fbA = [];
  const trA = [];
  const ecA = [];
  const sbA = [];

  const sbSeeds = seeds.filter((s) => Array.isArray(s.tokens) && s.tokens.length >= 3);
  const sbPool = sbSeeds.length > 0 ? sbSeeds : seeds;
  const seenEc = new Set();

  for (let i = 0; i < perType; i++) {
    const s = seeds[i % seeds.length];
    const sbSeed = sbPool[i % sbPool.length];
    const n = i + 1;
    // Keep stems stable — do not inject `[n]` into learner-facing prompts/answers.
    const q = cleanIndexMarks(s.q);
    const opts = s.options || [s.ans, "—", "—", "—"];
    const options = [...new Set([s.ans, ...opts.filter((o) => o !== s.ans)])].slice(
      0,
      4,
    );
    while (options.length < 4) options.push(`${s.ans}?`);

    mcA.push(
      mc(
        q.includes("___") ? q : `${q} (#${n})`.replace(/ \(#\d+\) \(#\d+\)/, ` (#${n})`),
        options,
        s.ans,
        lang === "english" ? "Choose the correct answer" : "Выберите правильный ответ",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
      ),
    );

    fbA.push(
      fb(
        q.includes("___") ? q : `Completa (${topic}): ___`,
        s.ans,
        lang === "english" ? "Fill in the blank" : "Заполните пропуск",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
      ),
    );

    const fullTarget = cleanIndexMarks(
      lang === "english" ? s.en || s.acc?.[0] || s.es || s.ans : s.es || s.acc?.[0] || s.ans,
    );

    const trPrompt = cleanIndexMarks(s.ru || s.q);

    trA.push(
      tr(
        trPrompt,
        fullTarget,
        lang === "english" ? "Translate to English" : "Переведите на испанский",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
        s.acc || [fullTarget.toLowerCase(), s.ans],
      ),
    );

    const ecItem = buildErrorCorrection(s, options, lang, topic);
    if (ecItem) {
      const key = normKey(ecItem.question);
      if (!seenEc.has(key)) {
        seenEc.add(key);
        ecA.push(ecItem);
      }
    }

    const tokens =
      sbSeed.tokens ??
      (sbSeed.answer || fullTarget)
        .replace(/[¿?¡!.]/g, "")
        .split(/\s+/)
        .filter(Boolean);
    const toks = tokens.length >= 3 ? tokens : ["Por", "favor", "usa", sbSeed.ans];
    const sbAnswer = sbSeed.answer || toks.join(" ");

    sbA.push(
      sb(
        toks,
        sbAnswer,
        lang === "english" ? "Build the sentence" : "Составьте предложение",
        sbSeed.explanation || `${topic}: порядок слов.`,
        g,
        [sbAnswer.toLowerCase(), ...(sbSeed.acc ?? [])],
      ),
    );
  }

  // Top up EC from remaining seeds if the first pass was thin
  for (let i = 0; ecA.length < perType && i < seeds.length * 3; i++) {
    const s = seeds[i % seeds.length];
    const opts = s.options || [s.ans, "—", "—", "—"];
    const options = [...new Set([s.ans, ...opts.filter((o) => o !== s.ans)])].slice(0, 4);
    const ecItem = buildErrorCorrection(s, options, lang, topic);
    if (!ecItem) continue;
    const key = normKey(ecItem.question);
    if (seenEc.has(key)) continue;
    seenEc.add(key);
    ecA.push(ecItem);
  }

  return pack(mcA, fbA, trA, ecA, sbA, perType);
}

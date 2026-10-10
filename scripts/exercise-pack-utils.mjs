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
      // Do not leak grammar-tag instructions into translation prompts.
      ru: CYRILLIC_RE.test(String(ex.question || "")) ? "" : "",
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
    // Never put the SB instruction into `ru` — chapterFromSeeds would
    // turn "Соберите фразу с muy" / "Demasiado + adj." into fake translations.
    const ruPrompt =
      CYRILLIC_RE.test(String(ex.question || "")) && !/\s*\/\s*/.test(ex.question || "")
        ? ex.question
        : "";
    return {
      q: ex.question,
      ans: tokens[0] ?? ex.answer,
      options: tokens,
      explanation,
      ru: ruPrompt,
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

function fullTargetSentence(s, lang) {
  const raw =
    lang === "english"
      ? s.en || s.acc?.[0] || s.es || ""
      : s.es || s.en || s.acc?.[0] || "";
  const t = cleanIndexMarks(raw);
  if (!t || CYRILLIC_RE.test(t)) return "";
  return t;
}

/** Replace the answer token in a full sentence with ___ for MC/FB stems. */
function blankOneToken(sentence, ans) {
  if (!sentence || !ans) return "";
  const re = new RegExp(`\\b${String(ans).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  if (!re.test(sentence)) return "";
  return sentence.replace(re, "___");
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

  if (!seeds.length) {
    return pack(mcA, fbA, trA, ecA, sbA, perType);
  }

  const sbSeeds = seeds.filter((s) => Array.isArray(s.tokens) && s.tokens.length >= 3);
  const sbPool = sbSeeds.length > 0 ? sbSeeds : seeds;
  const seenEc = new Set();
  const usedTargets = new Set(); // finished target sentence → one type only

  const targetKey = (s) =>
    normKey(
      lang === "english"
        ? s.en || s.acc?.[0] || s.es || s.answer || s.ans || ""
        : s.es || s.acc?.[0] || s.answer || s.ans || "",
    );

  // Offset seeds per type so the same seed index does not flood all 5 types.
  for (let i = 0; i < perType * seeds.length && mcA.length < perType; i++) {
    const s = seeds[i % seeds.length];
    const tk = targetKey(s);
    if (tk && usedTargets.has(tk)) continue;
    const q = cleanIndexMarks(s.q);
    const opts = s.options || [s.ans, "—", "—", "—"];
    const options = [...new Set([s.ans, ...opts.filter((o) => o !== s.ans)])].slice(
      0,
      4,
    );
    while (options.length < 4) options.push(`${s.ans}?`);
    const stem = q.includes("___")
      ? q
      : fullTargetSentence(s, lang)
        ? blankOneToken(fullTargetSentence(s, lang), s.ans) || q
        : q;
    mcA.push(
      mc(
        stem,
        options,
        s.ans,
        lang === "english" ? "Choose the correct answer" : "Выберите правильный ответ",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
      ),
    );
    if (tk) usedTargets.add(tk);
  }

  for (let i = 0; i < perType * seeds.length && fbA.length < perType; i++) {
    const s = seeds[(i + 1) % seeds.length];
    const tk = targetKey(s);
    if (tk && usedTargets.has(tk)) continue;
    const q = cleanIndexMarks(s.q);
    const fbStem =
      q.includes("___")
        ? q
        : blankOneToken(fullTargetSentence(s, lang), s.ans);
    if (!fbStem || !/___+/.test(fbStem) || /^(Completa|Complete)\b/i.test(fbStem)) {
      continue;
    }
    fbA.push(
      fb(
        fbStem,
        s.ans,
        lang === "english" ? "Fill in the blank" : "Заполните пропуск",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
      ),
    );
    if (tk) usedTargets.add(tk);
  }

  for (let i = 0; i < perType * seeds.length && trA.length < perType; i++) {
    const s = seeds[(i + 2) % seeds.length];
    const fullTarget = cleanIndexMarks(
      lang === "english" ? s.en || s.acc?.[0] || s.es || s.ans : s.es || s.acc?.[0] || s.ans,
    );
    const trPrompt = cleanIndexMarks(s.ru || "");
    const trLooksMeta =
      !trPrompt ||
      /\+\s*(adj|adv|verb|noun|subj)\b/i.test(trPrompt) ||
      /^(Соберите|Составьте|Выберите|Заполните|Исправьте|Переведите|Build|Choose|Fill|Complete|Rewrite|Fix)(\s|$)/i.test(
        trPrompt,
      ) ||
      /^(Наречие|Прилагательное|Существительное|Глагол|Слово|Форма|Конструкция)(\s|$|[«"])/i.test(
        trPrompt,
      ) ||
      (lang === "spanish" && !CYRILLIC_RE.test(trPrompt)) ||
      (lang === "english" && !CYRILLIC_RE.test(trPrompt) && trPrompt.split(/\s+/).length < 3);
    if (trLooksMeta || !fullTarget || CYRILLIC_RE.test(fullTarget)) continue;
    const tk = normKey(fullTarget);
    if (tk && usedTargets.has(tk)) continue;
    trA.push(
      tr(
        trPrompt,
        fullTarget,
        lang === "english" ? "Translate to English" : "Переведите на испанский",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
        s.acc || [fullTarget.toLowerCase(), fullTarget],
      ),
    );
    if (tk) usedTargets.add(tk);
  }

  for (let i = 0; i < perType * seeds.length && ecA.length < perType; i++) {
    const s = seeds[(i + 3) % seeds.length];
    const opts = s.options || [s.ans, "—", "—", "—"];
    const options = [...new Set([s.ans, ...opts.filter((o) => o !== s.ans)])].slice(0, 4);
    const ecItem = buildErrorCorrection(s, options, lang, topic);
    if (!ecItem) continue;
    const key = normKey(ecItem.question);
    const tk = normKey(ecItem.answer);
    if (seenEc.has(key) || (tk && usedTargets.has(tk))) continue;
    seenEc.add(key);
    if (tk) usedTargets.add(tk);
    ecA.push(ecItem);
  }

  for (let i = 0; i < perType * sbPool.length && sbA.length < perType; i++) {
    const sbSeed = sbPool[(i + 4) % sbPool.length];
    const fullTarget = cleanIndexMarks(
      sbSeed.answer ||
        (lang === "english"
          ? sbSeed.en || sbSeed.acc?.[0] || sbSeed.es || sbSeed.ans
          : sbSeed.es || sbSeed.acc?.[0] || sbSeed.ans) ||
        "",
    );
    const tokens =
      sbSeed.tokens ??
      fullTarget
        .replace(/[¿?¡!.]/g, "")
        .split(/\s+/)
        .filter(Boolean);
    const toks = tokens.length >= 3 ? tokens : null;
    if (!toks) continue;
    const sbAnswer = sbSeed.answer || toks.join(" ");
    const tk = normKey(sbAnswer);
    if (tk && usedTargets.has(tk)) continue;
    if (tk) usedTargets.add(tk);
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

  return pack(mcA, fbA, trA, ecA, sbA, perType);
}

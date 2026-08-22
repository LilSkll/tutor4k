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

export function pack(mcA, fbA, trA, ecA, sbA) {
  return {
    multiple_choice: mcA.slice(0, 20),
    fill_blank: fbA.slice(0, 20),
    translation: trA.slice(0, 20),
    error_correction: ecA.slice(0, 20),
    sentence_building: sbA.slice(0, 20),
  };
}

/** Turn a curated bank item into a generation seed. */
export function exerciseToSeed(ex, lang = "spanish") {
  const grammarTopic = ex.grammarTopic ?? "review";
  const explanation = ex.explanation ?? "";
  const instruction = ex.instruction ?? "";

  if (ex.type === "multiple_choice") {
    return {
      q: ex.question,
      ans: ex.answer,
      options: ex.options ?? [ex.answer],
      explanation,
      ru: instruction,
      es: ex.answer,
      en: ex.answer,
      grammarTopic,
    };
  }

  if (ex.type === "fill_blank") {
    const filled = ex.question.replace(/___+/g, ex.answer);
    return {
      q: ex.question,
      ans: ex.answer,
      options: [ex.answer, ...(ex.acceptableAnswers ?? [])].slice(0, 4),
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

export function chapterFromSeeds(g, topic, seeds, lang = "spanish") {
  const mcA = [];
  const fbA = [];
  const trA = [];
  const ecA = [];
  const sbA = [];

  const sbSeeds = seeds.filter((s) => Array.isArray(s.tokens) && s.tokens.length >= 3);
  const sbPool = sbSeeds.length > 0 ? sbSeeds : seeds;

  for (let i = 0; i < 20; i++) {
    const s = seeds[i % seeds.length];
    const sbSeed = sbPool[i % sbPool.length];
    const n = i + 1;
    const baseQ =
      i < seeds.length
        ? s.q
        : s.q.replace(/\.$/, "").replace(/\?$/, "") + ` (#${n}).`;
    const q = i === 0 ? baseQ : `${baseQ.replace(/\.$/, "").replace(/\?$/, "")} [${n}]${baseQ.includes("?") ? "?" : "."}`;
    const opts = s.options || [s.ans, "—", "—", "—"];
    const options = [...new Set([s.ans, ...opts.filter((o) => o !== s.ans)])].slice(
      0,
      4,
    );
    while (options.length < 4) options.push(`${s.ans}?`);

    mcA.push(
      mc(
        q,
        options,
        s.ans,
        lang === "english" ? "Choose the correct answer" : "Выберите правильный ответ",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
      ),
    );

    fbA.push(
      fb(
        q.includes("___") ? q : `Completa (${topic}) #${n}: ___`,
        s.ans,
        lang === "english" ? "Fill in the blank" : "Заполните пропуск",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
      ),
    );

    const filled = q
      .replace(/___+/g, s.ans)
      .replace(/ \(#\d+\)\.?$/, "")
      .replace(/\.$/, "")
      + (q.includes("?") ? "?" : ".");
    const wrong = options.find((o) => o !== s.ans) || "WRONG";
    const broken = q
      .replace(/___+/g, wrong)
      .replace(/ \(#\d+\)\.?$/, "")
      .replace(/\.$/, "")
      + (q.includes("?") ? "?" : ".");

    const fullTarget =
      lang === "english"
        ? s.en || s.acc?.[0] || filled
        : s.es || filled;

    const trPrompt = s.ru || s.q;
    const trQ = i === 0 ? trPrompt : `${trPrompt} [${n}]`;

    trA.push(
      tr(
        trQ,
        fullTarget,
        lang === "english" ? "Translate to English" : "Переведите на испанский",
        s.explanation || `${topic}: «${s.ans}».`,
        g,
        s.acc || [fullTarget.toLowerCase(), s.ans],
      ),
    );

    ecA.push(
      ec(
        i === 0 ? broken : `${broken.replace(/\.$/, "")} [${n}].`,
        filled,
        lang === "english" ? "Correct the mistake" : "Исправьте ошибку",
        lang === "english"
          ? `Use «${s.ans}», not «${wrong}».`
          : `Нужно «${s.ans}», не «${wrong}».`,
        g,
        [filled, filled.toLowerCase(), s.ans],
      ),
    );

    const tokens =
      sbSeed.tokens ??
      (sbSeed.answer || filled)
        .replace(/[¿?¡!.]/g, "")
        .split(/\s+/ )
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

  return pack(mcA, fbA, trA, ecA, sbA);
}

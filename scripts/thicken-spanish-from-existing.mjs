/**
 * Thicken thin Spanish chapter packs from existing Spanish sentences
 * (MC/FB/EC). Does not invent RU TR prompts.
 *
 * Run: node scripts/thicken-spanish-from-existing.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKS_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/spanish-packs.json",
);

const TARGET = {
  multiple_choice: 12,
  fill_blank: 12,
  error_correction: 10,
  translation: 8,
  sentence_building: 12,
};

const SAFE_INST = {
  multiple_choice: "Выберите правильный вариант",
  fill_blank: "Заполните пропуск",
  error_correction: "Исправьте ошибку",
  translation: "Переведите на испанский",
  sentence_building: "Составьте предложение",
};

const BLANKABLES = new Map([
  ["el", ["la", "los", "un"]],
  ["la", ["el", "las", "una"]],
  ["los", ["las", "el", "unos"]],
  ["las", ["los", "la", "unas"]],
  ["un", ["una", "el", "unos"]],
  ["una", ["un", "la", "unas"]],
  ["de", ["a", "en", "por"]],
  ["a", ["de", "en", "para"]],
  ["en", ["a", "de", "por"]],
  ["por", ["para", "de", "con"]],
  ["para", ["por", "a", "de"]],
  ["con", ["sin", "por", "de"]],
  ["sin", ["con", "por", "de"]],
  ["se", ["me", "te", "le"]],
  ["me", ["te", "se", "nos"]],
  ["te", ["me", "se", "le"]],
  ["le", ["les", "lo", "la"]],
  ["les", ["le", "los", "las"]],
  ["lo", ["la", "le", "los"]],
  ["había", ["he", "habré", "hube"]],
  ["he", ["había", "habré", "hube"]],
  ["ha", ["había", "he", "habrá"]],
  ["han", ["habían", "hemos", "hayan"]],
  ["es", ["está", "son", "era"]],
  ["está", ["es", "están", "estaba"]],
  ["son", ["están", "es", "eran"]],
  ["están", ["son", "está", "estaban"]],
  ["fue", ["era", "ha sido", "iba"]],
  ["era", ["fue", "es", "estaba"]],
  ["sería", ["fuera", "era", "será"]],
  ["haya", ["había", "hubiera", "ha"]],
  ["hubiera", ["haya", "había", "habría"]],
  ["que", ["quien", "cual", "donde"]],
  ["quien", ["que", "cual", "quienes"]],
  ["más", ["menos", "muy", "tan"]],
  ["menos", ["más", "muy", "tan"]],
  ["muy", ["más", "tan", "mucho"]],
  ["ya", ["aún", "todavía", "nunca"]],
  ["nunca", ["siempre", "ya", "jamás"]],
  ["siempre", ["nunca", "a menudo", "ya"]],
  ["no", ["sí", "nunca", "tampoco"]],
]);

function normalizeSentence(s) {
  return String(s ?? "")
    .replace(/\s+/g, " ")
    .replace(/[.?!¡¿]+$/, "")
    .trim();
}

function collectSentences(byType) {
  const out = [];
  for (const type of ["translation", "error_correction", "sentence_building"]) {
    for (const ex of byType[type] ?? []) {
      const a = normalizeSentence(ex.answer);
      if (!a || /[\u0400-\u04FF]/.test(a)) continue;
      if (a.split(/\s+/).length < 3) continue;
      out.push({
        sentence: a.endsWith(".") || a.endsWith("?") || a.endsWith("!")
          ? a
          : `${a}.`,
        grammarTopic: ex.grammarTopic ?? "review",
        explanation: ex.explanation ?? "",
        ru: type === "translation" && /[\u0400-\u04FF]/.test(ex.question ?? "")
          ? String(ex.question).trim()
          : null,
      });
    }
  }
  for (const ex of byType.multiple_choice ?? []) {
    const q = String(ex.question ?? "");
    const a = String(ex.answer ?? "").trim();
    if (!a || !/___+/.test(q)) continue;
    const filled = normalizeSentence(q.replace(/___+/g, a));
    if (filled.split(/\s+/).length < 3) continue;
    out.push({
      sentence: filled.endsWith(".") ? filled : `${filled}.`,
      grammarTopic: ex.grammarTopic ?? "review",
      explanation: ex.explanation ?? "",
      ru: null,
    });
  }
  return out;
}

function pickBlank(sentence) {
  const tokens = sentence.split(/\s+/);
  const hits = [];
  for (let i = 0; i < tokens.length; i++) {
    const raw = tokens[i];
    const core = raw.replace(/^[“"'(¿¡]+|[”"'.,!?;:)¿¡]+$/g, "");
    const key = core.toLowerCase();
    if (BLANKABLES.has(key) && core.length >= 1) {
      hits.push({ i, core, key, raw });
    }
  }
  if (!hits.length) return null;
  const preferred =
    hits.find((h) => h.i > 0 && !["el", "la", "un", "una"].includes(h.key)) ??
    hits[Math.floor(hits.length / 2)];
  const options = [
    preferred.core,
    ...BLANKABLES.get(preferred.key).filter(
      (d) => d.toLowerCase() !== preferred.key,
    ),
  ].slice(0, 4);
  while (options.length < 4) {
    options.push(["sí", "no", "tal vez", "nunca"][options.length]);
  }
  const qTokens = tokens.map((t, idx) =>
    idx === preferred.i ? t.replace(preferred.core, "___") : t,
  );
  return {
    question: qTokens.join(" "),
    answer: preferred.core,
    options: shuffleStable(options, sentence),
  };
}

function shuffleStable(arr, seed) {
  const a = [...arr];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1664525 + 1013904223) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function corrupt(sentence) {
  const tokens = sentence.replace(/[.?!¡¿]+$/, "").split(/\s+/);
  for (let i = 0; i < tokens.length; i++) {
    const core = tokens[i].replace(/^[“"'(¿¡]+|[”"'.,!?;:)¿¡]+$/g, "");
    const key = core.toLowerCase();
    const alts = BLANKABLES.get(key);
    if (!alts?.length) continue;
    const wrong = alts[0];
    const bad = tokens.map((t, idx) =>
      idx === i ? t.replace(core, wrong) : t,
    );
    return {
      question: bad.join(" ") + ".",
      answer: sentence.endsWith(".") ? sentence : `${sentence}.`,
    };
  }
  // Swap two content words as last resort
  if (tokens.length < 4) return null;
  const i = 1;
  const j = Math.min(tokens.length - 2, 3);
  const bad = [...tokens];
  [bad[i], bad[j]] = [bad[j], bad[i]];
  return {
    question: bad.join(" ") + ".",
    answer: sentence.endsWith(".") ? sentence : `${sentence}.`,
  };
}

function keyOf(ex) {
  return `${ex.type}|${String(ex.question ?? "")
    .trim()
    .toLowerCase()}`;
}

function merge(existing, incoming, limit) {
  const seen = new Set(existing.map(keyOf));
  const out = [...existing];
  for (const ex of incoming) {
    const k = keyOf(ex);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(ex);
    if (out.length >= limit) break;
  }
  return out;
}

function toSb(sentence, grammarTopic, explanation) {
  const clean = sentence.replace(/[.?!¡¿]+$/g, "").trim();
  const tokens = clean.split(/\s+/).filter(Boolean);
  if (tokens.length < 3 || tokens.length > 12) return null;
  const options = [...tokens];
  for (let i = options.length - 1; i > 0; i--) {
    const j = (i * 7 + tokens.length) % (i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  if (options.every((t, i) => t === tokens[i]) && options.length > 1) {
    [options[0], options[options.length - 1]] = [
      options[options.length - 1],
      options[0],
    ];
  }
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options,
    answer: clean,
    acceptableAnswers: [clean, `${clean}.`],
    instruction: SAFE_INST.sentence_building,
    explanation: explanation || "Ordena las palabras.",
    grammarTopic,
  };
}

function thickenChapter(byType) {
  const sentences = collectSentences(byType);
  const report = { mc: 0, fb: 0, ec: 0, sb: 0, tr: 0 };
  if (!sentences.length) return report;

  const usedQ = new Set(
    Object.values(byType)
      .flat()
      .filter(Boolean)
      .map((e) => String(e.question ?? "").toLowerCase()),
  );

  const mc = [];
  const fb = [];
  const ec = [];
  const sb = [];
  const tr = [];

  const mcNeed = Math.max(
    0,
    TARGET.multiple_choice - (byType.multiple_choice ?? []).length,
  );
  const fbNeed = Math.max(
    0,
    TARGET.fill_blank - (byType.fill_blank ?? []).length,
  );
  const ecNeed = Math.max(
    0,
    TARGET.error_correction - (byType.error_correction ?? []).length,
  );
  const sbNeed = Math.max(
    0,
    TARGET.sentence_building - (byType.sentence_building ?? []).length,
  );
  const trNeed = Math.max(
    0,
    TARGET.translation - (byType.translation ?? []).length,
  );

  for (const s of sentences) {
    const blank = pickBlank(s.sentence);
    if (blank && !usedQ.has(blank.question.toLowerCase())) {
      usedQ.add(blank.question.toLowerCase());
      if (mc.length < mcNeed) {
        mc.push({
          type: "multiple_choice",
          question: blank.question,
          options: blank.options,
          answer: blank.answer,
          instruction: SAFE_INST.multiple_choice,
          explanation: s.explanation || `Elige «${blank.answer}».`,
          grammarTopic: s.grammarTopic,
        });
      }
      if (fb.length < fbNeed) {
        fb.push({
          type: "fill_blank",
          question: blank.question,
          answer: blank.answer,
          acceptableAnswers: [
            blank.answer,
            blank.answer[0].toUpperCase() + blank.answer.slice(1),
          ],
          instruction: SAFE_INST.fill_blank,
          explanation: s.explanation || `Escribe «${blank.answer}».`,
          grammarTopic: s.grammarTopic,
        });
      }
    }

    if (ec.length < ecNeed) {
      const bad = corrupt(s.sentence);
      if (bad && !usedQ.has(bad.question.toLowerCase())) {
        usedQ.add(bad.question.toLowerCase());
        ec.push({
          type: "error_correction",
          question: bad.question,
          answer: bad.answer,
          acceptableAnswers: [
            bad.answer.replace(/[.?!]+$/, ""),
            bad.answer,
          ],
          instruction: SAFE_INST.error_correction,
          explanation: s.explanation || "Corrige el error.",
          grammarTopic: s.grammarTopic,
        });
      }
    }

    if (sb.length < sbNeed) {
      const item = toSb(s.sentence, s.grammarTopic, s.explanation);
      if (item && !usedQ.has(item.question.toLowerCase())) {
        usedQ.add(item.question.toLowerCase());
        sb.push(item);
      }
    }

    if (tr.length < trNeed && s.ru) {
      const q = s.ru;
      if (!usedQ.has(q.toLowerCase())) {
        usedQ.add(q.toLowerCase());
        tr.push({
          type: "translation",
          question: q,
          answer: normalizeSentence(s.sentence),
          acceptableAnswers: [
            normalizeSentence(s.sentence),
            normalizeSentence(s.sentence).toLowerCase(),
          ],
          instruction: SAFE_INST.translation,
          explanation: s.explanation || "Traduce al español.",
          grammarTopic: s.grammarTopic,
        });
      }
    }

    if (
      mc.length >= mcNeed &&
      fb.length >= fbNeed &&
      ec.length >= ecNeed &&
      sb.length >= sbNeed &&
      tr.length >= trNeed
    ) {
      break;
    }
  }

  byType.multiple_choice = merge(
    byType.multiple_choice ?? [],
    mc,
    TARGET.multiple_choice,
  );
  byType.fill_blank = merge(byType.fill_blank ?? [], fb, TARGET.fill_blank);
  byType.error_correction = merge(
    byType.error_correction ?? [],
    ec,
    TARGET.error_correction,
  );
  byType.sentence_building = merge(
    byType.sentence_building ?? [],
    sb,
    Math.max(TARGET.sentence_building, (byType.sentence_building ?? []).length),
  );
  byType.translation = merge(
    byType.translation ?? [],
    tr,
    TARGET.translation,
  );

  report.mc = mc.length;
  report.fb = fb.length;
  report.ec = ec.length;
  report.sb = sb.length;
  report.tr = tr.length;
  return report;
}

function needsThicken(byType) {
  return (
    (byType.multiple_choice ?? []).length < TARGET.multiple_choice ||
    (byType.fill_blank ?? []).length < TARGET.fill_blank ||
    (byType.error_correction ?? []).length < TARGET.error_correction ||
    (byType.translation ?? []).length < TARGET.translation
  );
}

function main() {
  const packs = JSON.parse(fs.readFileSync(PACKS_PATH, "utf8"));
  const report = [];
  for (const [ch, byType] of Object.entries(packs)) {
    if (!needsThicken(byType)) continue;
    const before = {
      mc: (byType.multiple_choice ?? []).length,
      fb: (byType.fill_blank ?? []).length,
      tr: (byType.translation ?? []).length,
      ec: (byType.error_correction ?? []).length,
      sb: (byType.sentence_building ?? []).length,
    };
    const added = thickenChapter(byType);
    report.push({
      ch,
      before,
      after: {
        mc: (byType.multiple_choice ?? []).length,
        fb: (byType.fill_blank ?? []).length,
        tr: (byType.translation ?? []).length,
        ec: (byType.error_correction ?? []).length,
        sb: (byType.sentence_building ?? []).length,
      },
      added,
    });
  }
  fs.writeFileSync(PACKS_PATH, JSON.stringify(packs, null, 2) + "\n");
  console.log({ thickened: report.length });
  console.table(
    report.map((r) => ({
      ch: r.ch.replace("chapter-", ""),
      mc: `${r.before.mc}→${r.after.mc}`,
      fb: `${r.before.fb}→${r.after.fb}`,
      tr: `${r.before.tr}→${r.after.tr}`,
      ec: `${r.before.ec}→${r.after.ec}`,
      sb: `${r.before.sb}→${r.after.sb}`,
    })),
  );
}

main();

/**
 * Thicken thin English chapters: derive MC/FB from existing TR/EC/SB English
 * sentences, and scrub grammar-tag instructions that quality gates reject.
 *
 * Run: node scripts/thicken-english-from-existing.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKS_PATH = path.join(
  __dirname,
  "../src/config/exercise-banks/data/english-packs.json",
);

const TARGET = {
  multiple_choice: 20,
  fill_blank: 20,
  error_correction: 20,
  translation: 20,
  sentence_building: 20,
};

const SAFE_INST = {
  multiple_choice: "Choose correct option",
  fill_blank: "Complete this gap",
  translation: "Translate into English",
  error_correction: "Correct the error",
  sentence_building: "Arrange the words",
};

/** Same spirit as isGrammarCategoryInstruction — short curriculum tags. */
function isTagInstruction(inst) {
  const s = (inst ?? "").trim();
  if (!s) return false;
  if (
    /^(Choose|Fill|Complete|Translate|Rewrite|Find|Build|Fix|Add|Put|Correct|Select|Write)\b/i.test(
      s,
    )
  ) {
    return false;
  }
  if (s.length <= 56 && /^Use\s+/i.test(s)) return true;
  if (s.length <= 48 && /^[A-Za-z][\w'’+\s/]{0,30}\s+[—–-]\s+\S/.test(s)) {
    return true;
  }
  if (
    s.length <= 56 &&
    /^(Zero article|Backshift|No backshift|Tense backshift|Reported question|Tell \+|Saxon genitive|Past simple|Present (simple|perfect|continuous)|Countable|Uncountable|Quantifier|Relative|Passive|Modal|Conditional|Register|Opening|Sign-off|Overview|Thesis|Trend|Comparison|Cohesion|Informal|Formal|Semi-formal|Have something done|Participio|Its vs|Day's|Parents'|Just \+|PP vs|Yet |Ever |Already |Who |Whose|Where relative|Must |Might |Can't |Superlative|Comparative|Articles?|Possessives?|Modals?|Passives?|Conditionals?)\b/i.test(
      s,
    )
  ) {
    return true;
  }
  if (
    s.length <= 42 &&
    !/[.?!¿¡]/.test(s) &&
    !/[\u0400-\u04FF]/.test(s) &&
    /^[A-Za-z]/.test(s) &&
    !/\b(choose|fill|complete|translate|rewrite|find|build|fix|add|put|correct|select|write)\b/i.test(
      s,
    )
  ) {
    return true;
  }
  return false;
}

const BLANKABLES = new Map([
  ["am", ["is", "are", "be", "was"]],
  ["is", ["am", "are", "be", "was"]],
  ["are", ["am", "is", "be", "were"]],
  ["was", ["were", "is", "are", "been"]],
  ["were", ["was", "are", "is", "been"]],
  ["a", ["an", "the", "some"]],
  ["an", ["a", "the", "some"]],
  ["the", ["a", "an", "some"]],
  ["to", ["for", "at", "in"]],
  ["for", ["to", "since", "during"]],
  ["since", ["for", "from", "during"]],
  ["in", ["on", "at", "to"]],
  ["on", ["in", "at", "by"]],
  ["at", ["in", "on", "to"]],
  ["of", ["off", "from", "for"]],
  ["have", ["has", "had", "having"]],
  ["has", ["have", "had", "having"]],
  ["had", ["have", "has", "having"]],
  ["do", ["does", "did", "done"]],
  ["does", ["do", "did", "done"]],
  ["did", ["do", "does", "done"]],
  ["will", ["would", "going", "can"]],
  ["would", ["will", "could", "should"]],
  ["can", ["could", "may", "must"]],
  ["could", ["can", "may", "might"]],
  ["should", ["must", "would", "could"]],
  ["must", ["should", "have", "can"]],
  ["may", ["might", "can", "must"]],
  ["might", ["may", "can", "must"]],
  ["than", ["then", "that", "as"]],
  ["then", ["than", "that", "when"]],
  ["more", ["most", "much", "many"]],
  ["most", ["more", "much", "many"]],
  ["much", ["many", "a lot", "some"]],
  ["many", ["much", "a lot", "some"]],
  ["some", ["any", "many", "much"]],
  ["any", ["some", "many", "much"]],
  ["been", ["being", "be", "was"]],
  ["going", ["go", "went", "gone"]],
  ["not", ["no", "never", "n't"]],
  ["don't", ["doesn't", "didn't", "won't"]],
  ["doesn't", ["don't", "didn't", "won't"]],
  ["didn't", ["don't", "doesn't", "won't"]],
  ["I'm", ["I am", "I've", "I'd"]],
  ["I've", ["I have", "I'm", "I'd"]],
  ["by", ["with", "from", "of"]],
  ["with", ["by", "from", "of"]],
  ["who", ["which", "that", "whom"]],
  ["which", ["who", "that", "what"]],
  ["that", ["which", "who", "what"]],
  ["if", ["when", "unless", "whether"]],
  ["when", ["if", "while", "as"]],
  ["because", ["so", "but", "although"]],
  ["although", ["because", "but", "so"]],
  ["but", ["and", "or", "so"]],
  ["and", ["but", "or", "so"]],
]);

function normalizeSentence(s) {
  return String(s ?? "")
    .replace(/\s+/g, " ")
    .replace(/[.?!]+$/, "")
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
        sentence: a,
        grammarTopic: ex.grammarTopic ?? "review",
        explanation: ex.explanation ?? "",
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
      sentence: filled,
      grammarTopic: ex.grammarTopic ?? "review",
      explanation: ex.explanation ?? "",
    });
  }
  return out;
}

function listBlankHits(sentence) {
  const tokens = sentence.split(/\s+/);
  const hits = [];
  for (let i = 0; i < tokens.length; i++) {
    const raw = tokens[i];
    const core = raw.replace(/^[“"'(]+|[”"'.,!?;:)]+$/g, "");
    const key = core.toLowerCase();
    if (BLANKABLES.has(key) && core.length >= 1) {
      hits.push({ i, core, key, raw });
    }
  }
  return hits;
}

function blankFromHit(sentence, preferred) {
  const tokens = sentence.split(/\s+/);
  const options = [
    preferred.core,
    ...BLANKABLES.get(preferred.key).filter(
      (d) => d.toLowerCase() !== preferred.key,
    ),
  ].slice(0, 4);
  while (options.length < 4) {
    options.push(["yes", "no", "maybe", "never"][options.length]);
  }
  const qTokens = tokens.map((t, idx) =>
    idx === preferred.i ? t.replace(preferred.core, "___") : t,
  );
  return {
    question: qTokens.join(" ") + (/\.$/.test(sentence) ? "" : "."),
    answer: preferred.core,
    options: shuffleStable(options, `${sentence}|${preferred.i}`),
  };
}

function pickAllBlanks(sentence) {
  return listBlankHits(sentence).map((h) => blankFromHit(sentence, h));
}

function corrupt(sentence) {
  const base = normalizeSentence(sentence);
  const tokens = base.split(/\s+/);
  for (let i = 0; i < tokens.length; i++) {
    const core = tokens[i].replace(/^[“"'(]+|[”"'.,!?;:)]+$/g, "");
    const key = core.toLowerCase();
    const alts = BLANKABLES.get(key);
    if (!alts?.length) continue;
    const wrong = alts[0];
    const bad = tokens.map((t, idx) =>
      idx === i ? t.replace(core, wrong) : t,
    );
    return {
      question: `${bad.join(" ")}.`,
      answer: base.endsWith(".") ? base : `${base}.`,
    };
  }
  if (tokens.length < 4) return null;
  const bad = [...tokens];
  [bad[1], bad[Math.min(3, tokens.length - 1)]] = [
    bad[Math.min(3, tokens.length - 1)],
    bad[1],
  ];
  return {
    question: `${bad.join(" ")}.`,
    answer: base.endsWith(".") ? base : `${base}.`,
  };
}

function toSb(sentence, grammarTopic, explanation) {
  const clean = normalizeSentence(sentence);
  const tokens = clean.split(/\s+/).filter(Boolean);
  if (tokens.length < 3 || tokens.length > 14) return null;
  // Options stay in answer order — the client shuffles tiles for display.
  // validate-exercise-bank requires options.join(" ") to match the answer.
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options: [...tokens],
    answer: clean,
    acceptableAnswers: [clean, `${clean}.`],
    instruction: SAFE_INST.sentence_building,
    explanation: explanation || "Arrange the words.",
    grammarTopic,
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
  // Ensure answer present
  return a;
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

function scrubInstructions(packs) {
  let n = 0;
  for (const byType of Object.values(packs)) {
    for (const [type, list] of Object.entries(byType ?? {})) {
      if (!Array.isArray(list)) continue;
      const safe = SAFE_INST[type];
      if (!safe) continue;
      for (const ex of list) {
        if (isTagInstruction(ex.instruction)) {
          ex.instruction = safe;
          n++;
        }
      }
    }
  }
  return n;
}

function thickenChapter(byType) {
  const sentences = collectSentences(byType);
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
  if (!mcNeed && !fbNeed && !ecNeed && !sbNeed) {
    return { mcAdd: 0, fbAdd: 0, ecAdd: 0, sbAdd: 0 };
  }

  const mc = [];
  const fb = [];
  const ec = [];
  const sb = [];
  const usedQ = new Set(
    Object.values(byType)
      .flat()
      .filter(Boolean)
      .map((e) => String(e.question ?? "").toLowerCase()),
  );

  for (const s of sentences) {
    for (const blank of pickAllBlanks(s.sentence)) {
      if (usedQ.has(blank.question.toLowerCase())) continue;
      const preferMc = mcNeed - mc.length >= fbNeed - fb.length;
      if (preferMc && mc.length < mcNeed) {
        usedQ.add(blank.question.toLowerCase());
        mc.push({
          type: "multiple_choice",
          question: blank.question,
          options: blank.options,
          answer: blank.answer,
          instruction: SAFE_INST.multiple_choice,
          explanation: s.explanation || `Choose «${blank.answer}».`,
          grammarTopic: s.grammarTopic,
        });
      } else if (fb.length < fbNeed) {
        usedQ.add(blank.question.toLowerCase());
        fb.push({
          type: "fill_blank",
          question: blank.question,
          answer: blank.answer,
          acceptableAnswers: [
            blank.answer,
            blank.answer[0].toUpperCase() + blank.answer.slice(1),
          ],
          instruction: SAFE_INST.fill_blank,
          explanation: s.explanation || `Write «${blank.answer}».`,
          grammarTopic: s.grammarTopic,
        });
      }
      if (mc.length >= mcNeed && fb.length >= fbNeed) break;
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
          explanation: s.explanation || "Correct the error.",
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

    if (
      mc.length >= mcNeed &&
      fb.length >= fbNeed &&
      ec.length >= ecNeed &&
      sb.length >= sbNeed
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
    TARGET.sentence_building,
  );
  return {
    mcAdd: mc.length,
    fbAdd: fb.length,
    ecAdd: ec.length,
    sbAdd: sb.length,
  };
}

function main() {
  const packs = JSON.parse(fs.readFileSync(PACKS_PATH, "utf8"));
  const scrubbed = scrubInstructions(packs);
  const report = [];
  for (const [ch, byType] of Object.entries(packs)) {
    const before = {
      mc: (byType.multiple_choice ?? []).length,
      fb: (byType.fill_blank ?? []).length,
      ec: (byType.error_correction ?? []).length,
      sb: (byType.sentence_building ?? []).length,
    };
    if (
      before.mc >= TARGET.multiple_choice &&
      before.fb >= TARGET.fill_blank &&
      before.ec >= TARGET.error_correction &&
      before.sb >= TARGET.sentence_building
    ) {
      continue;
    }
    const added = thickenChapter(byType);
    report.push({
      ch,
      before,
      after: {
        mc: (byType.multiple_choice ?? []).length,
        fb: (byType.fill_blank ?? []).length,
        ec: (byType.error_correction ?? []).length,
        sb: (byType.sentence_building ?? []).length,
      },
      ...added,
    });
  }
  fs.writeFileSync(PACKS_PATH, JSON.stringify(packs, null, 2) + "\n");
  console.log({ scrubbed, thickened: report.length });
  console.table(
    report.slice(0, 40).map((r) => ({
      ch: r.ch.replace("eng-", ""),
      mc: `${r.before.mc}→${r.after.mc}`,
      fb: `${r.before.fb}→${r.after.fb}`,
      ec: `${r.before.ec}→${r.after.ec}`,
      sb: `${r.before.sb}→${r.after.sb}`,
    })),
  );
}

main();

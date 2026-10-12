/**
 * One-off bank checkup — run: npx tsx scripts/audit-exercise-banks.ts
 */
import { getCourse } from "../src/config/courses";
import {
  isGrammarCategoryInstruction,
  sanitizeBankExercise,
} from "../src/lib/exercise-quality";
import {
  hasCyrillicText,
  isExerciseUsableForLanguage,
  localizeExerciseInstruction,
  localizeTranslationQuestion,
  prepareExercisesForInterface,
} from "../src/lib/exercise-localize";
import { localizeBankExplanation } from "../src/lib/tutor-feedback";
import type { InterfaceLanguage, StaticExercise } from "../src/types";
import { HALLOWEEN_EXERCISES } from "../src/config/halloween-exercises";
import { HALLOWEEN_EXERCISES_ENGLISH } from "../src/config/halloween-exercises-english";
import { DELE_EXERCISES } from "../src/config/dele-exercises";

const UIs: InterfaceLanguage[] = ["ru", "en", "es", "de"];
const CYRILLIC = /[\u0400-\u04FF]/;
const LATIN_ONLY = /^[\s\S]*[A-Za-zÁÉÍÓÚáéíóúÑñÜü][\s\S]*$/;

type Issue = {
  severity: "high" | "medium" | "low";
  course: string;
  chapter?: string;
  id?: string;
  type?: string;
  ui?: string;
  kind: string;
  detail: string;
};

const issues: Issue[] = [];

function push(i: Issue) {
  issues.push(i);
}

async function loadCourseBank(courseId: string) {
  const course = await getCourse(courseId);
  const items: { chapter: string; ex: StaticExercise }[] = [];
  for (const ch of course.getChapters()) {
    for (const ex of course.getExercises(ch.slug)) {
      items.push({ chapter: ch.slug, ex });
    }
  }
  return items;
}

function auditItem(
  course: string,
  chapter: string | undefined,
  ex: StaticExercise,
) {
  const cleaned = sanitizeBankExercise(ex);
  if (!cleaned) {
    push({
      severity: "high",
      course,
      chapter,
      id: ex.id,
      type: ex.type,
      kind: "sanitize_drop",
      detail: `Dropped by quality gate: «${(ex.question ?? "").slice(0, 80)}»`,
    });
    return;
  }

  if (isGrammarCategoryInstruction(ex.instruction ?? "")) {
    push({
      severity: "medium",
      course,
      chapter,
      id: ex.id,
      type: ex.type,
      kind: "grammar_tag_instruction",
      detail: `Instruction is a grammar tag: «${ex.instruction}»`,
    });
  }

  if (ex.type === "multiple_choice") {
    const opts = ex.options ?? [];
    if (opts.length < 2) {
      push({
        severity: "high",
        course,
        chapter,
        id: ex.id,
        type: ex.type,
        kind: "mc_few_options",
        detail: `MC has ${opts.length} options`,
      });
    }
    const lower = opts.map((o) => o.trim().toLowerCase());
    if (new Set(lower).size < lower.length) {
      push({
        severity: "medium",
        course,
        chapter,
        id: ex.id,
        type: ex.type,
        kind: "mc_dup_options",
        detail: `Duplicate options: ${opts.join(" | ")}`,
      });
    }
    if (!opts.some((o) => o.trim() === (ex.answer ?? "").trim())) {
      push({
        severity: "high",
        course,
        chapter,
        id: ex.id,
        type: ex.type,
        kind: "mc_answer_missing",
        detail: `Answer «${ex.answer}» not in options`,
      });
    }
  }

  if (ex.type === "sentence_building") {
    const opts = ex.options ?? [];
    if (opts.length < 3) {
      push({
        severity: "high",
        course,
        chapter,
        id: ex.id,
        type: ex.type,
        kind: "sb_few_tiles",
        detail: `Only ${opts.length} tiles`,
      });
    }
  }

  if (ex.type === "fill_blank" && !/___+/.test(ex.question ?? "")) {
    push({
      severity: "high",
      course,
      chapter,
      id: ex.id,
      type: ex.type,
      kind: "fb_no_blank",
      detail: `No blank in «${(ex.question ?? "").slice(0, 60)}»`,
    });
  }

  // Explanation equals answer (useless pedagogy)
  if (
    (ex.explanation ?? "").trim() &&
    (ex.explanation ?? "").trim().toLowerCase() ===
      (ex.answer ?? "").trim().toLowerCase()
  ) {
    push({
      severity: "low",
      course,
      chapter,
      id: ex.id,
      type: ex.type,
      kind: "expl_eq_answer",
      detail: `Explanation repeats answer`,
    });
  }

  for (const ui of UIs) {
    if (!isExerciseUsableForLanguage(ex, ui, course)) continue;

    const [prepared] = prepareExercisesForInterface([ex], ui, course);
    if (!prepared) continue;

    const inst = prepared.instruction ?? "";
    const q = prepared.question ?? "";

    // Non-RU UI still showing Cyrillic instruction (bad UX)
    if (ui !== "ru" && CYRILLIC.test(inst) && inst.length > 0) {
      push({
        severity: "high",
        course,
        chapter,
        id: ex.id,
        type: ex.type,
        ui,
        kind: "cyrillic_instruction",
        detail: `UI=${ui} instruction still Cyrillic: «${inst.slice(0, 70)}»`,
      });
    }

    // Grammar tag leaked as instruction after localize
    if (isGrammarCategoryInstruction(inst)) {
      push({
        severity: "medium",
        course,
        chapter,
        id: ex.id,
        type: ex.type,
        ui,
        kind: "tag_after_localize",
        detail: `UI=${ui} instruction still tag: «${inst}»`,
      });
    }

    // Translation: non-RU UI with Cyrillic question (should be localized or filtered)
    if (
      ex.type === "translation" &&
      ui !== "ru" &&
      CYRILLIC.test(q) &&
      !lookupHasTranslation(ex, ui)
    ) {
      // localizeTranslationQuestion should swap — if still Cyrillic, bug
      const localizedQ = localizeTranslationQuestion(ex, ui, course);
      if (CYRILLIC.test(localizedQ) && ui !== "ru") {
        push({
          severity: "high",
          course,
          chapter,
          id: ex.id,
          type: ex.type,
          ui,
          kind: "cyrillic_tr_prompt",
          detail: `UI=${ui} TR prompt still Cyrillic: «${localizedQ.slice(0, 70)}»`,
        });
      }
    }

    // Empty instruction after localize
    if (!inst.trim()) {
      push({
        severity: "medium",
        course,
        chapter,
        id: ex.id,
        type: ex.type,
        ui,
        kind: "empty_instruction",
        detail: `UI=${ui} empty instruction`,
      });
    }

    // Explanation collapsed to generic on RU for EN glosses that look useful
    if (ui === "ru" && course === "english" && ex.explanation) {
      const loc = localizeBankExplanation(ex.explanation, "ru");
      if (/правильн/i.test(loc) && !/=/.test(ex.explanation) && ex.explanation.length > 12) {
        push({
          severity: "low",
          course,
          chapter,
          id: ex.id,
          type: ex.type,
          ui,
          kind: "expl_stripped_ru",
          detail: `EN explanation stripped on RU UI: «${ex.explanation.slice(0, 60)}»`,
        });
      }
    }
  }
}

function lookupHasTranslation(_ex: StaticExercise, _ui: InterfaceLanguage) {
  return false;
}

function summarize(label: string, list: Issue[]) {
  const byKind = new Map<string, number>();
  for (const i of list) {
    byKind.set(i.kind, (byKind.get(i.kind) ?? 0) + 1);
  }
  console.log(`\n=== ${label}: ${list.length} issues ===`);
  for (const [k, n] of [...byKind.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${n}\t${k}`);
  }
}

async function main() {
  const courses = ["spanish", "english"] as const;
  let totalItems = 0;
  let sanitizeOk = 0;

  for (const courseId of courses) {
    const items = await loadCourseBank(courseId);
    totalItems += items.length;
    console.log(`\nLoaded ${courseId}: ${items.length} exercises`);

    // Usable per UI after prepare
    for (const ui of UIs) {
      let usable = 0;
      let withCyrInst = 0;
      for (const { ex } of items) {
        if (!isExerciseUsableForLanguage(ex, ui, courseId)) continue;
        const [p] = prepareExercisesForInterface([ex], ui, courseId);
        if (!p) continue;
        usable++;
        if (ui !== "ru" && CYRILLIC.test(p.instruction ?? "")) withCyrInst++;
      }
      console.log(
        `  UI=${ui}: usable=${usable}` +
          (withCyrInst ? ` cyrillicInstructions=${withCyrInst}` : ""),
      );
    }

    for (const { chapter, ex } of items) {
      if (sanitizeBankExercise(ex)) sanitizeOk++;
      auditItem(courseId, chapter, ex);
    }
  }

  for (const ex of HALLOWEEN_EXERCISES) {
    auditItem("spanish", "halloween", ex);
  }
  for (const ex of HALLOWEEN_EXERCISES_ENGLISH) {
    auditItem("english", "halloween", ex);
  }
  for (const ex of DELE_EXERCISES) {
    auditItem("spanish", "dele", ex);
  }

  const high = issues.filter((i) => i.severity === "high");
  const medium = issues.filter((i) => i.severity === "medium");
  const low = issues.filter((i) => i.severity === "low");

  summarize("HIGH", high);
  summarize("MEDIUM", medium);
  summarize("LOW", low);

  console.log("\n--- HIGH samples (max 40) ---");
  for (const i of high.slice(0, 40)) {
    console.log(
      `[${i.course}/${i.chapter ?? "-"}] ${i.id ?? "?"} ${i.type} ${i.ui ?? ""} :: ${i.kind}\n  ${i.detail}`,
    );
  }

  console.log("\n--- MEDIUM samples (max 30) ---");
  for (const i of medium.slice(0, 30)) {
    console.log(
      `[${i.course}/${i.chapter ?? "-"}] ${i.id ?? "?"} :: ${i.kind}\n  ${i.detail}`,
    );
  }

  // Deduped unique high kinds with chapter frequency for cyrillic_tr
  const trCyr = high.filter((i) => i.kind === "cyrillic_tr_prompt");
  const byUi = new Map<string, number>();
  for (const i of trCyr) {
    byUi.set(i.ui ?? "?", (byUi.get(i.ui ?? "?") ?? 0) + 1);
  }
  console.log("\nCyrillic TR prompts by UI:", Object.fromEntries(byUi));

  console.log(
    `\nTotals: items≈${totalItems}+seasonal sanitizeOk≈${sanitizeOk} issues=${issues.length}`,
  );

  // Runtime: do grammar tags survive localizeExerciseInstruction?
  let tagsRaw = 0;
  let tagsAfter = 0;
  for (const courseId of courses) {
    const items = await loadCourseBank(courseId);
    for (const { ex } of items) {
      if (!isGrammarCategoryInstruction(ex.instruction ?? "")) continue;
      tagsRaw++;
      for (const ui of UIs) {
        const inst = localizeExerciseInstruction(ex, ui);
        if (isGrammarCategoryInstruction(inst)) tagsAfter++;
      }
    }
  }
  console.log(
    `\nGrammar-tag instructions in bank: ${tagsRaw}; still tags after localize (×4 UIs, want 0): ${tagsAfter}`,
  );

  // Unique TR items still Cyrillic per course/UI
  for (const courseId of courses) {
    const items = await loadCourseBank(courseId);
    const uniq: Record<string, number> = { en: 0, es: 0, de: 0 };
    let ruTr = 0;
    const chapterHits = new Map<string, number>();
    for (const { chapter, ex } of items) {
      if (ex.type !== "translation") continue;
      if (!hasCyrillicText(ex.question)) continue;
      ruTr++;
      for (const ui of ["en", "es", "de"] as InterfaceLanguage[]) {
        const q = localizeTranslationQuestion(ex, ui, courseId);
        if (hasCyrillicText(q)) {
          uniq[ui]++;
          chapterHits.set(chapter, (chapterHits.get(chapter) ?? 0) + 1);
        }
      }
    }
    console.log(
      `\n${courseId} RU→target TR: ${ruTr}; still Cyrillic after localize:`,
      uniq,
    );
    console.log(
      "  worst chapters:",
      [...chapterHits.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([s, n]) => `${s}(${n})`)
        .join(", "),
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

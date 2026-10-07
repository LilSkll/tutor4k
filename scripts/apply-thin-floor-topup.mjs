#!/usr/bin/env node
/**
 * Merge unique-stem thin-floor top-ups into EN/ES packs JSON.
 * Run: node scripts/apply-thin-floor-topup.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { THIN_FLOOR_TOPUP } from "./data/thin-floor-topup.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const PACK_FILES = {
  english: path.join(root, "src/config/exercise-banks/data/english-packs.json"),
  spanish: path.join(root, "src/config/exercise-banks/data/spanish-packs.json"),
};

const TYPES = [
  "multiple_choice",
  "fill_blank",
  "translation",
  "error_correction",
  "sentence_building",
];

const SAFE_INST = {
  english: {
    multiple_choice: "Choose the correct option",
    fill_blank: "Fill in the blank",
    error_correction: "Correct the error",
    translation: "Translate into English",
    sentence_building: "Build the sentence from the words",
  },
  spanish: {
    multiple_choice: "Выберите правильный вариант",
    fill_blank: "Заполните пропуск",
    error_correction: "Исправьте ошибку",
    translation: "Переведите на испанский",
    sentence_building: "Составьте предложение",
  },
};

function keyOf(ex) {
  return `${ex.type}|${String(ex.question ?? "")
    .trim()
    .toLowerCase()}`;
}

function normalizeIncoming(ex, course) {
  const safe = SAFE_INST[course]?.[ex.type];
  if (!safe) return ex;
  // Avoid grammar-tag instructions that the quality gate rejects.
  const inst = String(ex.instruction ?? "").trim();
  const looksTag =
    inst.length > 0 &&
    inst.length <= 48 &&
    !/^(Choose|Fill|Complete|Correct|Translate|Build|Выберите|Заполните|Исправьте|Переведите|Составьте|Elige|Completa|Traduce)\b/i.test(
      inst,
    );
  return looksTag ? { ...ex, instruction: safe } : { ...ex, instruction: inst || safe };
}

function mergeType(existing = [], incoming = [], course = "spanish") {
  const seen = new Set(existing.map(keyOf));
  const out = [...existing];
  let added = 0;
  for (const raw of incoming) {
    const ex = normalizeIncoming(raw, course);
    if (!ex?.question?.trim() && ex.type !== "sentence_building") continue;
    const k = keyOf(ex);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(ex);
    added++;
  }
  return { list: out, added };
}

function isEnglishSlug(slug) {
  return slug.startsWith("eng-");
}

function scrubBrokenSb(packs) {
  // Drop non-sentence SB placeholders like "Best overview sentence:"
  let removed = 0;
  for (const ch of Object.values(packs)) {
    if (!Array.isArray(ch.sentence_building)) continue;
    const before = ch.sentence_building.length;
    ch.sentence_building = ch.sentence_building.filter((ex) => {
      const a = String(ex.answer ?? "").trim();
      if (!a || a.endsWith(":")) return false;
      if (
        /^(best|compare|write|choose)\b/i.test(a) &&
        a.split(/\s+/).length <= 4
      ) {
        return false;
      }
      return true;
    });
    removed += before - ch.sentence_building.length;
  }
  return removed;
}

function main() {
  const enPacks = JSON.parse(fs.readFileSync(PACK_FILES.english, "utf8"));
  const esPacks = JSON.parse(fs.readFileSync(PACK_FILES.spanish, "utf8"));

  const report = [];
  for (const [slug, byType] of Object.entries(THIN_FLOOR_TOPUP)) {
    const packs = isEnglishSlug(slug) ? enPacks : esPacks;
    if (!packs[slug]) packs[slug] = {};
    const row = { slug, added: {} };
    for (const type of TYPES) {
      const incoming = byType[type];
      if (!incoming?.length) continue;
      const course = isEnglishSlug(slug) ? "english" : "spanish";
      const { list, added } = mergeType(
        packs[slug][type] ?? [],
        incoming,
        course,
      );
      packs[slug][type] = list;
      if (added) row.added[type] = added;
    }
    report.push(row);
  }

  const enScrub = scrubBrokenSb(enPacks);
  const esScrub = scrubBrokenSb(esPacks);

  fs.writeFileSync(PACK_FILES.english, `${JSON.stringify(enPacks, null, 2)}\n`);
  fs.writeFileSync(PACK_FILES.spanish, `${JSON.stringify(esPacks, null, 2)}\n`);

  console.log({ chapters: report.length, enScrub, esScrub });
  console.table(
    report.map((r) => ({
      slug: r.slug,
      ...r.added,
    })),
  );
}

main();
#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

async function main() {
  const { isGrammarCategoryInstruction } = await import(
    pathToFileURL(path.join(root, "src/lib/exercise-quality.ts")).href
  );

  const SAFE_ES = {
    multiple_choice: "Выберите правильный вариант",
    fill_blank: "Заполните пропуск",
    error_correction: "Исправьте ошибку",
    translation: "Переведите на испанский",
    sentence_building: "Составьте предложение",
  };
  const SAFE_EN = {
    multiple_choice: "Choose the correct option",
    fill_blank: "Fill in the blank",
    error_correction: "Correct the error",
    translation: "Translate into English",
    sentence_building: "Build the sentence from the words",
  };

  function scrub(file, safe) {
    const packs = JSON.parse(fs.readFileSync(file, "utf8"));
    let n = 0;
    for (const ch of Object.values(packs)) {
      for (const [type, list] of Object.entries(ch)) {
        if (!Array.isArray(list) || !safe[type]) continue;
        for (const ex of list) {
          if (isGrammarCategoryInstruction(ex.instruction ?? "")) {
            ex.instruction = safe[type];
            n++;
          }
        }
      }
    }
    fs.writeFileSync(file, `${JSON.stringify(packs, null, 2)}\n`);
    return n;
  }

  const es = scrub(
    path.join(root, "src/config/exercise-banks/data/spanish-packs.json"),
    SAFE_ES,
  );
  const en = scrub(
    path.join(root, "src/config/exercise-banks/data/english-packs.json"),
    SAFE_EN,
  );
  console.log({ esScrubbed: es, enScrubbed: en });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

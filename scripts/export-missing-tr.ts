import { writeFileSync } from "fs";
import { getCourse } from "../src/config/courses";
import {
  hasCyrillicText,
  localizeTranslationQuestion,
} from "../src/lib/exercise-localize";
import prompts from "../src/config/exercise-translation-prompts.json";

async function main() {
  const course = await getCourse("spanish");
  const missing: {
    q: string;
    a: string;
    ch: string;
    existing: Record<string, string> | null;
  }[] = [];
  const seen = new Set<string>();
  for (const ch of course.getChapters()) {
    for (const ex of course.getExercises(ch.slug)) {
      if (ex.type !== "translation") continue;
      if (!hasCyrillicText(ex.question)) continue;
      const key = (ex.question || "").trim();
      if (seen.has(key)) continue;
      const en = localizeTranslationQuestion(ex, "en", "spanish");
      const es = localizeTranslationQuestion(ex, "es", "spanish");
      const de = localizeTranslationQuestion(ex, "de", "spanish");
      if (
        hasCyrillicText(en) ||
        hasCyrillicText(es) ||
        hasCyrillicText(de)
      ) {
        seen.add(key);
        missing.push({
          q: key,
          a: ex.answer || "",
          ch: ch.slug,
          existing:
            (prompts as Record<string, Record<string, string>>)[key] ?? null,
        });
      }
    }
  }
  writeFileSync("/tmp/missing-es-tr.json", JSON.stringify(missing, null, 2));
  console.log("unique missing", missing.length);
  console.log(
    "partial",
    missing.filter((m) => m.existing).length,
  );
}

main();

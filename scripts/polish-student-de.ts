import fs from "fs";
import { STUDENT_DICTS } from "../src/lib/i18n/student-dicts.ts";

const polish: Record<string, string> = {
  "nav.dashboard": "Übersicht",
  "nav.home": "Start",
  "nav.journey": "Reisepass",
  "nav.vocabulary": "Wortschatz",
  "nav.homework": "Hausaufgaben",
  "common.cancel": "Abbrechen",
  "common.next": "Weiter",
  "common.send": "Senden",
  "common.continue": "Weiter",
  "common.level": "Niveau",
  "common.lessons": "Lektionen",
  "common.streak": "Serie",
  "common.retry": "Erneut",
  "common.finish": "Fertig",
  "chapters.open": "Öffnen",
  "chapters.retry": "Wiederholen",
  "chapters.resetBtn": "Reise neu starten",
  "chapters.resetCancel": "Abbrechen",
  "chapters.current": "Aktuell",
  "courses.continue": "Weiter",
  "courses.vocabulary": "Wortschatz",
  "courses.select": "Auswählen",
  "dashboard.levelLabel": "Niveau",
  "dashboard.continueLearning": "Weiterlernen",
  "dashboard.hubSubtitle": "Was möchtest du heute tun?",
  "dashboard.askTutor": "Tutor fragen",
  "dashboard.practiceNow": "Jetzt üben",
  "dashboard.chaptersDone": "Kapitel fertig",
  "dashboard.currentLevel": "Aktuelles Niveau",
  "dashboard.currentStreak": "Aktuelle Serie",
  "dashboard.motivationStart":
    "Starte eine Lektion – dein Hippogreif-Guide hilft dir.",
  "dashboard.motivationStreak":
    "{streak}-Tage-Serie – halte das Feuer am Brennen!",
  "dashboard.languagesDesc": "Aktuell: {course} · Kurs wechseln",
  "dashboard.journeyDesc":
    "{completed} von {total} Kapiteln fertig · weiter: {next}",
  "dashboard.greetingNamed": "Hallo, {name}!",
  "dashboard.chapterLabel": "Kapitel {number} · {level}",
  "dashboard.courseNotReady":
    "„{course}“ wird noch vorbereitet – noch kein Unterricht.",
  "exercises.title": "Übungen",
  "tutor.title": "KI-Tutor",
  "settings.title": "Einstellungen",
  "progress.title": "Fortschritt",
  "vocabulary.title": "Wortschatz",
  "vocabTopics.title": "Themenwortschatz",
  "grammar.title": "Grammatik",
  "lesson.greetingNamed": "Hallo, {name}!",
  "lesson.chapterComplete": "Kapitel {number} abgeschlossen!",
  "lesson.chapterBadge": "Kapitel {number} · {level}",
  "lesson.minutes": "~{minutes} Min.",
  "journey.chapterLine": "Kapitel {number} — {title}",
  "journey.levelCertAchievement": "Niveau {level}",
  "journey.levelLabel": "Niveau",
  "grammar.aiPrompt":
    'Erkläre das Grammatikthema „{title}“ klar in der Sprache der Benutzeroberfläche. Praktische Beispiele und Tabellen nur auf {targetLanguage}. Kontext: {summary}.',
};

const de: Record<string, string> = { ...STUDENT_DICTS.de };
for (const [k, v] of Object.entries(polish)) de[k] = v;

for (const k of Object.keys(STUDENT_DICTS.en)) {
  const en = STUDENT_DICTS.en[k] || "";
  let d = de[k] || "";
  const enVars = [...en.matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
  if (!enVars.length) continue;
  const deParts = d.split(/\{[^}]+\}/);
  if (deParts.length === enVars.length + 1) {
    let out = deParts[0] ?? "";
    for (let i = 0; i < enVars.length; i++) {
      out += `{${enVars[i]}}` + (deParts[i + 1] ?? "");
    }
    d = out;
  } else {
    let i = 0;
    d = d.replace(/\{[^}]+\}/g, () => `{${enVars[i++] ?? "x"}}`);
  }
  de[k] = d;
}

const DICT_PATH = new URL("../src/lib/i18n/student-dicts.ts", import.meta.url);
let src = fs.readFileSync(DICT_PATH, "utf8");
const start = src.indexOf("const de: Dictionary = {");
const end = src.indexOf("\nexport const STUDENT_DICTS", start);
const lines = Object.keys(de)
  .sort()
  .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(de[k])},`);
const block = `const de: Dictionary = {\n${lines.join("\n")}\n};\n\n`;
src = src.slice(0, start) + block + src.slice(end);
fs.writeFileSync(DICT_PATH, src);

let broken = 0;
for (const k of Object.keys(STUDENT_DICTS.en)) {
  const enVars = [...(STUDENT_DICTS.en[k] || "").matchAll(/\{([^}]+)\}/g)].map(
    (m) => m[1],
  );
  const deVars = [...(de[k] || "").matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
  if (enVars.length && JSON.stringify(enVars) !== JSON.stringify(deVars)) {
    broken++;
  }
}
console.log({
  deKeys: Object.keys(de).length,
  brokenPlaceholders: broken,
  dashboard: de["nav.dashboard"],
  chapterLabel: de["dashboard.chapterLabel"],
});

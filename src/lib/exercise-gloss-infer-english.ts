import type { InterfaceLanguage, StaticExercise } from "@/types";

const CYR = /[\u0400-\u04FF]/;

/**
 * Lightweight RU meaning glosses for common English A1 cloze shapes.
 * Used when curated gloss maps miss a stem — never a substitute for full curation.
 */
export function inferEnglishQuestionGloss(
  exercise: Pick<StaticExercise, "type" | "question" | "answer">,
  interfaceLanguage: InterfaceLanguage,
): string | null {
  if (interfaceLanguage !== "ru") return null;
  if (exercise.type !== "multiple_choice" && exercise.type !== "fill_blank") {
    return null;
  }
  const q = (exercise.question ?? "").trim();
  if (!q || CYR.test(q)) return null;

  // She ___ (be) from Moscow. → Она ___ из Москвы. (be)
  const beFrom = q.match(
    /^(I|You|He|She|It|We|They|This|That|These|Those|My name|The \w+|Our \w+|Her \w+|His \w+|The children)\s+___+\s*\(be\)\s+(.+)$/i,
  );
  if (beFrom) {
    const subj = glossSubject(beFrom[1]!);
    const rest = glossTail(beFrom[2]!);
    if (subj && rest) return `${subj} ___ ${rest}`;
  }

  // ___ you a student? / ___ she from Spain?
  const qBe = q.match(/^___+\s+(you|she|he|they|we|i)\s+(.+)$/i);
  if (qBe) {
    const subj = glossSubject(qBe[1]!);
    const rest = glossTail(qBe[2]!);
    if (subj && rest) return `___ ${subj} ${rest}`;
  }

  // We go to ___ school every day. (place of study)
  if (/\(place of study\)/i.test(q)) {
    return q
      .replace(/\(place of study\)/i, "(место учёбы)")
      .replace(/^We go to/i, "Мы ходим в")
      .replace(/every day/i, "каждый день");
  }

  return null;
}

function glossSubject(raw: string): string | null {
  const s = raw.trim().toLowerCase();
  const map: Record<string, string> = {
    i: "Я",
    you: "ты",
    he: "Он",
    she: "Она",
    it: "Это",
    we: "Мы",
    they: "Они",
    this: "Это",
    that: "То",
    these: "Эти",
    those: "Те",
    "my name": "Меня зовут / Моё имя",
    "the children": "Дети",
    "the cat": "Кошка",
    "this city": "Этот город",
    "our house": "Наш дом",
    "these shoes": "Эти туфли",
    "her eyes": "Её глаза",
  };
  if (map[s]) return map[s];
  if (s.startsWith("the ")) return null;
  return null;
}

function glossTail(raw: string): string | null {
  let t = raw.trim().replace(/[.?!]+$/u, "");
  const pairs: Array<[RegExp, string]> = [
    [/^from moscow$/i, "из Москвы"],
    [/^from london$/i, "из Лондона"],
    [/^from spain$/i, "из Испании"],
    [/^from russia$/i, "из России"],
    [/^at home$/i, "дома"],
    [/^tired$/i, "устали"],
    [/^outside$/i, "на улице"],
    [/^not sure$/i, "не уверен"],
    [/^big$/i, "большой"],
    [/^old$/i, "старый"],
    [/^welcome$/i, "добро пожаловать"],
    [/^new$/i, "новые"],
    [/^black$/i, "чёрная"],
    [/^blue$/i, "голубые"],
    [/^a teacher$/i, "учитель"],
    [/^a student$/i, "студент"],
    [/^my brother$/i, "мой брат"],
    [/^my bag$/i, "моя сумка"],
    [/^in the park$/i, "в парке"],
    [/^cold today$/i, "холодно сегодня"],
    [/^very kind$/i, "очень добрый"],
    [/^pavel$/i, "Павел"],
    [/^not hungry$/i, "не голоден"],
    [/^on the table$/i, "на столе"],
    [/^happy$/i, "счастливы"],
    [/^ready$/i, "готовы"],
    [/^next$/i, "следующий"],
  ];
  for (const [re, ru] of pairs) {
    if (re.test(t)) return ru + (/\?$/.test(raw.trim()) ? "?" : ".");
  }
  return null;
}

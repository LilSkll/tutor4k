type I18n = Record<"ru" | "en" | "es" | "de", string>;

function t(ru: string, en: string, es: string, de: string): I18n {
  return { ru, en, es, de };
}

function p(
  left: string,
  right: string,
  ru: string,
  en: string,
  es: string,
  de: string,
): { left: string; right: string; diff: I18n } {
  return { left, right, diff: t(ru, en, es, de) };
}

/** CEFR frames for the English course (examples stay in English). */
export const ENGLISH_LEVEL_FRAMES: Record<
  string,
  {
    here: I18n;
    later: I18n;
    pairs: { left: string; right: string; diff: I18n }[];
  }
> = {
  "eng-a1-be": {
    here: t("A1: am/is/are, сокращения, отрицание.", "A1: am/is/are, contractions, negatives.", "A1: am/is/are.", "A1: am/is/are."),
    later: t("was/were — A2 Past Simple.", "was/were is A2 Past Simple.", "was/were es A2.", "was/were ist A2."),
    pairs: [p("I am a student.", "She is from London.", "I vs he/she/it", "I vs he/she/it", "I vs he/she/it", "I vs he/she/it")],
  },
  "eng-a1-present-simple": {
    here: t("A1: I work / he works; do/does.", "A1: I work / he works; do/does.", "A1: I work / he works.", "A1: I work / he works."),
    later: t("Present Continuous и Perfect — не эта тема.", "Continuous and Perfect are not this topic.", "Continuous y Perfect no son este tema.", "Continuous und Perfect sind nicht dieses Thema."),
    pairs: [p("I work.", "He works.", "без -s vs he/she/it + -s", "no -s vs he/she/it + -s", "sin -s vs -s", "ohne -s vs. -s")],
  },
  "eng-a1-there-is-are": {
    here: t("A1: there is / there are.", "A1: there is / there are.", "A1: there is / there are.", "A1: there is / there are."),
    later: t("it is vs there is путают на A2+; here только наличие.", "it is vs there is is a later trap; here: existence only.", "it is vs there is es trampa posterior.", "it is vs there is kommt später."),
    pairs: [p("There is a book.", "There are books.", "ед. vs мн.", "singular vs plural", "singular vs plural", "Sg. vs. Pl.")],
  },
  "eng-a1-can": {
    here: t("A1: форма can + инфинитив без to.", "A1: form can + bare infinitive.", "A1: can + infinitivo sin to.", "A1: can + Infinitiv ohne to."),
    later: t("Could / be able to нюансы — B1 модальные.", "Could / be able to nuances — B1 modals.", "Could / be able to — B1.", "Could / be able to — B1."),
    pairs: [p("I can swim.", "I can to swim.", "норма vs ошибка", "correct vs error", "norma vs error", "Norm vs. Fehler")],
  },
  "eng-a1-questions": {
    here: t("A1: Wh- + do/does/is.", "A1: Wh- + do/does/is.", "A1: Wh- + do/does/is.", "A1: Wh- + do/does/is."),
    later: t("Косвенные вопросы (I asked where…) — B1 reported.", "Indirect questions — B1 reported speech.", "Preguntas indirectas — B1.", "Indirekte Fragen — B1."),
    pairs: [p("Where do you live?", "Where you live?", "нужен do vs калька", "need do vs calque", "hace falta do", "do ist nötig")],
  },
  "eng-a1-prepositions": {
    here: t("A1: in / on / at места.", "A1: in / on / at for place.", "A1: in / on / at de lugar.", "A1: in / on / at für Ort."),
    later: t("at 5 pm / on Monday — время частично A2.", "Time in/on/at is partly A2.", "Tiempo in/on/at es en parte A2.", "Zeit in/on/at ist teils A2."),
    pairs: [p("in the box", "on the table", "внутри vs на поверхности", "inside vs on a surface", "dentro vs superficie", "innen vs. Oberfläche")],
  },
  "eng-a1-articles-basics": {
    here: t("A1: a/an/the/zero по звуку.", "A1: a/an/the/zero by sound.", "A1: a/an/the/zero por el sonido.", "A1: a/an/the/zero nach dem Laut."),
    later: t("Тонкий the с уникальностью в тексте — B1+.", "Discourse the is B1+.", "the discursivo es B1+.", "diskursives the ist B1+."),
    pairs: [p("an hour", "a house", "звук, не буква", "sound, not letter", "sonido, no letra", "Laut, nicht Buchstabe")],
  },
  "eng-a1-possessives": {
    here: t("A1: my/your и 's. its ≠ it's.", "A1: my/your and 's. its ≠ it's.", "A1: my/your y 's.", "A1: my/your und 's."),
    later: t("whose в relative — B1.", "whose in relatives is B1.", "whose en relativas es B1.", "whose in Relativsätzen ist B1."),
    pairs: [p("its paw", "it's raining", "принадлежность vs it is", "possession vs it is", "posesión vs it is", "Besitz vs. it is")],
  },
  "eng-a1-can-ability": {
    here: t("A1: три работы can — умение, разрешение, просьба.", "A1: can for ability, permission, request.", "A1: can: habilidad, permiso, petición.", "A1: can: Können, Erlaubnis, Bitte."),
    later: t("Could вежливее — B1.", "Could is more polite — B1.", "Could es más cortés — B1.", "Could ist höflicher — B1."),
    pairs: [p("I can swim.", "Can I open the window?", "умение vs разрешение", "ability vs permission", "habilidad vs permiso", "Fähigkeit vs. Erlaubnis")],
  },
  "eng-a2-past-simple": {
    here: t("A2: V-ed / went; did + V. was/were.", "A2: V-ed / went; did + V. was/were.", "A2: V-ed / went; did + V.", "A2: V-ed / went; did + V."),
    later: t("Present Perfect (опыт без when) — следующая A2/B1 тема.", "Present Perfect (experience, no when) is the next topic.", "Present Perfect es el tema siguiente.", "Present Perfect ist das nächste Thema."),
    pairs: [p("I went yesterday.", "I have been there.", "когда названо vs опыт", "when named vs experience", "cuándo vs experiencia", "wann genannt vs. Erfahrung")],
  },
  "eng-a2-comparatives": {
    here: t("A2: -er / more / the most; better.", "A2: -er / more / the most; better.", "A2: -er / more / the most.", "A2: -er / more / the most."),
    later: t("the more… the more — B2+.", "the more… the more is B2+.", "the more… the more es B2+.", "the more… the more ist B2+."),
    pairs: [p("taller than", "as tall as", "неравенство vs равенство", "unequal vs equal", "desigual vs igual", "ungleich vs. gleich")],
  },
  "eng-a2-present-perfect": {
    here: t("A2: have + V3; ever/never; не с yesterday.", "A2: have + V3; ever/never; not with yesterday.", "A2: have + V3; no con yesterday.", "A2: have + V3; nicht mit yesterday."),
    later: t("for/since длительность — B1 Perfect Continuous.", "for/since duration — B1 Perfect Continuous.", "for/since — B1.", "for/since — B1."),
    pairs: [p("I have visited Madrid.", "I visited Madrid in 2019.", "опыт vs дата", "experience vs date", "experiencia vs fecha", "Erfahrung vs. Datum")],
  },
  "eng-a2-present-perfect-intro": {
    here: t("A2: just / already / yet.", "A2: just / already / yet.", "A2: just / already / yet.", "A2: just / already / yet."),
    later: t("Полный контраст с Past Simple — тема Present Perfect ядра.", "Full contrast with Past Simple is the core Present Perfect topic.", "El contraste completo está en el tema núcleo.", "Der volle Kontrast steht im Kern-Thema."),
    pairs: [p("She has just arrived.", "I haven't finished yet.", "just vs yet", "just vs yet", "just vs yet", "just vs. yet")],
  },
  "eng-a2-going-to": {
    here: t("A2: be going to — намерение / тучи.", "A2: be going to — intention / evidence.", "A2: be going to — intención / evidencia.", "A2: be going to — Absicht / Evidenz."),
    later: t("will для обещания/решения сейчас — B1 future.", "will for promise/decision now is B1 future.", "will es B1.", "will ist B1."),
    pairs: [p("I'm going to learn Spanish.", "Look — it's going to rain.", "намерение vs прогноз по признакам", "intention vs evidence", "intención vs evidencia", "Absicht vs. Evidenz")],
  },
  "eng-a2-quantifiers": {
    here: t("A2: some/any/much/many/a lot of.", "A2: some/any/much/many/a lot of.", "A2: some/any/much/many.", "A2: some/any/much/many."),
    later: t("Исчисляемые подробно — extra countable.", "Countables in more detail — extra countable topic.", "Contables — tema extra.", "Zählbarkeit — Extra-Thema."),
    pairs: [p("many books", "much time", "count vs uncount", "count vs uncount", "contable vs incontable", "zählbar vs. unzählbar")],
  },
  "eng-a2-countable": {
    here: t("A2: countable vs uncountable; advice без -s.", "A2: countable vs uncountable; advice has no -s.", "A2: contable vs incontable.", "A2: zählbar vs. unzählbar."),
    later: t("some/any таблица — тема quantifiers.", "some/any table is the quantifiers topic.", "some/any está en quantifiers.", "some/any steht bei Quantifiers."),
    pairs: [p("a few ideas", "a little time", "few vs little", "few vs little", "few vs little", "few vs. little")],
  },
  "eng-b1-future-conditional": {
    here: t("B1: will и First Conditional. will не после if.", "B1: will and First Conditional. No will after if.", "B1: will y 1.er condicional.", "B1: will und First Conditional."),
    later: t("2nd/3rd — B2 conditionals.", "2nd/3rd are B2.", "2.º/3.º son B2.", "2./3. sind B2."),
    pairs: [p("If it rains, I will stay.", "If it will rain, I stay.", "норма vs ошибка", "correct vs error", "norma vs error", "Norm vs. Fehler")],
  },
  "eng-b1-modals": {
    here: t("B1: should / must / have to / mustn't / don't have to.", "B1: should / must / have to / mustn't / don't have to.", "B1: should / must / have to.", "B1: should / must / have to."),
    later: t("must = дедукция — B2 modals of deduction.", "must as deduction is B2.", "must deducción es B2.", "must als Schluss ist B2."),
    pairs: [p("You must wear a belt.", "You don't have to come.", "обязан vs не обязан", "obligation vs no need", "obligación vs no hace falta", "Pflicht vs. keine Pflicht")],
  },
  "eng-b1-narrative": {
    here: t("B1: Past Continuous, used to, Past Perfect для рассказа.", "B1: Past Continuous, used to, Past Perfect for stories.", "B1: tiempos narrativos.", "B1: Erzählzeiten."),
    later: t("3rd conditional (if I had studied) — B2.", "3rd conditional is B2.", "3.er condicional es B2.", "3. Konditional ist B2."),
    pairs: [p("I was reading when she called.", "The train had left.", "фон vs раньше-прошлого", "background vs earlier past", "fondo vs pasado anterior", "Hintergrund vs. Vorvergangenheit")],
  },
  "eng-b1-perfect-continuous": {
    here: t("B1: have been + V-ing; for/since.", "B1: have been + V-ing; for/since.", "B1: have been + V-ing.", "B1: have been + V-ing."),
    later: t("Простой Present Perfect для опыта — A2 тема.", "Simple Present Perfect for experience is A2.", "Present Perfect de experiencia es A2.", "Present Perfect als Erfahrung ist A2."),
    pairs: [p("I've been studying for 3 hours.", "I've studied this chapter.", "процесс vs результат/опыт", "process vs result/experience", "proceso vs resultado", "Prozess vs. Ergebnis")],
  },
  "eng-b1-conditionals-review": {
    here: t("B1: zero / 1st / 2nd вместе. 3rd — B2.", "B1: zero / 1st / 2nd together. 3rd is B2.", "B1: 0 / 1 / 2. El 3.º es B2.", "B1: 0 / 1 / 2. Das 3. ist B2."),
    later: t("Mixed conditionals — C1.", "Mixed conditionals are C1.", "Mixtos — C1.", "Gemischte — C1."),
    pairs: [p("If you heat ice, it melts.", "If I had time, I would travel.", "закон vs гипотеза сейчас", "law vs unreal now", "ley vs hipótesis", "Gesetz vs. irreal jetzt")],
  },
  "eng-b1-reported-speech": {
    here: t("B1: say/tell + сдвиг; вопросы без do.", "B1: say/tell + backshift; questions without do.", "B1: say/tell + retroceso.", "B1: say/tell + Verschiebung."),
    later: t("Relative who/which — отдельная тема B1. Полный reported + relative — B2 ядро.", "Relatives are a separate B1 topic. Combined reported+relative is B2 core.", "Relativas — otro tema B1.", "Relativsätze — anderes B1-Thema."),
    pairs: [p("She said she was tired.", "She told me to wait.", "say vs tell + person", "say vs tell + person", "say vs tell + persona", "say vs. tell + Person")],
  },
  "eng-b1-relative-clauses": {
    here: t("B1: defining who/which/that, без запятых.", "B1: defining who/which/that, no commas.", "B1: defining, sin comas.", "B1: defining, ohne Kommas."),
    later: t("Non-defining с запятыми — B2 reported-clauses.", "Non-defining with commas is B2.", "Non-defining con comas es B2.", "Non-defining mit Kommas ist B2."),
    pairs: [p("The man who called is here.", "My father, who is 60, works hard.", "defining vs extra (B2)", "defining vs extra (B2)", "defining vs extra (B2)", "defining vs. extra (B2)")],
  },
  "eng-b2-conditionals": {
    here: t("B2: 2nd и 3rd. If I were / If I had studied.", "B2: 2nd and 3rd. If I were / If I had studied.", "B2: 2.º y 3.º.", "B2: 2. und 3."),
    later: t("Mixed — C1. Zero/1st — B1.", "Mixed is C1. Zero/1st are B1.", "Mixtos — C1. 0/1 — B1.", "Gemischte — C1. 0/1 — B1."),
    pairs: [p("If I had money, I would travel.", "If I had studied, I would have passed.", "ирреал сейчас vs прошлое", "unreal now vs past", "irreal ahora vs pasado", "irreal jetzt vs. Vergangenheit")],
  },
  "eng-b2-passive": {
    here: t("B2: be + V3 по временам; by.", "B2: be + V3 across tenses; by.", "B2: be + V3; by.", "B2: be + V3; by."),
    later: t("have something done — extra B2 advanced.", "have something done is the extra B2 topic.", "have something done es el extra B2.", "have something done ist das Extra-B2."),
    pairs: [p("They built it.", "It was built.", "актив vs пассив", "active vs passive", "activa vs pasiva", "Aktiv vs. Passiv")],
  },
  "eng-b2-passive-advanced": {
    here: t("B2: все времена пассива + have something done.", "B2: all passive tenses + have something done.", "B2: todos los tiempos + have something done.", "B2: alle Zeiten + have something done."),
    later: t("Базовый Present/Past passive — ядро B2.", "Basic Present/Past passive is the core B2 topic.", "La pasiva básica es el núcleo B2.", "Das einfache Passiv ist das B2-Kern-Thema."),
    pairs: [p("The road is being repaired.", "I had my hair cut.", "процесс vs услуга", "process vs service", "proceso vs servicio", "Prozess vs. Dienstleistung")],
  },
  "eng-b2-reported-clauses": {
    here: t("B2: reported + relative вместе, including non-defining.", "B2: reported + relative together, including non-defining.", "B2: estilo indirecto + relativas.", "B2: indirekte Rede + Relativsätze."),
    later: t("Базовый say/tell — B1 reported. Defining only — B1 relatives.", "Basic say/tell is B1. Defining-only is B1 relatives.", "say/tell básico es B1.", "Einfaches say/tell ist B1."),
    pairs: [p("He said he was tired.", "The man who lives here", "сдвиг vs относительное", "backshift vs relative", "retroceso vs relativo", "Verschiebung vs. Relativ")],
  },
  "eng-b2-modals-deduction": {
    here: t("B2: must/might/can't = насколько уверен, не обязанность.", "B2: must/might/can't = how sure, not duty.", "B2: must/might/can't = certeza, no obligación.", "B2: must/might/can't = Sicherheit, nicht Pflicht."),
    later: t("must wear a belt — B1 obligation.", "must wear a belt is B1 obligation.", "must wear es B1 obligación.", "must wear ist B1-Pflicht."),
    pairs: [p("He must be tired.", "You must wear a belt.", "дедукция vs обязанность", "deduction vs obligation", "deducción vs obligación", "Schluss vs. Pflicht")],
  },
  "eng-ielts-letter-informal": {
    here: t("B1 IELTS GT: дружеское письмо, 3 bullets.", "B1 IELTS GT: friend letter, 3 bullets.", "B1 IELTS GT: carta a un amigo.", "B1 IELTS GT: Freundschaftsbrief."),
    later: t("Formal letter — B2.", "The formal letter is B2.", "La carta formal es B2.", "Der formelle Brief ist B2."),
    pairs: [p("Hi Sam,", "Dear Sir or Madam,", "informal vs formal (не сюда)", "informal vs formal (not this task)", "informal vs formal", "informell vs. formell")],
  },
  "eng-ielts-letter-formal": {
    here: t("B2 IELTS GT: жалоба/запрос, faithfully/sincerely.", "B2 IELTS GT: complaint/enquiry, faithfully/sincerely.", "B2 IELTS GT: queja/consulta.", "B2 IELTS GT: Beschwerde/Anfrage."),
    later: t("Дружеское — B1 informal letter.", "The friend letter is B1 informal.", "La carta informal es B1.", "Der informelle Brief ist B1."),
    pairs: [p("Yours faithfully,", "Yours sincerely,", "имени нет vs имя есть", "no name vs name known", "sin nombre vs con nombre", "kein Name vs. Name bekannt")],
  },
  "eng-ielts-essay-structure": {
    here: t("B2 Task 2: тип вопроса + 4 абзаца, 250+.", "B2 Task 2: question type + 4 paragraphs, 250+.", "B2 Task 2: tipo + 4 párrafos.", "B2 Task 2: Fragetyp + 4 Absätze."),
    later: t("Линкеры подробно — cohesion. Язык мнения — C1.", "Linkers in detail — cohesion. Opinion language is C1.", "Linkers — cohesion. Opinión — C1.", "Linker — Cohesion. Meinung — C1."),
    pairs: [p("To what extent do you agree?", "Discuss both views and give your opinion.", "нужна позиция vs обе стороны+позиция", "need a stance vs both+stance", "postura vs ambos+postura", "Haltung vs. beide+Haltung")],
  },
  "eng-ielts-essay-cohesion": {
    here: t("B2: связность, не список However.", "B2: cohesion, not a However list.", "B2: cohesión, no lista de However.", "B2: Kohäsion, keine However-Liste."),
    later: t("Структура 4 абзацев — essay structure.", "Four-paragraph shape is essay structure.", "Los 4 párrafos están en structure.", "Die 4 Absätze stehen bei Structure."),
    pairs: [p("This approach…", "people people people", "referencing vs повтор", "referencing vs repetition", "referencing vs repetición", "Referencing vs. Wiederholung")],
  },
  "eng-ielts-task1-report": {
    here: t("B2 Academic Task 1: overview + данные, без мнения.", "B2 Academic Task 1: overview + data, no opinion.", "B2 Task 1: overview + datos, sin opinión.", "B2 Task 1: Overview + Daten, keine Meinung."),
    later: t("Эссе мнение — Task 2.", "Opinion essays are Task 2.", "El essay de opinión es Task 2.", "Meinungsessays sind Task 2."),
    pairs: [p("Sales rose sharply.", "I think this is interesting.", "описание vs запрещённое мнение", "description vs forbidden opinion", "descripción vs opinión", "Beschreibung vs. verbotene Meinung")],
  },
  "eng-cambridge-letter-email": {
    here: t("B2 First: тон под читателя (CA).", "B2 First: tone matches the reader (CA).", "B2 First: tono según el lector.", "B2 First: Ton je Leser."),
    later: t("Essay vs article — C1 Cambridge тема.", "Essay vs article is the C1 Cambridge topic.", "Essay vs article es C1.", "Essay vs Article ist C1."),
    pairs: [p("Hi Anna, … Take care,", "Dear Sir, … Love, Anna", "совместимо vs штраф", "compatible vs penalty", "compatible vs penalización", "passend vs. Abzug")],
  },
  "eng-cambridge-essay-article": {
    here: t("C1: essay ≠ article (жанр).", "C1: essay ≠ article (genre).", "C1: essay ≠ article.", "C1: Essay ≠ Article."),
    later: t("Письмо/email — B2 First letter.", "Letter/email is B2 First letter.", "Carta/email es B2.", "Brief/E-Mail ist B2."),
    pairs: [p("This essay will discuss…", "Have you ever wondered…?", "essay vs article opening", "essay vs article opening", "apertura essay vs article", "Essay- vs. Article-Einstieg")],
  },
  "eng-ielts-opinion-language": {
    here: t("C1: сила утверждения и цепочка claim→example.", "C1: claim strength and claim→example chain.", "C1: fuerza del claim.", "C1: Stärke der Behauptung."),
    later: t("Скелет 4 абзацев — B2 structure.", "Four-paragraph skeleton is B2 structure.", "El esqueleto de 4 es B2.", "Das 4-Absatz-Gerüst ist B2."),
    pairs: [p("I firmly believe that…", "It could be argued that…", "жёстко vs hedge", "strong vs hedge", "fuerte vs hedge", "stark vs. Hedge")],
  },
  "eng-cbe-register-shift": {
    here: t("B2: три колонки регистра для любого экзаменационного письма.", "B2: three register columns for any exam letter.", "B2: tres columnas de registro.", "B2: drei Registerspalten."),
    later: t("Конкретные скелеты IELTS/Cambridge — их темы.", "Concrete IELTS/Cambridge skeletons live in those topics.", "Los esqueletos concretos están en esos temas.", "Die konkreten Gerüste stehen in jenen Themen."),
    pairs: [p("Can you fix it?", "I would be grateful if you could resolve this.", "informal vs formal same idea", "informal vs formal same idea", "misma idea, otro registro", "dieselbe Idee, anderes Register")],
  },
  "eng-c1-inversion": {
    here: t("C1: Never have I… — эмфаза, не новое время.", "C1: Never have I… — emphasis, not a new tense.", "C1: Never have I… — énfasis.", "C1: Never have I… — Emphase."),
    later: t("Cleft It was John who — C2.", "Cleft It was John who is C2.", "Cleft es C2.", "Cleft ist C2."),
    pairs: [p("I have never seen this.", "Never have I seen this.", "нейтрально vs инверсия", "neutral vs inversion", "neutro vs inversión", "neutral vs. Inversion")],
  },
  "eng-c1-discourse": {
    here: t("C1: substitution, ellipsis, fronting — ещё не полный C2.", "C1: substitution, ellipsis, fronting — not full C2 yet.", "C1: substitution, ellipsis, fronting.", "C1: Substitution, Ellipse, Fronting."),
    later: t("Глубокий эллипсис so/neither — C2.", "Deep so/neither ellipsis is C2.", "so/neither profundo es C2.", "tiefes so/neither ist C2."),
    pairs: [p("I'll have the red one.", "(Are you) Ready?", "substitution vs ellipsis", "substitution vs ellipsis", "sustitución vs elipsis", "Substitution vs. Ellipse")],
  },
  "eng-c1-mixed-conditionals": {
    here: t("C1: if then → would now и наоборот.", "C1: if then → would now and the reverse.", "C1: pasado→presente y al revés.", "C1: dann→jetzt und umgekehrt."),
    later: t("Чистые 2nd/3rd — B2.", "Pure 2nd/3rd are B2.", "2.º/3.º puros son B2.", "Reine 2./3. sind B2."),
    pairs: [p("If I had studied medicine, I would be a doctor now.", "If I had studied, I would have passed.", "mixed vs чистый 3rd", "mixed vs pure 3rd", "mixto vs 3.º puro", "gemischt vs. reines 3.")],
  },
  "eng-c1-review": {
    here: t("C1: сводка к IELTS, не новые правила.", "C1: IELTS recap, not new rules.", "C1: repaso IELTS, no reglas nuevas.", "C1: IELTS-Repaso, keine neuen Regeln."),
    later: t("Каждая конструкция разобрана в своей теме уровнем ниже.", "Each structure is taught in its own lower-level topic.", "Cada estructura está en su tema.", "Jede Struktur steht in ihrem Thema."),
    pairs: [p("Use conditionals and passives.", "Memorise a model essay.", "диапазон vs заученный абзац", "range vs memorised paragraph", "rango vs párrafo memorizado", "Range vs. auswendig gelernter Absatz")],
  },
  "eng-c2-cleft-emphasis": {
    here: t("C2: cleft и do-эмфаза.", "C2: cleft and emphatic do.", "C2: cleft y do enfático.", "C2: Cleft und emphatisches do."),
    later: t("Простая инверсия Never have I — C1.", "Simple inversion Never have I is C1.", "La inversión Never have I es C1.", "Einfache Inversion Never have I ist C1."),
    pairs: [p("John broke the vase.", "It was John who broke the vase.", "нейтрально vs фокус", "neutral vs focus", "neutro vs foco", "neutral vs. Fokus")],
  },
  "eng-c2-ellipsis-substitution": {
    here: t("C2: so/neither, hope not, one/ones на скорости носителя.", "C2: so/neither, hope not, one/ones at native speed.", "C2: so/neither, hope not.", "C2: so/neither, hope not."),
    later: t("Базовый one/do — C1 discourse.", "Basic one/do is C1 discourse.", "one/do básico es C1.", "Einfaches one/do ist C1."),
    pairs: [p("So do I.", "So I do.", "согласие vs «действительно так»", "agreement vs “indeed I do”", "acuerdo vs énfasis", "Zustimmung vs. «tatsächlich»")],
  },
  "eng-c2-hedging-nuance": {
    here: t("C2: hedging и understatement.", "C2: hedging and understatement.", "C2: hedging y understatement.", "C2: Hedging und Understatement."),
    later: t("Академические фразы IELTS эссе — C1 opinion language.", "IELTS essay phrases are C1 opinion language.", "Frases IELTS essay son C1.", "IELTS-Essay-Phrasen sind C1."),
    pairs: [p("Not bad.", "It's not **bad**!", "understatement vs интонация наоборот", "understatement vs flipped intonation", "understatement vs entonación", "Understatement vs. Intonation")],
  },
};

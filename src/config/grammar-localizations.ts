import type { InterfaceLanguage } from "@/types";

export type GrammarLocaleFields = {
  title?: string;
  category?: string;
  summary?: string;
};

export const GRAMMAR_CATEGORY: Record<
  string,
  Partial<Record<InterfaceLanguage, string>>
> = {
  "Determinantes": {
    "en": "Determiners",
    "es": "Determinantes"
  },
  "Глаголы": {
    "en": "Verbs",
    "es": "Verbos"
  },
  "Существительные": {
    "en": "Nouns",
    "es": "Sustantivos"
  },
  "Лексика": {
    "en": "Vocabulary",
    "es": "Léxico"
  },
  "Предлоги": {
    "en": "Prepositions",
    "es": "Preposiciones"
  },
  "Синтаксис": {
    "en": "Syntax",
    "es": "Sintaxis"
  },
  "Прошедшие времена": {
    "en": "Past tenses",
    "es": "Tiempos pasados"
  },
  "Прилагательные": {
    "en": "Adjectives",
    "es": "Adjetivos"
  },
  "Будущее время": {
    "en": "Future tense",
    "es": "Tiempo futuro"
  },
  "Наклонения": {
    "en": "Moods",
    "es": "Modos verbales"
  },
  "Местоимения": {
    "en": "Pronouns",
    "es": "Pronombres"
  },
  "Наречия": {
    "en": "Adverbs",
    "es": "Adverbios"
  },
  "Стилистика": {
    "en": "Style",
    "es": "Estilo"
  },
  "Подготовка к DELE": {
    "en": "DELE Preparation",
    "es": "Preparación DELE"
  },
  "Времена": {
    "en": "Tenses",
    "es": "Tiempos"
  },
  "Конструкции": {
    "en": "Constructions",
    "es": "Construcciones"
  },
  "Модальные": {
    "en": "Modals",
    "es": "Modales"
  },
  "Времена / Условия": {
    "en": "Tenses / Conditionals",
    "es": "Tiempos / Condicionales"
  },
  "Условия": {
    "en": "Conditionals",
    "es": "Condicionales"
  },
  "Залог": {
    "en": "Voice",
    "es": "Voz"
  },
  "Дискурс": {
    "en": "Discourse",
    "es": "Discurso"
  },
  "Определители": {
    "en": "Determiners",
    "es": "Determinantes"
  },
  "Условия / Залог": {
    "en": "Conditionals / Voice",
    "es": "Condicionales / Voz"
  },
  "Подготовка к экзамену": {
    "en": "Exam preparation",
    "es": "Preparación de examen"
  },
  "Артикли": {
    "en": "Articles",
    "es": "Artículos"
  },
  "Условные": {
    "en": "Conditionals",
    "es": "Condicionales"
  },
  "Речь": {
    "en": "Speech",
    "es": "Discurso"
  },
  "Сложное предложение": {
    "en": "Complex sentences",
    "es": "Oración compleja"
  },
  "Письмо / IELTS": {
    "en": "Writing / IELTS",
    "es": "Escritura / IELTS"
  },
  "Письмо / Cambridge": {
    "en": "Writing / Cambridge",
    "es": "Escritura / Cambridge"
  },
  "Стиль / Exam": {
    "en": "Style / Exam",
    "es": "Estilo / Examen"
  }
};

export const GRAMMAR_TOPIC: Record<
  string,
  Partial<Record<InterfaceLanguage, GrammarLocaleFields>>
> = {
  "a1-articulos": {
    "en": {
      "title": "Articles",
      "summary": "Definite and indefinite articles (el/la vs un/una); special case: el agua."
    },
    "es": {
      "title": "Artículos",
      "summary": "Artículos definidos e indefinidos (el/la vs un/una); caso especial: el agua."
    }
  },
  "a1-ser-estar": {
    "en": {
      "title": "Ser / Estar",
      "summary": "First topic: greetings and two verbs for “to be” — ser (who you are) and estar (how you are now)."
    },
    "es": {
      "title": "Ser y Estar",
      "summary": "Primer tema: saludos y dos verbos «ser / estar» — quién eres (ser) y cómo estás ahora (estar)."
    }
  },
  "a1-presente": {
    "en": {
      "title": "Present Indicative",
      "summary": "Present tense: three verb groups (-ar / -er / -ir) and how the ending changes."
    },
    "es": {
      "title": "Presente de Indicativo",
      "summary": "Presente de indicativo: tres grupos de verbos (-ar / -er / -ir) y cómo cambia la terminación."
    }
  },
  "a1-genero-numero": {
    "en": {
      "title": "Gender and Number",
      "summary": "Noun gender and number; exceptions like problema, mano, and el agua."
    },
    "es": {
      "title": "Género y Número",
      "summary": "Género y número del sustantivo; excepciones como problema, mano y el agua."
    }
  },
  "a1-numeros-1-100": {
    "en": {
      "title": "Numbers, Days & Time",
      "summary": "Numbers 1–100, days, months, and telling the time (es la una / son las dos)."
    },
    "es": {
      "title": "Números, días y la hora",
      "summary": "Números 1–100, días, meses y la hora (es la una / son las dos)."
    }
  },
  "a1-preposiciones-lugar": {
    "en": {
      "title": "Prepositions of Place",
      "summary": "Prepositions of place: en, a, de, sobre, debajo, delante — where something is."
    },
    "es": {
      "title": "Preposiciones de Lugar",
      "summary": "Preposiciones de lugar: en, a, de, sobre, debajo, delante — dónde está algo."
    }
  },
  "a1-gustar": {
    "en": {
      "title": "Verb Gustar",
      "summary": "Verb gustar: “I like coffee” = me gusta el café — the thing liked is the subject."
    },
    "es": {
      "title": "Verbo Gustar",
      "summary": "Verbo gustar: «me gusta el café» — la cosa que gusta es el sujeto, no la persona."
    }
  },
  "a1-tener-expressions": {
    "en": {
      "title": "Expressions with Tener",
      "summary": "Expressions with tener: hunger, cold, sleepiness, being right — not with estar."
    },
    "es": {
      "title": "Expresiones con Tener",
      "summary": "Expresiones con tener: hambre, frío, sueño, razón — no con estar."
    }
  },
  "a1-preguntas": {
    "en": {
      "title": "Question Sentences",
      "summary": "Question words — qué, quién, dónde, cuándo, cómo, por qué — and ¿…? in writing."
    },
    "es": {
      "title": "Oraciones Interrogativas",
      "summary": "Palabras interrogativas — qué, quién, dónde, cuándo, cómo, por qué — y ¿…? escrito."
    }
  },
  "a1-verbos-frecuentes": {
    "en": {
      "title": "Common Verbs",
      "summary": "Essential irregular verbs in the present: ir, tener, hacer, poder, querer, decir."
    },
    "es": {
      "title": "Verbos Frecuentes",
      "summary": "Verbos irregulares esenciales en presente: ir, tener, hacer, poder, querer, decir."
    }
  },
  "a2-preterito-perfecto": {
    "en": {
      "title": "Present Perfect (Pretérito Perfecto)",
      "summary": "Pretérito Perfecto — past actions still connected to the present: he comido."
    },
    "es": {
      "title": "Pretérito Perfecto Compuesto",
      "summary": "Pretérito Perfecto — pasado aún ligado al presente: he comido, has ido."
    }
  },
  "a2-preterito-indefinido": {
    "en": {
      "title": "Preterite (Indefinido)",
      "summary": "Pretérito Indefinido — a completed action at a specific past moment: ayer fui."
    },
    "es": {
      "title": "Pretérito Indefinido",
      "summary": "Pretérito Indefinido — acción completada en un momento concreto: ayer fui."
    }
  },
  "a2-imperfecto": {
    "en": {
      "title": "Imperfect Past",
      "summary": "Pretérito Imperfecto — habits, descriptions, and ongoing background in the past."
    },
    "es": {
      "title": "Pretérito Imperfecto",
      "summary": "Pretérito Imperfecto — hábitos, descripciones y fondo continuo en el pasado."
    }
  },
  "a2-por-para": {
    "en": {
      "title": "Por vs Para",
      "summary": "Para = purpose / for whom; por = reason, route, price, time of day."
    },
    "es": {
      "title": "Por y Para",
      "summary": "Para = finalidad / para quién; por = causa, ruta, precio, momento del día."
    }
  },
  "a2-comparativos": {
    "en": {
      "title": "Comparatives and Superlatives",
      "summary": "Comparatives and superlatives: más/menos, tan…como, el más…; mejor, peor."
    },
    "es": {
      "title": "Comparativos y Superlativos",
      "summary": "Comparativos y superlativos: más/menos, tan…como, el más…; mejor, peor."
    }
  },
  "a2-futuro-simple": {
    "en": {
      "title": "Simple Future",
      "summary": "Simple future tense: hablaré, tendré — not only ir a + infinitive."
    },
    "es": {
      "title": "Futuro Simple",
      "summary": "Futuro simple: hablaré, tendré — no solo ir a + infinitivo."
    }
  },
  "b1-subjuntivo": {
    "en": {
      "title": "Subjunctive (Present)",
      "summary": "Present subjunctive — for wishes, doubt, and emotions: quiero que vengas."
    },
    "es": {
      "title": "Modo Subjuntivo (Presente)",
      "summary": "Subjuntivo presente — deseos, dudas y emociones: quiero que vengas."
    }
  },
  "b1-imperativo": {
    "en": {
      "title": "Imperative",
      "summary": "Imperative — commands and requests: habla / no hables."
    },
    "es": {
      "title": "Modo Imperativo",
      "summary": "Imperativo — órdenes y peticiones: habla / no hables."
    }
  },
  "b1-condicional": {
    "en": {
      "title": "Simple Conditional",
      "summary": "Conditional — polite requests and hypotheticals: podría, me gustaría."
    },
    "es": {
      "title": "Modo Condicional",
      "summary": "Condicional — peticiones corteses e hipótesis: podría, me gustaría."
    }
  },
  "b1-pronombre-se": {
    "en": {
      "title": "Pronoun SE",
      "summary": "Pronoun se — reflexive, reciprocal, impersonal, passive, and accidental uses."
    },
    "es": {
      "title": "Pronombre SE",
      "summary": "Pronombre se — reflexivo, recíproco, impersonal, pasivo y uso accidental."
    }
  },
  "b1-relativos": {
    "en": {
      "title": "Relative Pronouns",
      "summary": "Relative pronouns — que, quien, lo que, cuyo, donde — to link clauses."
    },
    "es": {
      "title": "Pronombres Relativos",
      "summary": "Pronombres relativos — que, quien, lo que, cuyo, donde — para unir oraciones."
    }
  },
  "b1-pluscuamperfecto": {
    "en": {
      "title": "Past Perfect (Pluscuamperfecto)",
      "summary": "Pluperfect — an action before another past action: había comido when you arrived."
    },
    "es": {
      "title": "Pretérito Pluscuamperfecto",
      "summary": "Pluscuamperfecto — acción anterior a otra en el pasado: había comido cuando llegaste."
    }
  },
  "b1-subjuntivo-imperfecto": {
    "en": {
      "title": "Imperfect Subjunctive",
      "summary": "Imperfect subjunctive — unreal conditions and past wishes: si tuviera…"
    },
    "es": {
      "title": "Subjuntivo Imperfecto",
      "summary": "Subjuntivo imperfecto — condiciones irreales y deseos en pasado: si tuviera…"
    }
  },
  "b1-pronombres-objetos": {
    "en": {
      "title": "Object Pronouns",
      "summary": "Object pronouns — lo/la (it/them), le (to him/her), se lo (not le lo)."
    },
    "es": {
      "title": "Pronombres de Objeto (OD/OI)",
      "summary": "Pronombres de objeto — lo/la, le, se lo (no le lo)."
    }
  },
  "b1-adverbios": {
    "en": {
      "title": "Adverbs",
      "summary": "Adverbs — often -mente; muy vs mucho; quizás with subjunctive."
    },
    "es": {
      "title": "Adverbios",
      "summary": "Adverbios — a menudo -mente; muy vs mucho; quizás con subjuntivo."
    }
  },
  "b2-estilo-indirecto": {
    "en": {
      "title": "Reported Speech",
      "summary": "Reported speech — dijo que vendría; tense backshift after a past reporting verb."
    },
    "es": {
      "title": "Estilo Indirecto",
      "summary": "Estilo indirecto — dijo que vendría; cambio de tiempos tras verbo en pasado."
    }
  },
  "b2-voz-pasiva": {
    "en": {
      "title": "Passive Voice",
      "summary": "Passive voice — fue escrito vs natural se habla; states with estar."
    },
    "es": {
      "title": "Voz Pasiva y Pasiva Refleja",
      "summary": "Voz pasiva — fue escrito vs se habla; estados con estar."
    }
  },
  "b2-subjuntivo-compuestos": {
    "en": {
      "title": "Compound Subjunctive",
      "summary": "Compound subjunctive — haya hablado, hubiera hablado; same rule, different time."
    },
    "es": {
      "title": "Subjuntivo Perfecto y Pluscuamperfecto",
      "summary": "Subjuntivo compuesto — haya hablado, hubiera hablado; misma regla, otro tiempo."
    }
  },
  "b2-condicionales-compuestos": {
    "en": {
      "title": "Compound Conditional",
      "summary": "Conditional perfect — habría ido; three si types with matching verb forms."
    },
    "es": {
      "title": "Condicional Compuesto",
      "summary": "Condicional compuesto — habría ido; tres tipos de si con sus formas."
    }
  },
  "b2-relativos-avanzado": {
    "en": {
      "title": "Advanced Relatives",
      "summary": "Advanced relatives — el cual, lo que, adonde — for formal register."
    },
    "es": {
      "title": "Relativos Avanzados",
      "summary": "Relativos avanzados — el cual, lo que, adonde — registro formal."
    }
  },
  "b2-conectores": {
    "en": {
      "title": "Discourse Connectors",
      "summary": "Discourse connectors — sin embargo, por lo tanto; some trigger subjunctive."
    },
    "es": {
      "title": "Conectores Discursivos",
      "summary": "Conectores discursivos — sin embargo, por lo tanto; algunos piden subjuntivo."
    }
  },
  "c1-perifrasis-verbales": {
    "en": {
      "title": "Verbal Periphrases",
      "summary": "Verbal periphrases — acabar de, llevar + gerundio; trap: deber vs deber de."
    },
    "es": {
      "title": "Perífrasis Verbales",
      "summary": "Perífrasis verbales — acabar de, llevar + gerundio; trampa: deber vs deber de."
    }
  },
  "c1-matices-estilisticos": {
    "en": {
      "title": "Stylistic Nuances",
      "summary": "Style and register — politeness, tú vs usted; choosing the right tone."
    },
    "es": {
      "title": "Matices Estilísticos y Registros",
      "summary": "Matices de estilo — cortesía, tú vs usted; elegir el tono adecuado."
    }
  },
  "c1-subjuntivo-avanzado": {
    "en": {
      "title": "Advanced Subjunctive",
      "summary": "Advanced subjunctive — aunque, donde, como: fact → indicative, hypothesis → subjunctive."
    },
    "es": {
      "title": "Subjuntivo: Usos Avanzados",
      "summary": "Subjuntivo avanzado — aunque, donde, como: hecho → indicativo, hipótesis → subjuntivo."
    }
  },
  "c1-indirecto-avanzado": {
    "en": {
      "title": "Advanced Reported Speech",
      "summary": "Full reported-speech grid — all backshifts, subjunctive, hoy → aquel día."
    },
    "es": {
      "title": "Estilo Indirecto Avanzado",
      "summary": "Estilo indirecto completo — todos los cambios, subjuntivo, hoy → aquel día."
    }
  },
  "c1-pronombres-avanzado": {
    "en": {
      "title": "Advanced Pronouns",
      "summary": "Advanced pronouns — lo bueno, a María la veo; leísmo vs standard usage."
    },
    "es": {
      "title": "Pronombres Avanzados",
      "summary": "Pronombres avanzados — lo bueno, a María la veo; leísmo vs norma."
    }
  },
  "c1-ser-estar-avanzado": {
    "en": {
      "title": "Ser/Estar: Advanced",
      "summary": "Advanced ser vs estar — pairs where the wrong verb changes the meaning."
    },
    "es": {
      "title": "Ser y Estar: Matices Avanzados",
      "summary": "Ser vs estar avanzado — pares donde el verbo equivocado cambia el sentido."
    }
  },
  "c2-ironia-registry": {
    "en": {
      "title": "Irony and Register",
      "summary": "Irony, sarcasm, and register — forms are known; appropriateness matters."
    },
    "es": {
      "title": "Ironía y Registro",
      "summary": "Ironía, sarcasmo y registro — las formas se conocen; importa la adecuación."
    }
  },
  "dele-contraste-pasados": {
    "en": {
      "title": "DELE: Past Tense Contrast",
      "summary": "DELE past-tense contrast — Perfecto vs Indefinido vs Imperfecto; Pluscuamperfecto in chapter journey."
    },
    "es": {
      "title": "DELE: Contraste de Pasados",
      "summary": "Contraste DELE — Perfecto vs Indefinido vs Imperfecto; Pluscuamperfecto en el recorrido."
    }
  },
  "dele-carta-formal": {
    "en": {
      "title": "DELE: Formal and Informal Letters",
      "summary": "DELE formal letter — openings, polite requests, closings; condicional and register."
    },
    "es": {
      "title": "DELE: Carta Formal e Informal",
      "summary": "Carta formal DELE — saludos, peticiones corteses, despedidas; condicional y registro."
    }
  },
  "dele-conectores-redaccion": {
    "en": {
      "title": "DELE: Essay Connectors",
      "summary": "DELE essay — en primer lugar, no obstante, en definitiva; opinion with subjunctive."
    },
    "es": {
      "title": "DELE: Conectores para la Redacción",
      "summary": "Redacción DELE — en primer lugar, no obstante, en definitiva; opinión con subjuntivo."
    }
  },
  "dele-expresion-oral": {
    "en": {
      "title": "DELE: Speaking Exam",
      "summary": "DELE speaking — describing photos, hypotheses, opinions, agreeing/disagreeing."
    },
    "es": {
      "title": "DELE: Expresión Oral",
      "summary": "Expresión oral DELE — describir fotos, hipótesis, opinión, acuerdo/desacuerdo."
    }
  },
  "c2-oraciones-hendidas": {
    "en": {
      "title": "Cleft Sentences and Emphasis",
      "summary": "Cleft sentences — fue Juan quien…, lo que necesito es… — for emphasis."
    },
    "es": {
      "title": "Oraciones Hendidas y Énfasis",
      "summary": "Oraciones hendidas — fue Juan quien…, lo que necesito es… — para enfatizar."
    }
  },
  "c2-conjetura-rumor": {
    "en": {
      "title": "Conjecture and Hearsay: futuro & condicional",
      "summary": "Futuro de conjetura and condicional de rumor — probably / reportedly, not plans."
    },
    "es": {
      "title": "Futuro de Conjetura y Condicional de Rumor",
      "summary": "Futuro de conjetura y condicional de rumor — probabilidad / rumor, no planes."
    }
  },
  "c2-estilo-culto": {
    "en": {
      "title": "Formal Style: Absolute Constructions",
      "summary": "Literary style — absolute participle, nominalization; not for everyday chat."
    },
    "es": {
      "title": "Estilo Culto: Construcciones Absolutas",
      "summary": "Estilo culto — participio absoluto, nominalización; no para chat cotidiano."
    }
  },
  "eng-a1-be": {
    "en": {
      "title": "Verb be (am/is/are)",
      "summary": "The verb 'to be' in the present: am, is, are."
    },
    "es": {
      "title": "Verbo be (am/is/are)",
      "summary": "El verbo «ser/estar» en presente: am, is, are."
    }
  },
  "eng-a1-present-simple": {
    "en": {
      "title": "Present Simple",
      "summary": "Present simple: routines, facts, regular actions."
    },
    "es": {
      "title": "Presente Simple",
      "summary": "Presente simple: rutinas, hechos, acciones habituales."
    }
  },
  "eng-a1-there-is-are": {
    "en": {
      "title": "There is / There are",
      "summary": "Existence and location: there is (singular), there are (plural)."
    },
    "es": {
      "title": "There is / There are",
      "summary": "Existencia y ubicación: there is (singular), there are (plural)."
    }
  },
  "eng-a1-can": {
    "en": {
      "title": "Can / Can't",
      "summary": "Modal verb can: ability and possibility."
    },
    "es": {
      "title": "Can / Can't",
      "summary": "Verbo modal can: habilidad y posibilidad."
    }
  },
  "eng-a1-questions": {
    "en": {
      "title": "Wh- Questions",
      "summary": "What, who, where, when, why, how."
    },
    "es": {
      "title": "Preguntas Wh-",
      "summary": "What, who, where, when, why, how."
    }
  },
  "eng-a1-prepositions": {
    "en": {
      "title": "Prepositions of Place",
      "summary": "in, on, at, under, between, next to."
    },
    "es": {
      "title": "Preposiciones de Lugar",
      "summary": "in, on, at, under, between, next to."
    }
  },
  "eng-a2-past-simple": {
    "en": {
      "title": "Past Simple",
      "summary": "Simple past: regular and irregular verbs."
    },
    "es": {
      "title": "Pasado Simple",
      "summary": "Pasado simple: verbos regulares e irregulares."
    }
  },
  "eng-a2-comparatives": {
    "en": {
      "title": "Comparatives & Superlatives",
      "summary": "Comparative and superlative adjectives."
    },
    "es": {
      "title": "Comparativos y Superlativos",
      "summary": "Grado comparativo y superlativo de adjetivos."
    }
  },
  "eng-a2-present-perfect": {
    "en": {
      "title": "Present Perfect",
      "summary": "Past connected to the present: experience and results."
    },
    "es": {
      "title": "Pretérito Perfecto",
      "summary": "Pasado conectado al presente: experiencia y resultados."
    }
  },
  "eng-a2-going-to": {
    "en": {
      "title": "Going to",
      "summary": "be going to for plans and intentions."
    },
    "es": {
      "title": "Going to",
      "summary": "be going to para planes e intenciones."
    }
  },
  "eng-a2-quantifiers": {
    "en": {
      "title": "Some / Any / Much / Many",
      "summary": "Quantifiers with countable and uncountable nouns."
    },
    "es": {
      "title": "Some / Any / Much / Many",
      "summary": "Cuantificadores con contables e incontables."
    }
  },
  "eng-b1-future-conditional": {
    "en": {
      "title": "Future & First Conditional",
      "summary": "will/won't and the first conditional."
    },
    "es": {
      "title": "Futuro y Primer Condicional",
      "summary": "will/won't y el primer condicional."
    }
  },
  "eng-b1-modals": {
    "en": {
      "title": "Should / Must / Have to",
      "summary": "Advice and obligation: should, must, have to."
    },
    "es": {
      "title": "Should / Must / Have to",
      "summary": "Consejo y obligación: should, must, have to."
    }
  },
  "eng-b1-narrative": {
    "en": {
      "title": "Narrative Tenses",
      "summary": "Past continuous, used to, past perfect — storytelling."
    },
    "es": {
      "title": "Tiempos Narrativos",
      "summary": "Past continuous, used to, past perfect — narración."
    }
  },
  "eng-b1-perfect-continuous": {
    "en": {
      "title": "Present Perfect Continuous",
      "summary": "have/has been + V-ing: duration of an action."
    },
    "es": {
      "title": "Present Perfect Continuous",
      "summary": "have/has been + V-ing: duración de una acción."
    }
  },
  "eng-b2-conditionals": {
    "en": {
      "title": "Second & Third Conditionals",
      "summary": "Unreal conditions: present (2nd) and past (3rd)."
    },
    "es": {
      "title": "Segundo y Tercer Condicional",
      "summary": "Condiciones irreales: presente (2.º) y pasado (3.º)."
    }
  },
  "eng-b2-passive": {
    "en": {
      "title": "Passive Voice",
      "summary": "Passive in all tenses; have something done."
    },
    "es": {
      "title": "Voz Pasiva",
      "summary": "Voz pasiva en todos los tiempos; have something done."
    }
  },
  "eng-b2-reported-clauses": {
    "en": {
      "title": "Reported Speech & Relative Clauses",
      "summary": "Indirect speech and relative pronouns."
    },
    "es": {
      "title": "Estilo Indirecto y Oraciones de Relativo",
      "summary": "Estilo indirecto y pronombres relativos."
    }
  },
  "eng-c1-inversion": {
    "en": {
      "title": "Inversion & Emphatic Structures",
      "summary": "Inversion for emphasis, cleft sentences, emphatic do/does."
    },
    "es": {
      "title": "Inversión y Estructuras Énfáticas",
      "summary": "Inversión para énfasis, oraciones hendidas, do/does enfático."
    }
  },
  "eng-c1-discourse": {
    "en": {
      "title": "Discourse: Substitution, Ellipsis, Fronting",
      "summary": "Advanced cohesion devices in speech and writing."
    },
    "es": {
      "title": "Discurso: Sustitución, Elipsis, Fronting",
      "summary": "Medios avanzados de cohesión en oral y escrito."
    }
  },
  "eng-c1-mixed-conditionals": {
    "en": {
      "title": "Mixed Conditionals & Advanced Passives",
      "summary": "Mixed conditionals and advanced passive forms."
    },
    "es": {
      "title": "Condicionales Mixtos y Pasivas Avanzadas",
      "summary": "Condicionales mixtos y pasivas avanzadas."
    }
  },
  "eng-c1-review": {
    "en": {
      "title": "Comprehensive Review + IELTS Skills",
      "summary": "Full review of all topics plus IELTS skills."
    },
    "es": {
      "title": "Repaso Integral + IELTS",
      "summary": "Repaso integral de todos los temas + habilidades IELTS."
    }
  },
  "eng-c2-cleft-emphasis": {
    "en": {
      "title": "Cleft Sentences and Emphasis",
      "summary": "It was John who…, What I need is…, emphatic do — focus and highlighting."
    },
    "es": {
      "title": "Cleft Sentences y Énfasis",
      "summary": "It was John who…, What I need is…, do enfático — foco y realce."
    }
  },
  "eng-c2-ellipsis-substitution": {
    "en": {
      "title": "Ellipsis and Substitution",
      "summary": "So do I, I hope so, if not — how native speakers avoid repetition."
    },
    "es": {
      "title": "Elipsis y Sustitución",
      "summary": "So do I, I hope so, if not — cómo los nativos evitan repetir palabras."
    }
  },
  "eng-c2-hedging-nuance": {
    "en": {
      "title": "Hedging and Understatement",
      "summary": "It could be argued…, not entirely convinced, British understatement and polite criticism."
    },
    "es": {
      "title": "Hedging y Understatement",
      "summary": "It could be argued…, not entirely convinced, understatement británico y crítica cortés."
    }
  },
  "eng-a1-articles-basics": {
    "en": { "title": "Articles a/an/the", "summary": "a/an vs the vs zero article; choose by sound, not spelling." },
    "es": { "title": "Artículos a/an/the", "summary": "a/an vs the vs sin artículo; se elige por el sonido, no por la letra." }
  },
  "eng-a1-possessives": {
    "en": { "title": "Possessives my/your and 's", "summary": "my/your/his… and Saxon genitive: Anna's bag. its ≠ it's." },
    "es": { "title": "Posesivos my/your y 's", "summary": "my/your/his… y genitivo sajón: Anna's bag. its ≠ it's." }
  },
  "eng-a1-can-ability": {
    "en": { "title": "Can / can't — ability and permission", "summary": "I can swim; Can I…?; Can you help? Bare infinitive after can." },
    "es": { "title": "Can / can't — habilidad y permiso", "summary": "I can swim; Can I…?; Can you help? Infinitivo sin to." }
  },
  "eng-a2-countable": {
    "en": { "title": "Countable and uncountable", "summary": "many/much, a few/a little, some/any; advice and information have no -s." },
    "es": { "title": "Contables e incontables", "summary": "many/much, a few/a little, some/any; advice e information sin -s." }
  },
  "eng-a2-present-perfect-intro": {
    "en": { "title": "Present Perfect: just/already/yet", "summary": "have + V3 for experience now; yesterday still takes Past Simple." },
    "es": { "title": "Present Perfect: just/already/yet", "summary": "have + V3 para experiencia con ahora; yesterday sigue en Past Simple." }
  },
  "eng-b1-conditionals-review": {
    "en": { "title": "Conditionals 0 / 1st / 2nd", "summary": "If + present; if + present → will; if + past → would. If I were you." },
    "es": { "title": "Condicionales 0 / 1.º / 2.º", "summary": "If + presente; if + presente → will; if + pasado → would. If I were you." }
  },
  "eng-b1-reported-speech": {
    "en": { "title": "Reported speech (basics)", "summary": "say/tell and backshift; questions without do; no shift if still true." },
    "es": { "title": "Estilo indirecto (base)", "summary": "say/tell y retroceso de tiempos; preguntas sin do; sin cambio si sigue siendo verdad." }
  },
  "eng-b1-relative-clauses": {
    "en": { "title": "Relative clauses who/which/that", "summary": "Defining clauses, no commas; whose; object that can be dropped." },
    "es": { "title": "Oraciones de relativo who/which/that", "summary": "Defining sin comas; whose; that objeto se puede omitir." }
  },
  "eng-b2-passive-advanced": {
    "en": { "title": "Passive across tenses", "summary": "be + V3 in more tenses; have/get something done for services." },
    "es": { "title": "Pasiva en todos los tiempos", "summary": "be + V3 en más tiempos; have/get something done para servicios." }
  },
  "eng-b2-modals-deduction": {
    "en": { "title": "Modals of deduction", "summary": "must/might/can't for how sure you are; must have left in the past." },
    "es": { "title": "Modales de deducción", "summary": "must/might/can't para el grado de certeza; must have left en el pasado." }
  },
  "eng-ielts-letter-informal": {
    "en": { "title": "IELTS GT: informal letter", "summary": "Friend letter: 4 blocks, ~150 words, all three bullets, informal register." },
    "es": { "title": "IELTS GT: carta informal", "summary": "Carta a un amigo: 4 bloques, ~150 palabras, tres bullets, registro informal." }
  },
  "eng-ielts-letter-formal": {
    "en": { "title": "IELTS GT: formal letter", "summary": "Complaint/enquiry: Yours faithfully vs sincerely, 5 blocks, ~150 words." },
    "es": { "title": "IELTS GT: carta formal", "summary": "Queja/consulta: Yours faithfully vs sincerely, 5 bloques, ~150 palabras." }
  },
  "eng-ielts-essay-structure": {
    "en": { "title": "IELTS Academic: essay structure", "summary": "Task 2: 4 paragraphs, 250+ words, match the question type, no new ideas in the conclusion." },
    "es": { "title": "IELTS Academic: estructura del essay", "summary": "Task 2: 4 párrafos, 250+ palabras, responder al tipo de pregunta, sin ideas nuevas en la conclusión." }
  },
  "eng-ielts-essay-cohesion": {
    "en": { "title": "IELTS: cohesion", "summary": "Linkers by function, referencing, one idea per paragraph — not a stack of Moreover." },
    "es": { "title": "IELTS: cohesión", "summary": "Linkers por función, referencing, una idea por párrafo — no una pila de Moreover." }
  },
  "eng-ielts-task1-report": {
    "en": { "title": "IELTS Academic Task 1: graphs", "summary": "Paraphrase, overview, key features; trend language; ~150 words; no speculation." },
    "es": { "title": "IELTS Academic Task 1: gráficos", "summary": "Paráfrasis, overview, rasgos clave; lenguaje de tendencias; ~150 palabras; sin especular." }
  },
  "eng-cambridge-letter-email": {
    "en": { "title": "Cambridge B2 First: letter and email", "summary": "Informal / formal / semi-formal tone, layout, and CA criteria." },
    "es": { "title": "Cambridge B2 First: carta y email", "summary": "Tono informal / formal / semi-formal, layout y criterio CA." }
  },
  "eng-cambridge-essay-article": {
    "en": { "title": "Cambridge: essay vs article", "summary": "Different genres: thesis vs hook; notes must all appear; B2/C1 word counts." },
    "es": { "title": "Cambridge: essay vs article", "summary": "Géneros distintos: tesis vs gancho; todos los notes; volúmenes B2/C1." }
  },
  "eng-ielts-opinion-language": {
    "en": { "title": "Opinion and argumentation language", "summary": "Claim strength, hedging, concession + counter; Band 7+ argument chain." },
    "es": { "title": "Lenguaje de opinión y argumentación", "summary": "Fuerza del claim, hedging, concesión + contra; cadena Band 7+." }
  },
  "eng-cbe-register-shift": {
    "en": { "title": "Register: chat to formal", "summary": "Informal / neutral / formal columns; WhatsApp test; greeting must match sign-off." },
    "es": { "title": "Registro: del chat a lo formal", "summary": "Columnas informal / neutral / formal; test WhatsApp; saludo y cierre deben coincidir." }
  }
};

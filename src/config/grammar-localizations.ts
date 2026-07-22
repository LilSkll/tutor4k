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
  "Условия / Залог": {
    "en": "Conditionals / Voice",
    "es": "Condicionales / Voz"
  },
  "Подготовка к экзамену": {
    "en": "Exam preparation",
    "es": "Preparación de examen"
  }
};

export const GRAMMAR_TOPIC: Record<
  string,
  Partial<Record<InterfaceLanguage, GrammarLocaleFields>>
> = {
  "a1-articulos": {
    "en": {
      "title": "Articles",
      "summary": "Definite and indefinite articles; masculine and feminine gender."
    },
    "es": {
      "title": "Artículos",
      "summary": "Artículos definidos e indefinidos; género masculino y femenino."
    }
  },
  "a1-ser-estar": {
    "en": {
      "title": "Ser / Estar",
      "summary": "Two verbs for 'to be': permanent traits vs temporary states."
    },
    "es": {
      "title": "Ser y Estar",
      "summary": "Dos verbos «ser» y «estar»: características permanentes vs estados temporales."
    }
  },
  "a1-presente": {
    "en": {
      "title": "Present Indicative",
      "summary": "Present tense: regular and irregular verbs."
    },
    "es": {
      "title": "Presente de Indicativo",
      "summary": "Presente de indicativo: verbos regulares e irregulares."
    }
  },
  "a1-genero-numero": {
    "en": {
      "title": "Gender and Number",
      "summary": "Masculine/feminine gender and singular/plural nouns."
    },
    "es": {
      "title": "Género y Número",
      "summary": "Género masculino/femenino y número singular/plural de sustantivos."
    }
  },
  "a1-numeros-1-100": {
    "en": {
      "title": "Numbers 1–100",
      "summary": "Cardinal numbers for counting, age, and prices."
    },
    "es": {
      "title": "Números 1–100",
      "summary": "Números cardinales para contar, edad y precios."
    }
  },
  "a1-preposiciones-lugar": {
    "en": {
      "title": "Prepositions of Place",
      "summary": "en, a, de, sobre, debajo, delante — where something is located."
    },
    "es": {
      "title": "Preposiciones de Lugar",
      "summary": "en, a, de, sobre, debajo, delante — dónde se encuentra algo."
    }
  },
  "a1-gustar": {
    "en": {
      "title": "Verb Gustar",
      "summary": "The special verb 'to like' — conjugated by the thing liked, not the subject."
    },
    "es": {
      "title": "Verbo Gustar",
      "summary": "El verbo «gustar» — se conjuga según la cosa, no según la persona."
    }
  },
  "a1-tener-expressions": {
    "en": {
      "title": "Expressions with Tener",
      "summary": "tener hambre/frío/sueño/razón — common state expressions."
    },
    "es": {
      "title": "Expresiones con Tener",
      "summary": "tener hambre/frío/sueño/razón — expresiones de estado frecuentes."
    }
  },
  "a1-preguntas": {
    "en": {
      "title": "Question Sentences",
      "summary": "¿Qué? ¿Cómo? ¿Dónde? — question words and how to use them."
    },
    "es": {
      "title": "Oraciones Interrogativas",
      "summary": "¿Qué? ¿Cómo? ¿Dónde? — palabras interrogativas y su uso."
    }
  },
  "a1-verbos-frecuentes": {
    "en": {
      "title": "Common Verbs",
      "summary": "ir, tener, hacer, poder, querer, decir — essential irregular verbs."
    },
    "es": {
      "title": "Verbos Frecuentes",
      "summary": "ir, tener, hacer, poder, querer, decir — verbos irregulares esenciales."
    }
  },
  "a2-preterito-perfecto": {
    "en": {
      "title": "Present Perfect (Pretérito Perfecto)",
      "summary": "Completed action linked to the present."
    },
    "es": {
      "title": "Pretérito Perfecto Compuesto",
      "summary": "Acción completada con conexión al presente."
    }
  },
  "a2-preterito-indefinido": {
    "en": {
      "title": "Preterite (Indefinido)",
      "summary": "Completed action at a specific point in the past."
    },
    "es": {
      "title": "Pretérito Indefinido",
      "summary": "Acción completada en un momento concreto del pasado."
    }
  },
  "a2-imperfecto": {
    "en": {
      "title": "Imperfect Past",
      "summary": "Background in the past: habits, descriptions, ongoing actions."
    },
    "es": {
      "title": "Pretérito Imperfecto",
      "summary": "Fondo en el pasado: hábitos, descripciones, acciones continuas."
    }
  },
  "a2-por-para": {
    "en": {
      "title": "Por vs Para",
      "summary": "Two prepositions for 'for/by' — a key difficulty in Spanish."
    },
    "es": {
      "title": "Por y Para",
      "summary": "Dos preposiciones «por/para» — una de las grandes dificultades del español."
    }
  },
  "a2-comparativos": {
    "en": {
      "title": "Comparatives and Superlatives",
      "summary": "Comparing: more/less/most — comparative and superlative forms."
    },
    "es": {
      "title": "Comparativos y Superlativos",
      "summary": "Comparación: más/menos/el más — grado comparativo y superlativo."
    }
  },
  "a2-futuro-simple": {
    "en": {
      "title": "Simple Future",
      "summary": "Simple future: plans, predictions, promises."
    },
    "es": {
      "title": "Futuro Simple",
      "summary": "Futuro simple: planes, predicciones, promesas."
    }
  },
  "b1-subjuntivo": {
    "en": {
      "title": "Subjunctive (Present)",
      "summary": "Subjunctive mood for wishes, doubts, and emotions."
    },
    "es": {
      "title": "Modo Subjuntivo (Presente)",
      "summary": "Subjuntivo para deseos, dudas y emociones."
    }
  },
  "b1-imperativo": {
    "en": {
      "title": "Imperative",
      "summary": "Commands, requests, and advice."
    },
    "es": {
      "title": "Modo Imperativo",
      "summary": "Órdenes, peticiones y consejos."
    }
  },
  "b1-condicional": {
    "en": {
      "title": "Simple Conditional",
      "summary": "Polite requests, hypotheses, and wishes."
    },
    "es": {
      "title": "Modo Condicional",
      "summary": "Peticiones corteses, hipótesis y deseos."
    }
  },
  "b1-preposiciones-por-para-2": {
    "en": {
      "title": "Pronoun SE",
      "summary": "Impersonal se, passive se, reciprocal se — multiple uses."
    },
    "es": {
      "title": "Pronombre SE",
      "summary": "Se impersonal, se pasivo, se recíproco — usos múltiples."
    }
  },
  "b1-relativos": {
    "en": {
      "title": "Relative Pronouns",
      "summary": "que, quien, el que, cuyo, donde — linking complex sentences."
    },
    "es": {
      "title": "Pronombres Relativos",
      "summary": "que, quien, el que, cuyo, donde — conectores en oraciones complejas."
    }
  },
  "b1-pluscuamperfecto": {
    "en": {
      "title": "Past Perfect (Pluscuamperfecto)",
      "summary": "An action that happened before another past action."
    },
    "es": {
      "title": "Pretérito Pluscuamperfecto",
      "summary": "Acción anterior a otra acción en el pasado."
    }
  },
  "b1-subjuntivo-imperfecto": {
    "en": {
      "title": "Imperfect Subjunctive",
      "summary": "Subjunctive in past/unreal contexts: hypotheses and unreal conditions."
    },
    "es": {
      "title": "Subjuntivo Imperfecto",
      "summary": "Subjuntivo en pasado/irreal: hipótesis y condiciones irreales."
    }
  },
  "b1-pronombres-objetos": {
    "en": {
      "title": "Object Pronouns",
      "summary": "Direct and indirect objects: me, te, lo, le, se — when to use which."
    },
    "es": {
      "title": "Pronombres de Objeto (OD/OI)",
      "summary": "Complemento directo e indirecto: me, te, lo, le, se."
    }
  },
  "b1-adverbios": {
    "en": {
      "title": "Adverbs",
      "summary": "Adverbs in -mente, time, place, manner, and doubt."
    },
    "es": {
      "title": "Adverbios",
      "summary": "Adverbios en -mente, tiempo, lugar, modo y duda."
    }
  },
  "b2-estilo-indirecto": {
    "en": {
      "title": "Reported Speech",
      "summary": "Indirect speech: reporting others' words and thoughts."
    },
    "es": {
      "title": "Estilo Indirecto",
      "summary": "Estilo indirecto: transmitir palabras y pensamientos ajenos."
    }
  },
  "b2-voz-pasiva": {
    "en": {
      "title": "Passive Voice",
      "summary": "Passive voice and its natural alternative — pasiva refleja."
    },
    "es": {
      "title": "Voz Pasiva y Pasiva Refleja",
      "summary": "Voz pasiva y su alternativa natural — pasiva refleja."
    }
  },
  "b2-subjuntivo-compuestos": {
    "en": {
      "title": "Compound Subjunctive",
      "summary": "Perfect and pluperfect subjunctive forms."
    },
    "es": {
      "title": "Subjuntivo Perfecto y Pluscuamperfecto",
      "summary": "Formas compuestas del subjuntivo: perfecto y pluscuamperfecto."
    }
  },
  "b2-condicionales-compuestos": {
    "en": {
      "title": "Compound Conditional",
      "summary": "Conditional perfect: habría + past participle."
    },
    "es": {
      "title": "Condicional Compuesto",
      "summary": "Condicional compuesto: habría + participio."
    }
  },
  "b2-relativos-avanzado": {
    "en": {
      "title": "Advanced Relatives",
      "summary": "lo que, el cual, donde, como, cuando — advanced sentence linking."
    },
    "es": {
      "title": "Relativos Avanzados",
      "summary": "lo que, el cual, donde, como, cuando — conexión avanzada."
    }
  },
  "b2-conectores": {
    "en": {
      "title": "Discourse Connectors",
      "summary": "además, sin embargo, por lo tanto — logical connectors."
    },
    "es": {
      "title": "Conectores Discursivos",
      "summary": "además, sin embargo, por lo tanto — conectores lógicos."
    }
  },
  "c1-perifrasis-verbales": {
    "en": {
      "title": "Verbal Periphrases",
      "summary": "Complex verb constructions: necessity, beginning, ending."
    },
    "es": {
      "title": "Perífrasis Verbales",
      "summary": "Construcciones verbales complejas: necesidad, inicio, fin."
    }
  },
  "c1-matices-estilisticos": {
    "en": {
      "title": "Stylistic Nuances",
      "summary": "Subtle meaning: register, politeness, modality."
    },
    "es": {
      "title": "Matices Estilísticos y Registros",
      "summary": "Matices de significado: registro, cortesía, modalidad."
    }
  },
  "c1-subjuntivo-avanzado": {
    "en": {
      "title": "Advanced Subjunctive",
      "summary": "Doubtful and fixed cases: aunque, donde, como, relatives."
    },
    "es": {
      "title": "Subjuntivo: Usos Avanzados",
      "summary": "Casos dudosos y fijos: aunque, donde, como, relativas."
    }
  },
  "c1-indirecto-avanzado": {
    "en": {
      "title": "Advanced Reported Speech",
      "summary": "Full tense backshift system + questions and commands."
    },
    "es": {
      "title": "Estilo Indirecto Avanzado",
      "summary": "Sistema completo de tiempos + preguntas y órdenes."
    }
  },
  "c1-pronombres-avanzado": {
    "en": {
      "title": "Advanced Pronouns",
      "summary": "lo + adjective, doubling, leísmo, reduplication — fine points."
    },
    "es": {
      "title": "Pronombres Avanzados",
      "summary": "lo + adjetivo, duplicación, leísmo, reduplicación — matices."
    }
  },
  "c1-ser-estar-avanzado": {
    "en": {
      "title": "Ser/Estar: Advanced",
      "summary": "Adjective meaning shifts, fixed phrases, borderline cases."
    },
    "es": {
      "title": "Ser y Estar: Matices Avanzados",
      "summary": "Cambios de significado, frases fijas, casos límite."
    }
  },
  "c2-ironia-registry": {
    "en": {
      "title": "Irony and Register (C2)",
      "summary": "Ironic subjunctive, formal/informal register, rhetorical tactics."
    },
    "es": {
      "title": "Ironía y Registro (C2)",
      "summary": "Subjuntivo irónico, registro formal/informal, tácticas retóricas."
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
  }
};

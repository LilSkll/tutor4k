/**
 * Final mid-floor top-ups (need 1–3) to reach floor 8 per enabled type.
 * Unique stems + safe task instructions.
 */
import { mc, tr, ec } from "../exercise-pack-utils.mjs";

/** @type {Record<string, Record<string, object[]>>} */
export const MID_FLOOR_TOPUP = {
  "chapter-24-carta": {
    translation: [
      tr("Уважаемый господин, пишу вам, чтобы запросить информацию.", "Estimado señor: Le escribo para solicitar información", "Carta formal — apertura", "Le escribo para…", "dele-carta-formal"),
      tr("Прилагаю копию договора.", "Adjunto una copia del contrato", "Adjunto", "Adjunto una copia…", "dele-carta-formal"),
      tr("С уважением, жду вашего ответа.", "Atentamente, quedo a la espera de su respuesta", "Cierre formal", "quedo a la espera…", "dele-carta-formal"),
    ],
  },
  "chapter-1-despertar": {
    translation: [
      tr("Я из России.", "Soy de Rusia", "Ser — origen", "Soy de…", "a1-ser-estar"),
      tr("Сейчас я усталый.", "Ahora estoy cansado", "Estar — estado", "estoy cansado.", "a1-ser-estar", ["Ahora estoy cansada"]),
      tr("Она студентка.", "Ella es estudiante", "Ser — profesión", "es estudiante.", "a1-ser-estar"),
      tr("Мы дома сейчас.", "Estamos en casa ahora", "Estar — ubicación", "estamos en casa.", "a1-ser-estar"),
    ],
  },
  "chapter-20-preguntas": {
    error_correction: [
      ec("¿De dónde eres tú eres?", "¿De dónde eres?", "Pregunta — redundancia", "¿De dónde eres?", "a1-preguntas"),
      ec("¿Cuánto cuestan esto?", "¿Cuánto cuesta esto?", "Concordancia", "cuesta — singular.", "a1-preguntas"),
      ec("¿Qué hora es es?", "¿Qué hora es?", "Pregunta — redundancia", "¿Qué hora es?", "a1-preguntas"),
      ec("¿Adónde vas a vas?", "¿Adónde vas?", "Pregunta — redundancia", "¿Adónde vas?", "a1-preguntas"),
    ],
  },
  "chapter-34-pluscuamperfecto": {
    multiple_choice: [
      mc("Cuando llegué, ellos ya ___.", ["habían salido", "han salido", "salieron", "salen"], "habían salido", "Выберите правильный вариант", "ya + pluscuamperfecto.", "b1-pluscuamperfecto"),
      mc("Ella dijo que ___ el libro.", ["había leído", "ha leído", "leyó", "lee"], "había leído", "Выберите правильный вариант", "había leído.", "b1-pluscuamperfecto"),
    ],
  },
  "chapter-12-imperativo": {
    translation: [
      tr("Открой окно, пожалуйста.", "Abre la ventana, por favor", "Imperativo tú", "Abre…", "b1-imperativo"),
    ],
  },
  "chapter-23-cronicas": {
    multiple_choice: [
      mc("Ayer ___ al mercado y luego ___.", ["fui / compré", "iba / compraba", "he ido / he comprado", "voy / compro"], "fui / compré", "Выберите правильный вариант", "pretérito — acciones acabadas.", "dele-contraste-pasados"),
      mc("Cuando era niño, siempre ___ al río.", ["iba", "fui", "he ido", "voy"], "iba", "Выберите правильный вариант", "imperfecto — hábito.", "dele-contraste-pasados"),
      mc("De pronto ___ un ruido fuerte.", ["oí", "oía", "he oído", "oigo"], "oí", "Выберите правильный вариант", "pretérito — acción puntual.", "dele-contraste-pasados"),
    ],
    translation: [
      tr("Пока я готовил, она читала.", "Mientras yo cocinaba, ella leía", "Imperfecto — simultaneidad", "mientras + imperfecto.", "dele-contraste-pasados"),
    ],
  },
  "chapter-26-voz-plaza": {
    translation: [
      tr("С моей точки зрения, нужно больше практики.", "Desde mi punto de vista, hace falta más práctica", "Opinión", "desde mi punto de vista…", "dele-expresion-oral"),
    ],
  },
  "chapter-36-pronombres-objetos": {
    translation: [
      tr("Я ей это уже сказал.", "Ya se lo dije", "Se lo", "se lo dije.", "b1-pronombres-objetos"),
    ],
    error_correction: [
      ec("¿Puedes darme lo el bolígrafo?", "¿Puedes darme el bolígrafo?", "Pronombre — redundancia", "darme el bolígrafo / dármelo.", "b1-pronombres-objetos", ["¿Puedes dármelo?"]),
    ],
  },
  "chapter-38-subjuntivo-compuestos": {
    translation: [
      tr("Не думаю, что они уже уехали.", "No creo que se hayan ido ya", "Perfecto de subjuntivo", "hayan ido.", "b2-subjuntivo-compuestos"),
    ],
  },

  "eng-ch14-art-language": {
    translation: [
      tr("Это поднимает более широкий вопрос о власти.", "This raises a broader question about power", "Discourse framing", "raises a broader question…", "eng-c1-discourse"),
      tr("Иными словами, данные неоднозначны.", "In other words, the data are ambiguous", "Reformulation", "In other words…", "eng-c1-discourse"),
    ],
  },
  "eng-ch40-ielts-cohesion": {
    error_correction: [
      ec("On the other hand however, costs rose.", "On the other hand, costs rose.", "Linker clash", "One contrast linker is enough.", "eng-ielts-essay-cohesion"),
    ],
  },
};

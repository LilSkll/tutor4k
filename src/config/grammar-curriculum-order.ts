/**
 * Grammar display order for the Spanish course.
 * Matches the hippogriff chapter journey (`chapters.ts` grammarTopic sequence).
 */
export const SPANISH_GRAMMAR_CURRICULUM_ORDER = [
  // A1
  "a1-ser-estar",
  "a1-presente",
  "a1-articulos",
  "a1-genero-numero",
  "a1-numeros-1-100",
  "a1-preposiciones-lugar",
  "a1-tener-expressions",
  "a1-gustar",
  "a1-preguntas",
  "a1-verbos-frecuentes",
  // A2
  "a2-preterito-perfecto",
  "a2-preterito-indefinido",
  "a2-imperfecto",
  "a2-por-para",
  "a2-comparativos",
  "a2-futuro-simple",
  // B1
  "b1-subjuntivo",
  "b1-imperativo",
  "b1-condicional",
  "b1-pronombre-se",
  "b1-relativos",
  "b1-pluscuamperfecto",
  "b1-subjuntivo-imperfecto",
  "b1-pronombres-objetos",
  "b1-adverbios",
  // DELE block 1
  "dele-contraste-pasados",
  "dele-carta-formal",
  // B2
  "b2-estilo-indirecto",
  "b2-voz-pasiva",
  "b2-subjuntivo-compuestos",
  "b2-condicionales-compuestos",
  "b2-relativos-avanzado",
  "b2-conectores",
  // DELE block 2
  "dele-conectores-redaccion",
  "dele-expresion-oral",
  // C1
  "c1-perifrasis-verbales",
  "c1-matices-estilisticos",
  "c1-subjuntivo-avanzado",
  "c1-indirecto-avanzado",
  "c1-pronombres-avanzado",
  "c1-ser-estar-avanzado",
  // C2
  "c2-oraciones-hendidas",
  "c2-conjetura-rumor",
  "c2-estilo-culto",
  "c2-ironia-registry",
] as const;

/** Grammar topics in chapter journey order (same as SPANISH_GRAMMAR_CURRICULUM_ORDER). */
export const SPANISH_CHAPTER_GRAMMAR_ORDER = SPANISH_GRAMMAR_CURRICULUM_ORDER;

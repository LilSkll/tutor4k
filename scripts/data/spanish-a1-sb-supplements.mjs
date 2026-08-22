/** A1 SB + ch19 EC top-ups */

function sb(tokens, answer, instruction, explanation, acceptableAnswers = []) {
  return {
    type: "sentence_building",
    question: tokens.join(" / "),
    options: tokens,
    answer,
    instruction,
    explanation,
    ...(acceptableAnswers.length ? { acceptableAnswers } : {}),
  };
}

function ec(question, answer, instruction, explanation, acceptableAnswers = []) {
  return {
    type: "error_correction",
    question,
    answer,
    instruction,
    explanation,
    ...(acceptableAnswers.length ? { acceptableAnswers } : {}),
  };
}

export const SPANISH_A1_SB_SUPPLEMENTS = {
  "chapter-1-despertar": [
    sb(["Yo", "soy", "estudiante"], "Yo soy estudiante", "Ser — identidad", "Soy estudiante."),
    sb(["Ella", "está", "cansada"], "Ella está cansada", "Estar — estado", "Está cansada."),
    sb(["Nosotros", "somos", "amigos"], "Nosotros somos amigos", "Ser — relación", "Somos amigos."),
    sb(["El", "profesor", "es", "muy", "amable"], "El profesor es muy amable", "Ser — rasgo", "Es muy amable."),
    sb(["Hoy", "estoy", "muy", "contento"], "Hoy estoy muy contento", "Estar — emoción", "Estoy contento."),
    sb(["¿Eres", "de", "España?"], "¿Eres de España?", "Ser — origen", "¿Eres de España?"),
    sb(["Mi", "hermana", "es", "médica"], "Mi hermana es médica", "Ser — profesión", "Es médica."),
    sb(["Los", "niños", "están", "en", "el", "parque"], "Los niños están en el parque", "Estar — lugar", "Están en el parque."),
  ],

  "chapter-2-primer-dialogo": [
    sb(["Me", "ducho", "por", "la", "mañana"], "Me ducho por la mañana", "Rutina", "Me ducho por la mañana."),
    sb(["Trabajo", "ocho", "horas", "al", "día"], "Trabajo ocho horas al día", "Presente", "Trabajo ocho horas…"),
    sb(["¿A", "qué", "hora", "cenáis?"], "¿A qué hora cenáis?", "Pregunta rutina", "¿A qué hora cenáis?"),
    sb(["Siempre", "estudio", "después", "de", "cenar"], "Siempre estudio después de cenar", "Hábito", "Siempre estudio…"),
    sb(["Mi", "padre", "lee", "el", "periódico"], "Mi padre lee el periódico", "Presente él", "Lee el periódico."),
    sb(["Los", "domingos", "dormimos", "hasta", "tarde"], "Los domingos dormimos hasta tarde", "Rutina", "Los domingos dormimos…"),
    sb(["¿Qué", "haces", "los", "fines", "de", "semana?"], "¿Qué haces los fines de semana?", "Pregunta", "¿Qué haces…?"),
    sb(["Voy", "al", "gimnasio", "tres", "veces", "por", "semana"], "Voy al gimnasio tres veces por semana", "Frecuencia", "Tres veces por semana."),
    sb(["Ella", "cocina", "muy", "bien"], "Ella cocina muy bien", "Presente ella", "Cocina muy bien."),
    sb(["Nos", "levantamos", "temprano", "entre", "semana"], "Nos levantamos temprano entre semana", "Reflexivo", "Nos levantamos temprano."),
  ],

  "chapter-3-biblioteca": [
    sb(["Hay", "muchos", "libros", "aquí"], "Hay muchos libros aquí", "Hay + plural", "Hay muchos libros…"),
    sb(["Busco", "una", "silla", "libre"], "Busco una silla libre", "Buscar + una", "Busco una silla…"),
    sb(["¿Tienes", "un", "bolígrafo?"], "¿Tienes un bolígrafo?", "Tener — pregunta", "¿Tienes un bolígrafo?"),
    sb(["El", "estudiante", "lee", "un", "libro"], "El estudiante lee un libro", "El + sustantivo", "El estudiante lee…"),
    sb(["Hay", "pocas", "mesas", "libres"], "Hay pocas mesas libres", "Hay + pocas", "Hay pocas mesas…"),
    sb(["Necesito", "una", "mesa", "grande"], "Necesito una mesa grande", "Necesitar + una", "Necesito una mesa…"),
    sb(["¿Hay", "algún", "diccionario?"], "¿Hay algún diccionario?", "Algún", "¿Hay algún diccionario?"),
    sb(["La", "profesora", "explica", "la", "lección"], "La profesora explica la lección", "La + femenino", "La profesora explica…"),
    sb(["Hay", "un", "profesor", "nuevo"], "Hay un profesor nuevo", "Hay + un", "Hay un profesor nuevo."),
    sb(["Quiero", "prestar", "un", "libro"], "Quiero prestar un libro", "Querer + inf", "Quiero prestar…"),
  ],

  "chapter-4-numeros-tiempo": [
    sb(["Son", "las", "cuatro", "y", "diez"], "Son las cuatro y diez", "Hora", "Son las cuatro y diez."),
  ],

  "chapter-5-mercado": [
    sb(["Compro", "fruta", "en", "el", "mercado"], "Compro fruta en el mercado", "Comprar", "Compro fruta…"),
    sb(["¿Cuánto", "cuestan", "las", "naranjas?"], "¿Cuánto cuestan las naranjas?", "Precio plural", "¿Cuánto cuestan…?"),
    sb(["Necesito", "medio", "kilo", "de", "queso"], "Necesito medio kilo de queso", "Cantidad", "Medio kilo de…"),
    sb(["El", "vendedor", "es", "muy", "amable"], "El vendedor es muy amable", "Ser", "Es muy amable."),
    sb(["Pago", "con", "tarjeta", "hoy"], "Pago con tarjeta hoy", "Pagar", "Pago con tarjeta."),
    sb(["Hay", "oferta", "en", "el", "pescado"], "Hay oferta en el pescado", "Hay oferta", "Hay oferta en…"),
    sb(["Quiero", "dos", "litros", "de", "leche"], "Quiero dos litros de leche", "Cantidad", "Dos litros de leche."),
    sb(["¿Vende", "pan", "integral?"], "¿Vende pan integral?", "Pregunta", "¿Vende pan integral?"),
    sb(["Los", "precios", "son", "altos"], "Los precios son altos", "Ser + adj", "Los precios son altos."),
    sb(["Compramos", "verduras", "frescas"], "Compramos verduras frescas", "Nosotros", "Compramos verduras…"),
  ],

  "chapter-6-cuerpo": [
    sb(["A", "mí", "me", "gusta", "el", "café"], "A mí me gusta el café", "Gustar", "Me gusta el café."),
    sb(["¿Te", "gustan", "las", "películas", "de", "acción?"], "¿Te gustan las películas de acción?", "Gustar plural", "¿Te gustan las películas…?"),
    sb(["No", "nos", "gusta", "el", "frío"], "No nos gusta el frío", "Gustar negativo", "No nos gusta el frío."),
    sb(["Le", "encanta", "bailar", "salsa"], "Le encanta bailar salsa", "Encantar", "Le encanta bailar…"),
    sb(["Me", "interesa", "la", "historia"], "Me interesa la historia", "Interesar", "Me interesa la historia."),
    sb(["¿Os", "gusta", "viajar?"], "¿Os gusta viajar?", "Gustar vosotros", "¿Os gusta viajar?"),
    sb(["A", "ella", "le", "gusta", "nadar"], "A ella le gusta nadar", "Gustar + inf", "Le gusta nadar."),
    sb(["Nos", "gustan", "los", "domingos", "tranquilos"], "Nos gustan los domingos tranquilos", "Gustan plural", "Nos gustan los domingos…"),
    sb(["¿Qué", "te", "gusta", "hacer?"], "¿Qué te gusta hacer?", "Pregunta", "¿Qué te gusta hacer?"),
    sb(["Me", "gusta", "más", "el", "té", "que", "el", "café"], "Me gusta más el té que el café", "Comparación", "Me gusta más el té…"),
  ],

  "chapter-20-preguntas": [
    sb(["¿De", "dónde", "viene", "tu", "familia?"], "¿De dónde viene tu familia?", "Origen", "¿De dónde viene…?"),
    sb(["¿A", "qué", "te", "dedicas?"], "¿A qué te dedicas?", "Profesión", "¿A qué te dedicas?"),
    sb(["¿Cuántos", "hermanos", "tienes?"], "¿Cuántos hermanos tienes?", "Familia", "¿Cuántos hermanos…?"),
    sb(["¿Qué", "hora", "es", "ahora?"], "¿Qué hora es ahora?", "Hora", "¿Qué hora es…?"),
    sb(["¿Por", "qué", "estudias", "español?"], "¿Por qué estudias español?", "Razón", "¿Por qué estudias…?"),
    sb(["¿Con", "quién", "vives?"], "¿Con quién vives?", "Compañía", "¿Con quién vives?"),
    sb(["¿Cuál", "es", "tu", "color", "favorito?"], "¿Cuál es tu color favorito?", "Cuál", "¿Cuál es tu color…?"),
    sb(["¿Cuánto", "tiempo", "llevas", "aquí?"], "¿Cuánto tiempo llevas aquí?", "Duración", "¿Cuánto tiempo llevas…?"),
    sb(["¿Qué", "tipo", "de", "música", "prefieres?"], "¿Qué tipo de música prefieres?", "Preferencia", "¿Qué tipo de música…?"),
    sb(["¿Adónde", "vamos", "este", "fin", "de", "semana?"], "¿Adónde vamos este fin de semana?", "Adónde", "¿Adónde vamos…?"),
  ],

  "chapter-31-verbos-frecuentes": [
    sb(["Puedo", "ayudarte", "ahora"], "Puedo ayudarte ahora", "Poder", "Puedo ayudarte ahora."),
  ],

  "chapter-19-preposiciones": [
    ec("El libro está en la mesa el.", "El libro está en la mesa.", "Artículo sobrante", "Sin «el» al final."),
    ec("El gato está debajo de la cama el suelo.", "El gato está debajo de la cama.", "Redundancia", "Debajo de la cama — suficiente."),
    ec("Vivo entre dos parques grande.", "Vivo entre dos parques.", "Concordancia", "Parques — plural."),
    ec("Está delante del espejo el.", "Está delante del espejo.", "Artículo sobrante", "Sin «el» extra."),
    ec("Vamos hacia el río al mar.", "Vamos hacia el río.", "Contradicción", "Hacia el río — no al mar."),
    ec("Caminan por la calle en la calle.", "Caminan por la calle.", "Redundancia", "Por la calle — suficiente."),
    ec("Hay un café en la esquina de la esquina.", "Hay un café en la esquina.", "Redundancia", "En la esquina — suficiente."),
    ec("El cuadro cuelga de la pared en la pared.", "El cuadro cuelga de la pared.", "Redundancia", "De la pared — suficiente."),
    ec("La tienda está al lado del banco lejos.", "La tienda está al lado del banco.", "Contradicción", "Al lado — no lejos."),
    ec("El coche está detrás de la casa delante.", "El coche está detrás de la casa.", "Contradicción", "Detrás — no delante."),
  ],
};

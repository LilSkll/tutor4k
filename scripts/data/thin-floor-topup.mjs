/**
 * Unique-stem top-ups for chapters still below floor 8 after shared expand.
 * Each answer/finished sentence must NOT reuse stems already common in that chapter.
 *
 * Apply: node scripts/apply-thin-floor-topup.mjs
 */
import { mc, fb, tr, ec, sb } from "../exercise-pack-utils.mjs";

/** @type {Record<string, Record<string, object[]>>} */
export const THIN_FLOOR_TOPUP = {
  // ── English critical ──────────────────────────────────────────────
  "eng-ch36-ielts-formal": {
    sentence_building: [
      sb(["I", "am", "writing", "to", "enquire", "about", "the", "vacancy"], "I am writing to enquire about the vacancy", "Formal enquiry opening", "enquire about — formal enquire.", "eng-ielts-letter-formal"),
      sb(["Please", "find", "attached", "a", "copy", "of", "my", "CV"], "Please find attached a copy of my CV", "Formal attachment line", "Please find attached…", "eng-ielts-letter-formal"),
      sb(["I", "would", "be", "grateful", "if", "you", "could", "clarify", "this"], "I would be grateful if you could clarify this", "Polite request", "I would be grateful if…", "eng-ielts-letter-formal"),
      sb(["I", "am", "available", "for", "an", "interview", "next", "week"], "I am available for an interview next week", "Availability", "available for an interview…", "eng-ielts-letter-formal"),
      sb(["Thank", "you", "for", "your", "prompt", "attention", "to", "this", "matter"], "Thank you for your prompt attention to this matter", "Formal closing thanks", "prompt attention to this matter.", "eng-ielts-letter-formal"),
      sb(["Yours", "faithfully"], "Yours faithfully", "Unknown-name sign-off", "Yours faithfully — Dear Sir/Madam.", "eng-ielts-letter-formal"),
      sb(["I", "wish", "to", "draw", "your", "attention", "to", "a", "billing", "error"], "I wish to draw your attention to a billing error", "Formal complaint", "draw your attention to…", "eng-ielts-letter-formal"),
      sb(["I", "look", "forward", "to", "your", "reply", "at", "your", "earliest", "convenience"], "I look forward to your reply at your earliest convenience", "Formal closing", "at your earliest convenience.", "eng-ielts-letter-formal"),
    ],
  },

  "eng-ch38-ielts-task1": {
    sentence_building: [
      sb(["The", "chart", "illustrates", "changes", "in", "energy", "use", "from", "2000", "to", "2020"], "The chart illustrates changes in energy use from 2000 to 2020", "Task 1 overview opener", "The chart illustrates…", "eng-ielts-task1-report"),
      sb(["Overall", "renewable", "energy", "rose", "while", "coal", "fell"], "Overall, renewable energy rose while coal fell", "Task 1 overview", "Overall… while…", "eng-ielts-task1-report"),
      sb(["In", "2010", "the", "figure", "stood", "at", "approximately", "40", "percent"], "In 2010 the figure stood at approximately 40 percent", "Reporting a figure", "stood at approximately…", "eng-ielts-task1-report"),
      sb(["By", "contrast", "imports", "remained", "relatively", "stable"], "By contrast, imports remained relatively stable", "Contrast linker", "By contrast…", "eng-ielts-task1-report"),
      sb(["The", "proportion", "of", "online", "sales", "nearly", "doubled"], "The proportion of online sales nearly doubled", "Describing change", "nearly doubled.", "eng-ielts-task1-report"),
      sb(["There", "was", "a", "sharp", "increase", "in", "tourism", "after", "2015"], "There was a sharp increase in tourism after 2015", "Noun phrase change", "a sharp increase in…", "eng-ielts-task1-report"),
      sb(["Exports", "peaked", "in", "2018", "before", "declining", "slightly"], "Exports peaked in 2018 before declining slightly", "Peak then decline", "peaked… before declining…", "eng-ielts-task1-report"),
      sb(["Both", "countries", "followed", "a", "similar", "upward", "trend"], "Both countries followed a similar upward trend", "Comparison", "a similar upward trend.", "eng-ielts-task1-report"),
    ],
  },

  "eng-ch20-going-to": {
    // Unique EC stems (not the same as existing SB answers).
    error_correction: [
      ec("Tomorrow we going visit grandma.", "Tomorrow we are going to visit grandma.", "Going to — missing be + to", "are going to visit.", "eng-a2-going-to"),
      ec("Look — those dark clouds. It will raining soon.", "Look — those dark clouds. It's going to rain soon.", "Evidence → going to", "Evidence for near future → going to, not will + -ing.", "eng-a2-going-to"),
      ec("I gonna buy tickets online tonight.", "I'm going to buy tickets online tonight.", "Informal gonna → going to", "I'm going to buy…", "eng-a2-going-to"),
      ec("Is she go to study abroad next year?", "Is she going to study abroad next year?", "Going to question form", "Is she going to + base verb?", "eng-a2-going-to"),
      ec("They going to the cinema this evening.", "They are going to the cinema this evening.", "Going to place vs plan", "are going to the cinema (movement) OR are going to go…", "eng-a2-going-to", ["They're going to the cinema this evening.", "They are going to go to the cinema this evening."]),
      ec("We aren't going watch the match.", "We aren't going to watch the match.", "Going to negative", "aren't going to + base verb.", "eng-a2-going-to"),
      ec("He is going to goes home early.", "He is going to go home early.", "Going to + base", "going to go — no -s.", "eng-a2-going-to"),
      ec("Are you going to be cook dinner?", "Are you going to cook dinner?", "Extra be", "going to cook — not going to be cook.", "eng-a2-going-to"),
    ],
  },

  "eng-ch9-real-world": {
    error_correction: [
      ec("I have been wait for an hour.", "I have been waiting for an hour.", "Perfect continuous — -ing", "have been waiting.", "eng-b1-perfect-continuous"),
      ec("She has working here since 2019.", "She has been working here since 2019.", "Missing been", "has been working… since.", "eng-b1-perfect-continuous"),
      ec("How long are you studying English?", "How long have you been studying English?", "How long + perfect continuous", "How long have you been studying…?", "eng-b1-perfect-continuous"),
      ec("They have been lived in Leeds for two years.", "They have been living in Leeds for two years.", "V3 vs -ing", "have been living — not lived.", "eng-b1-perfect-continuous"),
      ec("We has been travelling all morning.", "We have been travelling all morning.", "Have/has agreement", "We have been travelling…", "eng-b1-perfect-continuous"),
      ec("He have been reading that book lately.", "He has been reading that book lately.", "Has for he", "He has been reading…", "eng-b1-perfect-continuous"),
      ec("I am knowing her for ages.", "I have known her for ages.", "Know — stative / perfect", "have known — not progressive know.", "eng-b1-perfect-continuous", ["I've known her for ages."]),
      ec("It has raining since noon.", "It has been raining since noon.", "Missing been + -ing", "has been raining since noon.", "eng-b1-perfect-continuous"),
    ],
  },

  // ── Spanish critical ──────────────────────────────────────────────
  "chapter-21-comparativos": {
    error_correction: [
      ec("Este libro es más interesante que aquel es.", "Este libro es más interesante que aquel.", "Comparativo — sin repetición", "No repitas el verbo tras que.", "a2-comparativos"),
      ec("Ana es la más alta de la clase de todas.", "Ana es la más alta de la clase.", "Superlativo — redundancia", "la más alta de la clase.", "a2-comparativos"),
      ec("Madrid es más grande que Barcelona es grande.", "Madrid es más grande que Barcelona.", "Comparativo — redundancia", "más grande que Barcelona.", "a2-comparativos"),
      ec("Este coche es más mejor que el mío.", "Este coche es mejor que el mío.", "Doble comparativo", "mejor — no más mejor.", "a2-comparativos"),
      ec("Ella corre más rápido que yo corro.", "Ella corre más rápido que yo.", "Comparativo de adverbio", "más rápido que yo.", "a2-comparativos"),
      ec("Es el película más divertida del año.", "Es la película más divertida del año.", "Concordancia artículo", "la película — femenino.", "a2-comparativos"),
      ec("Tu casa es tan grande como la mía es.", "Tu casa es tan grande como la mía.", "Tan…como", "tan grande como la mía.", "a2-comparativos"),
      ec("Este examen es el más difícil más de todos.", "Este examen es el más difícil de todos.", "Superlativo — duplicado", "el más difícil de todos.", "a2-comparativos"),
    ],
  },

  "chapter-34-pluscuamperfecto": {
    translation: [
      tr("Когда я пришёл, они уже ушли.", "Cuando llegué, ellos ya se habían ido", "Pluscuamperfecto", "habían + participio.", "b1-pluscuamperfecto"),
      tr("Она сказала, что уже видела этот фильм.", "Ella dijo que ya había visto esa película", "Pluscuamperfecto в косвенной речи", "había visto.", "b1-pluscuamperfecto"),
      tr("Мы закончили работу до того, как он позвонил.", "Habíamos terminado el trabajo antes de que él llamara", "Anterioridad", "habíamos terminado…", "b1-pluscuamperfecto", ["Habíamos terminado el trabajo antes de que él llamase"]),
      tr("К тому времени поезд уже отправился.", "Para entonces el tren ya había salido", "Pluscuamperfecto", "había salido.", "b1-pluscuamperfecto"),
      tr("Я никогда раньше не ел такою еду.", "Nunca antes había comido esa comida", "Nunca + pluscuamperfecto", "nunca… había comido.", "b1-pluscuamperfecto"),
      tr("Они уже купили билеты, когда началась распродажа.", "Ya habían comprado las entradas cuando empezó la oferta", "Ya + pluscuamperfecto", "habían comprado.", "b1-pluscuamperfecto"),
      tr("Он не знал, что я уже позвонил.", "Él no sabía que yo ya había llamado", "Pluscuamperfecto", "había llamado.", "b1-pluscuamperfecto"),
      tr("Дождь уже прекратился, когда мы вышли.", "Ya había dejado de llover cuando salimos", "Había dejado de", "había dejado de llover.", "b1-pluscuamperfecto"),
    ],
  },

  "chapter-35-subjuntivo-imperfecto": {
    error_correction: [
      ec("Si yo tendría dinero, viajaría más.", "Si yo tuviera dinero, viajaría más.", "Imperfecto de subjuntivo en si", "Si + imperfecto de subjuntivo.", "b1-subjuntivo-imperfecto"),
      ec("Quería que vienes pronto.", "Quería que vinieras pronto.", "Subjuntivo imperfecto tras pasado", "quería que + imperfecto de subjuntivo.", "b1-subjuntivo-imperfecto", ["Quería que vinieses pronto."]),
      ec("Ojalá que hace buen tiempo ayer.", "Ojalá hiciera buen tiempo ayer.", "Ojalá + imperfecto", "Ojalá + imperfecto de subjuntivo.", "b1-subjuntivo-imperfecto", ["Ojalá hiciese buen tiempo ayer."]),
      ec("Me sorprendió que no lo sabe.", "Me sorprendió que no lo supiera.", "Emoción en pasado", "sorprendió que + imperfecto de subjuntivo.", "b1-subjuntivo-imperfecto", ["Me sorprendió que no lo supiese."]),
      ec("Buscaba a alguien que puede ayudar.", "Buscaba a alguien que pudiera ayudar.", "Antecedente indefinido en pasado", "pudiera ayudar.", "b1-subjuntivo-imperfecto", ["Buscaba a alguien que pudiese ayudar."]),
      ec("Si fueras más paciente, entiendes mejor.", "Si fueras más paciente, entenderías mejor.", "Condicional correlato", "Si + imperfecto → condicional.", "b1-subjuntivo-imperfecto"),
      ec("Era importante que llegas a tiempo.", "Era importante que llegaras a tiempo.", "Impersonal en pasado", "era importante que + imperfecto de subjuntivo.", "b1-subjuntivo-imperfecto", ["Era importante que llegases a tiempo."]),
      ec("No creía que es verdad.", "No creía que fuera verdad.", "Duda en pasado", "no creía que + imperfecto de subjuntivo.", "b1-subjuntivo-imperfecto", ["No creía que fuese verdad."]),
    ],
    fill_blank: [
      fb("Si yo ___ (tener) tiempo, iría contigo.", "tuviera", "Imperfecto de subjuntivo", "Si + imperfecto de subjuntivo.", "b1-subjuntivo-imperfecto", ["tuviera", "tuviese", "Tuviera", "Tuviese"]),
      fb("Quería que me ___ (llamar) ayer.", "llamaras", "Subjuntivo imperfecto", "quería que + imperfecto.", "b1-subjuntivo-imperfecto", ["llamaras", "llamases"]),
      fb("Ojalá ___ (hacer) sol mañana.", "hiciera", "Ojalá + imperfecto", "Ojalá hiciera…", "b1-subjuntivo-imperfecto", ["hiciera", "hiciese"]),
      fb("No pensaba que ___ (ser) tan difícil.", "fuera", "Duda en pasado", "no pensaba que fuera…", "b1-subjuntivo-imperfecto", ["fuera", "fuese"]),
    ],
  },

  "chapter-40-relativos-avanzado": {
    translation: [
      tr("Документ, который подписал директор, ясен.", "El documento que firmó el director es claro", "Relativo que", "que firmó el director.", "b2-relativos-avanzado"),
      tr("Город, куда я ездил, очень старый.", "La ciudad adonde viajé es muy antigua", "Adonde", "adonde — движение.", "b2-relativos-avanzado", ["La ciudad a donde viajé es muy antigua"]),
      tr("Автор, чьи книги я читаю, знаменит.", "El autor cuyas obras leo es famoso", "Cuyas", "cuyas obras.", "b2-relativos-avanzado"),
      tr("То, что меня беспокоит, — это срок.", "Lo que me preocupa es el plazo", "Lo que", "lo que — neutro.", "b2-relativos-avanzado"),
      tr("Встреча, на которой мы были, была полезной.", "La reunión en la que estuvimos fue útil", "En la que", "en la que.", "b2-relativos-avanzado", ["La reunión a la que asistimos fue útil"]),
      tr("Человек, с которым я говорил, — инженер.", "La persona con la que hablé es ingeniera", "Con la que", "con la que / con quien.", "b2-relativos-avanzado", ["La persona con quien hablé es ingeniera"]),
      tr("Причина, по которой он ушёл, неизвестна.", "La razón por la que se fue es desconocida", "Por la que", "por la que.", "b2-relativos-avanzado"),
      tr("Дом, в котором мы жили, продали.", "La casa en la que vivíamos se vendió", "En la que", "en la que vivíamos.", "b2-relativos-avanzado"),
    ],
    multiple_choice: [
      mc("El informe ___ presentaste es excelente.", ["el cual", "la cual", "los cuales", "cuyo"], "el cual", "El cual — masculino singular", "informe → el cual.", "b2-relativos-avanzado"),
      mc("Las personas ___ conocí ayer son amables.", ["a las que", "a los que", "cuyas", "en las que"], "a las que", "Complemento de persona", "conocer a + personas.", "b2-relativos-avanzado"),
      mc("Esta es la ciudad ___ nací.", ["donde", "adonde", "a donde", "en donde que"], "donde", "Lugar estático", "nací donde…", "b2-relativos-avanzado"),
      mc("El escritor ___ novelas admiro vive aquí.", ["cuyas", "cuyos", "quien", "el cual"], "cuyas", "Cuyo concordancia", "novelas → cuyas.", "b2-relativos-avanzado"),
      mc("___ más me gusta es viajar.", ["Lo que", "El que", "La que", "Los que"], "Lo que", "Neutro", "Lo que más me gusta…", "b2-relativos-avanzado"),
    ],
    fill_blank: [
      fb("La propuesta ___ firmó el director es clara.", "que", "Relativo que", "que / la cual.", "b2-relativos-avanzado", ["que", "la cual"]),
      fb("El colegio ___ asistí está cerca.", "al que", "A + el que", "asistir a → al que.", "b2-relativos-avanzado", ["al que", "a que", "al cual"]),
      fb("La autora ___ libros lees es española.", "cuyos", "Cuyo", "libros → cuyos.", "b2-relativos-avanzado", ["cuyos"]),
      fb("___ me dijo el profesor es importante.", "Lo que", "Lo que", "lo que — neutro.", "b2-relativos-avanzado", ["Lo que", "lo que"]),
    ],
  },

  "chapter-10-por-para": {
    fill_blank: [
      fb("Este regalo es ___ ti.", "para", "Destinatario", "para + destinatario.", "a2-por-para"),
      fb("Pasé ___ tu casa ayer.", "por", "Movimiento / lugar aproximado", "pasar por.", "a2-por-para"),
      fb("Estudio español ___ trabajo.", "para", "Finalidad", "para + objetivo.", "a2-por-para"),
      fb("Gracias ___ tu ayuda.", "por", "Causa / motivo", "gracias por.", "a2-por-para"),
      fb("Salimos ___ Madrid mañana.", "para", "Dirección / destino", "salir para + ciudad.", "a2-por-para"),
      fb("Camino ___ el parque cada mañana.", "por", "A través de un lugar", "caminar por.", "a2-por-para"),
      fb("Necesito el informe ___ el viernes.", "para", "Plazo", "para + fecha límite.", "a2-por-para"),
      fb("Lo hice ___ ti.", "por", "En beneficio / causa", "por ti — por tu bien / a causa de ti.", "a2-por-para"),
    ],
  },

  "chapter-13-condicional": {
    error_correction: [
      ec("Yo compraría ese coche si tendría dinero.", "Yo compraría ese coche si tuviera dinero.", "Condicional 2", "si + imperfecto de subjuntivo.", "b1-condicional", ["Yo compraría ese coche si tuviese dinero."]),
      ec("Ella cantearía mejor con práctica.", "Ella cantaría mejor con práctica.", "Condicional simple", "cantar → cantaría.", "b1-condicional"),
      ec("Nosotros iríamos si hace buen tiempo mañana (hipótesis irreal).", "Nosotros iríamos si hiciera buen tiempo mañana.", "Si-cláusula", "hipótesis → imperfecto de subjuntivo.", "b1-condicional", ["Nosotros iríamos si hiciese buen tiempo mañana."]),
      ec("¿Qué harías si ganas la lotería?", "¿Qué harías si ganaras la lotería?", "Condicional 2 pregunta", "si + imperfecto de subjuntivo.", "b1-condicional", ["¿Qué harías si ganases la lotería?"]),
      ec("Me gustaría que vienes a la fiesta.", "Me gustaría que vinieras a la fiesta.", "Gustaría que + subjuntivo", "gustaría que + imperfecto de subjuntivo.", "b1-condicional", ["Me gustaría que vinieses a la fiesta."]),
      ec("Ellos viajerían más si pudieran.", "Ellos viajarían más si pudieran.", "Ortografía condicional", "viajarían.", "b1-condicional"),
      ec("Si sería rico, compraría una casa.", "Si fuera rico, compraría una casa.", "No condicional tras si", "Si + imperfecto de subjuntivo.", "b1-condicional", ["Si fuese rico, compraría una casa."]),
      ec("Te llamaría ayer, pero no pude.", "Te habría llamado ayer, pero no pude.", "Condicional compuesto (pasado)", "habría llamado — pasado irreal.", "b1-condicional"),
    ],
  },

  "chapter-15-voz-pasiva": {
    error_correction: [
      ec("El libro fue escribir por Ana.", "El libro fue escrito por Ana.", "Participio en pasiva", "fue escrito.", "b2-voz-pasiva"),
      ec("Las casas se construyen el año pasado.", "Las casas se construyeron el año pasado.", "Se pasiva / pretérito", "se construyeron.", "b2-voz-pasiva", ["Las casas fueron construidas el año pasado."]),
      ec("El informe ha sido enviar ya.", "El informe ha sido enviado ya.", "Pasiva perfecta", "ha sido enviado.", "b2-voz-pasiva"),
      ec("La película fue dirigido por Almodóvar.", "La película fue dirigida por Almodóvar.", "Concordancia participio", "dirigida — femenino.", "b2-voz-pasiva"),
      ec("Se venden manzanas en este mercado cada lunes (pasado único).", "Se vendieron manzanas en este mercado el lunes pasado.", "Tiempo en se-pasiva", "vendieron — pretérito.", "b2-voz-pasiva"),
      ec("El museo será abrir a las diez mañana.", "El museo será abierto a las diez mañana.", "Futuro pasivo", "será abierto.", "b2-voz-pasiva"),
      ec("Los documentos fueron firmados el director.", "Los documentos fueron firmados por el director.", "Agente con por", "por el director.", "b2-voz-pasiva"),
      ec("La carta está escribiendo ahora (voz pasiva).", "La carta está siendo escrita ahora.", "Pasiva continua", "está siendo escrita.", "b2-voz-pasiva"),
    ],
  },

  "chapter-25-conectores": {
    error_correction: [
      ec("En primer lugar, yo estoy de acuerdo. En segundo, no.", "En primer lugar, estoy de acuerdo. En segundo lugar, no.", "Conectores de orden", "en segundo lugar.", "dele-conectores-redaccion"),
      ec("Sin embargo que llueve, saldremos.", "Aunque llueve, saldremos.", "Sin embargo vs aunque", "aunque + indicativo/subjuntivo; sin embargo no introduce cláusula así.", "dele-conectores-redaccion", ["A pesar de que llueve, saldremos."]),
      ec("Por lo tanto, porque no tengo tiempo.", "Por lo tanto, no iré porque no tengo tiempo.", "Por lo tanto — conclusión", "por lo tanto une ideas completas.", "dele-conectores-redaccion"),
      ec("Además de, el precio es alto.", "Además, el precio es alto.", "Además", "Además, …", "dele-conectores-redaccion"),
      ec("No obstante de eso, acepto.", "No obstante, acepto.", "No obstante", "No obstante, …", "dele-conectores-redaccion"),
      ec("En conclusión que debemos actuar.", "En conclusión, debemos actuar.", "En conclusión", "En conclusión, …", "dele-conectores-redaccion"),
    ],
    translation: [
      tr("С одной стороны, это полезно; с другой — дорого.", "Por un lado es útil; por otro es caro", "Por un lado / por otro", "por un lado… por otro…", "dele-conectores-redaccion"),
      tr("Поэтому я остаюсь дома.", "Por lo tanto me quedo en casa", "Por lo tanto", "por lo tanto.", "dele-conectores-redaccion", ["Por eso me quedo en casa"]),
      tr("Тем не менее план жизнеспособен.", "No obstante, el plan es viable", "No obstante", "no obstante.", "dele-conectores-redaccion"),
      tr("Кроме того, нужно больше времени.", "Además, hace falta más tiempo", "Además", "además.", "dele-conectores-redaccion"),
      tr("В итоге всё вышло хорошо.", "En definitiva, todo salió bien", "En definitiva", "en definitiva / en conclusión.", "dele-conectores-redaccion", ["En conclusión, todo salió bien"]),
    ],
  },

  "chapter-26-voz-plaza": {
    error_correction: [
      ec("En mi opinión que el tema es importante.", "En mi opinión, el tema es importante.", "En mi opinión", "coma, sin que.", "dele-expresion-oral"),
      ec("Yo creo de que debemos hablar claro.", "Yo creo que debemos hablar claro.", "Creer que", "creo que — sin de.", "dele-expresion-oral"),
      ec("Me parece de que es una buena idea.", "Me parece que es una buena idea.", "Parecer que", "me parece que.", "dele-expresion-oral"),
      ec("Estoy de acuerdo de ti.", "Estoy de acuerdo contigo.", "De acuerdo con", "de acuerdo contigo.", "dele-expresion-oral"),
      ec("No estoy seguro si es verdad o no es.", "No estoy seguro de si es verdad.", "Estar seguro de", "seguro de si…", "dele-expresion-oral"),
      ec("Desde mi punto de vista que hay que cambiar.", "Desde mi punto de vista, hay que cambiar.", "Punto de vista", "coma, sin que.", "dele-expresion-oral"),
    ],
  },

  "chapter-36-pronombres-objetos": {
    error_correction: [
      ec("Yo le vi a María ayer.", "Yo la vi a María ayer.", "Lo/la vs le", "objeto directo persona → la (f).", "b1-pronombres-objetos", ["La vi a María ayer."]),
      ec("¿Me lo puedes dar el libro?", "¿Me lo puedes dar?", "Redundancia", "el libro ya está en lo.", "b1-pronombres-objetos", ["¿Puedes dármelo?"]),
      ec("Se lo dije ella.", "Se lo dije a ella.", "A + tono", "se lo dije a ella.", "b1-pronombres-objetos"),
      ec("Te voy a llamar a ti mañana a ti.", "Te voy a llamar a ti mañana.", "Reduplicación excesiva", "una sola a ti.", "b1-pronombres-objetos", ["Mañana te voy a llamar."]),
      ec("Les compré flores a ella.", "Le compré flores a ella.", "Le/les acuerdo", "a ella → le.", "b1-pronombres-objetos"),
      ec("Lo di el regalo a Juan.", "Le di el regalo a Juan.", "OI = le", "dar algo a alguien → le.", "b1-pronombres-objetos", ["Se lo di a Juan."]),
    ],
  },

  "chapter-38-subjuntivo-compuestos": {
    fill_blank: [
      fb("Dudo que ellos ___ (llegar) ya.", "hayan llegado", "Perfecto de subjuntivo", "hayan + participio.", "b2-subjuntivo-compuestos", ["hayan llegado"]),
      fb("No creo que ___ (terminar) el informe.", "haya terminado", "Perfecto de subjuntivo", "haya terminado.", "b2-subjuntivo-compuestos"),
      fb("Me alegra que ___ (conseguir) el trabajo.", "hayas conseguido", "Emoción + perfecto subj.", "hayas conseguido.", "b2-subjuntivo-compuestos"),
      fb("Es posible que ___ (llover) anoche.", "haya llovido", "Perfecto de subjuntivo", "haya llovido.", "b2-subjuntivo-compuestos"),
      fb("No pienso que ___ (ser) un error.", "haya sido", "Duda + perfecto", "haya sido.", "b2-subjuntivo-compuestos"),
      fb("Siento que no ___ (poder) venir.", "hayas podido", "Siento que + perfecto", "hayas podido.", "b2-subjuntivo-compuestos"),
    ],
    translation: [
      tr("Сомневаюсь, что они уже приехали.", "Dudo que hayan llegado ya", "Perfecto de subjuntivo", "hayan llegado.", "b2-subjuntivo-compuestos"),
      tr("Рад, что ты сдал экзамен.", "Me alegra que hayas aprobado el examen", "Emoción + perfecto", "hayas aprobado.", "b2-subjuntivo-compuestos"),
      tr("Не думаю, что это была ошибка.", "No creo que haya sido un error", "Duda", "haya sido.", "b2-subjuntivo-compuestos"),
      tr("Возможно, вчера шёл дождь.", "Es posible que haya llovido ayer", "Perfecto de subjuntivo", "haya llovido.", "b2-subjuntivo-compuestos"),
      tr("Жаль, что ты не смог прийти.", "Siento que no hayas podido venir", "Siento que", "hayas podido.", "b2-subjuntivo-compuestos"),
    ],
  },

  "chapter-39-condicionales-compuestos": {
    fill_blank: [
      fb("Si ___ (estudiar) más, habrías aprobado.", "hubieras estudiado", "3ª condicional", "hubieras + participio.", "b2-condicionales-compuestos", ["hubieras estudiado", "hubieses estudiado"]),
      fb("Si lo ___ (saber), te habría llamado.", "hubiera sabido", "3ª condicional", "hubiera sabido.", "b2-condicionales-compuestos", ["hubiera sabido", "hubiese sabido"]),
      fb("Habríamos llegado antes si no ___ (perder) el tren.", "hubiéramos perdido", "3ª condicional", "hubiéramos perdido.", "b2-condicionales-compuestos", ["hubiéramos perdido", "hubiésemos perdido"]),
      fb("Si me ___ (avisar), habría ido.", "hubieras avisado", "3ª condicional", "hubieras avisado.", "b2-condicionales-compuestos", ["hubieras avisado", "hubieses avisado"]),
      fb("No ___ (pasar) si hubieras tenido cuidado.", "habría pasado", "Condicional compuesto", "habría pasado.", "b2-condicionales-compuestos"),
      fb("Si ___ (venir), nos habríamos visto.", "hubieras venido", "3ª condicional", "hubieras venido.", "b2-condicionales-compuestos", ["hubieras venido", "hubieses venido"]),
    ],
    translation: [
      tr("Если бы я знал, я бы тебе сказал.", "Si lo hubiera sabido, te lo habría dicho", "3ª condicional", "hubiera… habría…", "b2-condicionales-compuestos", ["Si lo hubiese sabido, te lo habría dicho"]),
      tr("Мы бы пришли раньше, если бы не опоздали на автобус.", "Habríamos llegado antes si no hubiéramos perdido el autobús", "3ª condicional", "habríamos… hubiéramos…", "b2-condicionales-compuestos", ["Habríamos llegado antes si no hubiésemos perdido el autobús"]),
      tr("Если бы ты позвонил, я бы помог.", "Si me hubieras llamado, te habría ayudado", "3ª condicional", "hubieras… habría…", "b2-condicionales-compuestos", ["Si me hubieses llamado, te habría ayudado"]),
      tr("Она бы не уехала, если бы знала правду.", "Ella no se habría ido si hubiera sabido la verdad", "3ª condicional", "habría… hubiera…", "b2-condicionales-compuestos", ["Ella no se habría ido si hubiese sabido la verdad"]),
      tr("Если бы шла дождь, мы остались бы дома.", "Si hubiera llovido, nos habríamos quedado en casa", "3ª condicional", "hubiera llovido… habríamos…", "b2-condicionales-compuestos", ["Si hubiese llovido, nos habríamos quedado en casa"]),
    ],
  },

  "chapter-14-estilo-indirecto": {
    translation: [
      tr("Он сказал: «Я устал».", "Él dijo que estaba cansado", "Estilo indirecto — presente→imperfecto", "dijo que estaba.", "b2-estilo-indirecto"),
      tr("Она спросила: «Ты придёшь?»", "Ella preguntó si vendría / si iba a venir", "Pregunta sí/no", "preguntó si…", "b2-estilo-indirecto", ["Ella preguntó si vendría", "Ella preguntó si iba a venir"]),
      tr("Они сказали, что уже закончили.", "Ellos dijeron que ya habían terminado", "Pluscuamperfecto", "habían terminado.", "b2-estilo-indirecto"),
      tr("Он попросил меня помочь ему.", "Él me pidió que le ayudara", "Pedir que + subjuntivo", "pidió que + imperfecto de subjuntivo.", "b2-estilo-indirecto", ["Él me pidió que le ayudase"]),
      tr("Мария сказала, что завтра уезжает.", "María dijo que se iba / se iría al día siguiente", "Mañana → al día siguiente", "al día siguiente.", "b2-estilo-indirecto", ["María dijo que se iba al día siguiente", "María dijo que se iría al día siguiente"]),
    ],
  },

  "chapter-22-futuro": {
    error_correction: [
      ec("Mañana yo iré a la playa iré.", "Mañana iré a la playa.", "Futuro — redundancia", "iré una vez.", "a2-futuro-simple"),
      ec("¿Qué harás tú harás este finde?", "¿Qué harás este finde?", "Futuro pregunta", "¿Qué harás…?", "a2-futuro-simple"),
      ec("Ellos vendránán tarde.", "Ellos vendrán tarde.", "Ortografía futuro", "vendrán.", "a2-futuro-simple"),
      ec("Nosotros salirémos temprano.", "Nosotros saldremos temprano.", "Futuro irregular salir", "saldremos.", "a2-futuro-simple"),
      ec("Ella decirá la verdad.", "Ella dirá la verdad.", "Futuro irregular decir", "dirá.", "a2-futuro-simple"),
    ],
  },

  "chapter-9-imperfecto": {
    fill_blank: [
      fb("Cuando era niño, ___ (jugar) en la calle.", "jugaba", "Imperfecto — hábito", "jugaba.", "a2-imperfecto"),
      fb("Mientras ella ___ (leer), yo cocinaba.", "leía", "Imperfecto — simultaneidad", "leía.", "a2-imperfecto"),
      fb("Siempre ___ (ir) al parque los domingos.", "íbamos", "Imperfecto — costumbre", "íbamos.", "a2-imperfecto", ["íbamos", "iba"]),
      fb("La casa ___ (ser) grande y antigua.", "era", "Imperfecto — descripción", "era.", "a2-imperfecto"),
      fb("¿Qué ___ (hacer) a las tres?", "hacías", "Imperfecto pregunta", "hacías.", "a2-imperfecto"),
    ],
  },

  "chapter-1-despertar": {
    error_correction: [
      ec("Yo soy cansado hoy.", "Yo estoy cansado hoy.", "Ser vs estar — estado", "estoy cansado.", "a1-ser-estar"),
      ec("Madrid está la capital de España.", "Madrid es la capital de España.", "Ser — identidad", "es la capital.", "a1-ser-estar"),
      ec("¿Cómo eres? — Estoy María.", "¿Cómo te llamas? — Soy María.", "Presentación", "Soy María / Me llamo María.", "a1-ser-estar", ["Me llamo María.", "Soy María."]),
      ec("La sopa es caliente ahora (temperatura ahora).", "La sopa está caliente ahora.", "Estar — estado temporal", "está caliente.", "a1-ser-estar"),
    ],
  },

  "chapter-11-subjuntivo": {
    multiple_choice: [
      mc("Quiero que tú ___ temprano.", ["vienes", "vengas", "vendrás", "viniste"], "vengas", "Querer que + subjuntivo", "quiere que + presente de subjuntivo.", "b1-subjuntivo"),
      mc("Es importante que ___ la verdad.", ["dices", "digas", "dirás", "dijiste"], "digas", "Impersonal + subjuntivo", "es importante que + subjuntivo.", "b1-subjuntivo"),
      mc("No creo que ___ en casa.", ["está", "esté", "estará", "estuvo"], "esté", "No creo que + subjuntivo", "esté.", "b1-subjuntivo"),
      mc("Ojalá ___ buen tiempo.", ["hace", "haga", "hará", "hizo"], "haga", "Ojalá + subjuntivo", "haga.", "b1-subjuntivo"),
      mc("Te ruego que me ___.", ["ayudas", "ayudes", "ayudarás", "ayudaste"], "ayudes", "Rogar que + subjuntivo", "ayudes.", "b1-subjuntivo"),
    ],
  },

  "chapter-31-verbos-frecuentes": {
    fill_blank: [
      fb("Yo ___ (tener) una pregunta.", "tengo", "Presente — tener", "tengo.", "a1-verbos-frecuentes"),
      fb("¿Qué ___ (decir) tú?", "dices", "Presente — decir", "dices.", "a1-verbos-frecuentes"),
      fb("Nosotros ___ (hacer) la cena.", "hacemos", "Presente — hacer", "hacemos.", "a1-verbos-frecuentes"),
      fb("Ella ___ (ir) al trabajo en metro.", "va", "Presente — ir", "va.", "a1-verbos-frecuentes"),
      fb("¿___ (poder) ayudarme, por favor?", "Puedes", "Presente — poder", "Puedes…", "a1-verbos-frecuentes", ["Puedes", "puedes"]),
    ],
  },

  "chapter-41-conectores-discursivos": {
    fill_blank: [
      fb("___ embargo, el plan es viable.", "Sin", "Sin embargo", "Sin embargo.", "b2-conectores", ["Sin", "sin"]),
      fb("___ lo tanto, debemos actuar ya.", "Por", "Por lo tanto", "Por lo tanto.", "b2-conectores"),
      fb("___ primer lugar, analicemos los datos.", "En", "En primer lugar", "En primer lugar.", "b2-conectores"),
      fb("___ conclusión, recomiendo el cambio.", "En", "En conclusión", "En conclusión.", "b2-conectores"),
      fb("___ pesar de ello, seguimos adelante.", "A", "A pesar de ello", "A pesar de ello.", "b2-conectores"),
    ],
  },

  "chapter-7-pasado-perfecto": {
    error_correction: [
      ec("Hoy yo he comer ya.", "Hoy ya he comido.", "Pretérito perfecto", "he + participio.", "a2-preterito-perfecto"),
      ec("¿Has veído esa serie?", "¿Has visto esa serie?", "Participio ver", "visto.", "a2-preterito-perfecto"),
      ec("Ellos han ir al cine esta semana.", "Ellos han ido al cine esta semana.", "Participio ir", "ido.", "a2-preterito-perfecto"),
      ec("Nosotros no hemos terminado todavía no.", "Nosotros no hemos terminado todavía.", "Todavía — una vez", "todavía / aún.", "a2-preterito-perfecto"),
    ],
  },

  "chapter-24-carta": {
    fill_blank: [
      fb("Estimado señor García: Le escribo ___ solicitar información.", "para", "Finalidad en carta", "para + infinitivo.", "dele-carta-formal"),
      fb("Quedo a la ___ de sus noticias.", "espera", "Fórmula de cierre", "a la espera.", "dele-carta-formal"),
      fb("Adjunto le ___ mi currículum.", "remito", "Adjunto / remito", "remito / envío.", "dele-carta-formal", ["remito", "envío"]),
      fb("Le agradezco de ___ su atención.", "antemano", "De antemano", "de antemano.", "dele-carta-formal"),
      fb("Atentamente, ___ saluda.", "le", "Cierre formal", "le saluda.", "dele-carta-formal"),
    ],
  },

  "chapter-32-pronombre-se": {
    fill_blank: [
      fb("Pedro ___ peina delante del espejo.", "se", "Se reflexivo", "se peina.", "b1-pronombre-se"),
      fb("En este barrio ___ venden flores frescas.", "se", "Se pasiva refleja", "se venden.", "b1-pronombre-se"),
      fb("Marta ___ acuesta a las once.", "se", "Acostarse", "se acuesta.", "b1-pronombre-se"),
      fb("___ nos rompió el vaso.", "Se", "Se no intencional", "Se nos rompió…", "b1-pronombre-se", ["Se", "se"]),
      fb("¿A qué hora ___ levanta tu padre?", "se", "Levantarse", "se levanta.", "b1-pronombre-se"),
      fb("En invierno ___ oscurece pronto.", "se", "Se impersonal / meteorológico", "se oscurece.", "b1-pronombre-se"),
      fb("Los estudiantes ___ quejan del examen.", "se", "Quejarse", "se quejan.", "b1-pronombre-se"),
      fb("No ___ puede aparcar aquí.", "se", "Se impersonal", "no se puede.", "b1-pronombre-se"),
    ],
    translation: [
      tr("Она моет руки.", "Ella se lava las manos", "Se reflexivo", "se lava.", "b1-pronombre-se"),
      tr("Здесь говорят по-испански.", "Aquí se habla español", "Se impersonal", "se habla.", "b1-pronombre-se"),
      tr("Мне забылось имя.", "Se me olvidó el nombre", "Se no intencional", "Se me olvidó…", "b1-pronombre-se"),
      tr("Как тебя зовут?", "¿Cómo te llamas?", "Llamarse", "¿Cómo te llamas?", "b1-pronombre-se"),
      tr("Двери открываются в девять.", "Las puertas se abren a las nueve", "Se pasiva refleja", "se abren.", "b1-pronombre-se"),
      tr("Они садятся за стол.", "Ellos se sientan a la mesa", "Sentarse", "se sientan.", "b1-pronombre-se"),
    ],
  },

  // Wave 2 — remaining critical FB/MC with unique finished sentences
  "chapter-10-por-para": {
    fill_blank: [
      fb("Compré pan ___ el desayuno de mañana.", "para", "Finalidad", "para el desayuno.", "a2-por-para"),
      fb("Viajamos ___ Francia en tren.", "por", "A través de / por país", "viajar por Francia.", "a2-por-para"),
      fb("Esta carta es ___ mi jefa.", "para", "Destinatario", "para mi jefa.", "a2-por-para"),
      fb("Estuve enfermo ___ tres días.", "por", "Duración aproximada", "por tres días.", "a2-por-para"),
      fb("Salgo ___ no llegar tarde.", "para", "Finalidad + infinitivo", "para + infinitivo.", "a2-por-para"),
      fb("Pagamos veinte euros ___ la entrada.", "por", "Precio / intercambio", "pagar por.", "a2-por-para"),
      fb("El tren ___ Barcelona sale a las seis.", "para", "Destino", "tren para Barcelona.", "a2-por-para"),
      fb("Lo siento ___ el retraso.", "por", "Causa", "sentir por.", "a2-por-para"),
    ],
  },

  "chapter-24-carta": {
    fill_blank: [
      fb("Muy señor mío: Me dirijo a usted ___ fin de reclamar.", "a", "A fin de", "a fin de.", "dele-carta-formal"),
      fb("Le ruego que me ___ una respuesta por escrito.", "envíe", "Ruego que + subjuntivo", "envíe.", "dele-carta-formal", ["envíe", "mande"]),
      fb("Quedo ___ usted para cualquier aclaración.", "a disposición de", "Fórmula", "a disposición de usted.", "dele-carta-formal", ["a disposición de", "a su disposición"]),
      fb("Sin otro particular, ___ atentamente.", "le saluda", "Cierre", "le saluda atentamente.", "dele-carta-formal", ["le saluda", "reciba un saludo"]),
      fb("Adjunto ___ de la factura disputada.", "copia", "Adjunto copia", "adjunto copia.", "dele-carta-formal"),
      fb("Espero sus noticias a la mayor ___.", "brevedad", "A la mayor brevedad", "brevedad.", "dele-carta-formal"),
    ],
  },

  "chapter-38-subjuntivo-compuestos": {
    fill_blank: [
      fb("No es verdad que el tren ___ (salir) ya.", "haya salido", "Perfecto de subjuntivo", "haya salido.", "b2-subjuntivo-compuestos"),
      fb("Me molesta que no me ___ (avisar).", "hayas avisado", "Emoción + perfecto", "hayas avisado.", "b2-subjuntivo-compuestos"),
      fb("Es raro que ___ (nevar) en abril.", "haya nevado", "Valoración + perfecto", "haya nevado.", "b2-subjuntivo-compuestos"),
      fb("Dudo que Ana ___ (leer) el contrato.", "haya leído", "Duda + perfecto", "haya leído.", "b2-subjuntivo-compuestos"),
      fb("No pienso que ___ (haber) un error.", "haya habido", "Haber en perfecto subj.", "haya habido.", "b2-subjuntivo-compuestos"),
      fb("Celebramos que ___ (conseguir) la beca.", "hayas conseguido", "Celebrar que + perfecto", "hayas conseguido.", "b2-subjuntivo-compuestos"),
    ],
  },

  "chapter-40-relativos-avanzado": {
    multiple_choice: [
      mc("El puente ___ cruzamos es antiguo.", ["por el que", "para el que", "cuyo", "lo que"], "por el que", "Por el que — movimiento", "cruzar por → por el que.", "b2-relativos-avanzado"),
      mc("Esa es la razón ___ dimitió.", ["por la que", "en la que", "a la que", "con la que"], "por la que", "Causa", "por la que dimitió.", "b2-relativos-avanzado"),
      mc("Los alumnos ___ notas son altas recibirán un premio.", ["cuyas", "cuyos", "quienes", "los cuales"], "cuyas", "Cuyo", "notas → cuyas.", "b2-relativos-avanzado"),
      mc("Visité el museo ___ me hablaste.", ["del que", "al que", "en que", "cuya"], "del que", "De + el que", "hablar de → del que.", "b2-relativos-avanzado"),
      mc("___ ocurrió ayer nadie lo esperaba.", ["Lo que", "El que", "La que", "Quien"], "Lo que", "Neutro sujeto", "Lo que ocurrió…", "b2-relativos-avanzado"),
    ],
    fill_blank: [
      fb("La oficina ___ trabajo está en el centro.", "en la que", "En la que", "trabajar en → en la que.", "b2-relativos-avanzado", ["en la que", "donde"]),
      fb("El cliente ___ llamaste no contestó.", "al que", "A + el que", "llamar a → al que.", "b2-relativos-avanzado", ["al que", "a quien"]),
      fb("La empresa ___ director conocí es francesa.", "cuyo", "Cuyo", "director → cuyo.", "b2-relativos-avanzado"),
      fb("No entiendo ___ dices.", "lo que", "Lo que", "lo que dices.", "b2-relativos-avanzado", ["lo que"]),
      fb("La isla ___ fuimos es preciosa.", "a la que", "A la que / adonde", "ir a → a la que.", "b2-relativos-avanzado", ["a la que", "adonde", "a donde"]),
    ],
  },

  "chapter-9-imperfecto": {
    fill_blank: [
      fb("De pequeño, mi abuelo ___ (contar) cuentos.", "contaba", "Imperfecto — hábito", "contaba.", "a2-imperfecto"),
      fb("Mientras ___ (nevar), ellos esquiaban.", "nevaba", "Imperfecto — fondo", "nevaba.", "a2-imperfecto"),
      fb("Antes ___ (haber) menos tráfico aquí.", "había", "Imperfecto — haber", "había.", "a2-imperfecto"),
      fb("¿Dónde ___ (vivir) tú en 2010?", "vivías", "Imperfecto pregunta", "vivías.", "a2-imperfecto"),
      fb("La oficina ___ (estar) siempre llena.", "estaba", "Imperfecto — descripción", "estaba.", "a2-imperfecto"),
      fb("Cada verano ___ (ir) a la costa.", "íbamos", "Imperfecto — costumbre", "íbamos.", "a2-imperfecto", ["íbamos", "iba"]),
    ],
  },

  "chapter-11-subjuntivo": {
    multiple_choice: [
      mc("Necesito que me ___ el informe hoy.", ["envías", "envíes", "enviarás", "enviaste"], "envíes", "Necesitar que + subjuntivo", "envíes.", "b1-subjuntivo"),
      mc("No estoy seguro de que ___ verdad.", ["es", "sea", "será", "fue"], "sea", "No estar seguro de que", "sea.", "b1-subjuntivo"),
      mc("Prefiero que ___ en casa esta noche.", ["quedas", "te quedes", "quedarás", "quedaste"], "te quedes", "Preferir que", "te quedes.", "b1-subjuntivo"),
      mc("Es mejor que ___ ahora.", ["sales", "salgas", "saldrás", "saliste"], "salgas", "Es mejor que", "salgas.", "b1-subjuntivo"),
      mc("Temo que ___ demasiado tarde.", ["llegamos", "lleguemos", "llegaremos", "llegó"], "lleguemos", "Temer que", "lleguemos.", "b1-subjuntivo"),
    ],
  },

  "chapter-31-verbos-frecuentes": {
    fill_blank: [
      fb("Ellos ___ (saber) la respuesta.", "saben", "Presente — saber", "saben.", "a1-verbos-frecuentes"),
      fb("¿___ (venir) ustedes mañana?", "Vienen", "Presente — venir", "Vienen…", "a1-verbos-frecuentes", ["Vienen", "vienen"]),
      fb("Yo no ___ (querer) café.", "quiero", "Presente — querer", "quiero.", "a1-verbos-frecuentes"),
      fb("María ___ (poner) la mesa.", "pone", "Presente — poner", "pone.", "a1-verbos-frecuentes"),
      fb("Nosotros ___ (salir) a las ocho.", "salimos", "Presente — salir", "salimos.", "a1-verbos-frecuentes"),
      fb("¿Qué ___ (traer) tú?", "traes", "Presente — traer", "traes.", "a1-verbos-frecuentes"),
    ],
  },

  "chapter-35-subjuntivo-imperfecto": {
    fill_blank: [
      fb("No esperaba que ___ (llover) tanto.", "lloviera", "Imperfecto de subjuntivo", "lloviera / lloviese.", "b1-subjuntivo-imperfecto", ["lloviera", "lloviese"]),
      fb("Me pidió que ___ (cerrar) la ventana.", "cerrara", "Pedir que + imperfecto", "cerrara / cerrase.", "b1-subjuntivo-imperfecto", ["cerrara", "cerrase"]),
      fb("Si ___ (poder), te ayudaría.", "pudiera", "Si + imperfecto", "pudiera / pudiese.", "b1-subjuntivo-imperfecto", ["pudiera", "pudiese"]),
      fb("Era raro que no ___ (contestar).", "contestara", "Valoración en pasado", "contestara / contestase.", "b1-subjuntivo-imperfecto", ["contestara", "contestase"]),
      fb("Ojalá ___ (haber) más tiempo.", "hubiera", "Ojalá + imperfecto haber", "hubiera / hubiese.", "b1-subjuntivo-imperfecto", ["hubiera", "hubiese"]),
    ],
  },

  "chapter-41-conectores-discursivos": {
    fill_blank: [
      fb("___ primer término, conviene definir el problema.", "En", "En primer término", "En primer término.", "b2-conectores"),
      fb("___ consiguiente, aceptamos la propuesta.", "Por", "Por consiguiente", "Por consiguiente.", "b2-conectores"),
      fb("___ sabiendas de eso, firmó el contrato.", "A", "A sabiendas", "A sabiendas de.", "b2-conectores"),
      fb("___ fin de cuentas, fue un éxito.", "A", "A fin de cuentas", "A fin de cuentas.", "b2-conectores"),
      fb("___ otro lado, hay riesgos claros.", "Por", "Por otro lado", "Por otro lado.", "b2-conectores"),
      fb("___ suma, necesitamos más datos.", "En", "En suma", "En suma.", "b2-conectores"),
    ],
  },
};

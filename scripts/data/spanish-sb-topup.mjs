/** SB top-ups to bring chapters to ~20 sentence_building each */

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

function tr(question, answer, instruction, explanation, acceptableAnswers = []) {
  return {
    type: "translation",
    question,
    answer,
    instruction,
    explanation,
    ...(acceptableAnswers.length ? { acceptableAnswers } : {}),
  };
}

export const SPANISH_SB_TOPUP = {
  "chapter-12-imperativo": [
    sb(["Pase", "usted", "por", "favor"], "Pase usted por favor", "Imperativo usted — вежливая просьба", "Pase usted — формальное приглашение пройти."),
    sb(["No", "comas", "tan", "rápido"], "No comas tan rápido", "Imperativo tú negativo", "No comas — отрицательный imperativo для tú."),
    sb(["Déjame", "en", "paz"], "Déjame en paz", "Imperativo tú", "Déjame en paz — оставь меня в покое."),
    sb(["Sentémonos", "aquí"], "Sentémonos aquí", "Imperativo nosotros", "Sentémonos — давайте сядем (nosotros)."),
    sb(["Llame", "usted", "mañana"], "Llame usted mañana", "Imperativo usted", "Llame usted — позвоните (usted)."),
    sb(["No", "se", "preocupe", "usted"], "No se preocupe usted", "Imperativo usted negativo", "No se preocupe — не беспокойтесь (usted)."),
    sb(["Prueba", "este", "plato"], "Prueba este plato", "Imperativo tú", "Prueba — попробуй (tú)."),
    sb(["Vayamos", "a", "la", "playa"], "Vayamos a la playa", "Imperativo nosotros — ir", "Vayamos — subjuntivo nosotros как призыв."),
    sb(["Tome", "asiento", "usted"], "Tome asiento usted", "Imperativo usted", "Tome asiento — присядьте (usted)."),
    sb(["No", "te", "levantes", "todavía"], "No te levantes todavía", "Imperativo tú negativo reflexivo", "No te levantes — не вставай ещё."),
  ],

  "chapter-24-carta": [
    sb(["Agradezco", "de", "antemano", "su", "pronta", "respuesta"], "Agradezco de antemano su pronta respuesta", "Carta formal DELE — благодарность", "Agradezco de antemano — заранее благодарю."),
    sb(["Le", "ruego", "me", "confirme", "la", "recepción"], "Le ruego me confirme la recepción", "Carta formal — просьба", "Le ruego me confirme — прошу подтвердить получение."),
    sb(["Adjunto", "encontrará", "los", "documentos", "solicitados"], "Adjunto encontrará los documentos solicitados", "Carta formal — вложение", "Adjunto encontrará — прилагаю документы."),
    sb(["En", "respuesta", "a", "su", "carta", "del", "día", "diez"], "En respuesta a su carta del día diez", "Carta formal — отсылка", "En respuesta a su carta — в ответ на ваше письмо."),
    sb(["Le", "informo", "que", "he", "recibido", "su", "solicitud"], "Le informo que he recibido su solicitud", "Carta formal — уведомление", "Le informo que — сообщаю что."),
    sb(["Espero", "sus", "noticias", "a", "la", "mayor", "brevedad"], "Espero sus noticias a la mayor brevedad", "Carta formal — ожидание ответа", "A la mayor brevedad — как можно скорее."),
    sb(["Distinguído", "señor", "le", "escribo", "para", "reclamar"], "Distinguído señor le escribo para reclamar", "Carta formal DELE — жалоба", "Distinguído señor — уважаемый господин."),
    sb(["Sin", "más", "por", "el", "momento", "le", "saludo", "cordialmente"], "Sin más por el momento le saludo cordialmente", "Carta formal — закрытие", "Sin más por el momento — на этом пока всё."),
    sb(["Me", "permito", "solicitarle", "una", "cita"], "Me permito solicitarle una cita", "Carta formal — запрос встречи", "Me permito solicitarle — позволяю себе просить."),
    sb(["Quedo", "a", "la", "espera", "de", "sus", "instrucciones"], "Quedo a la espera de sus instrucciones", "Carta formal — ожидание указаний", "Quedo a la espera de — жду ваших указаний."),
  ],

  "chapter-26-voz-plaza": [
    sb(["A", "la", "izquierda", "hay", "un", "edificio", "antiguo"], "A la izquierda hay un edificio antiguo", "DELE oral — описание фото", "A la izquierda hay — слева находится."),
    sb(["En", "el", "centro", "de", "la", "imagen", "aparece", "una", "fuente"], "En el centro de la imagen aparece una fuente", "DELE oral — локализация", "En el centro de la imagen — в центре изображения."),
    sb(["Al", "parecer", "la", "gente", "está", "paseando", "tranquilamente"], "Al parecer la gente está paseando tranquilamente", "DELE oral — наблюдение", "Al parecer — по-видимому."),
    sb(["Me", "da", "la", "impresión", "de", "que", "es", "un", "día", "soleado"], "Me da la impresión de que es un día soleado", "DELE oral — впечатление", "Me da la impresión de que — у меня впечатление что."),
    sb(["En", "segundo", "lugar", "comentaría", "la", "atmósfera", "del", "lugar"], "En segundo lugar comentaría la atmósfera del lugar", "DELE oral — структура", "En segundo lugar — во-вторых (устная структура)."),
    sb(["Se", "distingue", "un", "mercado", "con", "muchos", "puestos"], "Se distingue un mercado con muchos puestos", "DELE oral — описание", "Se distingue — различается/виден."),
    sb(["Tal", "vez", "los", "niños", "estén", "jugando", "en", "la", "plaza"], "Tal vez los niños estén jugando en la plaza", "DELE oral — гипотеза", "Tal vez + subjuntivo — возможно."),
    sb(["Desde", "mi", "punto", "de", "vista", "el", "ambiente", "es", "acogedor"], "Desde mi punto de vista el ambiente es acogedor", "DELE oral — мнение", "Desde mi punto de vista — с моей точки зрения."),
    sb(["En", "la", "parte", "superior", "se", "aprecia", "un", "cielo", "despejado"], "En la parte superior se aprecia un cielo despejado", "DELE oral — небо", "Se aprecia — можно заметить."),
    sb(["Para", "terminar", "diría", "que", "transmite", "calma"], "Para terminar diría que transmite calma", "DELE oral — заключение", "Para terminar diría — в заключение сказал бы."),
  ],

  "chapter-10-por-para": [
    sb(["Lo", "hago", "por", "ti"], "Lo hago por ti", "Por — ради кого-то", "Por ti — ради тебя / для тебя (мотив)."),
    sb(["Este", "regalo", "es", "para", "mi", "madre"], "Este regalo es para mi madre", "Para — получатель", "Para mi madre — для моей мамы."),
    sb(["Caminamos", "por", "la", "calle", "principal"], "Caminamos por la calle principal", "Por — место / маршрут", "Por la calle — по улице."),
    sb(["Estudio", "para", "aprobar", "el", "examen"], "Estudio para aprobar el examen", "Para — цель", "Para aprobar — чтобы сдать экзамен."),
    sb(["Gracias", "por", "venir", "hoy"], "Gracias por venir hoy", "Por — благодарность", "Gracias por venir — спасибо что пришли."),
    sb(["El", "tren", "pasa", "por", "Valencia"], "El tren pasa por Valencia", "Por — через / мимо", "Pasa por Valencia — проходит через Валенсию."),
    sb(["Para", "mí", "esto", "es", "importante"], "Para mí esto es importante", "Para — точка зрения", "Para mí — для меня / по моему мнению."),
    sb(["Trabajo", "por", "las", "mañanas"], "Trabajo por las mañanas", "Por — время суток", "Por las mañanas — по утрам."),
    sb(["Es", "un", "mensaje", "para", "usted"], "Es un mensaje para usted", "Para — адресат formal", "Para usted — для вас (usted)."),
  ],

  "chapter-25-conectores": [
    sb(["En", "contraste", "con", "lo", "anterior", "propongo", "otra", "vía"], "En contraste con lo anterior propongo otra vía", "DELE conector — контраст", "En contraste con — в контрасте с."),
    sb(["Por", "consiguiente", "debemos", "tomar", "medidas"], "Por consiguiente debemos tomar medidas", "DELE conector — следствие", "Por consiguiente — следовательно."),
    sb(["Asimismo", "conviene", "analizar", "los", "riesgos"], "Asimismo conviene analizar los riesgos", "DELE conector — добавление", "Asimismo — равным образом."),
    sb(["De", "hecho", "los", "resultados", "superan", "expectativas"], "De hecho los resultados superan expectativas", "DELE conector — уточнение", "De hecho — de hecho / на самом деле."),
    sb(["En", "definitiva", "apoyo", "la", "propuesta"], "En definitiva apoyo la propuesta", "DELE conector — итог", "En definitiva — в конечном счёте."),
    sb(["Por", "el", "contrario", "prefiero", "esperar"], "Por el contrario prefiero esperar", "DELE conector — противопоставление", "Por el contrario — напротив."),
    sb(["A", "continuación", "presento", "mis", "argumentos"], "A continuación presento mis argumentos", "DELE conector — переход", "A continuación — далее / затем."),
    sb(["En", "cuanto", "a", "los", "costes", "hay", "dudas"], "En cuanto a los costes hay dudas", "DELE conector — тема", "En cuanto a — что касается."),
  ],

  "chapter-11-subjuntivo": [
    sb(["Busco", "alguien", "que", "hable", "francés"], "Busco alguien que hable francés", "Subjuntivo — antecedente indefinido", "Alguien que hable — subjuntivo после неопределённого."),
    sb(["Antes", "de", "que", "salgas", "cierra", "la", "ventana"], "Antes de que salgas cierra la ventana", "Subjuntivo — antes de que", "Antes de que salgas — subjuntivo."),
    sb(["Es", "posible", "que", "lleguen", "tarde"], "Es posible que lleguen tarde", "Subjuntivo — posible", "Es posible que + subjuntivo."),
    sb(["A", "menos", "que", "llueva", "saldremos"], "A menos que llueva saldremos", "Subjuntivo — a menos que", "A menos que llueva — если не пойдёт дождь."),
    sb(["Me", "sorprende", "que", "no", "venga"], "Me sorprende que no venga", "Subjuntivo — emoción", "Me sorprende que — удивляет что."),
    sb(["Con", "tal", "de", "que", "estudies", "aprobarás"], "Con tal de que estudies aprobarás", "Subjuntivo — condición", "Con tal de que estudies — при условии что учишься."),
    sb(["No", "permito", "que", "fumen", "aquí"], "No permito que fumen aquí", "Subjuntivo — prohibición", "No permito que fumen — не разрешаю курить."),
  ],

  "chapter-14-estilo-indirecto": [
    sb(["Me", "contó", "que", "vivía", "en", "Barcelona"], "Me contó que vivía en Barcelona", "Estilo indirecto — presente → imperfecto", "Vivía — imperfecto en indirecto."),
    sb(["Preguntó", "cuándo", "empezaba", "la", "clase"], "Preguntó cuándo empezaba la clase", "Estilo indirecto — pregunta temporal", "Preguntó cuándo empezaba — косвенный вопрос."),
    sb(["Aseguró", "que", "habría", "terminado", "pronto"], "Aseguró que habría terminado pronto", "Estilo indirecto — futuro → condicional", "Habría terminado — condicional compuesto."),
    sb(["Me", "avisó", "que", "no", "vendría", "mañana"], "Me avisó que no vendría mañana", "Estilo indirecto — negación", "No vendría — condicional en indirecto."),
    sb(["Indicó", "que", "debía", "esperar", "aquí"], "Indicó que debía esperar aquí", "Estilo indirecto — deber", "Debía esperar — imperfecto de deber."),
    sb(["Confesó", "que", "no", "había", "entendido", "nada"], "Confesó que no había entendido nada", "Estilo indirecto — pluscuamperfecto", "Había entendido — pluscuamperfecto."),
    sb(["Repitió", "que", "quería", "irse", "ya"], "Repitió que quería irse ya", "Estilo indirecto — repetición", "Quería irse — imperfecto en indirecto."),
  ],

  "chapter-15-voz-pasiva": [
    sb(["El", "edificio", "fue", "demolido", "el", "mes", "pasado"], "El edificio fue demolido el mes pasado", "Voz pasiva — pretérito", "Fue demolido — pasiva con ser."),
    sb(["Los", "resultados", "serán", "publicados", "mañana"], "Los resultados serán publicados mañana", "Voz pasiva — futuro", "Serán publicados — futuro pasivo."),
    sb(["Fue", "elegido", "presidente", "del", "club"], "Fue elegido presidente del club", "Voz pasiva — cargo", "Fue elegido — был избран."),
    sb(["La", "puerta", "fue", "abierta", "con", "cuidado"], "La puerta fue abierta con cuidado", "Voz pasiva — modo", "Fue abierta con cuidado."),
    sb(["Se", "venden", "entradas", "en", "la", "taquilla"], "Se venden entradas en la taquilla", "Pasiva refleja", "Se venden entradas — безличная пассивная."),
    sb(["El", "informe", "ha", "sido", "revisado", "por", "expertos"], "El informe ha sido revisado por expertos", "Voz pasiva — perfecto", "Ha sido revisado — perfecto pasivo."),
    sb(["Fueron", "detenidos", "tres", "sospechosos"], "Fueron detenidos tres sospechosos", "Voz pasiva — plural", "Fueron detenidos — plural pasivo."),
  ],

  "chapter-13-condicional": [
    sb(["Con", "más", "tiempo", "lo", "terminaría", "hoy"], "Con más tiempo lo terminaría hoy", "Condicional — hipótesis", "Terminaría — condicional simple."),
    sb(["¿Te", "importaría", "abrir", "la", "ventana?"], "¿Te importaría abrir la ventana?", "Condicional — cortesía", "¿Te importaría? — вежливая просьба."),
    sb(["Preferiría", "quedarme", "en", "casa"], "Preferiría quedarme en casa", "Condicional — preferencia", "Preferiría quedarme — предпочёл бы остаться."),
    sb(["Serían", "las", "ocho", "cuando", "llamó"], "Serían las ocho cuando llamó", "Condicional — probabilidad pasada", "Serían las ocho — вероятно было восемь."),
    sb(["Me", "encantaría", "viajar", "a", "Japón"], "Me encantaría viajar a Japón", "Condicional — deseo", "Me encantaría — мне бы очень хотелось."),
    sb(["Lo", "haría", "de", "otra", "manera", "si", "pudiera"], "Lo haría de otra manera si pudiera", "Condicional + subjuntivo", "Haría… si pudiera — второе условие."),
  ],

  "chapter-21-comparativos": [
    sb(["Juan", "es", "tan", "simpático", "como", "Pedro"], "Juan es tan simpático como Pedro", "Tan… como — равенство", "Tan simpático como — такой же симпатичный как."),
    sb(["Esta", "camisa", "es", "más", "cara", "que", "aquella"], "Esta camisa es más cara que aquella", "Comparativo — más… que", "Más cara que — дороже чем."),
    sb(["Es", "el", "peor", "día", "de", "mi", "vida"], "Es el peor día de mi vida", "Superlativo irregular", "El peor — превосходная степень (peor)."),
    sb(["Corre", "tan", "deprisa", "como", "un", "atleta"], "Corre tan deprisa como un atleta", "Comparativo adverbio", "Tan deprisa como — так же быстро как."),
    sb(["Hay", "más", "gente", "que", "ayer"], "Hay más gente que ayer", "Comparativo — cantidad", "Más gente que ayer — больше людей чем вчера."),
    sb(["Es", "menos", "difícil", "de", "lo", "que", "parece"], "Es menos difícil de lo que parece", "Comparativo oración", "Menos difícil de lo que parece."),
  ],

  "chapter-22-futuro": [
    sb(["Estaré", "en", "casa", "sobre", "las", "siete"], "Estaré en casa sobre las siete", "Futuro simple — hora", "Estaré en casa — буду дома."),
    sb(["¿Qué", "harás", "el", "próximo", "verano?"], "¿Qué harás el próximo verano?", "Futuro — pregunta", "¿Qué harás? — что будешь делать?"),
    sb(["Probablemente", "lloverá", "mañana", "por", "la", "tarde"], "Probablemente lloverá mañana por la tarde", "Futuro — probabilidad", "Lloverá — будет идти дождь."),
    sb(["Terminarán", "el", "proyecto", "en", "mayo"], "Terminarán el proyecto en mayo", "Futuro — ellos", "Terminarán — они закончат."),
    sb(["Te", "enviaré", "un", "mensaje", "más", "tarde"], "Te enviaré un mensaje más tarde", "Futuro — promesa", "Te enviaré — я отправлю тебе."),
    sb(["Serán", "ellos", "los", "ganadores"], "Serán ellos los ganadores", "Futuro de probabilidad", "Serán ellos — наверное они."),
  ],

  "chapter-7-pasado-perfecto": [
    sb(["Esta", "semana", "he", "leído", "dos", "novelas"], "Esta semana he leído dos novelas", "Perfecto — periodo abierto", "Esta semana he leído — на этой неделе прочитал."),
    sb(["¿Has", "oído", "las", "noticias", "de", "hoy?"], "¿Has oído las noticias de hoy?", "Perfecto — pregunta", "¿Has oído? — ты слышал?"),
    sb(["Nunca", "he", "probado", "el", "ceviche"], "Nunca he probado el ceviche", "Perfecto — nunca", "Nunca he probado — никогда не пробовал."),
    sb(["Hemos", "cambiado", "de", "opinión"], "Hemos cambiado de opinión", "Perfecto — nosotros", "Hemos cambiado — мы изменили мнение."),
    sb(["Ha", "empezado", "a", "llover", "hace", "poco"], "Ha empezado a llover hace poco", "Perfecto — reciente", "Ha empezado a llover — недавно начался дождь."),
    sb(["¿Han", "resuelto", "ya", "el", "problema?"], "¿Han resuelto ya el problema?", "Perfecto — ellos", "¿Han resuelto ya? — они уже решили?"),
  ],

  "chapter-32-pronombre-se": [
    sb(["Se", "alquila", "piso", "céntrico"], "Se alquila piso céntrico", "Se — anuncio impersonal", "Se alquila — сдаётся (объявление)."),
    sb(["Se", "nos", "cayó", "el", "vaso"], "Se nos cayó el vaso", "Se — accidental", "Se nos cayó — у нас упал."),
    sb(["Se", "viven", "momentos", "difíciles"], "Se viven momentos difíciles", "Se — impersonal plural", "Se viven momentos — переживаются моменты."),
    sb(["Se", "abrieron", "las", "puertas", "a", "las", "nueve"], "Se abrieron las puertas a las nueve", "Se — pasiva refleja plural", "Se abrieron las puertas — двери открылись."),
    sb(["Se", "me", "antoja", "un", "café"], "Se me antoja un café", "Se — antojo", "Se me antoja — мне хочется."),
  ],

  "chapter-34-pluscuamperfecto": [
    sb(["Ya", "había", "salido", "cuando", "llamaste"], "Ya había salido cuando llamaste", "Pluscuamperfecto — anterioridad", "Había salido cuando llamaste — уже ушёл."),
    sb(["Nunca", "había", "probado", "algo", "tan", "rico"], "Nunca había probado algo tan rico", "Pluscuamperfecto — experiencia", "Nunca había probado — никогда не пробовал."),
    sb(["Habían", "terminado", "antes", "de", "cenar"], "Habían terminado antes de cenar", "Pluscuamperfecto — ellos", "Habían terminado — они закончили."),
    sb(["¿Habías", "visitado", "Roma", "antes?"], "¿Habías visitado Roma antes?", "Pluscuamperfecto — pregunta", "¿Habías visitado? — ты бывал?"),
    sb(["Me", "dijo", "que", "ya", "había", "pagado"], "Me dijo que ya había pagado", "Pluscuamperfecto — indirecto", "Había pagado en estilo indirecto."),
  ],

  "chapter-35-subjuntivo-imperfecto": [
    sb(["Era", "necesario", "que", "llegáramos", "temprano"], "Era necesario que llegáramos temprano", "Imperf. subj. — necesidad pasada", "Era necesario que llegáramos."),
    sb(["Si", "pudiera", "te", "lo", "explicaría"], "Si pudiera te lo explicaría", "Imperf. subj. + condicional", "Si pudiera… explicaría — второе условие."),
    sb(["Me", "gustaría", "que", "vinieras", "con", "nosotros"], "Me gustaría que vinieras con nosotros", "Imperf. subj. — deseo", "Me gustaría que vinieras."),
    sb(["Pedía", "que", "no", "hiciéramos", "ruido"], "Pedía que no hiciéramos ruido", "Imperf. subj. — petición", "Pedía que no hiciéramos ruido."),
    sb(["Ojalá", "tuviéramos", "más", "tiempo", "libre"], "Ojalá tuviéramos más tiempo libre", "Imperf. subj. — ojalá nosotros", "Ojalá tuviéramos — если бы у нас было."),
  ],

  "chapter-36-pronombres-objetos": [
    sb(["Se", "lo", "explicaré", "mañana"], "Se lo explicaré mañana", "Pronombres CD/CI — se lo", "Se lo explicaré — le→se ante lo."),
    sb(["No", "te", "lo", "recomiendo"], "No te lo recomiendo", "Pronombres — te lo", "No te lo recomiendo — не рекомендую тебе это."),
    sb(["Dímelo", "cuando", "sepas", "algo"], "Dímelo cuando sepas algo", "Enclisis — dímelo", "Dímelo — скажи мне это (imperativo)."),
    sb(["Se", "las", "compré", "en", "la", "tienda"], "Se las compré en la tienda", "Pronombres — se las", "Se las compré — купил их ей/им."),
    sb(["¿Me", "la", "puedes", "prestar", "un", "rato?"], "¿Me la puedes prestar un rato?", "Pronombres — me la", "¿Me la puedes prestar? — можешь одолжить мне её?"),
  ],

  "chapter-38-subjuntivo-compuestos": [
    sb(["Es", "raro", "que", "no", "haya", "contestado"], "Es raro que no haya contestado", "Subj. compuesto — extrañeza", "No haya contestado — subjuntivo compuesto."),
    sb(["Me", "alegra", "que", "hayas", "aprobado"], "Me alegra que hayas aprobado", "Subj. compuesto — alegría", "Hayas aprobado — ты сдал (subj. comp.)."),
    sb(["Dudo", "que", "haya", "sido", "cierto"], "Dudo que haya sido cierto", "Subj. compuesto — duda", "Haya sido cierto — subjuntivo compuesto de ser."),
    sb(["Para", "cuando", "llegue", "ya", "habrán", "salido"], "Para cuando llegue ya habrán salido", "Subj. + futuro compuesto", "Habrán salido — futuro compuesto."),
    sb(["Lamento", "que", "no", "hayas", "podido", "venir"], "Lamento que no hayas podido venir", "Subj. compuesto — lamento", "No hayas podido venir — subj. compuesto."),
  ],

  "chapter-39-condicionales-compuestos": [
    sb(["Si", "hubiera", "tenido", "tiempo", "habría", "ido"], "Si hubiera tenido tiempo habría ido", "Tercera condicional", "Hubiera tenido… habría ido."),
    sb(["Habrías", "entendido", "si", "hubieras", "escuchado"], "Habrías entendido si hubieras escuchado", "Cond. compuesto mixto", "Habrías entendido si hubieras escuchado."),
    sb(["No", "habríamos", "fallado", "con", "más", "práctica"], "No habríamos fallado con más práctica", "Cond. compuesto — nosotros", "No habríamos fallado — мы бы не провалились."),
    sb(["Si", "llueve", "mañana", "no", "iremos"], "Si llueve mañana no iremos", "Primera condicional", "Si llueve… no iremos — реальное условие."),
    sb(["Si", "estuvieras", "aquí", "te", "ayudaría"], "Si estuvieras aquí te ayudaría", "Segunda condicional", "Si estuvieras… te ayudaría — нереальное."),
  ],

  "chapter-9-imperfecto": [
    sb(["De", "pequeño", "tenía", "miedo", "a", "la", "oscuridad"], "De pequeño tenía miedo a la oscuridad", "Imperfecto — infancia", "De pequeño tenía miedo — в детстве боялся."),
    sb(["Mientras", "cenábamos", "sonó", "el", "timbre"], "Mientras cenábamos sonó el timbre", "Imperfecto + indefinido", "Mientras cenábamos… sonó — фон + событие."),
    sb(["Siempre", "nos", "reíamos", "de", "sus", "chistes"], "Siempre nos reíamos de sus chistes", "Imperfecto — hábito", "Siempre nos reíamos — всегда смеялись."),
    sb(["Eran", "las", "ocho", "y", "aún", "dormía"], "Eran las ocho y aún dormía", "Imperfecto — hora + acción", "Eran las ocho y dormía — было восемь и он спал."),
    sb(["No", "conocía", "a", "nadie", "en", "la", "fiesta"], "No conocía a nadie en la fiesta", "Imperfecto — estado pasado", "No conocía a nadie — никого не знал."),
  ],

  "chapter-33-relativos": [
    sb(["El", "chico", "al", "que", "conocí", "es", "italiano"], "El chico al que conocí es italiano", "Relativo — a + el que", "Al que conocí — которого я познал."),
    sb(["Busco", "una", "casa", "cuyo", "jardín", "sea", "grande"], "Busco una casa cuyo jardín sea grande", "Relativo — cuyo + subj.", "Cuyo jardín sea grande — чей сад большой."),
    sb(["Fue", "entonces", "cuando", "todo", "cambió"], "Fue entonces cuando todo cambió", "Relativo temporal — cuando", "Fue entonces cuando — именно тогда когда."),
    sb(["Hay", "pocas", "cosas", "que", "me", "molesten"], "Hay pocas cosas que me molesten", "Relativo + subjuntivo", "Cosas que me molesten — subjuntivo."),
  ],

  "chapter-37-adverbios": [
    sb(["Habla", "demasiado", "alto", "en", "clase"], "Habla demasiado alto en clase", "Adverbio — demasiado", "Demasiado alto — слишком громко."),
    sb(["Llegué", "justo", "a", "tiempo"], "Llegué justo a tiempo", "Adverbio — justo", "Justo a tiempo — как раз вовремя."),
    sb(["Casi", "siempre", "desayuno", "en", "casa"], "Casi siempre desayuno en casa", "Adverbio — casi siempre", "Casi siempre — почти всегда."),
    sb(["Lo", "resolvió", "fácilmente", "ayer"], "Lo resolvió fácilmente ayer", "Adverbio -mente", "Fácilmente — легко (-mente)."),
  ],

  "chapter-40-relativos-avanzado": [
    sb(["El", "tema", "del", "cual", "hablamos", "es", "delicado"], "El tema del cual hablamos es delicado", "Relativo formal — del cual", "Del cual hablamos — о котором говорим."),
    sb(["Aquello", "de", "lo", "que", "se", "queja", "es", "injusto"], "Aquello de lo que se queja es injusto", "Relativo — lo que neutro", "De lo que se queja — на что жалуется."),
    sb(["La", "ciudad", "en", "cuyo", "centro", "vivimos", "es", "bonita"], "La ciudad en cuyo centro vivimos es bonita", "Relativo — cuyo", "En cuyo centro vivimos — в чьём центре живём."),
    sb(["En", "lo", "relativo", "al", "presupuesto", "hay", "dudas"], "En lo relativo al presupuesto hay dudas", "Relativo — lo relativo a", "En lo relativo al presupuesto — относительно бюджета."),
  ],

  "chapter-41-conectores-discursivos": [
    sb(["No", "obstante", "conviene", "ser", "prudentes"], "No obstante conviene ser prudentes", "Conector — no obstante", "No obstante — тем не менее."),
    sb(["Por", "una", "parte", "gana", "por", "otra", "pierde"], "Por una parte gana por otra pierde", "Conector — por una parte", "Por una parte… por otra — с одной стороны… с другой."),
    sb(["En", "última", "instancia", "depende", "de", "nosotros"], "En última instancia depende de nosotros", "Conector — en última instancia", "En última instancia — в конечном итоге."),
  ],

  "chapter-23-cronicas": [
    sb(["Anoche", "llovió", "pero", "esta", "mañana", "ha", "hecho", "sol"], "Anoche llovió pero esta mañana ha hecho sol", "Contraste temporal — indefinido vs perfecto", "Anoche llovió (indef.) vs ha hecho sol (perfecto)."),
  ],

  "chapter-8-pasado-indefinido": [
    tr("Он закрыл дверь и ушёл.", "Cerró la puerta y se fue", "Pretérito indefinido — последовательность", "Cerró y se fue — два завершённых действия в прошлом."),
    sb(["Ayer", "comí", "paella", "en", "Valencia"], "Ayer comí paella en Valencia", "Pretérito indefinido — ayer", "Comí — pretérito de comer (yo)."),
    sb(["Ella", "escribió", "una", "carta", "larga"], "Ella escribió una carta larga", "Pretérito indefinido — ella", "Escribió — pretérito de escribir."),
    sb(["¿Viste", "la", "película", "anoche?"], "¿Viste la película anoche?", "Pretérito indefinido — tú", "¿Viste…? — pretérito de ver (tú)."),
    sb(["Nosotros", "viajamos", "a", "Madrid", "el", "año", "pasado"], "Nosotros viajamos a Madrid el año pasado", "Pretérito indefinido — nosotros", "Viajamos — pretérito de viajar."),
    sb(["Él", "no", "llegó", "a", "tiempo"], "Él no llegó a tiempo", "Pretérito indefinido negativo", "No llegó — pretérito de llegar."),
    sb(["¿Qué", "hiciste", "el", "fin", "de", "semana?"], "¿Qué hiciste el fin de semana?", "Pretérito indefinido — hacer", "Hiciste — pretérito irregular de hacer."),
    sb(["Ellos", "compraron", "regalos", "para", "Navidad"], "Ellos compraron regalos para Navidad", "Pretérito indefinido — ellos", "Compraron — pretérito de comprar."),
    sb(["Yo", "dormí", "ocho", "horas", "anoche"], "Yo dormí ocho horas anoche", "Pretérito indefinido — dormir", "Dormí — pretérito de dormir (yo)."),
    sb(["Usted", "habló", "con", "el", "director"], "Usted habló con el director", "Pretérito indefinido — usted", "Habló — pretérito de hablar (usted)."),
    sb(["La", "tempestad", "destruyó", "varios", "árboles"], "La tempestad destruyó varios árboles", "Pretérito indefinido — 3ª persona", "Destruyó — pretérito de destruir."),
  ],
};

import { LEGAL_OPERATOR } from "@/config/legal";
import type { LegalDocument } from "./types";

const O = LEGAL_OPERATOR;

export function getTermsDocument(
  locale: "ru" | "en" | "es" | "de",
): LegalDocument {
  if (locale === "en") return termsEn;
  if (locale === "es") return termsEs;
  if (locale === "de") return termsDe;
  return termsRu;
}

const termsRu: LegalDocument = {
  locale: "ru",
  title: "Пользовательское соглашение",
  subtitle: `Сервис «${O.serviceName}»`,
  updated: O.policyVersion,
  sections: [
    {
      id: "parties",
      title: "1. Стороны и предмет",
      paragraphs: [
        `Настоящее Соглашение регулирует использование веб-сервиса «${O.serviceName}» (${O.website}), предоставляемого ${O.operatorNameRu} (далее — «Исполнитель»).`,
        "Сервис предоставляет инструменты для изучения иностранных языков: уроки, упражнения, AI-репетитор, словарь и отслеживание прогресса.",
        "Регистрируясь, вы подтверждаете, что прочитали Соглашение и Политику конфиденциальности и принимаете их условия.",
      ],
    },
    {
      id: "account",
      title: "2. Регистрация и аккаунт",
      paragraphs: [
        "Для использования сервиса необходима регистрация с действующим email. Вы обязуетесь указывать достоверные данные и хранить пароль в безопасности.",
        "Один пользователь — один аккаунт. Передача аккаунта третьим лицам запрещена.",
        "Исполнитель вправе приостановить или удалить аккаунт при нарушении Соглашения.",
      ],
    },
    {
      id: "service",
      title: "3. Услуги и ограничения AI",
      paragraphs: [
        "AI-репетитор генерирует ответы автоматически. Ответы носят образовательный характер и могут содержать неточности. Не используйте их как единственный источник для официальных экзаменов или юридических решений.",
        "Исполнитель стремится поддерживать доступность сервиса, но не гарантирует бесперебойную работу 24/7.",
      ],
    },
    {
      id: "conduct",
      title: "4. Правила поведения",
      paragraphs: ["Пользователю запрещается:"],
      list: [
        "использовать сервис вне целей обучения языкам;",
        "пытаться получить несанкционированный доступ к системам;",
        "распространять вредоносный код, спам, оскорбительный контент;",
        "обходить технические ограничения и злоупотреблять AI-запросами.",
      ],
    },
    {
      id: "ip",
      title: "5. Интеллектуальная собственность",
      paragraphs: [
        "Контент платформы (дизайн, структура курсов, тексты уроков, бренд) принадлежит Исполнителю или правообладателям. Копирование и коммерческое использование без письменного согласия запрещено.",
        "Пользователь сохраняет права на собственные тексты (сообщения репетитору, заметки), предоставляя Исполнителю лицензию на обработку исключительно для работы сервиса.",
      ],
    },
    {
      id: "payment",
      title: "6. Стоимость",
      paragraphs: [
        "На момент публикации базовый доступ может предоставляться бесплатно. Платные функции, если появятся, будут описаны отдельно до оплаты.",
      ],
    },
    {
      id: "liability",
      title: "7. Ограничение ответственности",
      paragraphs: [
        "Сервис предоставляется «как есть». Исполнитель не несёт ответственности за косвенные убытки, упущенную выгоду или результаты экзаменов.",
        "Совокупная ответственность Исполнителя ограничена суммой, фактически уплаченной пользователем за последние 12 месяцев (или 0 при бесплатном использовании).",
      ],
    },
    {
      id: "termination",
      title: "8. Прекращение использования",
      paragraphs: [
        "Вы можете удалить аккаунт в любой момент в Настройках. Исполнитель может прекратить доступ при существенном нарушении Соглашения.",
        "После удаления данные обрабатываются согласно Политике конфиденциальности.",
      ],
    },
    {
      id: "law",
      title: "9. Применимое право",
      paragraphs: [
        "Для пользователей из РФ применяется право Российской Федерации. Споры разрешаются путём переговоров, при недостижении согласия — в суде по месту нахождения Исполнителя, если иное не предусмотрено императивными нормами.",
      ],
    },
    {
      id: "contact",
      title: "10. Контакты",
      paragraphs: [
        `${O.operatorNameRu}`,
        `Email: ${O.contactEmail}`,
        `Сайт: ${O.website}`,
      ],
    },
  ],
};

const termsEn: LegalDocument = {
  locale: "en",
  title: "Terms of Service",
  subtitle: `${O.serviceName}`,
  updated: O.policyVersion,
  sections: [
    {
      id: "parties",
      title: "1. Agreement",
      paragraphs: [
        `These Terms govern your use of ${O.serviceName} (${O.website}), operated by ${O.operatorNameEn} ("we", "us").`,
        "The service provides language-learning tools: lessons, exercises, AI tutor, vocabulary, and progress tracking.",
        "By creating an account you confirm that you have read and accept these Terms and our Privacy Policy.",
      ],
    },
    {
      id: "account",
      title: "2. Account",
      paragraphs: [
        "You must register with a valid email and keep your credentials secure.",
        "One person, one account. Account sharing is not permitted.",
        "We may suspend or terminate accounts that violate these Terms.",
      ],
    },
    {
      id: "service",
      title: "3. Service & AI disclaimer",
      paragraphs: [
        "AI tutor responses are generated automatically for educational purposes and may contain errors. Do not rely on them as sole authority for exams or professional decisions.",
        "We aim for high availability but do not guarantee uninterrupted access.",
      ],
    },
    {
      id: "conduct",
      title: "4. Acceptable use",
      paragraphs: ["You agree not to:"],
      list: [
        "use the service for non-educational or unlawful purposes;",
        "attempt unauthorised access;",
        "upload malware, spam, or abusive content;",
        "abuse API limits or circumvent technical controls.",
      ],
    },
    {
      id: "ip",
      title: "5. Intellectual property",
      paragraphs: [
        "Platform content belongs to us or our licensors. You may not copy or commercially exploit it without permission.",
        "You retain rights to your own messages; you grant us a licence to process them solely to operate the service.",
      ],
    },
    {
      id: "payment",
      title: "6. Fees",
      paragraphs: [
        "Core access may be free at launch. Paid features, if introduced, will be described before purchase.",
      ],
    },
    {
      id: "liability",
      title: "7. Liability",
      paragraphs: [
        "The service is provided \"as is\". We are not liable for indirect loss or exam outcomes.",
        "Our total liability is limited to fees paid in the last 12 months (or zero if free).",
      ],
    },
    {
      id: "termination",
      title: "8. Termination",
      paragraphs: [
        "You may delete your account in Settings at any time. We may terminate access for material breaches.",
        "Data handling after deletion is described in the Privacy Policy.",
      ],
    },
    {
      id: "law",
      title: "9. Governing law",
      paragraphs: [
        "For UK users, these Terms are governed by the laws of England and Wales unless mandatory local consumer rights apply. EU/Spanish users retain mandatory consumer protections in their country of residence.",
      ],
    },
    {
      id: "contact",
      title: "10. Contact",
      paragraphs: [
        `${O.operatorNameEn}`,
        `Email: ${O.contactEmail}`,
        `Website: ${O.website}`,
      ],
    },
  ],
};

const termsEs: LegalDocument = {
  locale: "es",
  title: "Términos del servicio",
  subtitle: `${O.serviceName}`,
  updated: O.policyVersion,
  sections: [
    {
      id: "parties",
      title: "1. Acuerdo",
      paragraphs: [
        `Estos Términos regulan el uso de ${O.serviceName} (${O.website}), operado por ${O.operatorNameEn} («nosotros»).`,
        "El servicio ofrece herramientas para aprender idiomas: lecciones, ejercicios, tutor de IA, vocabulario y seguimiento del progreso.",
        "Al crear una cuenta confirmas que has leído y aceptas estos Términos y la Política de privacidad.",
      ],
    },
    {
      id: "account",
      title: "2. Cuenta",
      paragraphs: [
        "Debes registrarte con un email válido y custodiar tus credenciales.",
        "Una persona, una cuenta. No se permite compartir la cuenta.",
        "Podemos suspender o cancelar cuentas que incumplan estos Términos.",
      ],
    },
    {
      id: "service",
      title: "3. Servicio y aviso sobre la IA",
      paragraphs: [
        "Las respuestas del tutor de IA se generan automáticamente con fines educativos y pueden contener errores. No las uses como única fuente para exámenes o decisiones profesionales.",
        "Buscamos una alta disponibilidad, pero no garantizamos un acceso ininterrumpido.",
      ],
    },
    {
      id: "conduct",
      title: "4. Uso aceptable",
      paragraphs: ["Te comprometes a no:"],
      list: [
        "usar el servicio con fines no educativos o ilícitos;",
        "intentar accesos no autorizados;",
        "subir malware, spam o contenido abusivo;",
        "abusar de límites técnicos o eludir controles.",
      ],
    },
    {
      id: "ip",
      title: "5. Propiedad intelectual",
      paragraphs: [
        "El contenido de la plataforma nos pertenece a nosotros o a nuestros licenciantes. No puedes copiarlo ni explotarlo comercialmente sin permiso.",
        "Conservas los derechos sobre tus mensajes; nos concedes una licencia para procesarlos solo para operar el servicio.",
      ],
    },
    {
      id: "payment",
      title: "6. Precio",
      paragraphs: [
        "El acceso básico puede ser gratuito al lanzamiento. Las funciones de pago, si se introducen, se describirán antes de la compra.",
      ],
    },
    {
      id: "liability",
      title: "7. Responsabilidad",
      paragraphs: [
        "El servicio se ofrece «tal cual». No respondemos por daños indirectos ni por resultados de exámenes.",
        "Nuestra responsabilidad total se limita a las cantidades pagadas en los últimos 12 meses (o cero si el uso es gratuito).",
      ],
    },
    {
      id: "termination",
      title: "8. Terminación",
      paragraphs: [
        "Puedes eliminar tu cuenta en Ajustes en cualquier momento. Podemos cerrar el acceso ante incumplimientos graves.",
        "El tratamiento de datos tras el borrado se describe en la Política de privacidad.",
      ],
    },
    {
      id: "law",
      title: "9. Ley aplicable",
      paragraphs: [
        "Los usuarios de la UE y de España conservan las protecciones imperativas de consumo de su país de residencia. Para usuarios del Reino Unido, salvo derecho imperativo en contrario, se aplica la legislación de Inglaterra y Gales.",
      ],
    },
    {
      id: "contact",
      title: "10. Contacto",
      paragraphs: [
        `${O.operatorNameEn}`,
        `Email: ${O.contactEmail}`,
        `Sitio web: ${O.website}`,
      ],
    },
  ],
};

const termsDe: LegalDocument = {
  locale: "de",
  title: "Nutzungsbedingungen",
  subtitle: `${O.serviceName}`,
  updated: O.policyVersion,
  sections: [
    {
      id: "parties",
      title: "1. Vereinbarung",
      paragraphs: [
        `Diese Bedingungen regeln die Nutzung von ${O.serviceName} (${O.website}), betrieben von ${O.operatorNameEn} („wir“).`,
        "Der Dienst bietet Sprachlern-Tools: Lektionen, Übungen, KI-Tutor, Wortschatz und Fortschrittsverfolgung.",
        "Mit der Kontoerstellung bestätigst du, dass du diese Bedingungen und die Datenschutzerklärung gelesen und akzeptiert hast.",
      ],
    },
    {
      id: "account",
      title: "2. Konto",
      paragraphs: [
        "Du musst dich mit einer gültigen E-Mail registrieren und Zugangsdaten sicher aufbewahren.",
        "Eine Person, ein Konto. Konto-Sharing ist nicht erlaubt.",
        "Wir können Konten bei Verstößen sperren oder kündigen.",
      ],
    },
    {
      id: "service",
      title: "3. Dienst & KI-Hinweis",
      paragraphs: [
        "Antworten des KI-Tutors werden automatisch zu Bildungszwecken erzeugt und können Fehler enthalten. Verlasse dich nicht allein darauf für Prüfungen oder professionelle Entscheidungen.",
        "Wir streben hohe Verfügbarkeit an, garantieren aber keinen unterbrechungsfreien Zugang.",
      ],
    },
    {
      id: "conduct",
      title: "4. Zulässige Nutzung",
      paragraphs: ["Du verpflichtest dich, Folgendes zu unterlassen:"],
      list: [
        "den Dienst für nicht-pädagogische oder rechtswidrige Zwecke zu nutzen;",
        "unbefugten Zugang zu versuchen;",
        "Malware, Spam oder beleidigende Inhalte hochzuladen;",
        "technische Limits zu missbrauchen oder Kontrollen zu umgehen.",
      ],
    },
    {
      id: "ip",
      title: "5. Geistiges Eigentum",
      paragraphs: [
        "Plattforminhalte gehören uns oder unseren Lizenzgebern. Kopieren oder kommerzielle Nutzung ohne Erlaubnis ist untersagt.",
        "Rechte an eigenen Nachrichten behältst du; du räumst uns eine Lizenz ein, sie ausschließlich zum Betrieb des Dienstes zu verarbeiten.",
      ],
    },
    {
      id: "payment",
      title: "6. Entgelte",
      paragraphs: [
        "Der Kernzugang kann beim Start kostenlos sein. Kostenpflichtige Funktionen werden vor dem Kauf beschrieben, falls eingeführt.",
      ],
    },
    {
      id: "liability",
      title: "7. Haftung",
      paragraphs: [
        "Der Dienst wird „wie besehen“ bereitgestellt. Wir haften nicht für indirekte Schäden oder Prüfungsergebnisse.",
        "Unsere Gesamthaftung ist auf in den letzten 12 Monaten gezahlte Entgelte begrenzt (oder null bei kostenloser Nutzung).",
      ],
    },
    {
      id: "termination",
      title: "8. Beendigung",
      paragraphs: [
        "Du kannst dein Konto jederzeit in den Einstellungen löschen. Bei wesentlichen Verstößen können wir den Zugang beenden.",
        "Die Datenverarbeitung nach der Löschung beschreibt die Datenschutzerklärung.",
      ],
    },
    {
      id: "law",
      title: "9. Anwendbares Recht",
      paragraphs: [
        "EU-/spanische Nutzer behalten zwingende Verbraucherschutzrechte ihres Wohnsitzlandes. Für Nutzer im Vereinigten Königreich gelten – soweit nicht zwingend anders – die Gesetze von England und Wales.",
      ],
    },
    {
      id: "contact",
      title: "10. Kontakt",
      paragraphs: [
        `${O.operatorNameEn}`,
        `E-Mail: ${O.contactEmail}`,
        `Website: ${O.website}`,
      ],
    },
  ],
};

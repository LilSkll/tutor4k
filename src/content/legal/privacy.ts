import { LEGAL_OPERATOR } from "@/config/legal";
import type { LegalDocument } from "./types";

const O = LEGAL_OPERATOR;

export function getPrivacyDocument(
  locale: "ru" | "en" | "es" | "de",
): LegalDocument {
  if (locale === "en") return privacyEn;
  if (locale === "es") return privacyEs;
  if (locale === "de") return privacyDe;
  return privacyRu;
}

const privacyRu: LegalDocument = {
  locale: "ru",
  title: "Политика конфиденциальности",
  subtitle: `Сервис «${O.serviceName}»`,
  updated: O.policyVersion,
  sections: [
    {
      id: "operator",
      title: "1. Оператор персональных данных",
      paragraphs: [
        `Оператором персональных данных является ${O.operatorNameRu} (далее — «Оператор»), контактный email: ${O.contactEmail}.`,
        `Сайт сервиса: ${O.website}.`,
        `Настоящая Политика разработана в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» и применяется к пользователям из Российской Федерации и других стран, если иное не предусмотрено применимым правом.`,
      ],
    },
    {
      id: "data",
      title: "2. Какие данные мы обрабатываем",
      paragraphs: [
        "Мы обрабатываем только данные, необходимые для работы образовательного сервиса:",
      ],
      list: [
        "Регистрационные данные: email, имя, пароль (хранится в зашифрованном виде у провайдера аутентификации).",
        "Данные профиля: уровень языка, цель обучения, язык интерфейса, активный курс, дневная цель, серия занятий.",
        "Учебный прогресс: пройденные главы, баллы, выполненные упражнения, словарь пользователя.",
        "Диалоги с AI-репетитором: тексты сообщений и история бесед.",
        "Модель обучения (Learning Profile): агрегированные оценки по грамматике и лексике на основе ваших ответов.",
        "Технические данные: cookies сессии, IP-адрес и данные браузера — для безопасности и работы сайта. Агрегированная веб-аналитика Vercel (без cookies) — для понимания посещаемости и производительности страниц.",
      ],
    },
    {
      id: "purposes",
      title: "3. Цели обработки",
      paragraphs: ["Персональные данные обрабатываются для:"],
      list: [
        "регистрации и аутентификации пользователя;",
        "предоставления персонализированного обучения и AI-репетитора;",
        "сохранения прогресса и адаптации уроков;",
        "технической поддержки и улучшения сервиса;",
        "исполнения требований законодательства.",
      ],
    },
    {
      id: "legal-basis",
      title: "4. Правовые основания",
      paragraphs: [
        "Для пользователей из РФ: согласие субъекта персональных данных (ст. 6 152-ФЗ), исполнение пользовательского соглашения, законные интересы Оператора при обеспечении безопасности сервиса.",
        "Для пользователей из ЕС/Великобритании: исполнение договора (п. b ст. 6 GDPR), законный интерес (п. f), согласие — где применимо (например, опциональные рассылки).",
      ],
    },
    {
      id: "processors",
      title: "5. Передача третьим лицам и обработчики",
      paragraphs: [
        "Мы не продаём персональные данные. Данные могут обрабатываться доверенными поставщиками инфраструктуры:",
        "С каждым обработчиком заключаются или применяются стандартные договорные условия защиты данных (DPA / SCC).",
      ],
      list: [
        "Supabase (хостинг БД и аутентификация) — ЕС/США, в зависимости от региона проекта.",
        "Vercel (хостинг приложения).",
        "Поставщики AI API (Groq, Google Gemini) — для генерации ответов репетитора; передаются только тексты запросов, необходимые для ответа, без паролей.",
      ],
    },
    {
      id: "retention",
      title: "6. Срок хранения",
      paragraphs: [
        "Данные хранятся пока действует ваш аккаунт. После удаления аккаунта данные удаляются из основных таблиц в течение 30 дней, за исключением резервных копий (до 90 дней) и записей, которые мы обязаны хранить по закону.",
      ],
    },
    {
      id: "rights",
      title: "7. Ваши права",
      paragraphs: [
        "Вы вправе:",
        `Запросы направляйте на ${O.contactEmail}. Мы ответим в срок до 30 дней.`,
      ],
      list: [
        "получить информацию об обработке и копию данных (экспорт в Настройках);",
        "исправить неточные данные в профиле;",
        "отозвать согласие (не влияет на законность обработки до отзыва);",
        "удалить аккаунт и связанные данные (Настройки → Удаление аккаунта);",
        "подать жалобу в Роскомнадзор (для РФ) или надзорный орган ЕС/ICO (для UK).",
      ],
    },
    {
      id: "cookies",
      title: "8. Файлы cookie",
      paragraphs: [
        "Мы используем строго необходимые cookies для входа в аккаунт (сессия Supabase). Рекламные cookies не применяются.",
        "Для статистики посещений и производительности страниц мы используем Vercel Web Analytics и Speed Insights. Эти сервисы не ставят cookies и собирают только агрегированные, обезличенные данные (просмотры страниц, устройство, страна, Core Web Vitals). Чувствительные параметры URL (токены, email) перед отправкой удаляются. Рекламные и сторонние трекеры не используются.",
        "Вы можете управлять cookies в настройках браузера; отключение сессионных cookies сделает вход невозможным.",
      ],
    },
    {
      id: "children",
      title: "9. Дети",
      paragraphs: [
        "Сервис предназначен для пользователей от 16 лет. Если вам меньше 16, используйте сервис только с согласия родителя или законного представителя.",
      ],
    },
    {
      id: "changes",
      title: "10. Изменения политики",
      paragraphs: [
        `Мы можем обновлять Политику. Актуальная версия всегда на ${O.website}/privacy. При существенных изменениях уведомим по email или в интерфейсе.`,
      ],
    },
    {
      id: "contact",
      title: "11. Контакты",
      paragraphs: [
        `Оператор: ${O.operatorNameRu}`,
        `Email: ${O.contactEmail}`,
        `Сайт: ${O.website}`,
      ],
    },
  ],
};

const privacyEn: LegalDocument = {
  locale: "en",
  title: "Privacy Policy",
  subtitle: `${O.serviceName} service`,
  updated: O.policyVersion,
  sections: [
    {
      id: "operator",
      title: "1. Data controller",
      paragraphs: [
        `The data controller is ${O.operatorNameEn} ("we", "us"), contact: ${O.contactEmail}.`,
        `Website: ${O.website}.`,
        `This Policy explains how we collect and use personal data when you use our language-learning platform. It is intended for users in the UK, Spain, the EU, and other jurisdictions alongside our Russian-language terms where applicable.`,
      ],
    },
    {
      id: "data",
      title: "2. Data we collect",
      paragraphs: ["We process data necessary to provide the educational service:"],
      list: [
        "Account data: email, name, password (hashed by our auth provider).",
        "Profile: language level, learning goal, interface language, active course, daily goal, streak.",
        "Learning progress: chapters, scores, exercises, personal vocabulary.",
        "AI tutor conversations: message content and chat history.",
        "Learning Profile: aggregated skill confidence based on your answers (not raw chat logs for unrelated purposes).",
        "Technical data: session cookies, IP address, browser data — for security and operation. Aggregated Vercel Web Analytics (cookieless) — for page traffic and performance.",
      ],
    },
    {
      id: "purposes",
      title: "3. Purposes",
      paragraphs: ["We use your data to:"],
      list: [
        "create and secure your account;",
        "deliver personalised lessons and AI tutoring;",
        "save progress and adapt content;",
        "provide support and improve the service;",
        "comply with legal obligations.",
      ],
    },
    {
      id: "legal-basis",
      title: "4. Legal basis (UK / EU)",
      paragraphs: [
        "Contract performance (Art. 6(1)(b) GDPR / UK GDPR) — providing the service you signed up for.",
        "Legitimate interests (Art. 6(1)(f)) — security, fraud prevention, service improvement (balanced against your rights).",
        "Consent (Art. 6(1)(a)) — optional marketing communications where applicable.",
      ],
    },
    {
      id: "processors",
      title: "5. Processors and international transfers",
      paragraphs: [
        "We do not sell personal data. Infrastructure and AI providers may process data on our behalf:",
        "Where data leaves the UK/EEA, we rely on appropriate safeguards (Standard Contractual Clauses or equivalent).",
      ],
      list: [
        "Supabase (database & authentication).",
        "Vercel (application hosting).",
        "AI API providers (Groq, Google Gemini) — only prompt/response text needed for tutoring.",
      ],
    },
    {
      id: "retention",
      title: "6. Retention",
      paragraphs: [
        "Data is kept while your account is active. After deletion, primary data is removed within 30 days; backups may persist up to 90 days.",
      ],
    },
    {
      id: "rights",
      title: "7. Your rights",
      paragraphs: [
        "Depending on your location, you may have the right to:",
        `Contact us at ${O.contactEmail}. We respond within 30 days.`,
      ],
      list: [
        "access and receive a copy of your data (Settings → Export data);",
        "rectify inaccurate data;",
        "erase your account (Settings → Delete account);",
        "restrict or object to certain processing;",
        "data portability;",
        "withdraw consent where processing is consent-based;",
        "lodge a complaint with the ICO (UK) or your local supervisory authority.",
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies",
      paragraphs: [
        "We use essential session cookies for login (Supabase session). We do not use advertising cookies.",
        "For visit statistics and page performance we use Vercel Web Analytics and Speed Insights. These services set no cookies and collect only aggregated, anonymised data (page views, device, country, Core Web Vitals). Sensitive URL parameters (tokens, email) are stripped before sending. We do not use advertising or third-party trackers.",
      ],
    },
    {
      id: "children",
      title: "9. Children",
      paragraphs: [
        "The service is for users aged 16+. Younger users need parental consent.",
      ],
    },
    {
      id: "changes",
      title: "10. Changes",
      paragraphs: [
        `We may update this Policy. The current version is always at ${O.website}/privacy.`,
      ],
    },
    {
      id: "contact",
      title: "11. Contact",
      paragraphs: [
        `Controller: ${O.operatorNameEn}`,
        `Email: ${O.contactEmail}`,
        `Website: ${O.website}`,
      ],
    },
  ],
};

const privacyEs: LegalDocument = {
  locale: "es",
  title: "Política de privacidad",
  subtitle: `Servicio «${O.serviceName}»`,
  updated: O.policyVersion,
  sections: [
    {
      id: "operator",
      title: "1. Responsable del tratamiento",
      paragraphs: [
        `El responsable del tratamiento es ${O.operatorNameEn} («nosotros»), contacto: ${O.contactEmail}.`,
        `Sitio web: ${O.website}.`,
        "Esta Política explica cómo recopilamos y usamos datos personales al utilizar nuestra plataforma de aprendizaje de idiomas. Está pensada para usuarios de España, la UE, el Reino Unido y otras jurisdicciones, junto con la versión en ruso cuando proceda.",
      ],
    },
    {
      id: "data",
      title: "2. Datos que tratamos",
      paragraphs: [
        "Tratamos los datos necesarios para prestar el servicio educativo:",
      ],
      list: [
        "Datos de cuenta: email, nombre, contraseña (cifrada por el proveedor de autenticación).",
        "Perfil: nivel, objetivo de aprendizaje, idioma de interfaz, curso activo, meta diaria, racha.",
        "Progreso: capítulos, puntuaciones, ejercicios, vocabulario personal.",
        "Conversaciones con el tutor de IA: contenido de mensajes e historial.",
        "Learning Profile: confianza agregada por habilidades según tus respuestas.",
        "Datos técnicos: cookies de sesión, IP, datos del navegador — seguridad y funcionamiento. Analítica agregada de Vercel (sin cookies) — tráfico y rendimiento.",
      ],
    },
    {
      id: "purposes",
      title: "3. Finalidades",
      paragraphs: ["Usamos tus datos para:"],
      list: [
        "crear y proteger tu cuenta;",
        "ofrecer lecciones personalizadas y tutoría con IA;",
        "guardar el progreso y adaptar el contenido;",
        "dar soporte y mejorar el servicio;",
        "cumplir obligaciones legales.",
      ],
    },
    {
      id: "legal-basis",
      title: "4. Base jurídica (UE / Reino Unido)",
      paragraphs: [
        "Ejecución del contrato (art. 6.1.b RGPD / UK GDPR) — prestar el servicio para el que te registraste.",
        "Interés legítimo (art. 6.1.f) — seguridad, prevención de fraude y mejora del servicio (ponderado frente a tus derechos).",
        "Consentimiento (art. 6.1.a) — comunicaciones de marketing opcionales, cuando aplique.",
      ],
    },
    {
      id: "processors",
      title: "5. Encargados y transferencias internacionales",
      paragraphs: [
        "No vendemos datos personales. Proveedores de infraestructura e IA pueden tratar datos en nuestro nombre:",
        "Si los datos salen del EEE/Reino Unido, aplicamos garantías adecuadas (Cláusulas contractuales tipo u equivalentes).",
      ],
      list: [
        "Supabase (base de datos y autenticación).",
        "Vercel (alojamiento de la aplicación).",
        "Proveedores de API de IA (Groq, Google Gemini) — solo el texto necesario para la tutoría.",
      ],
    },
    {
      id: "retention",
      title: "6. Conservación",
      paragraphs: [
        "Los datos se conservan mientras la cuenta esté activa. Tras el borrado, los datos principales se eliminan en 30 días; las copias de seguridad pueden permanecer hasta 90 días.",
      ],
    },
    {
      id: "rights",
      title: "7. Tus derechos",
      paragraphs: [
        "Según tu ubicación, puedes ejercer el derecho a:",
        `Escríbenos a ${O.contactEmail}. Respondemos en un plazo de 30 días.`,
      ],
      list: [
        "acceder y obtener una copia de tus datos (Ajustes → Exportar datos);",
        "rectificar datos inexactos;",
        "suprimir tu cuenta (Ajustes → Eliminar cuenta);",
        "limitar u oponerte a determinados tratamientos;",
        "portabilidad de datos;",
        "retirar el consentimiento cuando el tratamiento se base en él;",
        "presentar una reclamación ante la AEPD (España), la ICO (Reino Unido) u otra autoridad de control.",
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies",
      paragraphs: [
        "Usamos cookies de sesión esenciales para el inicio de sesión (sesión de Supabase). No usamos cookies publicitarias.",
        "Para estadísticas de visitas y rendimiento usamos Vercel Web Analytics y Speed Insights. No establecen cookies y recopilan solo datos agregados y anonimizados. Los parámetros sensibles de la URL se eliminan antes del envío. No usamos rastreadores publicitarios de terceros.",
      ],
    },
    {
      id: "children",
      title: "9. Menores",
      paragraphs: [
        "El servicio está destinado a usuarios de 16 años o más. Los menores necesitan el consentimiento de un padre o tutor.",
      ],
    },
    {
      id: "changes",
      title: "10. Cambios",
      paragraphs: [
        `Podemos actualizar esta Política. La versión vigente está siempre en ${O.website}/privacy.`,
      ],
    },
    {
      id: "contact",
      title: "11. Contacto",
      paragraphs: [
        `Responsable: ${O.operatorNameEn}`,
        `Email: ${O.contactEmail}`,
        `Sitio web: ${O.website}`,
      ],
    },
  ],
};

const privacyDe: LegalDocument = {
  locale: "de",
  title: "Datenschutzerklärung",
  subtitle: `Dienst «${O.serviceName}»`,
  updated: O.policyVersion,
  sections: [
    {
      id: "operator",
      title: "1. Verantwortlicher",
      paragraphs: [
        `Verantwortlicher für die Verarbeitung ist ${O.operatorNameEn} („wir“), Kontakt: ${O.contactEmail}.`,
        `Website: ${O.website}.`,
        "Diese Erklärung beschreibt, wie wir personenbezogene Daten erheben und nutzen, wenn du unsere Sprachlernplattform verwendest. Sie richtet sich an Nutzer in der EU, im Vereinigten Königreich, in Spanien und weiteren Ländern – parallel zur russischen Fassung, soweit anwendbar.",
      ],
    },
    {
      id: "data",
      title: "2. Welche Daten wir verarbeiten",
      paragraphs: [
        "Wir verarbeiten nur Daten, die für den Bildungsdienst erforderlich sind:",
      ],
      list: [
        "Kontodaten: E-Mail, Name, Passwort (gehasht beim Auth-Anbieter).",
        "Profil: Sprachniveau, Lernziel, Interface-Sprache, aktiver Kurs, Tagesziel, Serie.",
        "Lernfortschritt: Kapitel, Punkte, Übungen, persönlicher Wortschatz.",
        "KI-Tutor-Gespräche: Nachrichteninhalt und Chatverlauf.",
        "Learning Profile: aggregierte Kompetenzwerte anhand deiner Antworten.",
        "Technische Daten: Sitzungs-Cookies, IP, Browserdaten — Sicherheit und Betrieb. Aggregierte Vercel-Web-Analytics (ohne Cookies) — Traffic und Performance.",
      ],
    },
    {
      id: "purposes",
      title: "3. Zwecke",
      paragraphs: ["Wir nutzen deine Daten, um:"],
      list: [
        "dein Konto anzulegen und zu schützen;",
        "personalisierten Unterricht und KI-Tutoring zu liefern;",
        "Fortschritt zu speichern und Inhalte anzupassen;",
        "Support zu leisten und den Dienst zu verbessern;",
        "gesetzliche Pflichten zu erfüllen.",
      ],
    },
    {
      id: "legal-basis",
      title: "4. Rechtsgrundlage (EU / UK)",
      paragraphs: [
        "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO / UK GDPR) — Bereitstellung des gebuchten Dienstes.",
        "Berechtigte Interessen (Art. 6 Abs. 1 lit. f) — Sicherheit, Betrugsprävention, Produktverbesserung (abgewogen gegen deine Rechte).",
        "Einwilligung (Art. 6 Abs. 1 lit. a) — optionale Marketing-Kommunikation, soweit anwendbar.",
      ],
    },
    {
      id: "processors",
      title: "5. Auftragsverarbeiter und internationale Übermittlungen",
      paragraphs: [
        "Wir verkaufen keine personenbezogenen Daten. Infrastruktur- und KI-Anbieter können Daten in unserem Auftrag verarbeiten:",
        "Verlassen Daten den EWR/UK, stützen wir uns auf geeignete Garantien (Standardvertragsklauseln oder gleichwertig).",
      ],
      list: [
        "Supabase (Datenbank & Authentifizierung).",
        "Vercel (App-Hosting).",
        "KI-API-Anbieter (Groq, Google Gemini) — nur Prompt-/Antworttext für den Tutor.",
      ],
    },
    {
      id: "retention",
      title: "6. Speicherdauer",
      paragraphs: [
        "Daten werden gespeichert, solange dein Konto aktiv ist. Nach Löschung entfernen wir Primärdaten innerhalb von 30 Tagen; Backups können bis zu 90 Tage bestehen.",
      ],
    },
    {
      id: "rights",
      title: "7. Deine Rechte",
      paragraphs: [
        "Je nach Wohnsitz kannst du insbesondere verlangen:",
        `Kontaktiere uns unter ${O.contactEmail}. Wir antworten innerhalb von 30 Tagen.`,
      ],
      list: [
        "Auskunft und Kopie deiner Daten (Einstellungen → Daten exportieren);",
        "Berichtigung unrichtiger Daten;",
        "Löschung des Kontos (Einstellungen → Konto löschen);",
        "Einschränkung oder Widerspruch gegen bestimmte Verarbeitungen;",
        "Datenübertragbarkeit;",
        "Widerruf einer Einwilligung, soweit die Verarbeitung darauf beruht;",
        "Beschwerde bei einer Aufsichtsbehörde (z. B. ICO im UK oder lokale Behörde in der EU).",
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies",
      paragraphs: [
        "Wir verwenden essenzielle Sitzungs-Cookies für den Login (Supabase-Sitzung). Werbe-Cookies setzen wir nicht ein.",
        "Für Besucherzahlen und Seitenleistung nutzen wir Vercel Web Analytics und Speed Insights. Diese setzen keine Cookies und erfassen nur aggregierte, anonymisierte Daten. Sensible URL-Parameter werden vor dem Versand entfernt. Werbe- oder Drittanbieter-Tracker verwenden wir nicht.",
      ],
    },
    {
      id: "children",
      title: "9. Kinder",
      paragraphs: [
        "Der Dienst richtet sich an Nutzer ab 16 Jahren. Jüngere Nutzer benötigen die Einwilligung eines Erziehungsberechtigten.",
      ],
    },
    {
      id: "changes",
      title: "10. Änderungen",
      paragraphs: [
        `Wir können diese Erklärung aktualisieren. Die aktuelle Fassung steht stets unter ${O.website}/privacy.`,
      ],
    },
    {
      id: "contact",
      title: "11. Kontakt",
      paragraphs: [
        `Verantwortlicher: ${O.operatorNameEn}`,
        `E-Mail: ${O.contactEmail}`,
        `Website: ${O.website}`,
      ],
    },
  ],
};

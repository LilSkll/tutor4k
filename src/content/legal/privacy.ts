import { LEGAL_OPERATOR } from "@/config/legal";
import type { LegalDocument } from "./types";

const O = LEGAL_OPERATOR;

export function getPrivacyDocument(locale: "ru" | "en"): LegalDocument {
  if (locale === "en") return privacyEn;
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
      paragraphs: ["Мы обрабатываем только данные, необходимые для работы образовательного сервиса:"],
      list: [
        "Регистрационные данные: email, имя, пароль (хранится в зашифрованном виде у провайдера аутентификации).",
        "Данные профиля: уровень языка, цель обучения, язык интерфейса, активный курс, дневная цель, серия занятий.",
        "Учебный прогресс: пройденные главы, баллы, выполненные упражнения, словарь пользователя.",
        "Диалоги с AI-репетитором: тексты сообщений и история бесед.",
        "Модель обучения (Learning Profile): агрегированные оценки по грамматике и лексике на основе ваших ответов.",
        "Технические данные: cookies сессии, IP-адрес и данные браузера — для безопасности и работы сайта.",
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
        "Мы используем строго необходимые cookies для входа в аккаунт (сессия Supabase). Аналитические и рекламные cookies не применяются без вашего отдельного согласия.",
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
        "Technical data: session cookies, IP address, browser data — for security and operation.",
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
        "We use essential session cookies for login. We do not use advertising cookies. Optional analytics, if added later, will require consent.",
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

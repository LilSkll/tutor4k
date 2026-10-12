/**
 * Browser Web Speech TTS — no server API.
 * Works wherever `speechSynthesis` exists: Safari, Chrome, Edge, Yandex
 * (Chromium), Firefox (best-effort). Quality depends on OS-installed voices
 * (e.g. Spanish on macOS/iOS), not on a vendor lock-in.
 *
 * Must call speak() inside the user gesture (click); do not defer to
 * voiceschanged or browsers may silently drop the utterance.
 *
 * Keep `activeUtterance` until onend/onerror — Chromium GC's unreferenced
 * utterances mid-speech; Safari can stall if cancel() leaves synth paused.
 */

/** Keeps the live utterance referenced until speech ends (Chromium GC). */
let activeUtterance: SpeechSynthesisUtterance | null = null;

function normalizeVoiceLang(lang: string): string {
  return lang.toLowerCase().replace(/_/g, "-");
}

function pickVoice(
  voices: SpeechSynthesisVoice[],
  langPrefix: string,
): SpeechSynthesisVoice | null {
  const prefix = langPrefix.toLowerCase().replace(/_/g, "-");
  const match = (v: SpeechSynthesisVoice) =>
    normalizeVoiceLang(v.lang).startsWith(prefix);
  // Prefer on-device voices (faster, offline); then any matching lang.
  // Safari often reports langs as es_ES — normalize before compare.
  return (
    voices.find((v) => match(v) && v.localService) ??
    voices.find(match) ??
    null
  );
}

/** Strip light markdown so TTS doesn't read asterisks/hashes. */
export function plainTextForSpeech(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Quoted / backtick spans — often L2 example phrases in tutor replies. */
export function extractQuotedPhrases(markdown: string): string[] {
  const src = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "«$1»")
    .replace(/\*([^*]+)\*/g, "«$1»");
  const out: string[] = [];
  const re = /[«""]([^»""]{2,160})[»""]|`([^`]{2,160})`/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    const chunk = (m[1] ?? m[2] ?? "").replace(/\s+/g, " ").trim();
    if (chunk.length >= 2) out.push(chunk);
  }
  return out;
}

function looksLikeTargetPhrase(phrase: string, courseLangPrefix: string): boolean {
  if (courseLangPrefix === "ru") {
    return /[\u0400-\u04FF]/.test(phrase);
  }
  // es / en: Latin letters, little or no Cyrillic
  return /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(phrase) && !/[\u0400-\u04FF]/.test(phrase);
}

/** BCP-47 tag for interface / tutor reply language. */
export function interfaceSpeechLang(lang: string): string {
  switch (lang) {
    case "ru":
      return "ru-RU";
    case "es":
      return "es-ES";
    case "de":
      return "de-DE";
    case "en":
    default:
      return "en-US";
  }
}

/** Target-course language for pronunciation of L2 phrases. */
export function courseSpeechLang(courseId: string): string {
  if (courseId === "english") return "en-US";
  if (courseId === "russian") return "ru-RU";
  return "es-ES";
}

/**
 * Prefer quoted L2 examples (pronunciation) when present; otherwise the full
 * reply in the interface language.
 */
export function pickSpeechPayload(
  markdown: string,
  interfaceLang: string,
  courseId: string,
): { text: string; langTag: string; fallbackLangTag: string } {
  const uiTag = interfaceSpeechLang(interfaceLang);
  const courseTag = courseSpeechLang(courseId);
  const coursePrefix = courseTag.slice(0, 2).toLowerCase();
  const quoted = extractQuotedPhrases(markdown).filter((q) =>
    looksLikeTargetPhrase(q, coursePrefix),
  );
  if (quoted.length > 0) {
    return {
      text: quoted.join(". "),
      langTag: courseTag,
      fallbackLangTag: uiTag,
    };
  }
  return {
    text: plainTextForSpeech(markdown),
    langTag: uiTag,
    fallbackLangTag: courseTag,
  };
}

/** Warm the voice list early (Safari/Chromium populate it async). */
export function warmSpeechVoices(): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  const onVoices = () => {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.removeEventListener("voiceschanged", onVoices);
  };
  window.speechSynthesis.addEventListener("voiceschanged", onVoices);
}

export function speakText(
  text: string,
  langTag: string,
  onEnd?: () => void,
  fallbackLangTag?: string,
): { stop: () => void } | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const plain = plainTextForSpeech(text);
  if (!plain) return null;

  const synth = window.speechSynthesis;
  const primary = langTag.slice(0, 2).toLowerCase();
  const fallback = fallbackLangTag?.slice(0, 2).toLowerCase();

  try {
    // Clear a stuck queue; stay inside the click gesture (no setTimeout).
    synth.cancel();
    if (synth.paused) synth.resume();
  } catch {
    // ignore
  }

  const utter = new SpeechSynthesisUtterance(plain);
  activeUtterance = utter;
  // Prefer BCP-47 with hyphen; engines also accept the tag without a voice match.
  utter.lang = langTag.replace(/_/g, "-");
  utter.rate = 0.95;

  const voices = synth.getVoices();
  const voice =
    pickVoice(voices, primary) ??
    (fallback ? pickVoice(voices, fallback) : null);
  if (voice) {
    utter.voice = voice;
    // Keep the engine's own lang form (Safari may use es_ES).
    utter.lang = voice.lang || utter.lang;
  }

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    if (activeUtterance === utter) activeUtterance = null;
    onEnd?.();
  };
  utter.onend = finish;
  utter.onerror = finish;

  try {
    synth.speak(utter);
    // Safari/iOS sometimes leaves the queue paused after cancel().
    if (synth.paused) synth.resume();
  } catch {
    finish();
    return null;
  }

  return {
    stop: () => {
      try {
        synth.cancel();
      } catch {
        // ignore
      }
      finish();
    },
  };
}

export function canUseSpeechSynthesis(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

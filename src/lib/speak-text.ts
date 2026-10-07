/**
 * Browser Web Speech TTS — no server API.
 * Best-effort: silent no-op when unsupported or cancelled.
 */

function pickVoice(
  voices: SpeechSynthesisVoice[],
  langPrefix: string,
): SpeechSynthesisVoice | null {
  const prefix = langPrefix.toLowerCase();
  return (
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix) && v.localService) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix)) ??
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

export function courseSpeechLang(courseId: string): string {
  if (courseId === "english") return "en";
  if (courseId === "russian") return "ru";
  return "es";
}

export function speakText(
  text: string,
  langPrefix: string,
  onEnd?: () => void,
): { stop: () => void } | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const plain = plainTextForSpeech(text);
  if (!plain) return null;

  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(plain);
  utter.lang = langPrefix;
  utter.rate = 0.95;

  const applyVoice = () => {
    const voice = pickVoice(window.speechSynthesis.getVoices(), langPrefix);
    if (voice) utter.voice = voice;
  };
  applyVoice();
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      applyVoice();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    onEnd?.();
  };
  utter.onend = finish;
  utter.onerror = finish;

  window.speechSynthesis.speak(utter);
  return {
    stop: () => {
      window.speechSynthesis.cancel();
      finish();
    },
  };
}

export function canUseSpeechSynthesis(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

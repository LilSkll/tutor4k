"use client";

import * as React from "react";
import { Loader2, Mic, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import { translate } from "@/lib/i18n";

const MAX_MS = 6_000;

type Phase = "idle" | "recording" | "done" | "unsupported" | "denied";

/**
 * One short spoken reply after the tutor message — no accent scoring.
 * Audio stays in-memory only; we celebrate that they spoke.
 */
export function DialogueSpeakRepeat() {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [phase, setPhase] = React.useState<Phase>("idle");
  const recorderRef = React.useRef<MediaRecorder | null>(null);
  const streamRef = React.useRef<MediaStream | null>(null);
  const chunksRef = React.useRef<Blob[]>([]);
  const timerRef = React.useRef<number | null>(null);

  const cleanup = React.useCallback(() => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    recorderRef.current = null;
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
    chunksRef.current = [];
  }, []);

  React.useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof MediaRecorder === "undefined" ||
      !navigator.mediaDevices?.getUserMedia
    ) {
      setPhase("unsupported");
    }
    return () => cleanup();
  }, [cleanup]);

  const stopRecording = React.useCallback(() => {
    const rec = recorderRef.current;
    if (rec && rec.state !== "inactive") {
      rec.stop();
    } else {
      cleanup();
      setPhase("done");
    }
  }, [cleanup]);

  const startRecording = async () => {
    if (phase === "recording" || phase === "unsupported") return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const mime = MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : undefined;
      const rec = mime
        ? new MediaRecorder(stream, { mimeType: mime })
        : new MediaRecorder(stream);
      recorderRef.current = rec;
      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = () => {
        cleanup();
        setPhase("done");
      };
      rec.start();
      setPhase("recording");
      timerRef.current = window.setTimeout(() => stopRecording(), MAX_MS);
    } catch {
      cleanup();
      setPhase("denied");
    }
  };

  if (phase === "unsupported") return null;

  if (phase === "denied") {
    return (
      <p className="text-xs text-muted-foreground">{t("daily.speakDenied")}</p>
    );
  }

  if (phase === "done") {
    return (
      <p className="text-sm font-medium text-primary">
        {t("daily.speakRecorded")}
      </p>
    );
  }

  return (
    <Button
      type="button"
      variant={phase === "recording" ? "destructive" : "secondary"}
      size="sm"
      className="w-full sm:w-auto"
      onClick={() => {
        if (phase === "recording") stopRecording();
        else void startRecording();
      }}
    >
      {phase === "recording" ? (
        <>
          <Square className="h-4 w-4" />
          {t("daily.speakStop")}
        </>
      ) : (
        <>
          <Mic className="h-4 w-4" />
          {t("daily.speakRepeat")}
        </>
      )}
      {phase === "recording" ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin opacity-70" />
      ) : null}
    </Button>
  );
}

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
 * Audio is discarded immediately; we only celebrate that they spoke.
 */
export function DialogueSpeakRepeat() {
  const language = useInterfaceLanguage();
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(key, language, vars);

  const [phase, setPhase] = React.useState<Phase>("idle");
  const [starting, setStarting] = React.useState(false);
  const recorderRef = React.useRef<MediaRecorder | null>(null);
  const streamRef = React.useRef<MediaStream | null>(null);
  const timerRef = React.useRef<number | null>(null);
  const startingRef = React.useRef(false);
  const mountedRef = React.useRef(true);

  const releaseMic = React.useCallback(() => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
    recorderRef.current = null;
    startingRef.current = false;
    if (mountedRef.current) setStarting(false);
  }, []);

  React.useEffect(() => {
    mountedRef.current = true;
    if (
      typeof window === "undefined" ||
      typeof MediaRecorder === "undefined" ||
      !navigator.mediaDevices?.getUserMedia
    ) {
      setPhase("unsupported");
    }
    return () => {
      mountedRef.current = false;
      const rec = recorderRef.current;
      if (rec && rec.state !== "inactive") {
        try {
          rec.ondataavailable = null;
          rec.onstop = null;
          rec.stop();
        } catch {
          // already stopped
        }
      }
      releaseMic();
    };
  }, [releaseMic]);

  const finishOk = React.useCallback(() => {
    releaseMic();
    if (mountedRef.current) setPhase("done");
  }, [releaseMic]);

  const stopRecording = React.useCallback(() => {
    const rec = recorderRef.current;
    if (rec && rec.state !== "inactive") {
      try {
        // Let onstop → finishOk release the mic (don't clear handlers first).
        rec.stop();
      } catch {
        finishOk();
      }
      return;
    }
    finishOk();
  }, [finishOk]);

  const startRecording = async () => {
    if (
      phase === "recording" ||
      phase === "unsupported" ||
      phase === "done" ||
      startingRef.current
    ) {
      return;
    }
    startingRef.current = true;
    setStarting(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      if (!mountedRef.current) {
        stream.getTracks().forEach((tr) => tr.stop());
        startingRef.current = false;
        return;
      }
      streamRef.current = stream;
      const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : undefined;
      const rec = mime
        ? new MediaRecorder(stream, { mimeType: mime })
        : new MediaRecorder(stream);
      recorderRef.current = rec;
      // Discard chunks — we never upload or score accent.
      rec.ondataavailable = () => {};
      rec.onstop = () => finishOk();
      rec.start();
      setPhase("recording");
      startingRef.current = false;
      setStarting(false);
      timerRef.current = window.setTimeout(() => stopRecording(), MAX_MS);
    } catch {
      releaseMic();
      if (mountedRef.current) setPhase("denied");
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
      variant={phase === "recording" ? "destructive" : "outline"}
      size="lg"
      className="w-full"
      disabled={starting}
      onClick={() => {
        if (phase === "recording") stopRecording();
        else void startRecording();
      }}
    >
      {phase === "recording" ? (
        <>
          <Square className="h-4 w-4" />
          {t("daily.speakStop")}
          <Loader2 className="h-3.5 w-3.5 animate-spin opacity-70" />
        </>
      ) : starting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {t("daily.speakRepeat")}
        </>
      ) : (
        <>
          <Mic className="h-4 w-4" />
          {t("daily.speakRepeat")}
        </>
      )}
    </Button>
  );
}

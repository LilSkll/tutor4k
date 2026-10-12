"use client";

import * as React from "react";
import { shuffleSentenceBuildingOptions } from "@/lib/exercise-options";
import { cn } from "@/lib/utils";

export function SentenceBuildingBlock({
  options,
  answer,
  onAnswerChange,
  hint,
  removeLastLabel,
  wordsPlacedLabel,
}: {
  options: string[];
  /** Graded sentence — used so tiles are never left in answer order. */
  answer?: string;
  onAnswerChange: (answer: string) => void;
  hint: string;
  removeLastLabel: string;
  wordsPlacedLabel?: string;
}) {
  const [tiles, setTiles] = React.useState<string[]>(() =>
    shuffleSentenceBuildingOptions({
      type: "sentence_building",
      options,
      answer: answer ?? "",
    }) ?? options,
  );
  const [wordOrder, setWordOrder] = React.useState<number[]>([]);

  React.useEffect(() => {
    setTiles(
      shuffleSentenceBuildingOptions({
        type: "sentence_building",
        options,
        answer: answer ?? "",
      }) ?? options,
    );
    setWordOrder([]);
  }, [options, answer]);

  const syncAnswer = (order: number[]) => {
    setWordOrder(order);
    onAnswerChange(order.map((i) => tiles[i]).join(" "));
  };

  const addWord = (idx: number) => {
    if (wordOrder.includes(idx)) return;
    syncAnswer([...wordOrder, idx]);
  };

  const removeLastWord = () => {
    syncAnswer(wordOrder.slice(0, -1));
  };

  const removeWordAt = (pos: number) => {
    syncAnswer(wordOrder.slice(0, pos));
  };

  return (
    <div className="space-y-3">
      <div className="min-h-[60px] rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-3 flex flex-wrap gap-2 items-center">
        {wordOrder.length === 0 ? (
          <span className="text-sm text-muted-foreground italic">{hint}</span>
        ) : (
          wordOrder.map((optIdx, pos) => (
            <button
              key={pos}
              type="button"
              onClick={() => removeWordAt(pos)}
              className="rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
            >
              {tiles[optIdx]}
            </button>
          ))
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tiles.map((opt, i) => {
          const used = wordOrder.includes(i);
          return (
            <button
              key={`${opt}-${i}`}
              type="button"
              onClick={() => addWord(i)}
              disabled={used}
              className={cn(
                "rounded-lg border-2 px-3 py-1.5 text-sm font-medium transition-all",
                used
                  ? "opacity-30 border-muted bg-muted cursor-not-allowed"
                  : "border-primary/40 bg-card hover:border-primary hover:bg-primary/10 cursor-pointer",
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={removeLastWord}
          disabled={wordOrder.length === 0}
          className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-40"
        >
          {removeLastLabel}
        </button>
        {wordsPlacedLabel && wordOrder.length > 0 ? (
          <span className="text-xs text-muted-foreground">{wordsPlacedLabel}</span>
        ) : null}
      </div>
    </div>
  );
}

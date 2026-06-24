"use client";

import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Search, Trash2, Loader2, BookMarked } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { LEVELS } from "@/config/app";
import { useUIStore } from "@/stores";
import { translate } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";
import type { Level, VocabularyWord } from "@/types";

async function fetchVocab(): Promise<VocabularyWord[]> {
  const res = await fetch("/api/vocabulary", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed");
  return res.json();
}

export function VocabularyClient({
  initialWords,
  userLevel,
}: {
  initialWords: VocabularyWord[];
  userLevel: Level | null;
}) {
  const qc = useQueryClient();
  const { data: words = initialWords } = useQuery({
    queryKey: ["vocabulary"],
    queryFn: fetchVocab,
    initialData: initialWords,
  });

  const [search, setSearch] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);

  const addMutation = useMutation({
    mutationFn: async (input: {
      word: string;
      translation: string;
      example: string;
      level: Level;
    }) => {
      const res = await fetch("/api/vocabulary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!res.ok) throw new Error("Failed");
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["vocabulary"] });
      setDialogOpen(false);
      toast.success(t("vocabulary.toastAdded"));
    },
    onError: () => toast.error(t("vocabulary.toastAddFail")),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await fetch("/api/vocabulary", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["vocabulary"] });
      toast.success(t("vocabulary.toastDeleted"));
    },
  });

  const filtered = words.filter(
    (w) =>
      w.word.toLowerCase().includes(search.toLowerCase()) ||
      w.translation.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("vocabulary.searchPlaceholder")}
            className="pl-9"
          />
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="gradient">
              <Plus className="h-4 w-4" />
              {t("vocabulary.addBtn")}
            </Button>
          </DialogTrigger>
          <AddWordDialog
            defaultLevel={userLevel ?? "A1"}
            pending={addMutation.isPending}
            onSubmit={(v) => addMutation.mutate(v)}
          />
        </Dialog>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-1.5">
          <BookMarked className="h-4 w-4 text-primary" />
          <strong>{words.length}</strong> {t("vocabulary.totalWords")}
        </span>
        {search && (
          <span className="text-muted-foreground">
            {filtered.length} {t("vocabulary.results")}
          </span>
        )}
      </div>

      {/* Empty state */}
      {words.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BookMarked className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">{t("vocabulary.emptyTitle")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("vocabulary.emptyDesc")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("vocabulary.emptyHint")}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Word grid */}
      {filtered.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <Card key={w.id} className="card-hover group">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground truncate">
                        {w.word}
                      </h3>
                      <Badge variant="level" className="shrink-0">
                        {w.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {w.translation}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteMutation.mutate(w.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                    aria-label="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                {w.example && (
                  <p className="mt-2 text-xs italic text-muted-foreground border-l-2 border-primary/30 pl-2">
                    {w.example}
                  </p>
                )}
                <p className="mt-2 text-[10px] text-muted-foreground">
                  {formatDate(w.created_at)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function AddWordDialog({
  defaultLevel,
  pending,
  onSubmit,
}: {
  defaultLevel: Level;
  pending: boolean;
  onSubmit: (v: {
    word: string;
    translation: string;
    example: string;
    level: Level;
  }) => void;
}) {
  const [word, setWord] = React.useState("");
  const [translation, setTranslation] = React.useState("");
  const [example, setExample] = React.useState("");
  const [level, setLevel] = React.useState<Level>(defaultLevel);
  const language = useUIStore((s) => s.interfaceLanguage);
  const t = (key: string) => translate(key, language);

  const submit = () => {
    if (!word.trim() || !translation.trim()) return;
    onSubmit({ word, translation, example, level });
    setWord("");
    setTranslation("");
    setExample("");
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t("vocabulary.addDialogTitle")}</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="word">{t("vocabulary.wordLabel")}</Label>
          <Input
            id="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="напр. maravilloso"
            autoFocus
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="trans">{t("vocabulary.translationLabel")}</Label>
          <Input
            id="trans"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            placeholder="напр. чудесный"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ex">{t("vocabulary.exampleLabel")}</Label>
          <Textarea
            id="ex"
            value={example}
            onChange={(e) => setExample(e.target.value)}
            placeholder={t("vocabulary.examplePlaceholder")}
            rows={2}
          />
        </div>
        <div className="space-y-2">
          <Label>{t("common.level")}</Label>
          <Select value={level} onValueChange={(v) => setLevel(v as Level)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((lvl) => (
                <SelectItem key={lvl.value} value={lvl.value}>
                  {lvl.label} — {lvl.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="gradient"
          className="w-full"
          onClick={submit}
          disabled={pending || !word.trim() || !translation.trim()}
        >
          {pending && <Loader2 className="h-4 w-4 animate-spin" />}
          {t("vocabulary.saveBtn")}
        </Button>
      </div>
    </DialogContent>
  );
}

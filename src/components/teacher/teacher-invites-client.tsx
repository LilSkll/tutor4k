"use client";

import * as React from "react";
import { Loader2, Link2, Copy, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { translate } from "@/lib/i18n";
import { useInterfaceLanguage } from "@/hooks/use-interface-language";
import type { TeacherInviteRow } from "@/types/teacher";
import { EmptyState } from "@/components/shared/empty-state";

export function TeacherInvitesClient() {
  const language = useInterfaceLanguage();
  const t = React.useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      translate(key, language, vars),
    [language],
  );

  const [invites, setInvites] = React.useState<TeacherInviteRow[]>([]);
  const [courseId, setCourseId] = React.useState<"spanish" | "english">("spanish");
  const [initialLoading, setInitialLoading] = React.useState(true);
  const [creating, setCreating] = React.useState(false);

  const load = React.useCallback(
    async (opts?: { quiet?: boolean }) => {
      if (!opts?.quiet) setInitialLoading(true);
      try {
        const res = await fetch("/api/teacher/invites");
        const data = (await res.json()) as {
          invites?: TeacherInviteRow[];
          error?: string;
        };
        if (!res.ok) throw new Error(data.error || "fail");
        setInvites(data.invites ?? []);
      } catch {
        toast.error(translate("teacher.invites.loadFail", language));
      } finally {
        setInitialLoading(false);
      }
    },
    [language],
  );

  React.useEffect(() => {
    void load();
  }, [load]);

  const create = async () => {
    setCreating(true);
    try {
      const res = await fetch("/api/teacher/invites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, maxUses: null }),
      });
      const data = (await res.json()) as {
        invite?: TeacherInviteRow;
        error?: string;
      };
      if (!res.ok) throw new Error(data.error || "fail");
      toast.success(t("teacher.invites.created"));
      await load({ quiet: true });
    } catch {
      toast.error(t("teacher.invites.createFail"));
    } finally {
      setCreating(false);
    }
  };

  const copyLink = async (token: string) => {
    const url = `${window.location.origin}/invite/${token}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success(t("teacher.invites.linkCopied"));
    } catch {
      toast.error(url);
    }
  };

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success(t("teacher.invites.codeCopied"));
    } catch {
      toast.message(code);
    }
  };

  const close = async (id: string) => {
    try {
      const res = await fetch(
        `/api/teacher/invites?id=${encodeURIComponent(id)}`,
        { method: "DELETE" },
      );
      if (!res.ok) throw new Error("fail");
      toast.success(t("teacher.invites.closed"));
      await load({ quiet: true });
    } catch {
      toast.error(t("teacher.invites.closeFail"));
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          {t("teacher.invites.title")}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("teacher.invites.subtitle")}
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">
            {t("teacher.invites.createTitle")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <div className="flex gap-2">
            {(["spanish", "english"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCourseId(c)}
                className={
                  courseId === c
                    ? "rounded-full px-3 py-1 text-sm font-semibold bg-primary text-primary-foreground"
                    : "rounded-full px-3 py-1 text-sm border border-border"
                }
              >
                {c === "spanish" ? "Español" : "English"}
              </button>
            ))}
          </div>
          <Button variant="gradient" onClick={create} disabled={creating}>
            {creating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            {t("teacher.invites.createBtn")}
          </Button>
        </CardContent>
      </Card>

      {/* Reserve height so the sidebar/layout does not jump while loading */}
      <div className="min-h-[12rem]">
        {initialLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : invites.length === 0 ? (
          <EmptyState
            title={t("teacher.invites.emptyTitle")}
            description={t("teacher.invites.empty")}
            withMascot={false}
            icon={<Link2 className="h-7 w-7" />}
          />
        ) : (          <div className="space-y-3">
            {invites.map((inv) => (
              <Card key={inv.id}>
                <CardContent className="p-4 flex flex-wrap items-center gap-3 justify-between">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <code className="text-sm font-bold tracking-wider">
                        {inv.code}
                      </code>
                      <Badge variant="level">{inv.course_id}</Badge>
                      <Badge
                        variant={inv.status === "open" ? "level" : "secondary"}
                      >
                        {inv.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t("teacher.invites.uses", { count: inv.uses_count })}
                      {inv.max_uses != null ? ` / ${inv.max_uses}` : ""}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyCode(inv.code)}
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {t("teacher.invites.copyCode")}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyLink(inv.token)}
                    >
                      <Link2 className="h-3.5 w-3.5" />
                      {t("teacher.invites.copyLink")}
                    </Button>
                    {inv.status === "open" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => close(inv.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GrammarExplorer } from "@/components/grammar/grammar-explorer";
import { GRAMMAR_TOPICS } from "@/config/grammar";
import type { Level } from "@/types";

export default async function GrammarPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; level?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="container max-w-6xl py-6 md:py-8 space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Грамматика</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Справочник по темам CEFR — от A1 до C1
        </p>
      </div>

      {/* Explorer with level tabs + topic detail modal */}
      <GrammarExplorer initialLevel={params.level as Level | undefined} />

      {/* All topics grid */}
      <div>
        <h2 className="font-semibold mb-3">Все темы</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {GRAMMAR_TOPICS.map((topic) => (
            <Card key={topic.slug} className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="level">{topic.level}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {topic.category}
                  </span>
                </div>
                <CardTitle className="text-base mt-2">
                  {topic.titleEs}
                  <span className="text-muted-foreground font-normal">
                    {" "}— {topic.title}
                  </span>
                </CardTitle>
                <CardDescription className="text-xs">
                  {topic.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <Link href={`/grammar?topic=${topic.slug}`}>
                    Изучить
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

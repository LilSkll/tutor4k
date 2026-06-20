import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Flame,
  GraduationCap,
  Languages,
  MessageSquare,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FEATURES = [
  {
    icon: Brain,
    title: "AI Tutor Inteligente",
    desc: "Profesor personal que explica reglas, da pistas y nunca hace la tarea por ti.",
  },
  {
    icon: MessageSquare,
    title: "Explicaciones con markdown",
    desc: "Tablas de conjugación, ejemplos y reglas destacadas en cada respuesta.",
  },
  {
    icon: BookOpen,
    title: "Gramática por niveles",
    desc: "Temas organizados según el MCER: A1 a C1, del artículo al subjuntivo.",
  },
  {
    icon: GraduationCap,
    title: "Ejercicios generados por IA",
    desc: "Choice, fill-in-the-blank, traducción, corrección y composición.",
  },
  {
    icon: Flame,
    title: "Streak y metas diarias",
    desc: "Mantén la constancia con rachas, objetivos y recomendaciones.",
  },
  {
    icon: Languages,
    title: "Diccionario personal",
    desc: "Guarda palabras, traducciones y ejemplos para repasar.",
  },
];

const LEVELS = ["A1", "A2", "B1", "B2", "C1"];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white font-bold text-lg shadow-md">
              Ñ
            </div>
            <span className="font-bold text-lg gradient-text">SpanishTutor</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Iniciar sesión</Link>
            </Button>
            <Button variant="gradient" asChild>
              <Link href="/signup">
                Empezar gratis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6 animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary" />
          Powered by Groq + Gemini
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
          Aprende español con tu
          <br />
          <span className="gradient-text">profesor de IA personal</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 animate-fade-in">
          No es un chat más. Es un tutor que te explica las reglas, te da pistas
          y te hace pensar. Gramática, vocabulario, ejercicios y preparación
          DELE — todo en un solo lugar.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-fade-in">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/signup">
              Crear cuenta gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/login">Ya tengo cuenta</Link>
          </Button>
        </div>

        {/* Levels */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Niveles MCER:</span>
          {LEVELS.map((lvl) => (
            <span
              key={lvl}
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              {lvl}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat) => (
            <Card key={feat.title} className="p-6 card-hover">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feat.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{feat.title}</h3>
              <p className="text-sm text-muted-foreground">{feat.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-orange-500 to-rose-500 p-10 text-center text-white">
          <Trophy className="absolute -right-8 -top-8 h-40 w-40 opacity-10" />
          <h2 className="text-3xl font-bold mb-3">
            ¡Empieza tu viaje en español hoy!
          </h2>
          <p className="mx-auto max-w-xl text-white/90 mb-6">
            Onboarding guiado, recomendaciones personalizadas y un tutor que se
            adapta a tu nivel.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">
              Crear cuenta gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary via-orange-500 to-rose-500 text-white font-bold text-sm">
              Ñ
            </div>
            <span>SpanishTutor © {new Date().getFullYear()}</span>
          </div>
          <p>Hecho con Next.js, Supabase, Groq y Gemini.</p>
        </div>
      </footer>
    </div>
  );
}

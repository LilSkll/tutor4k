"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import type { Level, VocabularyWord } from "@/types";

// =====================================================================
// Vocabulary server actions
// =====================================================================

export async function addVocabularyWord(input: {
  word: string;
  translation: string;
  example?: string;
  level: Level;
}): Promise<{ error: string | null; word: VocabularyWord | null }> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated", word: null };

  const { data, error } = await supabase
    .from("vocabulary")
    .insert({
      user_id: user.id,
      word: input.word.trim(),
      translation: input.translation.trim(),
      example: input.example?.trim() ?? "",
      level: input.level,
    })
    .select()
    .single();

  if (error) return { error: error.message, word: null };

  revalidatePath("/vocabulary");
  return { error: null, word: data as unknown as VocabularyWord };
}

export async function deleteVocabularyWord(id: string) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase
    .from("vocabulary")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/vocabulary");
  return { error: null };
}

export async function getVocabulary(): Promise<VocabularyWord[]> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data } = await supabase
    .from("vocabulary")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (data ?? []) as unknown as VocabularyWord[];
}

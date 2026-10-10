import type { EggKind, EggRarity } from "@/config/journey/easter-eggs";
import type { GrammarLevel } from "@/types";

export type AwardedEggPayload = {
  id: string;
  rarity: EggRarity;
  kind: EggKind;
  title: string;
  body: string;
  highlight: string;
  stampLabel: string;
  isNew: boolean;
};

export type ChapterCompleteRewards = {
  chapterBadge: {
    chapterSlug: string;
    isNew: boolean;
  };
  egg: AwardedEggPayload | null;
  levelCert: {
    level: GrammarLevel;
    isNew: boolean;
  } | null;
  courseCert: {
    isNew: boolean;
  } | null;
};

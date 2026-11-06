import cache from "./russian-tr-l1-cache.json";

/** L1 prompt for a Russian translation stem. Russian stays the answer. */
export type RussianTrL1 = { es: string; de: string };

export const RUSSIAN_TR_L1: Record<string, RussianTrL1> = cache;

import type { Character } from "../../domain/character";
import { useSearchCharacterQuery } from "./useSearchCharacterQuery";

const parseKi = (rawKi: string): number => {
  const multipliers: Record<string, number> = {
    thousand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
  };

  const lower = rawKi.toLowerCase().replace(/,/g, '').trim();

  for (const key in multipliers) {
    if (lower.includes(key)) {
      const num = parseFloat(lower.replace(key, '').trim());
      return num * multipliers[key];
    }
  }
  return parseFloat(lower.replace(/\./g, '')) || 0;
};


export const filterByKi = (
  data: Character[] | undefined,
  from?: number,
  to?: number
): Character[] | undefined => {
    if (!data) return data;

    if (!from && !to) return data

    if (!from && to) return data.filter(character => parseKi(character.ki) < to)

    if (!to && from) return data.filter(character => parseKi(character.ki) > from)
};

export const useCharacterFilter = (from: number | undefined, to: number | undefined, name: string | undefined) => {
    const { data, isLoading } = useSearchCharacterQuery({name});

    return { isLoading, data: filterByKi(data, from, to) }
}

import type { Character, CharacterWithoutName } from "../../domain/character";
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
  data: Character[] | [],
  from?: number,
  to?: number
): Character[] => {
  if (!from && !to) {
    return data;
  }

  let filteredData: Character[] = data;

  if (from !== undefined && to !== undefined) {
    filteredData = data.filter(character => {
      const kiValue = parseKi(character.ki);
      return kiValue > from && kiValue < to;
    });
  }
  else if (from !== undefined) {
    filteredData = data.filter(character => parseKi(character.ki) > from);
  }
  else if (to !== undefined) {
    filteredData = data.filter(character => parseKi(character.ki) < to);
  }

  return filteredData;
};


const dataAdapter = (data: Character[] | CharacterWithoutName | undefined): Character[] => {
  if (!data) return []

  if (Array.isArray(data)) return data

  return data.items
}

export const useCharacterFilter = (from: string | null, to: string | null, name: string) => {
    const { data, isLoading } = useSearchCharacterQuery({name});

    const dataFormatted = dataAdapter(data)

    const fromFormatted = !from ? undefined : Number(from)
    const toFormatted = !to ? undefined : Number(to)

    return { isLoading, data: filterByKi(dataFormatted, fromFormatted, toFormatted) }
}

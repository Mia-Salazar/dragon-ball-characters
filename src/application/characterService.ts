import { fetchCharacters } from "../data/characterAPI";
import type { Character } from "../domain/character";
import type { Filter } from "../domain/filter";


export const getCharacterList = async (filters: Filter): Promise<Character[]> => {
  const { name, from, to } = filters;
  const response = await fetchCharacters(name, from, to);
  return response;
};
import { fetchCharacters } from "../data/characterAPI";
import type { Character } from "../domain/character";


export const getCharacterList = async (): Promise<Character[]> => {
  const response = await fetchCharacters();
  return response.items;
};
import type { Character } from "../domain/character";

export const fetchCharacters = async (): Promise<{ items: Character[] }> => {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters`
    );
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const findCharacters = async (name: string): Promise<{ items: Character[] }> => {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters?name=${name}`
    );
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const findCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );
    if (!response.ok) throw new Error('Error al obtener los datos');
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

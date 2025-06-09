import type { Character } from "../domain/character";

export const fetchCharacters = async (
  name?: string,
  from?: number,
  to?: number
): Promise<Character[]> => {
  try {
    const params = new URLSearchParams();
    if (name) params.append('name', name);
    if (from) params.append('kiFrom', from.toString());
    if (to) params.append('kiTo', to.toString());

    const response = await fetch(
      `https://dragonball-api.com/api/characters?${params.toString()}`
    );

    if (!response.ok) throw new Error('Error al obtener los datos');

    const json = await response.json();

    return json;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('Error desconocido');
  }
};

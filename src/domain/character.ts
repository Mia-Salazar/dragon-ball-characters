export interface Character {
  description?: string;
  id?: number;
  image: string;
  ki: string;
  name: string;
}

export interface CharacterWithoutName {
  items: Character[]
}
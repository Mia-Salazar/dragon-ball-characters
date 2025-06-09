import { useQuery } from '@tanstack/react-query';
import type { Character } from '../../domain/character';
import { getCharacterList } from '../../application/characterService';


export const useSearchCharacterQuery = () => {
  return useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: getCharacterList,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
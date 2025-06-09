import { useQuery } from '@tanstack/react-query';
;
import { getCharacterList } from '../../application/characterService';
import type { Filter } from '../../domain/filter';


export const useSearchCharacterQuery = (filters: Filter) => {
  return useQuery({
    queryKey: ['characters', filters],
    queryFn: () => getCharacterList(filters),
    staleTime: 1000 * 60 * 60 * 24,
  });
};
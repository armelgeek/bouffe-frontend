import { useQuery } from '@tanstack/react-query';
import { tableService } from '../table.service';

export function useTable() {
  return useQuery({
    queryKey: ['tables'],
    queryFn: () => tableService.list(),
  });
}
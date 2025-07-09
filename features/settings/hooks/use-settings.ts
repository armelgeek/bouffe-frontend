import { useQuery } from '@tanstack/react-query';
import { settingsService } from '../settings.service';

export function useSettings() {
  return useQuery({
    queryKey: ['settings'],
    queryFn: () => settingsService.list(),
    select: (data) => Array.isArray(data) ? data[0] : data,
  });
}
import { useQuery } from '@tanstack/react-query';
import { orderService } from '../order.service';

export function useOrder() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: () => orderService.list(),
  });
}

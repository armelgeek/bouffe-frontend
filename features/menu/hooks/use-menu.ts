import { useQuery } from '@tanstack/react-query';
import { menuService } from '../menu.mock';

export function useMenu() {
  return useQuery({
    queryKey: ['menus'],
    queryFn: () => menuService.fetchItems(),
  });
}

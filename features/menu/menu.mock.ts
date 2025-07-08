import { Menu } from './menu.schema';
import { createMockService } from '@/shared/lib/admin/admin-generator';

export const mockMenus: Menu[] = [
  {
    id: '1',
    name: 'Pizza Margherita',
    description: 'Pizza classique avec tomate, mozzarella et basilic frais',
    price: 12.5,
    category: 'Plat principal',
    available: true,
    image: '/images/pizza-margherita.jpg',
    allergens: 'Gluten, Lactose',
    preparationTime: 15,
    createdAt: '2025-07-01T10:00:00Z',
    updatedAt: '2025-07-07T08:30:00Z',
    cookingMethod: 'Four'
  },
  {
    id: '2',
    name: 'Salade César',
    description: 'Salade romaine, croûtons, parmesan, sauce césar maison',
    price: 9.8,
    category: 'Entrée',
    available: true,
    image: '/images/salade-cesar.jpg',
    allergens: 'Gluten, Lactose, Œufs',
    preparationTime: 8,
    createdAt: '2025-07-02T14:15:00Z',
    updatedAt: '2025-07-06T16:45:00Z',
    cookingMethod: 'Vapeur'
  },
  {
    id: '3',
    name: 'Tiramisu',
    description: 'Dessert italien au café et mascarpone',
    price: 6.5,
    category: 'Dessert',
    available: false,
    image: '/images/tiramisu.jpg',
    allergens: 'Lactose, Œufs, Gluten',
    preparationTime: 5,
    createdAt: '2025-07-03T09:20:00Z',
    updatedAt: '2025-07-07T12:10:00Z',
    cookingMethod: 'Four'
  },
  {
    id: '4',
    name: 'Coca-Cola',
    description: 'Boisson gazeuse rafraîchissante - 33cl',
    price: 2.5,
    category: 'Boisson',
    available: true,
    image: '/images/coca-cola.jpg',
    allergens: '',
    preparationTime: 1,
    createdAt: '2025-07-04T11:00:00Z',
    updatedAt: '2025-07-04T11:00:00Z',
    cookingMethod: 'Vapeur'
  },
];

export const menuService = createMockService(mockMenus, {
  entityName: 'menus',
  enableBackup: true,
  maxBackups: 5
});
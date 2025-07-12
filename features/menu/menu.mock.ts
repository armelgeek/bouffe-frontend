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
    cookingMethod: 'Four',
    specialOffer: true
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
    cookingMethod: 'Vapeur',
    specialOffer: false
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
    cookingMethod: 'Four',
    specialOffer: true
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
    cookingMethod: 'Vapeur',
    specialOffer: false
  },
];

export const menuService = createMockService(mockMenus, {
  entityName: 'menus',
  enableBackup: true,
  maxBackups: 5
});
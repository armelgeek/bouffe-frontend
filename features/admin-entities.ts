import { RestaurantAdminConfig } from './restaurant/restaurant.admin-config';
import { MenuAdminConfig } from './menu/menu.admin-config';
import { registerAdminEntity } from '@/shared/lib/admin/admin-generator';

registerAdminEntity('restaurant', RestaurantAdminConfig, '/admin/restaurant', '🍽️');
registerAdminEntity('menu', MenuAdminConfig, '/admin/menu', '🍕');

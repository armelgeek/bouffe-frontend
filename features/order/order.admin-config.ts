import { createAdminEntity } from '@/shared/lib/admin/admin-generator';
import { OrderSchema } from './order.schema';
import { orderService } from './order.mock';

export const OrderAdminConfig = createAdminEntity('Commande', OrderSchema, {
  description: 'Gérez vos commandes',
  icon: 'product',
  actions: { create: true, read: true, update: true, delete: true, bulk: false},
  services: orderService,
  queryKey: ['orders'],
});

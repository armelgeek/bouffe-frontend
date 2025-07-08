import { Order } from './order.schema';
import { createMockService } from '@/shared/lib/admin/admin-generator';

export const mockOrders: Order[] = [
  {
    id: '1',
    customerName: 'Jean Dupont',
    table: 'A1',
    total: 45.5,
    status: 'pending',
    createdAt: '2025-07-07T12:00:00Z',
  },
  {
    id: '2',
    customerName: 'Marie Curie',
    table: 'B2',
    total: 32.0,
    status: 'completed',
    createdAt: '2025-07-06T19:30:00Z',
  },
];

export const orderService = createMockService(mockOrders, { entityName: 'orders' });

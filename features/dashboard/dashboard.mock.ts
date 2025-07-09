import { DashboardStats } from './dashboard.schema';
import { createMockService } from '@/shared/lib/admin/admin-generator';

export const mockDashboardStats: DashboardStats[] = [
  {
    totalReservations: 120,
    reservationsToday: 8,
    totalRevenue: 4200,
    revenueToday: 320,
    tablesOccupied: 6,
    tablesFree: 4,
    paymentDistribution: {
      'Carte bancaire': 70,
      'PayPal': 30,
      'Stripe': 20
    }
  }
];

export const dashboardService = createMockService(mockDashboardStats, {
  entityName: 'dashboardStats'
});
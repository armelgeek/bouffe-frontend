import { createAdminEntity } from '@/shared/lib/admin/admin-generator';
import { DashboardStatsSchema } from './dashboard.schema';
import { dashboardService } from './dashboard.mock';

export const DashboardAdminConfig = createAdminEntity('Dashboard', DashboardStatsSchema, {
  description: 'Vue d’ensemble des statistiques du restaurant.',
  icon: '📊',
  actions: { create: false, read: true, update: false, delete: false, bulk: false },
  services: dashboardService,
  queryKey: ['dashboardStats'],
  ui: {
    form: {
      layout: 'simple',
      steps: []
    }
  }
});
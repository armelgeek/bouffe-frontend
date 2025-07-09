import { z } from 'zod';

export const DashboardStatsSchema = z.object({
  totalReservations: z.number(),
  reservationsToday: z.number(),
  totalRevenue: z.number(),
  revenueToday: z.number(),
  tablesOccupied: z.number(),
  tablesFree: z.number(),
  paymentDistribution: z.record(z.string(), z.number()) // ex: { 'Carte bancaire': 10, 'PayPal': 5 }
});

export type DashboardStats = z.infer<typeof DashboardStatsSchema>;
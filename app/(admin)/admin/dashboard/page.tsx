"use client";
import { useEffect, useState } from 'react';
import { type DashboardStats } from '@/features/dashboard/dashboard.schema';
import { StatCard, StatsContainer } from '@/shared/components/atoms/ui/stat-card';
import { dashboardService } from '@/features/dashboard/dashboard.mock';

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    dashboardService.fetchItems().then(({ data }) => {
      setStats(data[0]);
    });
  }, []);

  return (
    <div className="space-y-8">
      <StatsContainer title="Statistiques" backgroundVariant="white" subtitle="Vue d’ensemble du restaurant">
        <StatCard value={stats ? stats.totalReservations.toString() : '-'} label="Réservations totales" />
        <StatCard value={stats ? stats.reservationsToday.toString() : '-'} label="Réservations aujourd’hui" />
        <StatCard value={stats ? stats.totalRevenue + ' €' : '-'} label="Chiffre d’affaires total" />
        <StatCard value={stats ? stats.revenueToday + ' €' : '-'} label="CA aujourd’hui" />
        <StatCard value={stats ? stats.tablesOccupied.toString() : '-'} label="Tables occupées" />
        <StatCard value={stats ? stats.tablesFree.toString() : '-'} label="Tables libres" />
        {stats && Object.entries(stats.paymentDistribution).map(([method, count]) => (
          <StatCard key={method} value={count.toString()} label={`Paiements ${method}`} />
        ))}
      </StatsContainer>
    </div>
  );
}
import { createAdminEntity } from '@/shared/lib/admin/admin-generator';
import { ReservationSchema } from './reservation.schema';
import { reservationService } from './reservation.mock';

export const ReservationAdminConfig = createAdminEntity('Réservation', ReservationSchema, {
  description: 'Gérez les réservations de tables et le paiement en ligne.',
  icon: '📅',
  actions: { create: true, read: true, update: true, delete: true, bulk: true },
  services: reservationService,
  queryKey: ['reservations'],
  ui: {
    form: {
      layout: 'steps',
      steps: [
        {
          title: 'Client & Table',
          description: 'Client, table, date et heure',
          layout: 'two-cols',
          fields: ['customerName', 'customerEmail', 'customerPhone', 'tableId', 'date', 'time', 'numberOfGuests']
        },
        {
          title: 'Paiement',
          description: 'Statut, méthode et montant',
          layout: 'two-cols',
          fields: ['status', 'paymentStatus', 'paymentMethod', 'amount']
        },
        {
          title: 'Notes',
          description: 'Demandes spéciales',
          layout: 'simple',
          fields: ['notes']
        }
      ]
    }
  }
});
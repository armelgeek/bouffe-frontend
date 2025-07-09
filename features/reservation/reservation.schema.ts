import { z } from 'zod';
import { createField } from '@/shared/lib/admin/admin-generator';

export const ReservationSchema = z.object({
  id: z.string().optional(),
  tableId: createField.relation('tables', 'name', false, {
    label: 'Table',
    display: { showInForm: true, widget: 'select' }
  }),
  customerName: createField.string({
    label: 'Nom du client',
    placeholder: 'Ex: Alice Martin'
  }),
  customerEmail: createField.string({
    label: 'Email du client',
    placeholder: 'alice@email.com'
  }),
  customerPhone: createField.string({
    label: 'Téléphone du client',
    placeholder: '06 00 00 00 00'
  }),
  date: createField.date({
    label: 'Date de réservation'
  }),
  time: createField.string({
    label: 'Heure',
    placeholder: '19:30'
  }),
  numberOfGuests: createField.number(1, {
    label: 'Nombre de couverts'
  }),
  status: createField.select(['en_attente', 'confirmée', 'annulée', 'payée'], {
    label: 'Statut'
  }),
  paymentStatus: createField.select(['en_attente', 'payé', 'échoué'], {
    label: 'Statut paiement'
  }),
  paymentMethod: createField.select(['Carte bancaire', 'PayPal', 'Stripe'], {
    label: 'Moyen de paiement'
  }),
  amount: createField.number(0, {
    label: 'Montant (€)',
    display: { prefix: '€ ' }
  }),
  notes: createField.textarea({
    label: 'Notes',
    placeholder: 'Allergies, demandes spéciales...'
  }).optional(),
});

export type Reservation = z.infer<typeof ReservationSchema>;
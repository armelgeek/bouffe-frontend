import { Reservation } from './reservation.schema';
import { createEnhancedMockService, createMockDataGenerator, mockDataGenerators } from '@/shared/lib/admin/admin-generator';

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const reservationService = createEnhancedMockService<Reservation>(
  'reservations',
  createMockDataGenerator<Reservation>({
    tableId: () => mockDataGenerators.id() as string,
    customerName: () => mockDataGenerators.name() as string,
    customerEmail: () => mockDataGenerators.email() as string,
    customerPhone: () => mockDataGenerators.phone() as string,
    date: () => new Date(mockDataGenerators.date() as string),
    time: () => '19:30',
    numberOfGuests: () => Number(mockDataGenerators.price(1, 8)),
    status: () => pickRandom(['en_attente', 'confirmée', 'annulée', 'payée']) as string,
    paymentStatus: () => pickRandom(['en_attente', 'payé', 'échoué']) as string,
    paymentMethod: () => pickRandom(['Carte bancaire', 'PayPal', 'Stripe']) as string,
    amount: () => Number(mockDataGenerators.price(20, 200)),
    notes: () => mockDataGenerators.description() as string,
  }),
  20 // 20 réservations mock
);

export const mockReservations: Reservation[] = [];
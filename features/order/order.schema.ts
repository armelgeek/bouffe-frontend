import { z } from 'zod';

export const OrderSchema = z.object({
  id: z.string(),
  customerName: z.string().min(1, 'Le nom du client est requis'),
  table: z.string().min(1, 'Le numéro de table est requis'),
  total: z.number().min(0, 'Le total doit être positif'),
  status: z.enum(['pending', 'in_progress', 'completed', 'cancelled']),
  createdAt: z.string(),
});

export type Order = z.infer<typeof OrderSchema>;

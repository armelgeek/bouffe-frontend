import { z } from 'zod';
import { createField } from '@/shared/lib/admin/admin-generator';

export const TableSchema = z.object({
  id: z.string().optional(),
  name: createField.string({
    label: 'Nom ou numéro de la table',
    placeholder: 'Ex: Table 1'
  }),
  seats: createField.number(1, {
    label: 'Nombre de places',
    placeholder: 'Ex: 4'
  }),
  location: createField.string({
    label: 'Zone/Salle',
    placeholder: 'Ex: Terrasse, Salle principale'
  }),
  isAvailable: createField.boolean({
    label: 'Disponible'
  }),
  description: createField.textarea({
    label: 'Description',
    placeholder: 'Notes ou particularités (optionnel)'
  }).optional(),
});

export type Table = z.infer<typeof TableSchema>;
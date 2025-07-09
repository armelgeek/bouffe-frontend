import { z } from 'zod';
import { createField } from '@/shared/lib/admin/admin-generator';

export const SettingsSchema = z.object({
  id: z.string().optional(),
  name: createField.string({
    label: 'Nom du restaurant',
    placeholder: 'Ex: Le Gourmet Parisien'
  }),
  address: createField.string({
    label: 'Adresse',
    placeholder: '12 rue de Paris, 75000 Paris'
  }),
  phone: createField.string({
    label: 'Téléphone',
    placeholder: '01 23 45 67 89'
  }),
  email: createField.string({
    label: 'Email',
    placeholder: 'contact@restaurant.com'
  }),
  website: createField.string({
    label: 'Site web',
    placeholder: 'https://restaurant.com'
  }).optional(),
  openingHours: createField.textarea({
    label: "Horaires d'ouverture",
    placeholder: 'Lun-Ven: 12h-14h, 19h-22h\nSam-Dim: 19h-23h'
  }),
  logo: createField.string({
    label: 'Logo (URL)',
    placeholder: 'https://...'
  }).optional(),
  description: createField.textarea({
    label: 'Description',
    placeholder: 'Présentation du restaurant...'
  }).optional(),
});

export type Settings = z.infer<typeof SettingsSchema>;
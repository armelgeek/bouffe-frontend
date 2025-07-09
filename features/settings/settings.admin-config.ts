import { createAdminEntity } from '@/shared/lib/admin/admin-generator';
import { SettingsSchema } from './settings.schema';
import { settingsService } from './settings.mock';

export const SettingsAdminConfig = createAdminEntity('Paramètres', SettingsSchema, {
  description: 'Informations générales du restaurant, horaires, contact, moyens de paiement.',
  icon: '⚙️',
  actions: { create: false, read: true, update: true, delete: false, bulk: false },
  services: settingsService,
  queryKey: ['settings'],
  formFields: [
    'name',
    'logo',
    'description',
    'address',
    'phone',
    'email',
    'website',
    'openingHours'
  ],
  ui: {
    form: {
      layout: 'steps',
      steps: [
        {
          title: 'Général',
          description: 'Nom, logo, description',
          layout: 'simple',
          fields: ['name', 'logo', 'description']
        },
        {
          title: 'Contact',
          description: 'Adresse, téléphone, email, site web',
          layout: 'two-cols',
          fields: ['address', 'phone', 'email', 'website']
        },
        {
          title: 'Horaires & Paiement',
          description: "Horaires d'ouverture et moyens de paiement",
          layout: 'two-cols',
          fields: ['openingHours', 'paymentMethods']
        }
      ]
    }
  }
});
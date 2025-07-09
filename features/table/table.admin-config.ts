import { createAdminEntity } from '@/shared/lib/admin/admin-generator';
import { TableSchema } from './table.schema';
import { tableService } from './table.mock';

export const TableAdminConfig = createAdminEntity('Table', TableSchema, {
  description: 'Gérez les tables de votre restaurant (numéro, capacité, disponibilité, etc.)',
  icon: '🪑',
  actions: { create: true, read: true, update: true, delete: true, bulk: true },
  services: tableService,
  queryKey: ['tables'],
  formFields: [
    'name',
    'seats',
    'location',
    'isAvailable',
    'description'
  ],
  ui: {
    form: {
      layout: 'steps',
      steps: [
        {
          title: 'Identification',
          description: 'Numéro ou nom de la table',
          layout: 'simple',
          fields: ['name']
        },
        {
          title: 'Caractéristiques',
          description: 'Capacité, zone et disponibilité',
          layout: 'two-cols',
          fields: ['seats', 'location', 'isAvailable']
        },
        {
          title: 'Détails',
          description: 'Description optionnelle',
          layout: 'simple',
          fields: ['description']
        }
      ]
    }
  }
});
import { z } from 'zod';
import { createField } from '@/shared/lib/admin/admin-generator';

export const MenuSchema = z.object({
  id: z.string().optional(),
  name: createField.string({
    label: 'Nom du plat',
    placeholder: 'Ex: Pizza Margherita'
  }),
  description: createField.textarea({
    label: 'Description',
    placeholder: 'Description du plat...'
  }),
  price: createField.number(0, {
    label: 'Prix',
    display: { prefix: '€ ' }
  }),
  category: createField.select(['Entrée', 'Plat principal', 'Dessert', 'Boisson'], {
    label: 'Catégorie'
  }),
  available: createField.boolean({
    label: 'Disponible'
  }),
  image: createField.string({
    label: 'Image du plat',
    display: { showInTable: false }
  }),
  allergens: createField.string({
    label: 'Allergènes',
    description: 'Liste des allergènes séparés par des virgules',
    placeholder: 'Ex: Gluten, Lactose, Œufs',
    display: { showInTable: false }
  }).optional(),
  preparationTime: createField.number(1, {
    label: 'Temps de préparation (min)',
    display: { suffix: ' min' }
  }),
  cookingMethod: createField.select(['Friture', 'Gril', 'Four', 'Vapeur'], {
    label: 'Méthode de cuisson'
  }),
  createdAt: createField.date({
   display: { showInTable: false, showInForm: false }
  }).optional(),
  updatedAt: createField.date({
    display: { showInTable: false, showInForm: false }
  }).optional(),
});

export type Menu = z.infer<typeof MenuSchema>;

import { createAdminEntity } from '@/shared/lib/admin/admin-generator';
import { MenuSchema } from './menu.schema';
import { menuService } from './menu.mock';

export const MenuAdminConfig = createAdminEntity('Menu', MenuSchema, {
  description: 'Gérez votre carte et vos plats',
  icon: '🍕',
  actions: { 
    create: true, 
    read: true, 
    update: true, 
    delete: true, 
    bulk: false 
  },
  services: menuService,
  formFields: [
    'name',
    'description',  
    'category',
    'price',
    'available',
    'image',
    'allergens',
    'preparationTime',
    'cookingMethod'
  ],
  queryKey: ['menus'],
  ui: {
    table: {
      defaultSort: 'category',
      pageSize: 15,
    },
    form: {
      layout: 'steps',
      steps: [
        {
          title: 'Informations principales',
          description: 'Nom, description, catégorie et prix',
          layout: 'simple',
          fields: ['name', 'description', 'category', 'price', 'available']
        },
        {
          title: 'Image et allergènes',
          description: 'Image du plat et allergènes',
          layout: 'simple',
          fields: ['image', 'allergens']
        },
        {
          title: 'Préparation',
          description: 'Temps de préparation et méthode de cuisson',
          layout: 'horizontal',
          fields: ['preparationTime', 'cookingMethod']
        }
      ],
      createTitle: 'Ajouter un nouveau plat',
      editTitle: 'Modifier le plat',
    },
    searchEnabled: false,
  },
});

import { createAdminEntity } from '@/shared/lib/admin/admin-generator';
import { RestaurantSchema } from './restaurant.schema';
import { restaurantService } from './restaurant.mock';

export const RestaurantAdminConfig = createAdminEntity('Restaurant', RestaurantSchema, {
  description: 'Gérez vos restaurants, horaires, livraison et informations principales.',
  icon: '🍽️',
  actions: { create: true, read: true, update: true, delete: true, bulk: true },
  services: restaurantService,
  queryKey: ['restaurants'],
  ui: {
    form: {
      layout: 'steps',
      steps: [
        {
          title: 'Informations de base',
          description: 'Nom, description et type de cuisine',
          layout: 'simple',
          fields: [
            'name', 'description', 'cuisine'
          ]
        },
        {
          title: 'Adresse et contact',
          description: 'Localisation et moyens de contact',
          layout: 'two-cols',
          fields: [
            'address', 'city', 'phone', 'email', 'website'
          ]
        },
        {
          title: 'Évaluation et tarifs',
          description: 'Note, gamme de prix et statut',
          layout: 'horizontal',
          fields: [
            'rating', 'priceRange', 'isActive'
          ]
        },
        {
          title: 'Détails pratiques',
          description: 'Horaires, spécialités, image',
          layout: 'simple',
          fields: [
            'openingHours', 'specialties', 'image'
          ]
        },
        {
          title: 'Livraison',
          description: 'Options de livraison',
          layout: 'horizontal',
          fields: [
            'deliveryAvailable', 'deliveryRadius', 'averageDeliveryTime'
          ]
        }
      ]
    }
  }
});

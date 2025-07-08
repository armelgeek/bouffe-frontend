import { z } from 'zod';
import { createField } from '@/shared/lib/admin/admin-generator';

export const RestaurantSchema = z.object({
  id: createField.string({ 
    label: 'ID',
    readOnly: true,
    display: { showInForm: false, showInTable: false }
  }),
  
  name: createField.string({ 
    label: 'Nom du restaurant',
    placeholder: 'Entrez le nom du restaurant'
  }),
  
  description: createField.textarea({ 
    label: 'Description',
    placeholder: 'Décrivez le restaurant et sa cuisine'
  }),
  
  cuisine: createField.select(['Française', 'Italienne', 'Asiatique', 'Mexicaine', 'Libanaise', 'Indienne', 'Japonaise', 'Autre'], {
    label: 'Type de cuisine',
    display: { widget: 'tag' }
  }),
  
  address: createField.string({ 
    label: 'Adresse',
    placeholder: '123 Rue de la Gastronomie'
  }),
  
  city: createField.string({ 
    label: 'Ville',
    placeholder: 'Paris'
  }),
  
  phone: createField.string({ 
    label: 'Téléphone',
    placeholder: '+33 1 23 45 67 89'
  }),
  
  email: createField.email({ 
    label: 'Email',
    placeholder: 'contact@restaurant.com'
  }),
  
  website: createField.url({ 
    label: 'Site web',
    placeholder: 'https://www.restaurant.com'
  }),
  
  rating: createField.number({ 
    label: 'Note moyenne',
    display: { 
      suffix: '/5',
      format: (value) => value ? `⭐ ${Number(value).toFixed(1)}/5` : ''
    }
  }),
  
  priceRange: createField.select([
    { value: '$', label: '$ - Économique' },
    { value: '$$', label: '$$ - Modéré' },
    { value: '$$$', label: '$$$ - Cher' },
    { value: '$$$$', label: '$$$$ - Très cher' }
  ], {
    label: 'Gamme de prix',
    display: { widget: 'radio' }
  }),
  
  isActive: createField.boolean({ 
    label: 'Restaurant actif'
  }),
  
  openingHours: createField.textarea({ 
    label: 'Horaires d\'ouverture',
    placeholder: 'Lun-Ven: 12h-14h, 19h-22h\nSam-Dim: 12h-15h, 19h-23h'
  }),
  
  specialties: createField.list({ 
    label: 'Spécialités',
    placeholder: 'Coq au vin, Bouillabaisse, Tarte Tatin'
  }) as z.ZodType<string>,
  
  image: createField.image({ 
    label: 'Photo du restaurant'
  }),
  
  deliveryAvailable: createField.boolean({ 
    label: 'Livraison disponible'
  }),
  
  deliveryRadius: createField.number({ 
    label: 'Rayon de livraison',
    display: { 
      suffix: ' km',
      visibleIf: (item) => !!item.deliveryAvailable
    }
  }),
  
  averageDeliveryTime: createField.number({ 
    label: 'Temps de livraison moyen',
    display: { 
      suffix: ' min',
      visibleIf: (item) => !!item.deliveryAvailable
    }
  }),
  
  createdAt: createField.date({ 
    label: 'Créé le',
    readOnly: true,
    display: { showInForm: false }
  }),
  
  updatedAt: createField.date({ 
    label: 'Modifié le',
    readOnly: true,
    display: { showInForm: false, showInTable: false }
  })
});

export type Restaurant = z.infer<typeof RestaurantSchema>;

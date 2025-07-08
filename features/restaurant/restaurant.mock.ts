"use client";

import { createEnhancedMockService, mockDataGenerators } from "@/shared/lib/admin/admin-generator";
import { Restaurant } from "./restaurant.schema";

const restaurantNameGenerators = [
  'Le Petit Bistrot',
  'Chez Marie',
  'La Table du Chef',
  'Le Gourmet',
  'Brasserie des Amis',
  'Le Comptoir',
  'Saveurs & Traditions',
  'Le Jardin Secret',
  'Aux Délices',
  'La Maison Gourmande',
  'Le Coin Gourmand',
  'Chez Pierre',
  'L\'Atelier Culinaire',
  'Le Refuge Gourmand',
  'La Belle Époque',
  'Le Temps des Cerises',
  'Villa Romana',
  'Sakura Sushi',
  'El Sombrero',
  'Little Italy'
];

const cuisineTypes = [
  'Française', 'Italienne', 'Asiatique', 'Mexicaine', 'Libanaise', 
  'Indienne', 'Japonaise', 'Autre'
];

const priceRanges = ['$', '$$', '$$$', '$$$$'];

export const restaurantService = createEnhancedMockService<Restaurant>(
  'restaurants',
  () => ({
    id: mockDataGenerators.id() as string,
    name: restaurantNameGenerators[Math.floor(Math.random() * restaurantNameGenerators.length)],
    description: (() => {
      const descriptions = [
        'Restaurant familial proposant une cuisine authentique dans un cadre chaleureux.',
        'Cuisine gastronomique avec des produits frais et de saison.',
        'Ambiance conviviale et plats traditionnels revisités.',
        'Spécialités régionales dans un décor authentique.',
        'Cuisine créative et moderne dans un cadre élégant.'
      ];
      return descriptions[Math.floor(Math.random() * descriptions.length)];
    })(),
    cuisine: cuisineTypes[Math.floor(Math.random() * cuisineTypes.length)],
    address: mockDataGenerators.address() as string,
    city: mockDataGenerators.city() as string,
    phone: mockDataGenerators.phone() as string,
    email: mockDataGenerators.email() as string,
    website: `https://www.${mockDataGenerators.name().toString().toLowerCase().replace(/\s+/g, '')}.fr`,
    rating: Number((Math.random() * 5).toFixed(1)),
    priceRange: priceRanges[Math.floor(Math.random() * priceRanges.length)],
    isActive: Math.random() > 0.2,
    openingHours: 'Lun-Ven: 12h-14h, 19h-22h\nSam-Dim: 12h-15h, 19h-23h',
    specialties: (() => {
      const allSpecialties = [
        'Pizza', 'Pasta', 'Sushi', 'Burger', 'Salade', 'Grillades',
        'Fruits de mer', 'Végétarien', 'Vegan', 'Sans gluten', 'Desserts maison'
      ];
      const count = Math.floor(Math.random() * 4) + 1;
      const selected = Array.from(
        { length: count }, 
        () => allSpecialties[Math.floor(Math.random() * allSpecialties.length)]
      ).filter((value, index, self) => self.indexOf(value) === index);
      return selected.join(','); // no space after comma for CSV
    })(),
    image: mockDataGenerators.image() as string,
    deliveryAvailable: Math.random() > 0.3,
    deliveryRadius: Math.floor(Math.random() * 15) + 5,
    averageDeliveryTime: Math.floor(Math.random() * 45) + 15,
    createdAt: new Date(mockDataGenerators.date(90) as string),
    updatedAt: new Date(mockDataGenerators.date(30) as string)
  }),
  50,
  {
    enableValidation: true,
    validator: (restaurant) => {
      if (!restaurant.name) return 'Le nom du restaurant est requis';
      if (!restaurant.address) return 'L\'adresse est requise';
      if (!restaurant.phone) return 'Le numéro de téléphone est requis';
      if (restaurant.rating && (restaurant.rating < 0 || restaurant.rating > 5)) {
        return 'La note doit être comprise entre 0 et 5';
      }
      return true;
    },
    hooks: {
      beforeCreate: async (restaurant) => ({
        ...restaurant,
        slug: restaurant.name.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .trim(),
        createdAt: new Date(),
        updatedAt: new Date()
      }),
      afterCreate: async (restaurant) => {
        console.log(`Restaurant "${restaurant.name}" créé avec succès`);
      },
      beforeUpdate: async (id, updates) => ({
        ...updates,
        updatedAt: new Date()
      }),
      beforeDelete: async (id, restaurant) => {
        if (restaurant.isActive) {
          console.warn(`Attention: suppression d'un restaurant actif "${restaurant.name}"`);
        }
        return true;
      }
    },
    enableBackup: true,
    maxBackups: 15
  }
);

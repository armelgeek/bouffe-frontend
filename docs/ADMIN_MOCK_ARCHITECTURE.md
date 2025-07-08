# 🚀 Architecture Admin Mock - Documentation

## 📋 Vue d'ensemble

Cette architecture fournit un système d'administration complet avec un système de mock avancé permettant de développer et tester les fonctionnalités admin sans backend réel.

## 🏗️ Architecture Implémentée

### 1. Système de Mock Avancé

Le système de mock est implémenté dans `shared/lib/admin/admin-generator.ts` et fournit :

- **CRUD complet** : Create, Read, Update, Delete
- **Opérations bulk** : Création, modification et suppression en lot
- **Persistence localStorage** : Les données survivent aux rechargements
- **Système de backup** : Sauvegarde automatique avec historique
- **Hooks lifecycle** : beforeCreate, afterCreate, beforeUpdate, afterUpdate, beforeDelete, afterDelete
- **Validation** : Validation personnalisée avec Zod
- **Recherche et filtrage** : Recherche textuelle et filtres par champ
- **Pagination** : Support complet de la pagination
- **Tri** : Tri par colonne (ascendant/descendant)
- **Statistiques** : Compteurs et métriques automatiques

### 2. Entités Admin Générées

#### Restaurant (`features/restaurant/`)
- **Schéma** : 12 champs (nom, description, cuisine, adresse, contact, horaires, etc.)
- **Mode steps** : Formulaire en 3 étapes avec layouts adaptatifs
- **Service mock** : 5 restaurants d'exemple avec données réalistes
- **Actions** : CRUD complet + bulk operations

#### Menu (`features/menu/`)
- **Schéma** : 11 champs (nom, description, prix, catégorie, allergènes, etc.)
- **Mode steps** : Formulaire en 3 étapes optimisées
- **Service mock** : 4 items de menu avec variété (pizza, salade, dessert, boisson)
- **Actions** : CRUD complet + bulk operations

### 3. Fonctionnalités Avancées

#### Mode Steps (Formulaires Multi-étapes)
- **Auto-activation** : Se déclenche automatiquement pour >8 champs
- **Layouts par étape** : `simple`, `two-cols`, `horizontal`, `sections`
- **Navigation fluide** : Boutons Précédent/Suivant avec validation progressive
- **Indicateur de progression** : Étape actuelle visible

#### Gestion des Colonnes
- **Auto-limitation** : Maximum 5-7 colonnes affichées pour les entités >7 champs
- **Sélection intelligente** : Champs les plus pertinents sélectionnés automatiquement
- **Formatage avancé** : Préfixes, suffixes, formatage custom (ex: prix en €)

#### Actions Bulk
- **Sélection multiple** : Checkboxes sur chaque ligne
- **Actions natives** : Suppression groupée, export
- **Actions custom** : Possibilité d'ajouter des actions spécifiques
- **Barre d'actions contextuelle** : Apparaît lors de la sélection

## 🗂️ Structure des Fichiers

```
features/
├── restaurant/
│   ├── restaurant.schema.ts      # Schéma Zod + types TypeScript
│   ├── restaurant.mock.ts        # Données mock + service mock
│   ├── restaurant.admin-config.ts # Configuration admin complète
│   └── restaurant.service.ts     # Service API réel (futur)
├── menu/
│   ├── menu.schema.ts
│   ├── menu.mock.ts
│   ├── menu.admin-config.ts
│   └── menu.service.ts
└── admin-entities.ts             # Registre global des entités

app/(admin)/admin/
├── restaurant/page.tsx           # Page admin Restaurant
├── menu/page.tsx                # Page admin Menu
└── crud-test/page.tsx           # Page de test CRUD

shared/lib/admin/
└── admin-generator.ts           # Système de mock + helpers admin
```

## 🔧 Utilisation

### Créer une Nouvelle Entité Admin

1. **Schéma et types** (`features/[entity]/[entity].schema.ts`) :
```typescript
import { z } from 'zod';

export const EntitySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Le nom est requis'),
  // ... autres champs
});

export type Entity = z.infer<typeof EntitySchema>;
```

2. **Service mock** (`features/[entity]/[entity].mock.ts`) :
```typescript
import { createMockService } from '@/shared/lib/admin/admin-generator';

export const mockEntities: Entity[] = [/* données mock */];

export const entityService = createMockService(mockEntities, {
  entityName: 'entities',
  enableBackup: true,
  enableValidation: true
});
```

3. **Configuration admin** (`features/[entity]/[entity].admin-config.ts`) :
```typescript
import { createAdminEntity } from '@/shared/lib/admin/admin-generator';

export const EntityAdminConfig = createAdminEntity('Entity', EntitySchema, {
  description: 'Gérez vos entités',
  icon: '📋',
  actions: { create: true, read: true, update: true, delete: true, bulk: true },
  services: entityService,
  queryKey: ['entities']
});
```

4. **Page admin** (`app/(admin)/admin/[entity]/page.tsx`) :
```typescript
import { SimpleAdminPage } from '@/shared/components/atoms/ui/simple-admin-page';

export default function EntityAdminPage() {
  return (
    <SimpleAdminPage
      config={EntityAdminConfig}
      schema={EntitySchema}
    />
  );
}
```

5. **Enregistrement dans la sidebar** (`features/admin-entities.ts`) :
```typescript
import { registerAdminEntity } from '@/shared/lib/admin/admin-generator';

registerAdminEntity('entity', EntityAdminConfig, '/admin/entity', '📋');
```

## ✅ Tests et Validation

### Page de Test CRUD
Accédez à `/admin/crud-test` pour tester toutes les opérations CRUD sur l'entité Menu.

### Tests Disponibles
- ✅ **Create** : Création d'un nouvel item
- ✅ **Read** : Lecture et récupération des données
- ✅ **Update** : Modification d'un item existant
- ✅ **Delete** : Suppression d'un item
- ✅ **GetById** : Récupération par ID
- ✅ **Persistence** : Vérification de la sauvegarde localStorage

## 🎯 Fonctionnalités Testées

### ✅ Mock System
- [x] Service mock avec CRUD complet
- [x] Persistence localStorage
- [x] Système de backup automatique
- [x] Hooks lifecycle (beforeCreate, afterCreate, etc.)
- [x] Validation avec Zod
- [x] Recherche et filtrage avancés
- [x] Pagination et tri
- [x] Opérations bulk

### ✅ Interface Admin
- [x] Table admin avec colonnes dynamiques
- [x] Formulaires en mode steps
- [x] Actions CRUD (boutons Créer, Modifier, Supprimer)
- [x] Actions bulk avec sélection multiple
- [x] Formatage des champs (prix en €, dates, etc.)
- [x] Recherche en temps réel
- [x] Pagination avec navigation

### ✅ Architecture
- [x] Composants réutilisables (`SimpleAdminPage`, `SmartDynamicForm`)
- [x] Hooks personnalisés (`useAdminEntity`)
- [x] Configuration déclarative (schémas Zod + config admin)
- [x] Système de registre pour la sidebar
- [x] Typage TypeScript strict

## 🚀 Basculer vers une API Réelle

Pour passer du mock à une vraie API :

1. **Créer le service API** (`features/[entity]/[entity].service.ts`) :
```typescript
import BaseService from '@/shared/lib/services/base-service';
import { API_ENDPOINTS } from '@/shared/config/api';

export const entityService = new BaseService<Entity>(API_ENDPOINTS.entity);
```

2. **Mettre à jour la configuration admin** :
```typescript
// Remplacer l'import du service mock par le service API
import { entityService } from './entity.service'; // au lieu de ./entity.mock
```

3. **Ajouter l'endpoint dans `shared/config/api.ts`** :
```typescript
export const API_ENDPOINTS = {
  entity: {
    base: '/api/entities',
    // ... autres endpoints
  }
};
```

## 📈 Métriques et Performance

Le système de mock fournit automatiquement :
- **Compteurs** : Total d'items, créations du jour, modifications du jour
- **Performance** : Recherche et filtrage optimisés
- **Mémoire** : Gestion intelligente du localStorage
- **Backup** : Rotation automatique des sauvegardes

---

## 🏆 Résultat

**Architecture d'administration complète et fonctionnelle** avec :
- 🎯 **2 entités** (Restaurant, Menu) entièrement opérationnelles
- 🛠️ **Système CRUD** complet avec interface utilisateur
- 💾 **Persistence** des données via localStorage
- 📱 **Interface responsive** avec mode steps pour formulaires complexes
- 🔄 **Système de backup** automatique
- 🧪 **Tests intégrés** pour validation
- 📚 **Documentation** complète

Le système est prêt pour l'ajout de nouvelles entités et peut facilement basculer vers une API réelle quand nécessaire.

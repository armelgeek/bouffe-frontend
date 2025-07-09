import { Settings } from './settings.schema';
import { createMockService } from '@/shared/lib/admin/admin-generator';

export const mockSettings: Settings[] = [
    {
        id: '1',
        name: 'Le Gourmet Parisien',
        address: '12 rue de Paris, 75000 Paris',
        phone: '01 23 45 67 89',
        email: 'contact@restaurant.com',
        website: 'https://restaurant.com',
        openingHours: 'Lun-Ven: 12h-14h, 19h-22h\nSam-Dim: 19h-23h',
        logo: '',
        description: 'Restaurant gastronomique au cœur de Paris.'
    }
];

export const settingsService = createMockService(mockSettings, {
    entityName: 'settings'
});
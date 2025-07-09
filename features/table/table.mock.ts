import { Table } from './table.schema';
import { createEnhancedMockService, mockDataGenerators } from '@/shared/lib/admin/admin-generator';

export const tableService = createEnhancedMockService<Table>(
  'tables',
  () => ({
    name: `Table ${mockDataGenerators.id()}` as string,
    seats: mockDataGenerators.price(2, 12) as number,
    location: mockDataGenerators.category() as string,
    isAvailable: mockDataGenerators.boolean() as boolean,
    description: mockDataGenerators.description() as string,
  }),
  20
);

export const mockTables: Table[] = [];
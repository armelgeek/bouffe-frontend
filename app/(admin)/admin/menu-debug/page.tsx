"use client";

import { useAdminEntity } from '@/shared/hooks/use-admin-entity';
import { MenuAdminConfig } from '@/features/menu/menu.admin-config';

export default function MenuDebugPage() {
  console.log('MenuDebugPage: Rendering component...');
  
  // Simuler les mêmes filtres que SimpleAdminPage
  const filters = {
    search: '',
    sortBy: '',
    sortDir: 'asc',
    page: 1,
    pageSize: 10
  };

  console.log('MenuDebugPage: filters to pass:', filters);

  const {
    data: items,
    meta,
    isLoading,
    error
  } = useAdminEntity({
    config: MenuAdminConfig,
    customServices: MenuAdminConfig.services,
    queryKey: MenuAdminConfig.queryKey || ['menus'],
    filters
  });

  console.log('MenuDebugPage: useAdminEntity result:', { 
    items: items?.length, 
    meta, 
    isLoading, 
    error 
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menu Debug Page</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Hook State:</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">
{JSON.stringify({ 
  itemsLength: items?.length, 
  meta, 
  isLoading, 
  error: error?.message 
}, null, 2)}
        </pre>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Filters:</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm">
{JSON.stringify(filters, null, 2)}
        </pre>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Items Data:</h2>
        <pre className="bg-gray-100 p-2 rounded text-sm max-h-96 overflow-auto">
{JSON.stringify(items, null, 2)}
        </pre>
      </div>
    </div>
  );
}

"use client"

import { MenuSchema } from '@/features/menu/menu.schema';
import { MenuAdminConfig } from '@/features/menu/menu.admin-config';
import { SimpleAdminPage } from '@/shared/components/atoms/ui/simple-admin-page';

export default function MenuAdminPage() {
  return (
    <SimpleAdminPage
      config={MenuAdminConfig}
      schema={MenuSchema}
    />
  );
}

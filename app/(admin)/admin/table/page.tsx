"use client";
import { TableSchema } from '@/features/table/table.schema';
import { TableAdminConfig } from '@/features/table/table.admin-config';
import { SimpleAdminPage } from '@/shared/components/atoms/ui/simple-admin-page';

export default function TableAdminPage() {
  return (
    <SimpleAdminPage
      config={TableAdminConfig}
      schema={TableSchema}
    />
  );
}
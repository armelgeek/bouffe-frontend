"use client"

import { OrderSchema } from '@/features/order/order.schema';
import { OrderAdminConfig } from '@/features/order/order.admin-config';
import { SimpleAdminPage } from '@/shared/components/atoms/ui/simple-admin-page';

export default function OrderAdminPage() {
  return (
    <SimpleAdminPage
      config={{ ...OrderAdminConfig, parent: undefined }}
      schema={OrderSchema}
    />
  );
}

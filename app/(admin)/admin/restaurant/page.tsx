"use client";

import { RestaurantSchema } from '@/features/restaurant/restaurant.schema';
import { RestaurantAdminConfig } from '@/features/restaurant/restaurant.admin-config';
import { SimpleAdminPage } from '@/shared/components/atoms/ui/simple-admin-page';

export default function RestaurantAdminPage() {
  return (
    <SimpleAdminPage
      config={RestaurantAdminConfig}
      schema={RestaurantSchema}
    />
  );
}

"use client";
import { SettingsSchema } from '@/features/settings/settings.schema';
import { SettingsAdminConfig } from '@/features/settings/settings.admin-config';
import { SimpleAdminPage } from '@/shared/components/atoms/ui/simple-admin-page';

export default function SettingsAdminPage() {
  return (
    <SimpleAdminPage
      config={SettingsAdminConfig}
      schema={SettingsSchema}
    />
  );
}
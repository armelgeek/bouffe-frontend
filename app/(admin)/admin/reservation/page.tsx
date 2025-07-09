"use client";
import { ReservationSchema } from '@/features/reservation/reservation.schema';
import { ReservationAdminConfig } from '@/features/reservation/reservation.admin-config';
import { SimpleAdminPage } from '@/shared/components/atoms/ui/simple-admin-page';

export default function ReservationAdminPage() {
  return (
    <SimpleAdminPage
      config={ReservationAdminConfig}
      schema={ReservationSchema}
    />
  );
}
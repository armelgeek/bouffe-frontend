"use client";

import { useEffect, useState } from 'react';
import { Card } from '@/shared/components/atoms/ui/card';
import { Button } from '@/shared/components/atoms/ui/button';
import { useRouter } from 'next/navigation';

type ReservationRecap = {
  name: string;
  date: string;
  time: string;
  guests: number;
  phone: string;
  email: string;
};

export default function ReservationConfirmation() {
  const [recap, setRecap] = useState<ReservationRecap | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('reservation-recap');
    if (data) setRecap(JSON.parse(data));
  }, []);

  if (!recap) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary/10">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="text-lg text-gray-500 mb-4">Aucune réservation à afficher.</div>
          <Button onClick={() => router.push('/reservation')}>Faire une réservation</Button>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary/10">
      <Card className="max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-primary mb-4 text-center">Réservation confirmée</h1>
        <div className="text-green-600 text-center font-semibold mb-6">
          Merci {recap.name} !<br />Votre réservation est enregistrée.
        </div>
        <div className="mb-4">
          <div className="font-medium mb-1">Récapitulatif :</div>
          <ul className="text-gray-700 text-sm space-y-1">
            <li><b>Date :</b> {recap.date}</li>
            <li><b>Heure :</b> {recap.time}</li>
            <li><b>Nombre de personnes :</b> {recap.guests}</li>
            <li><b>Téléphone :</b> {recap.phone}</li>
            <li><b>Email :</b> {recap.email}</li>
          </ul>
        </div>
        <Button className="w-full mt-4" onClick={() => router.push('/')}>{"Retour à l'accueil"}</Button>
      </Card>
    </main>
  );
}
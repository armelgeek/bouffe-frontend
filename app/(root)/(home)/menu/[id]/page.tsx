"use client";

import { useRouter } from 'next/navigation';
import { useMenu } from '@/features/menu/hooks/use-menu';
import { Card } from '@/shared/components/atoms/ui/card';
import { Button } from '@/shared/components/atoms/ui/button';

export default function MenuDetailPage({ params }: { params: { id: string } }) {
  const { data: menu } = useMenu();
  const router = useRouter();
  const plat = menu?.data?.find((item) => item.id === params.id);

  if (!plat) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary/10">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="text-lg text-gray-500 mb-4">Plat introuvable.</div>
          <Button onClick={() => router.push('/menu')}>Retour à la carte</Button>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary/10">
      <Card className="max-w-xl w-full p-8 flex flex-col md:flex-row gap-8 items-center">
        {plat.image && (
          <img src={plat.image} alt={plat.name} className="w-40 h-40 object-cover rounded-2xl shadow-md" />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-primary mb-2">{plat.name}</h1>
          <div className="text-gray-500 mb-2">{plat.category}</div>
          <div className="text-lg mb-4">{plat.description}</div>
          <div className="font-bold text-2xl text-accent mb-2">{plat.price} €</div>
          {plat.allergens && (
            <div className="text-sm text-red-400 mb-2">Allergènes : {plat.allergens}</div>
          )}
          <div className="text-sm text-gray-400 mb-2">Préparation : {plat.preparationTime} min</div>
          <div className="text-sm text-gray-400 mb-2">Cuisson : {plat.cookingMethod}</div>
          <Button className="mt-4" onClick={() => router.push('/menu')}>Retour à la carte</Button>
        </div>
      </Card>
    </main>
  );
}
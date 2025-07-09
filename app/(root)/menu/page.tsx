"use client";

import { useMenu } from '@/features/menu/hooks/use-menu';
import { Button } from '@/shared/components/atoms/ui/button';
import { Card } from '@/shared/components/atoms/ui/card';
import { useState } from 'react';

const CATEGORIES = ['Entrée', 'Plat principal', 'Dessert', 'Boisson'];

export default function MenuPage() {
  const { data: menu } = useMenu();
  const [category, setCategory] = useState<string | null>(null);

  const plats = menu?.data || [];
  const filtered = category ? plats.filter((p) => p.category === category) : plats;

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-primary/10 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">La Carte</h1>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <Button
            variant={!category ? 'default' : 'outline'}
            onClick={() => setCategory(null)}
          >
            Tous
          </Button>
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? 'default' : 'outline'}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500">Aucun plat trouvé.</div>
          )}
          {filtered.map((item) => (
            <Card key={item.id} className="flex flex-col items-center p-6">
              {item.image && <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-full mb-3" />}
              <div className="font-semibold text-xl mb-1">{item.name}</div>
              <div className="text-gray-500 text-sm mb-2 text-center">{item.description}</div>
              <div className="font-bold text-primary text-lg mb-2">{item.price} €</div>
              <div className="text-xs text-gray-400 mb-1">{item.category}</div>
              {item.allergens && <div className="text-xs text-red-400">Allergènes : {item.allergens}</div>}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
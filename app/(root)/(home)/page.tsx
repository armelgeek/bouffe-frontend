"use client";

import { Button } from '@/shared/components/atoms/ui/button';
import { Card } from '@/shared/components/atoms/ui/card';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-primary/10">
      {/* Section Hero */}
      <section className="text-center py-16 bg-primary text-white">
        <h1 className="text-5xl font-bold mb-4">Bienvenue chez [Nom du Restaurant]</h1>
        <p className="text-lg mb-6">Découvrez nos spécialités et réservez votre table dès maintenant.</p>
        <Button size="lg" variant="secondary">Voir le menu</Button>
      </section>

      {/* Section À propos */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">À propos de nous</h2>
        <p className="text-gray-600 text-center">
          [Insérez une description du restaurant, son histoire, ses valeurs, etc.]
        </p>
      </section>

      {/* Section Menu en vedette */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Menu en vedette</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemple de plats */}
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-6">
              <h3 className="font-bold text-xl mb-2">Plat {item}</h3>
              <p className="text-gray-500">Description du plat {item}.</p>
              <p className="font-bold text-primary mt-2">Prix : {item * 10} €</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button size="lg" variant="primary">Voir tout le menu</Button>
        </div>
      </section>

      {/* Section Réservations */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Réservez votre table</h2>
        <p className="text-gray-600 mb-6">Planifiez votre visite dès aujourd'hui.</p>
        <Button size="lg" variant="primary">Réserver maintenant</Button>
      </section>

      {/* Section Avis des clients */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Avis des clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemple d'avis */}
          {[1, 2, 3].map((review) => (
            <Card key={review} className="p-6">
              <p className="text-gray-600">"Avis {review} : Excellent service et plats délicieux !"</p>
              <p className="text-sm text-gray-500 mt-2">- Client {review}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Section Contact */}
      <section className="text-center py-12 bg-primary text-white">
        <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-2">Adresse : [Adresse du restaurant]</p>
        <p className="mb-2">Téléphone : [Numéro de téléphone]</p>
        <p className="mb-2">Horaires : [Horaires d'ouverture]</p>
      </section>
    </main>
  );
}
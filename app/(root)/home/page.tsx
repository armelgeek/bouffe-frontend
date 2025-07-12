"use client";

import { useMenu } from '@/features/menu/hooks/use-menu';
import { useSettings } from '@/features/settings/hooks/use-settings';
import { Button } from '@/shared/components/atoms/ui/button';
import { Card } from '@/shared/components/atoms/ui/card';
import { Badge } from '@/shared/components/atoms/ui/badge';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const { data: menu } = useMenu();
  const { data: settings } = useSettings();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-primary/10">
      <header className="py-16 text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold font-saira text-primary drop-shadow-lg">
          {settings?.name || 'Le Restaurant'}
        </h1>
        <p className="text-xl text-gray-700 max-w-xl mx-auto">
          {settings?.description || 'Réservez votre table et découvrez notre carte gourmande !'}
        </p>
        <Button size="lg" className="mt-4" onClick={() => router.push('/reservation')}>Réserver une table</Button>
      </header>

      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-accent">Notre Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menu?.data?.slice(0, 6).map((item) => (
            <Card
              key={item.id}
              className="flex flex-col items-center p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => router.push(`/menu/${item.id}`)}
              tabIndex={0}
              role="button"
              aria-label={`Voir le détail du plat ${item.name}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/menu/${item.id}`); }}
            >
              {item.image && <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-full mb-2" />}
              <div className="font-semibold text-lg mb-1 text-primary underline underline-offset-2 flex items-center gap-2">
                {item.name}
                {item.specialOffer && (
                  <span className="ml-1">
                    <Badge variant="accent">Offre spéciale</Badge>
                  </span>
                )}
              </div>
              <div className="text-gray-500 text-sm mb-2">{item.description}</div>
              <div className="font-bold text-primary">{item.price} €</div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" onClick={() => router.push('/menu')}>Voir toute la carte</Button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-primary">Réservez votre table en ligne</h3>
          <p className="mb-4 text-gray-700">Choisissez la date, l’heure et le nombre de convives. Confirmation immédiate.</p>
          <Button size="lg" onClick={() => router.push('/reservation')}>Accéder à la réservation</Button>
        </div>
        <div className="flex-1 bg-white/80 rounded-xl shadow-md p-6">
          <h4 className="font-semibold mb-2">Infos pratiques</h4>
          <ul className="text-gray-700 space-y-1">
            <li><b>Adresse :</b> {settings?.address || 'Adresse du restaurant'}</li>
            <li><b>Horaires :</b> {settings?.openingHours || 'Tous les jours 12h-22h'}</li>
            <li><b>Téléphone :</b> {settings?.phone || '01 23 45 67 89'}</li>
            <li><b>Paiement :</b> {settings?.paymentMethods?.join(', ') || 'CB, Espèces, Ticket resto'}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
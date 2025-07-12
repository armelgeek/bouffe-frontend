"use client";

import { useState } from 'react';
import { useCartStore } from '@/features/shop/cart.store';
import { Button } from '@/shared/components/atoms/ui/button';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const [isPaying, setIsPaying] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      alert('Paiement simulé avec succès !');
      clearCart();
      setIsPaying(false);
    }, 2000); 
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="font-bold text-primary">{item.price} €</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    if (item.id) updateQuantity(item.id, parseInt(e.target.value, 10));
                  }}
                  className="w-16 border rounded px-2 py-1 text-center"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    if (item.id) removeFromCart(item.id);
                  }}
                >
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-6">
            <Button size="lg" variant="destructive" onClick={clearCart}>
              Vider le panier
            </Button>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold">Total : {total.toFixed(2)} €</p>
            <Button
              size="lg"
              variant="primary"
              onClick={handlePayment}
              disabled={isPaying}
            >
              {isPaying ? 'Paiement en cours...' : 'Payer'}
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
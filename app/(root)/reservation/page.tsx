"use client";

import { useState } from 'react';
import { Button } from '@/shared/components/atoms/ui/button';
import { Card } from '@/shared/components/atoms/ui/card';
import { useMutation } from '@tanstack/react-query';
import { reservationService } from '@/features/reservation/reservation.mock';

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: 2,
    phone: '',
    email: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (data: typeof form) =>
      reservationService.createItem({
        date: new Date(data.date + 'T' + data.time),
        time: data.time,
        status: 'pending',
        tableId: '',
        customerName: data.name,
        customerEmail: data.email,
        customerPhone: data.phone,
        numberOfGuests: Number(data.guests),
        paymentStatus: 'unpaid',
        paymentMethod: '',
        amount: 0,
        notes: '',
      }),
    onSuccess: () => {
      setSuccess(true);
      setError(null);
    },
    onError: (err: unknown) => {
      if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: unknown }).message === 'string') {
        setError((err as { message: string }).message);
      } else {
        setError('Erreur lors de la réservation');
      }
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-primary/10 py-12 flex items-center justify-center">
      <Card className="max-w-lg w-full p-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary text-center">Réserver une table</h1>
        {success ? (
          <div className="text-green-600 text-center font-semibold py-8">
            Réservation enregistrée !<br />Vous recevrez une confirmation par email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Nom</label>
              <input name="name" value={form.name} onChange={handleChange} required className="input w-full" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="input w-full" />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Heure</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="input w-full" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Nombre de personnes</label>
              <select name="guests" value={form.guests} onChange={handleChange} className="input w-full">
                {[...Array(12)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Téléphone</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="input w-full" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="input w-full" />
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <Button type="submit" className="w-full mt-4" disabled={mutation.isPending}>
              {mutation.isPending ? 'Réservation en cours...' : 'Réserver'}
            </Button>
          </form>
        )}
      </Card>
    </main>
  );
}
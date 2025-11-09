import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Giulia R.',
    text: 'Finalmente un percorso che ha rispettato i miei ritmi. Ho imparato a mangiare meglio senza rinunce.',
  },
  {
    name: 'Marco S.',
    text: 'Professionale e chiara. I risultati sono arrivati e mi sento più energico che mai!',
  },
  {
    name: 'Elena P.',
    text: 'Supporto costante e piani davvero personalizzati. Consigliatissima!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Cosa dicono i clienti</h2>
          <p className="mt-3 text-slate-600">Recensioni reali di persone seguite nel tempo.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{t.text}”</p>
              <p className="mt-4 text-sm font-medium text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

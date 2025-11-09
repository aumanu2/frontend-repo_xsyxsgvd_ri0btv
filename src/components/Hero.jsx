import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Nutrizione su misura per la tua vita
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Piani alimentari personalizzati, supporto continuo e un approccio scientifico per aiutarti a raggiungere il tuo benessere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contatti" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-base font-medium text-white hover:bg-emerald-700">
              Prenota una consulenza
            </a>
            <a href="#servizi" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">
              Scopri i servizi
            </a>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-slate-700">
            {[
              'Piani personalizzati',
              'Educazione alimentare',
              'Supporto continuo',
              'Approccio evidence-based',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-2xl bg-emerald-100/60 ring-1 ring-emerald-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
              alt="Cibo sano colorato in piatti"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-4 ring-1 ring-slate-100">
            <p className="text-sm font-medium text-slate-800">Oltre 500+ clienti seguiti</p>
            <p className="text-xs text-slate-500">Dal 2018 con te, passo dopo passo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

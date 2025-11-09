import React from 'react';
import { Salad, HeartPulse, Dumbbell, Baby, Users } from 'lucide-react';

const services = [
  {
    icon: Salad,
    title: 'Percorsi dimagrimento',
    desc: 'Programmi sostenibili che rispettano i tuoi gusti e il tuo stile di vita, senza rinunce estreme.'
  },
  {
    icon: HeartPulse,
    title: 'Educazione alimentare',
    desc: 'Impara a leggere le etichette, comporre i pasti e gestire le porzioni con consapevolezza.'
  },
  {
    icon: Dumbbell,
    title: 'Nutrizione sportiva',
    desc: 'Strategie nutrizionali per migliorare performance, recupero e composizione corporea.'
  },
  {
    icon: Baby,
    title: 'Gravidanza e allattamento',
    desc: 'Supporto nutrizionale in fasi delicate per mamma e bambino, con piani equilibrati.'
  },
  {
    icon: Users,
    title: 'Nutrizione clinica',
    desc: 'Gestione alimentare per patologie come diabete, ipertensione, dislipidemie e disturbi gastrointestinali.'
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Servizi</h2>
          <p className="mt-3 text-slate-600">Un percorso personalizzato costruito sulle tue esigenze.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all bg-white">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

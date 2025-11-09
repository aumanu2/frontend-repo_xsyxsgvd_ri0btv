import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In un progetto reale invieremmo i dati ad un backend o a un servizio email.
    setSent(true);
  }

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Prenota una consulenza</h2>
            <p className="mt-3 text-slate-600">Raccontami i tuoi obiettivi: risponderò entro 24 ore lavorative.</p>

            <div className="mt-6 space-y-3">
              <p className="flex items-center gap-2 text-slate-700"><Phone className="h-5 w-5 text-emerald-600"/> +39 000 000 0000</p>
              <p className="flex items-center gap-2 text-slate-700"><Mail className="h-5 w-5 text-emerald-600"/> info@studionutrizionista.it</p>
              <p className="flex items-center gap-2 text-slate-700"><MapPin className="h-5 w-5 text-emerald-600"/> Via Esempio 123, Milano</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="nome@mail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Messaggio</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Parlami dei tuoi obiettivi"
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Invia richiesta
              </button>
              {sent && (
                <p className="text-sm text-emerald-700">Grazie! Ti contatterò al più presto.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

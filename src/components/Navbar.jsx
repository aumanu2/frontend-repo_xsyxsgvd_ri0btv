import React from 'react';
import { Leaf, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg">Studio Nutrizionistico</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#servizi" className="hover:text-emerald-600 transition-colors">Servizi</a>
          <a href="#chi-siamo" className="hover:text-emerald-600 transition-colors">Chi sono</a>
          <a href="#contatti" className="hover:text-emerald-600 transition-colors">Contatti</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+390000000000" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
            <Phone className="h-4 w-4" />
            Chiama
          </a>
          <a href="#contatti" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            <Mail className="h-4 w-4" />
            Prenota
          </a>
        </div>
        <div className="md:hidden">
          <a href="#contatti" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
            Prenota
          </a>
        </div>
      </nav>
    </header>
  );
}

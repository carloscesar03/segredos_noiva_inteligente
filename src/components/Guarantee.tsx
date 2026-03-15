import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-white text-zinc-900 py-16 md:py-24 px-4 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-12 h-12 text-emerald-500" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 text-zinc-900">
          Risco Zero Absoluto.
        </h2>
        
        <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-sm">
          <p className="text-2xl md:text-3xl font-bold text-emerald-600 mb-6">
            Você tem 7 dias de garantia incondicional.
          </p>
          
          <p className="text-lg md:text-xl text-zinc-700 leading-relaxed mb-8 font-medium">
            Se você não encontrar pelo menos UMA dica que te faça economizar no mínimo 10x o valor que pagou no guia (ou seja, R$ 150), basta me mandar um único e-mail. Eu devolvo seus R$ 15 na mesma hora.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-lg font-bold text-zinc-900">
            <span className="bg-white px-6 py-3 rounded-full border border-zinc-200 shadow-sm">
              Sem perguntas.
            </span>
            <span className="bg-white px-6 py-3 rounded-full border border-zinc-200 shadow-sm">
              Sem letras miúdas.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

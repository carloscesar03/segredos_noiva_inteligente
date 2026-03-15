import { ArrowRight, XCircle, CheckCircle } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function Summary() {
  return (
    <section className="bg-zinc-100 text-zinc-900 py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-16 text-center text-zinc-900">
          Resumindo
        </h2>
        
        <p className="text-2xl font-bold text-center text-zinc-700 mb-12">
          Você tem duas opções.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Opção 1 */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border-t-4 border-red-500 flex flex-col items-center text-center">
            <XCircle className="w-16 h-16 text-red-500 mb-6" />
            <h3 className="text-2xl font-black text-zinc-900 mb-4 uppercase tracking-wider">A primeira:</h3>
            <p className="text-lg text-zinc-600 leading-relaxed mb-4">
              Fechar essa página, continuar pedindo orçamentos e...
            </p>
            <p className="text-xl font-bold text-red-600">
              aceitar pagar a "Taxa Noiva", gastando R$ 40.000 ou mais para realizar seu casamento.
            </p>
          </div>

          {/* Opção 2 */}
          <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-emerald-500 flex flex-col items-center text-center transform md:-translate-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">A segunda:</h3>
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              Investir o valor de um lanche no iFood hoje para...
            </p>
            <p className="text-xl font-bold text-emerald-400">
              descobrir os segredos da indústria e ter o casamento dos sonhos gastando 3x menos.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-zinc-200 text-center">
          <p className="text-2xl md:text-3xl font-bold text-zinc-800 mb-8 leading-tight">
            Com apenas <span className="text-emerald-600 font-black">R$15</span>, você terá acesso ao guia que mostra exatamente como fazer isso.
          </p>
          
          <p className="text-xl text-zinc-600 mb-10 font-medium">
            Clique no botão abaixo e comece agora a planejar o casamento que você sempre sonhou.
          </p>

          <div className="flex justify-center gap-6 mb-10 text-lg font-bold text-emerald-700">
            <span className="flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Sem dívidas.</span>
            <span className="flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Sem estresse.</span>
          </div>

          <a 
            href="https://payfast.greenn.com.br/sk6m7hy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-xl mx-auto bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl py-5 px-8 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center uppercase tracking-wide text-center"
          >
            QUERO COMEÇAR AGORA <ArrowRight className="ml-3 w-6 h-6" />
          </a>
          
          <TrustBadges className="text-zinc-500 mt-6" />

          <div className="mt-8 pt-8 border-t border-zinc-100">
            <p className="text-lg font-medium text-zinc-500 uppercase tracking-widest mb-2">
              A oportunidade está aqui.
            </p>
            <p className="text-2xl font-black text-zinc-900">
              Agora a decisão é sua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

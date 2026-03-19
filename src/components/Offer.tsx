import { CheckCircle2, Unlock, ShieldCheck, RefreshCw } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function Offer() {
  return (
    <section className="bg-zinc-50 text-zinc-900 py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 text-zinc-900">
          Tudo o que você vai receber hoje:
        </h2>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-200 mb-12 text-left">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            
            {/* Coluna 1: O que vai aprender (Curiosidade) */}
            <div className="md:col-span-3">
              <h3 className="text-3xl font-black text-emerald-600 mb-8 uppercase tracking-tight">
                O Guia Completo
              </h3>
              
              {/* Imagem no mobile */}
              <div className="block md:hidden mb-8">
                <img 
                  src="https://i.postimg.cc/rwcm4FGF/mockup_principal_noivas_Photoroom.webp" 
                  alt="Mockup do Guia Segredos da Noiva Inteligente" 
                  className="w-full h-auto object-contain drop-shadow-xl" 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                />
              </div>

              <ul className="space-y-6 text-lg font-medium text-zinc-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900">O "Imposto Invisível":</strong> A palavra proibida que você nunca deve dizer ao pedir um orçamento se não quiser pagar o dobro.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900">A Regra dos 15 Minutos:</strong> O pequeno ajuste de horário que pode cortar o custo do aluguel do local pela metade.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900">O Segredo do Buffet:</strong> O formato de cardápio elegante que alimenta melhor e custa 40% menos que o tradicional.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900">A Tática da Data:</strong> Os dias exatos do ano em que os fornecedores premium imploram por clientes e dão descontos absurdos.</span>
                </li>
              </ul>
            </div>

            {/* Coluna 2: Bônus e Garantias */}
            <div className="md:col-span-2 bg-zinc-50 p-8 rounded-3xl border border-zinc-100 shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-zinc-900 mb-8 pb-4 border-b border-zinc-200">
                Vantagens Inclusas:
              </h3>
              <ul className="space-y-6 text-lg font-bold text-zinc-700">
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Unlock className="w-5 h-5 text-emerald-600" />
                  </div>
                  Acesso Vitalício
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-emerald-600" />
                  </div>
                  Atualizações Futuras
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  Garantia de 7 Dias
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-zinc-100 text-center">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">
              O preço de um lanche no iFood para salvar o seu casamento
            </p>
            <div className="flex flex-col items-center justify-center mb-8">
              <span className="text-zinc-400 line-through text-2xl mb-1 font-medium">De R$ 97,00</span>
              <span className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight">
                por R$ 27,00
              </span>
              <span className="text-emerald-600 font-bold mt-2 bg-emerald-50 px-3 py-1 rounded-full text-sm">
                Pagamento único. Sem mensalidades.
              </span>
            </div>
            
            <a 
              href="https://payfast.greenn.com.br/sk6m7hy/offer/P9mMuj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-2xl mx-auto flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl md:text-2xl py-5 px-8 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide text-center"
            >
              QUERO ACESSO IMEDIATO AO DOSSIÊ
            </a>
            <TrustBadges className="text-zinc-500 mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

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
              <h3 className="text-2xl font-black text-emerald-600 mb-8 uppercase tracking-tight">
                Um conteúdo prático e estratégico para ajudar você a planejar um casamento bonito, inteligente e muito mais alinhado ao que realmente gera impacto.
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
                  <span><strong className="text-zinc-900">Segredos da Noiva Inteligente:</strong> O guia principal com a lógica que ajuda você a evitar desperdícios, priorizar melhor seu orçamento e fazer escolhas que aumentam a percepção de elegância.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900">Direcionamento Estratégico para Decidir com Clareza:</strong> Para sair da confusão, reduzir o impulso nas escolhas e entender o que realmente vale a pena no seu casamento.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900">Estrutura Prática para Economizar com Inteligência:</strong> Para não cair na armadilha de gastar demais em detalhes que quase não mudam a experiência dos convidados.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-7 h-7 text-emerald-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-zinc-900">Visão Mais Sofisticada e Menos Emocional sobre o Orçamento:</strong> Para organizar suas decisões com mais segurança e criar um evento bonito sem parecer apertado ou improvisado.</span>
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
            <p className="text-zinc-800 font-bold text-xl md:text-2xl mb-4">
              Um único erro evitado já pode fazer esse material se pagar várias vezes.
            </p>
            <p className="text-zinc-600 font-medium text-lg mb-8 max-w-2xl mx-auto">
              Você não está comprando informação. Está comprando clareza para não desperdiçar dinheiro no seu grande dia.
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
              href="https://payfast.greenn.com.br/redirect/273530" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-2xl mx-auto flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl md:text-2xl py-5 px-8 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide text-center"
            >
              QUERO ACESSO IMEDIATO AO DOSSIÊ
            </a>
            <p className="text-zinc-500 text-sm mt-4 font-medium">
              No checkout, você poderá adicionar materiais complementares opcionais para aumentar ainda mais sua organização e seu poder de negociação.
            </p>
            <TrustBadges className="text-zinc-500 mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

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
        </div>

        {/* SEÇÃO DE BÔNUS */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-zinc-900">
            E para deixar sua decisão ainda mais inteligente, hoje você também recebe 3 bônus especiais
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-12">
            Esses materiais complementares foram criados para aumentar sua clareza, evitar erros que tiram a percepção de sofisticação e ajudar você a fazer escolhas mais estratégicas do início ao fim.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bônus 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-100 flex flex-col h-full relative mt-4 md:mt-0">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap shadow-sm">
                🎁 Bônus Especial
              </div>
              <div className="w-full bg-zinc-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-zinc-100 p-6">
                <img 
                  src="https://i.postimg.cc/BQ730Xkh/bonus01_mockup_tablet.webp" 
                  alt="Mockup Bônus 1" 
                  className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3 leading-tight text-left">
                Os 7 Erros que Fazem um Casamento Perder a Aparência de Sofisticação
              </h4>
              <p className="text-zinc-600 text-sm mb-6 flex-grow text-left">
                Descubra quais escolhas podem fazer um casamento parecer mais simples do que deveria — e como evitar esses erros com mais harmonia, bom gosto e inteligência visual.
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-zinc-400 line-through text-sm font-medium">De: R$ 19,90</span>
                <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">Grátis hoje</span>
              </div>
            </div>

            {/* Bônus 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-100 flex flex-col h-full relative mt-8 md:mt-0">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap shadow-sm">
                🎁 Bônus Especial
              </div>
              <div className="w-full bg-zinc-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-zinc-100 p-6">
                <img 
                  src="https://i.postimg.cc/FH2QYw9T/bonus02_mockup_tablet.webp" 
                  alt="Mockup Bônus 2" 
                  className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3 leading-tight text-left">
                Os Pontos que Mais Geram Impacto em um Casamento Bonito e Inteligente
              </h4>
              <p className="text-zinc-600 text-sm mb-6 flex-grow text-left">
                Entenda onde vale mais a pena focar quando a meta é impressionar seus convidados, transmitir elegância e criar uma experiência memorável sem exagerar no orçamento.
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-zinc-400 line-through text-sm font-medium">De: R$ 17,90</span>
                <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">Grátis hoje</span>
              </div>
            </div>

            {/* Bônus 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-100 flex flex-col h-full relative mt-8 md:mt-0">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full whitespace-nowrap shadow-sm">
                🎁 Bônus Especial
              </div>
              <div className="w-full bg-zinc-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-zinc-100 p-6">
                <img 
                  src="https://i.postimg.cc/Y0qccH3S/bonus03_mockup_tablet.webp" 
                  alt="Mockup Bônus 3" 
                  className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300" 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3 leading-tight text-left">
                Método Rápido para Tomar Decisões sem Confusão e sem Impulso
              </h4>
              <p className="text-zinc-600 text-sm mb-6 flex-grow text-left">
                Um guia prático para ajudar você a sair do excesso de referências, reduzir decisões por ansiedade e escolher com mais clareza, segurança e estratégia.
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-zinc-400 line-through text-sm font-medium">De: R$ 19,90</span>
                <span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full">Grátis hoje</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-zinc-800 max-w-3xl mx-auto">
              Só esses 3 bônus já ajudam você a enxergar o casamento com mais estratégia, sofisticação e clareza. E hoje eles acompanham sua compra sem custo adicional.
            </p>
          </div>
        </div>

        {/* BLOCO DE VALOR TOTAL DA OFERTA */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-200 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-zinc-900 mb-10">
            Veja o valor real de tudo o que você recebe hoje
          </h3>
          
          <div className="max-w-2xl mx-auto text-left mb-10 space-y-5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-100 pb-4 gap-2">
              <span className="text-lg font-medium text-zinc-700">Segredos da Noiva Inteligente</span>
              <span className="text-lg font-bold text-zinc-900">R$ 97,00</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-100 pb-4 gap-2">
              <span className="text-lg font-medium text-zinc-700">Bônus 1: Os 7 Erros que Fazem um Casamento Perder a Aparência de Sofisticação</span>
              <span className="text-lg font-bold text-zinc-900">R$ 19,90</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-100 pb-4 gap-2">
              <span className="text-lg font-medium text-zinc-700">Bônus 2: Os Pontos que Mais Geram Impacto em um Casamento Bonito e Inteligente</span>
              <span className="text-lg font-bold text-zinc-900">R$ 17,90</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-100 pb-4 gap-2">
              <span className="text-lg font-medium text-zinc-700">Bônus 3: Método Rápido para Tomar Decisões sem Confusão e sem Impulso</span>
              <span className="text-lg font-bold text-zinc-900">R$ 19,90</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xl font-bold text-zinc-500">Total:</span>
              <span className="text-xl font-bold text-zinc-400 line-through">R$ 154,70</span>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img 
              src="https://i.postimg.cc/rwcm4FGF/mockup_principal_noivas_Photoroom.webp" 
              alt="Mockup do Guia Segredos da Noiva Inteligente" 
              className="w-full max-w-sm md:max-w-md h-auto object-contain drop-shadow-2xl" 
              loading="lazy" 
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-8">
            <span className="text-zinc-600 font-bold uppercase tracking-widest text-sm mb-2">Hoje por apenas:</span>
            <span className="text-6xl md:text-7xl font-black text-emerald-600 tracking-tight">
              R$ 27,00
            </span>
            <span className="text-emerald-700 font-bold mt-4 bg-emerald-50 px-4 py-2 rounded-full text-sm">
              Pagamento único. Acesso vitalício.
            </span>
          </div>

          <p className="text-zinc-600 font-medium text-lg mb-10 max-w-2xl mx-auto">
            Você leva um pacote pensado para ajudar a economizar com mais inteligência, evitar erros e criar um casamento com percepção de muito mais valor — por menos do que muitos detalhes pequenos custariam no impulso.
          </p>
          
          <a 
            href="https://payfast.greenn.com.br/redirect/273530" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-2xl mx-auto flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl md:text-2xl py-5 px-8 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide text-center"
          >
            QUERO ACESSO IMEDIATO AO DOSSIÊ + BÔNUS
          </a>
          <p className="text-zinc-500 text-sm mt-4 font-medium">
            No checkout, você poderá adicionar materiais complementares opcionais para aumentar ainda mais sua organização e seu poder de negociação.
          </p>
          <TrustBadges className="text-zinc-500 mt-6" />
        </div>
      </div>
    </section>
  );
}

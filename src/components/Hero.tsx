import { CheckCircle2 } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function Hero() {
  return (
    <section className="relative bg-zinc-900 text-white overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-emerald-500/20 text-emerald-400 font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-6 border border-emerald-500/30 uppercase">
          Atenção: Para noivas com orçamento apertado
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
          O segredo que a indústria de casamentos <span className="text-emerald-400">reza para você nunca descobrir.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Como organizar um casamento de "capa de revista" gastando até <strong className="text-white">3x menos que a média</strong> — sem que nenhum convidado perceba que você economizou.
        </p>

        {/* SUGESTÃO DE IMAGEM: Antes e Depois ou Contraste */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <img 
            src="https://i.postimg.cc/rwcm4FGF/mockup_principal_noivas_Photoroom.webp" 
            alt="Mockup do Guia Segredos da Noiva Inteligente" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
            loading="lazy" 
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-6">
            <span className="text-zinc-400 line-through text-xl mb-1">De R$ 97,00</span>
            <span className="text-4xl md:text-5xl font-black text-white">por apenas R$ 27,00</span>
          </div>
          
          <a 
            href="https://payfast.greenn.com.br/sk6m7hy/offer/P9mMuj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-xl mx-auto flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg md:text-xl py-5 px-8 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide text-center"
          >
            QUERO DESCOBRIR O SEGREDO AGORA
          </a>
          <TrustBadges className="text-zinc-400 mt-4" />
        </div>
      </div>
    </section>
  );
}

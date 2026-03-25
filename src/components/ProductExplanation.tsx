export default function ProductExplanation() {
  return (
    <section className="bg-zinc-100 text-zinc-900 py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed text-zinc-700">
        
        <p className="font-black text-3xl md:text-4xl text-zinc-900 mb-8 text-center tracking-tight">
          A verdade sobre a <span className="text-red-500">"Taxa Noiva"</span>
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 mb-10">
          <p className="text-xl font-bold text-zinc-900 mb-4">
            A "Taxa Noiva" é quando o preço sobe não porque ficou melhor — mas porque você está emocionalmente vulnerável e o mercado sabe disso.
          </p>
          <ul className="space-y-3 text-lg text-zinc-700 list-disc pl-5">
            <li>O mesmo item muda de preço quando ganha o rótulo "casamento".</li>
            <li>A emoção da data faz muita noiva aceitar valores sem critério.</li>
            <li>O problema não é pagar por qualidade; é pagar caro no que não aumenta percepção.</li>
          </ul>
        </div>

        <p className="font-bold text-zinc-900 text-2xl text-center mb-12">
          O mercado lucra mais quando a noiva compra no emocional e decide sem estratégia.
        </p>

        {/* Carrossel de Prova Social / WhatsApp */}
        <div className="w-full my-12">
          <p className="text-center text-zinc-900 font-bold text-2xl mb-2 px-4">
            Enquanto muita noiva se perde em dica solta da internet, aqui você encontra uma lógica prática de decisão.
          </p>
          <p className="text-center text-zinc-500 font-bold uppercase tracking-widest text-sm mb-6">
            O que dizem as noivas que aplicaram o método
          </p>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar">
            <div className="snap-center shrink-0 w-[85%] md:w-[60%] lg:w-[45%]">
              <img 
                src="https://i.postimg.cc/Y2GJw54J/depoimento01_juliana.webp" 
                alt="Depoimento Juliana" 
                className="w-full h-auto rounded-2xl shadow-lg border border-zinc-200 object-cover" 
                loading="lazy" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="snap-center shrink-0 w-[85%] md:w-[60%] lg:w-[45%]">
              <img 
                src="https://i.postimg.cc/3r4PHs4H/depoimento02_carla_bh.webp" 
                alt="Depoimento Carla" 
                className="w-full h-auto rounded-2xl shadow-lg border border-zinc-200 object-cover" 
                loading="lazy" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="snap-center shrink-0 w-[85%] md:w-[60%] lg:w-[45%]">
              <img 
                src="https://i.postimg.cc/BZLdGrL9/depoimento03_fernanda_sp.webp" 
                alt="Depoimento Fernanda" 
                className="w-full h-auto rounded-2xl shadow-lg border border-zinc-200 object-cover" 
                loading="lazy" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="text-center text-zinc-400 text-sm mt-2">
            Deslize para ver mais ➔
          </p>
        </div>

        <div className="bg-zinc-900 p-8 md:p-10 rounded-3xl shadow-2xl mt-12 text-white">
          <p className="font-black text-2xl md:text-3xl text-emerald-400 mb-6 leading-tight">
            Não se trata de cortar tudo. Se trata de saber exatamente onde o dinheiro gera impacto — e onde ele evapora.
          </p>

          <p className="mb-8 text-zinc-300 text-lg">
            Eu recompilei toda a minha experiência real e visão prática para criar um guia focado não em "casamento barato", mas sim em <strong>casamento inteligente</strong>.
          </p>

          <ul className="space-y-4 font-medium text-zinc-100">
            <li className="flex items-start">
              <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 text-sm">✓</span>
              <span>Você não vai precisar cortar convidados.</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 text-sm">✓</span>
              <span>Você não vai precisar servir comida ruim.</span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 text-sm">✓</span>
              <span>Você vai ter o casamento que sempre sonhou, mas pagando o preço justo.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

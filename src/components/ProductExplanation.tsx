export default function ProductExplanation() {
  return (
    <section className="bg-zinc-100 text-zinc-900 py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed text-zinc-700">
        
        <p className="font-black text-3xl md:text-4xl text-zinc-900 mb-8 text-center tracking-tight">
          A verdade sobre a <span className="text-red-500">"Taxa Noiva"</span>
        </p>

        <p>
          Você já reparou que alugar um salão para um "aniversário" custa R$ 2.000, mas se você disser que é para um "casamento", o mesmo salão, no mesmo dia, pula para R$ 6.000?
        </p>

        <p className="font-bold text-zinc-900 text-2xl">
          Isso não é coincidência. É um modelo de negócios.
        </p>

        <p>
          A indústria de casamentos movimenta bilhões por ano baseada em uma única emoção: <strong>o seu sonho.</strong> Eles sabem que você está vulnerável, ansiosa e disposta a fazer de tudo para que o dia seja perfeito.
        </p>

        <blockquote className="border-l-4 border-emerald-500 pl-6 py-4 italic font-medium text-xl md:text-2xl text-zinc-800 bg-white shadow-sm rounded-r-xl my-10">
          "Eles cobram 3x mais porque sabem que a maioria das noivas tem vergonha de negociar ou medo de parecer 'pobre'."
        </blockquote>

        <p>
          Mas e se você soubesse exatamente o que dizer para quebrar essa lógica? E se você tivesse em mãos o roteiro exato para negociar como uma profissional, cortando até 70% dos custos sem perder 1% da elegância?
        </p>

        {/* Carrossel de Prova Social / WhatsApp */}
        <div className="w-full my-12">
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
            O Dossiê Anti-Indústria: Segredos da Noiva Inteligente
          </p>

          <p className="mb-8 text-zinc-300">
            Eu recompilei todas as brechas, táticas de negociação e segredos de bastidores que os fornecedores de luxo usam, e transformei em um manual prático para você.
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

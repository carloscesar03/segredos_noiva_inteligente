export default function WhatYouWillLearn() {
  return (
    <section className="bg-white text-zinc-900 py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-16 text-center text-zinc-900">
          O que você vai aprender
        </h2>

        <div className="space-y-12">
          {/* Passo 01 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm">
              01
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                Como o mercado de casamentos infla preços
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Você vai entender por que muitos fornecedores aumentam valores automaticamente quando ouvem a palavra “casamento”.
              </p>
              <p className="text-lg font-medium text-emerald-600">
                E como evitar pagar esse “imposto invisível”.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-100"></div>

          {/* Passo 02 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm">
              02
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                O planejamento que economiza milhares
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Aprenda a escolher:
              </p>
              <ul className="space-y-3 mb-6 text-lg font-medium text-zinc-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  datas com descontos reais
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  horários que reduzem custos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  locais que parecem caros… mas custam muito menos
                </li>
              </ul>
              <p className="text-lg font-semibold text-zinc-900 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                Pequenas decisões que podem cortar até metade do orçamento.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-100"></div>

          {/* Passo 03 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm">
              03
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                O método para montar um casamento completo por menos de R$7.000
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                O guia mostra exatamente como dividir o orçamento entre:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['local', 'buffet', 'vestido', 'decoração', 'fotografia', 'música'].map((item) => (
                  <div key={item} className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 text-center font-semibold text-zinc-700 capitalize shadow-sm">
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-xl font-bold text-emerald-600">
                Criando uma celebração completa dentro de um valor realista.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

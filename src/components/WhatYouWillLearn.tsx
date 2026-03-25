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
                Como descobrir o que realmente faz um casamento parecer elegante
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                Você vai entender a diferença entre o que custa caro e o que realmente gera impacto visual para os seus convidados.
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
                Como evitar gastar em detalhes que quase ninguém percebe
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Aprenda a identificar os "impostos invisíveis" e os gastos desnecessários que a indústria tenta te empurrar.
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
                Como distribuir melhor o orçamento para gerar mais impacto visual
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Como organizar seu orçamento sem cair na ilusão de que tudo precisa ser caro para parecer sofisticado.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-100"></div>

          {/* Passo 04 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm">
              04
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                Como tomar decisões sem cair na pressão de fornecedor
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Como decidir com clareza para não gastar por impulso e se arrepender depois.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-100"></div>

          {/* Passo 05 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm">
              05
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-zinc-800 mb-4">
                Como criar sensação de sofisticação mesmo com orçamento controlado
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Estratégias práticas para elevar o nível do seu evento sem precisar estourar o limite que você definiu.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

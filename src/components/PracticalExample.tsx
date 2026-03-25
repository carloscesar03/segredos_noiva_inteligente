import { ArrowRight } from 'lucide-react';

export default function PracticalExample() {
  return (
    <section className="bg-zinc-900 text-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-16 text-center text-emerald-400">
          Um único ajuste inteligente já pode mudar muito o custo final do seu casamento
        </h2>

        <div className="bg-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-700/50">
          <div className="space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
            <p className="font-medium text-white text-2xl">
              Juliana queria casar no campo.
            </p>
            
            <p>
              Quando começou a pedir orçamentos, o básico não saía por menos de <span className="text-red-400 font-bold">R$ 35.000</span>.
            </p>
            
            <p className="italic text-zinc-400">
              Parecia impossível.
            </p>

            <div className="my-10 border-t border-zinc-700 pt-10">
              <p className="font-semibold text-emerald-400 mb-6">
                Então ela aplicou algumas das estratégias que você vai aprender neste guia:
              </p>
              
              <ul className="space-y-4 font-medium text-white">
                <li className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  negociou o local em uma data alternativa
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  usou iluminação simples para criar decoração elegante
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                  escolheu um formato de recepção mais inteligente
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-8 mt-10">
              <p className="font-black text-2xl text-emerald-400 mb-4 uppercase tracking-wider">
                Resultado:
              </p>
              <p className="text-xl text-white font-medium mb-4">
                Um casamento mágico que os convidados lembram até hoje.
              </p>
              <p className="text-3xl font-black text-emerald-400 bg-emerald-950/50 inline-block px-6 py-3 rounded-xl border border-emerald-800/50">
                Custo total: R$ 8.500 para 80 pessoas.
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-white mb-4">
                Você não precisa cortar o sonho. Precisa cortar desperdício disfarçado de necessidade.
              </p>
              <p className="text-xl text-emerald-400 font-medium mt-4">
                É perfeitamente possível realizar um casamento inesquecível e elegante gastando entre R$ 7.000 e R$ 9.000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

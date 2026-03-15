import { XCircle } from 'lucide-react';

export default function Bullets() {
  const pains = [
    "Você chora (ou quase) toda vez que recebe um orçamento de buffet ou decoração no WhatsApp.",
    "Sente que a palavra 'casamento' faz os fornecedores multiplicarem o preço por 5 magicamente.",
    "Está morrendo de medo de ter que fazer uma festa 'feia' ou 'simples demais' só porque não tem R$ 50 mil sobrando.",
    "Acha injusto ter que escolher entre a festa dos sonhos e a viagem de lua de mel (ou a entrada do apartamento).",
    "Está cansada de ouvir parentes dizendo que 'casamento é caro mesmo, tem que se endividar'."
  ];

  return (
    <section className="bg-white text-zinc-900 py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-center text-zinc-900 leading-tight">
          A dura realidade de ser noiva hoje...
        </h2>
        <p className="text-xl text-zinc-600 text-center mb-12 font-medium max-w-2xl mx-auto">
          Responda com sinceridade: quantas dessas situações abaixo você está vivendo agora?
        </p>
        
        <ul className="space-y-4">
          {pains.map((pain, index) => (
            <li key={index} className="flex items-start bg-red-50/50 p-6 rounded-2xl border border-red-100 transition-all hover:bg-red-50">
              <div className="flex-shrink-0 mt-1">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <p className="ml-4 text-lg md:text-xl text-zinc-800 font-medium leading-relaxed">
                {pain}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center bg-zinc-50 p-8 rounded-3xl border border-zinc-200">
          <p className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">
            Se você marcou "sim" para pelo menos uma...
          </p>
          <p className="text-xl text-zinc-600 font-medium">
            A culpa não é sua. Existe uma <strong className="text-zinc-900">"Taxa Invisível"</strong> que a indústria cobra apenas de noivas desavisadas. E eu vou te mostrar como se livrar dela.
          </p>
        </div>
      </div>
    </section>
  );
}

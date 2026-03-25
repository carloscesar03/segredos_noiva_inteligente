import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      hook: "Eu já tinha visto muita coisa na internet...",
      text: "Mas aqui foi a primeira vez que senti que alguém me mostrou o que realmente importa. O guia me deu uma direção clara e me salvou de gastar rios de dinheiro em coisas inúteis.",
      author: "Camila R."
    },
    {
      hook: "Só de evitar um erro que eu ia cometer...",
      text: "O material já se pagou. Eu ia fechar um contrato caríssimo por pura pressão do fornecedor. O método me deu clareza para decidir sem cair na armadilha de gastar com tudo.",
      author: "Amanda T."
    },
    {
      hook: "Gostei porque não é só economia...",
      text: "É inteligência para fazer o casamento parecer mais sofisticado. Meus convidados não precisam saber quanto eu gastei, eles só precisam sentir o impacto. E foi exatamente isso que aconteceu.",
      author: "Letícia e Bruno"
    }
  ];

  return (
    <section className="bg-zinc-100 text-zinc-900 py-16 md:py-24 px-4 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-16 text-center text-zinc-900">
          O que dizem as noivas que aplicaram o método
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-zinc-200 flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-xl font-bold text-zinc-900 mb-4 leading-snug">
                "{t.hook}"
              </p>
              <p className="text-zinc-600 mb-8 flex-1 leading-relaxed">
                {t.text}
              </p>
              <p className="font-bold text-emerald-700">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

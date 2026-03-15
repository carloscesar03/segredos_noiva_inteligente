import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      hook: "Achei que seria mais um PDF com dicas óbvias do Pinterest...",
      text: "Eu já tinha lido de tudo na internet. Mas o guia me mostrou um erro na escolha da data que ia me custar R$ 8.000 a mais no buffet. Só com essa dica, o guia se pagou mil vezes. Meu casamento foi impecável e sobrou dinheiro para a lua de mel.",
      author: "Camila R., casou com R$ 6.800"
    },
    {
      hook: "Meu maior medo era que o casamento parecesse 'barato'...",
      text: "Eu queria algo elegante, mas os orçamentos batiam R$ 40 mil. Apliquei o método de divisão de custos e a estratégia de iluminação. Meus convidados acharam que gastamos uma fortuna. Ninguém acreditou quando eu disse que foi menos de 7 mil.",
      author: "Amanda T., casou com R$ 5.900"
    },
    {
      hook: "Faltavam só 3 meses e nosso orçamento já tinha estourado...",
      text: "Estávamos desesperados e quase cancelando a festa. O guia nos ensinou a renegociar contratos já fechados e a cortar os 'impostos invisíveis' dos fornecedores. Conseguimos salvar a festa e ainda recuperar R$ 4.500 que já estavam perdidos.",
      author: "Letícia e Bruno, casaram com R$ 7.100"
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

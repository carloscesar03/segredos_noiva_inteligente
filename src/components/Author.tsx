export default function Author() {
  return (
    <section className="bg-zinc-50 text-zinc-900 py-16 md:py-24 px-4 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden bg-zinc-200 shadow-xl border-4 border-white relative">
          <img 
            src="https://i.postimg.cc/fRZLdT7M/foto_perfil_maria_oliveira_expert.webp" 
            alt="Maria Oliveira" 
            loading="lazy" 
            className="absolute inset-0 w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-zinc-900">
            Maria Oliveira
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 font-medium">
            É organizadora de eventos há mais de 10 anos e já ajudou centenas de noivas a realizarem casamentos memoráveis sem comprometer o orçamento familiar.
          </p>
          
          <p className="text-xl md:text-2xl font-bold text-emerald-600 leading-tight">
            Seu objetivo é provar que um casamento perfeito não depende de gastar fortunas — mas de fazer escolhas inteligentes.
          </p>
        </div>
      </div>
    </section>
  );
}

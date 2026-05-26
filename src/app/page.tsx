import Link from "next/link";

const profissionais = [
  {
    id: "eliana-adriao",
    nome: "Eliana Adrião",
    servico: "Epilação",
    slug: "eliana",
  },
  {
    id: "lice-lima",
    nome: "Lice Lima",
    servico: "Estética e cabelo",
    slug: "lice",
  },
  // Mais profissionais aqui (Sara)
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative w-full h-[700px] bg-brand-burgundy flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* FUTURE IMAGE SLOT: 
          <img src="/your-image.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-80" /> 
        */}
        <div className="z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h1 className="text-[40px] md:text-[64px] font-display font-regular text-white uppercase text-center leading-[1.1] mb-6">
            Seu cabelo e sua pele em boas mãos
          </h1>

          <p className="text-[18px] md:text-[20px] font-sans text-white text-center mb-8 max-w-lg">
            Um espaço com especialistas dedicadas a realçar a sua beleza
            natural.
          </p>

          <Link href="#profissionais">
            <button className="btn border-none bg-brand-blush text-brand-burgundy hover:brightness-95 rounded-full px-8 h-14 uppercase font-semibold text-[15px] tracking-wide">
              Agende Agora &rarr;
            </button>
          </Link>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-22 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1.5fr] gap-12 lg:gap-16 items-center">
        <div className="bg-white rounded-card p-8 md:p-10 shadow-sm border border-brand-warm">
          <h2 className="text-[32px] md:text-h2 font-display italic uppercase mb-4 text-brand-burgundy">
            Sobre Nós
          </h2>
          <p className="text-body text-brand-dark leading-relaxed">
            Parágrafo curto com a história e identidade do estúdio. Tom pessoal
            e acolhedor. De preferência 4/5 frases pra encaixar direitinho aqui.
          </p>
        </div>

        <div className="hidden lg:block w-[1px] h-3/4 bg-brand-warm mx-auto"></div>

        <div className="flex flex-col">
          <h2 className="text-[28px] md:text-[32px] font-display italic uppercase mb-8 text-center lg:text-left text-brand-burgundy">
            Nosso Fluxo de Agendamento
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-card p-6 flex flex-col items-center text-center shadow-sm border border-brand-warm">
              <span className="text-[32px] font-display text-brand-burgundy mb-2">
                1
              </span>
              <p className="text-[20px] font-sans text-brand-dark">
                Escolha a<br />
              </p>
              <p className="text-[20px] font-sans text-brand-dark font-semibold">
                profissional
              </p>
            </div>

            <div className="bg-white rounded-card p-6 flex flex-col items-center text-center shadow-sm border border-brand-warm">
              <span className="text-[32px] font-display text-brand-burgundy mb-2">
                2
              </span>
              <p className="text-[20px] font-sans text-brand-dark">Escolha seu</p>
              <p className="text-[20px] font-sans text-brand-dark font-semibold">
                serviço
              </p>
            </div>

            <div className="bg-white rounded-card p-6 flex flex-col items-center text-center shadow-sm border border-brand-warm">
              <span className="text-[32px] font-display text-brand-burgundy mb-2">
                3
              </span>
              <p className="text-[20px] font-sans text-brand-dark">
                Agende seu
              </p>
              <p className="text-[20px] font-sans text-brand-dark font-semibold">
                horário
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profissionais */}
      <section id="profissionais" className="py-22 px-6 md:px-12 w-full bg-white text-center">
        <h2 className="text-[32px] md:text-h2 font-display italic uppercase mb-12 text-brand-burgundy">
          Nossas Profissionais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 justify-items-center max-w-7xl mx-auto">
          {profissionais.map((profissional) => (
            <div key={profissional.id} className="group flex flex-col items-center">
              <div className="relative w-[300px] h-[300px] rounded-arch overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-brand-warm flex items-center justify-center">
                  <span className="text-brand-muted font-mono">[Foto: 300x300]</span>
                )
                </div>

                <div className="absolute inset-0 bg-brand-burgundy/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-6 gap-3 transition-all duration-300">
                  <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.9203 6.0505C18.7834 5.86991 18.5665 5.75324 18.3223 5.75315L9.32695 5.75C8.91265 5.74985 8.57667 6.08545 8.57653 6.49958C8.57638 6.9137 8.91212 7.24954 9.32643 7.24968L16.5172 7.2522L5.79779 17.9716C5.5049 18.2645 5.5049 18.7394 5.79779 19.0323C6.09069 19.3252 6.56556 19.3252 6.85845 19.0323L17.5725 8.31828L17.5748 15.4945C17.5749 15.9086 17.9109 16.2442 18.3252 16.2441C18.7395 16.244 19.0752 15.9081 19.0751 15.494L19.0722 6.56074C19.0853 6.38214 19.0346 6.19976 18.9203 6.0505Z"
                      fill="#FFF"
                    />
                  </svg>
                  <Link href={`/profissionais/${profissional.slug}`} className="text-[15px] font-sans text-white uppercase tracking-widest hover:underline">
                    Ver Serviços
                  </Link>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-1 items-center">
                <h3 className="text-h3 text-brand-burgundy uppercase">{profissional.nome}</h3>
                <p className="text-caption text-brand-muted">{profissional.servico}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

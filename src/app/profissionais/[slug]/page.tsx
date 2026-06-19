import Link from "next/link";
import Image from "next/image";
import { profissionais } from "@/data/profissionais";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return profissionais.map((profissional) => ({
    slug: profissional.slug,
  }));
}

export default async function ProfissionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const profissional = profissionais.find((p) => p.slug === slug);

  if (!profissional) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-brand-rosy py-12 px-6 md:px-12 lg:px-[150px]">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div className="w-full aspect-[4/5] lg:aspect-[3/4] bg-brand-blush rounded-[32px] overflow-hidden shadow-sm relative">
             {/* <Image src={profissional.foto} alt={profissional.nome} fill className="object-cover" /> */}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-[40px] md:text-display font-display text-text-dark mb-2">
              {profissional.nome}
            </h1>
            <h2 className="text-[24px] font-display text-text-muted mb-6">
              {profissional.servico}
            </h2>
            <p className="text-[16px] text-text-dark leading-relaxed font-sans mb-8 max-w-md">
              {profissional.bio}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={profissional.instagram.url} target="_blank" className="flex items-center gap-2 bg-brand-rose text-white px-5 py-3 rounded-full hover:brightness-95 transition-all">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"/></svg>
                <span className="text-[14px] font-sans tracking-wide font-medium">{profissional.instagram.handle}</span>
              </Link>
              <Link href={profissional.whatsapp.url} target="_blank" className="flex items-center gap-2 bg-brand-rose text-white px-5 py-3 rounded-full hover:brightness-95 transition-all">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6z"/></svg>
                <span className="text-[14px] font-sans tracking-wide font-medium">{profissional.whatsapp.display}</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-6 lg:p-16 shadow-sm border border-brand-warm relative mb-16 w-full">
          
          <div className="flex flex-col items-center justify-center mb-10">
            <h3 className="text-[32px] md:text-h2 font-display italic uppercase text-text-dark tracking-wide">SERVIÇOS</h3>
            <div className="w-16 h-[2px] bg-brand-rose mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
            
            <div className="bg-brand-rosy border border-border-light rounded-[24px] p-6 lg:p-10 w-full">
              <div className="flex items-center gap-3 mb-8 text-text-muted">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c-4-4-4-9-4-12 0-2 1-4 4-6 3 2 4 4 4 6 0 3 0 8-4 12z"/><path d="M12 22c-8-4-8-12-8-12s3-2 8 4"/><path d="M12 22c8-4 8-12 8-12s-3-2-8 4"/></svg>
                 <h4 className="text-[26px] font-display">Epilação</h4>
              </div>
              
              <div className="columns-1 md:columns-2 gap-x-12 space-y-3">
                <p className="font-sans text-[15px] leading-relaxed break-inside-avoid"><span className="text-text-muted">Virilha Simples</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$40</span></p>
                <p className="font-sans text-[15px] leading-relaxed break-inside-avoid"><span className="text-text-muted">Virilha Cavada</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$50</span></p>
                <p className="font-sans text-[15px] leading-relaxed break-inside-avoid"><span className="text-text-muted">Virilha Completa</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$60</span></p>
                <br className="hidden md:block" />
                <p className="font-sans text-[15px] leading-relaxed break-inside-avoid"><span className="text-text-muted">Antebraço</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$35</span></p>
                <p className="font-sans text-[15px] leading-relaxed break-inside-avoid"><span className="text-text-muted">Braço</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$50</span></p>
                <p className="font-sans text-[15px] leading-relaxed break-inside-avoid"><span className="text-text-muted">Costas</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$70</span></p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8">
              
              <div className="bg-brand-rosy border border-border-light rounded-[24px] p-6 lg:p-10 w-full">
                <div className="flex items-center gap-3 mb-8 text-text-muted">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  <h4 className="text-[26px] font-display">Design de sobrancelhas</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-sans text-[15px] leading-relaxed"><span className="text-text-muted">Design Simples</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$30</span></p>
                  <p className="font-sans text-[15px] leading-relaxed"><span className="text-text-muted">Design com Henna</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$50</span></p>
                  <p className="font-sans text-[15px] leading-relaxed"><span className="text-text-muted">Coloração</span> <span className="mx-1 text-text-muted/40">—</span> <span className="italic text-text-muted">R$40</span></p>
                </div>
              </div>

              <div className="bg-white border border-brand-rose rounded-[24px] p-6 lg:p-8 w-full flex flex-col justify-center">
                 <h4 className="font-sans text-[16px] font-bold text-text-dark tracking-wide mb-2 uppercase">Agenda Aberta!</h4>
                 <p className="font-sans text-[15px] text-text-dark leading-relaxed">Terça à Sexta - 09h - 18h<br/>Sábado - 09h - 14h</p>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 py-6 w-full max-w-lg mx-auto mb-10">
          <h3 className="text-[32px] md:text-h2 font-display italic text-text-dark">Ficou interessada?</h3>
          <Link href={profissional.whatsapp.url} target="_blank" className="w-full">
            <button className="w-full btn border-none bg-brand-rose text-white hover:brightness-95 rounded-full px-8 h-14 uppercase font-bold text-[14px] tracking-widest shadow-sm transition-transform hover:scale-[1.02]">
              Agende seu horário agora! &rarr;
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="w-full aspect-square bg-border-light rounded-card"></div>
            <div className="w-full aspect-square bg-border-light rounded-card"></div>
            <div className="w-full aspect-square bg-border-light rounded-card hidden lg:block"></div>
            <div className="w-full aspect-square bg-border-light rounded-card hidden lg:block"></div>
        </div>

      </div>
    </main>
  );
}
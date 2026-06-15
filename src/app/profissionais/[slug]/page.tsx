TypeScript

import Link from "next/link";
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
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-12 items-start">
          
          <div className="order-1 lg:col-start-1 lg:row-start-1 w-full aspect-[4/5] bg-brand-blush rounded-[32px] overflow-hidden shadow-sm relative">
          </div>

          <div className="order-2 lg:col-start-2 lg:row-start-1 bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-brand-warm flex flex-col">
            <h1 className="text-[40px] md:text-h1 font-display text-text-dark mb-2">
              {profissional.nome}
            </h1>
            <h2 className="text-[24px] font-display text-text-muted mb-6">
              {profissional.servico}
            </h2>
            <p className="text-[15px] md:text-body text-text-dark leading-relaxed font-sans mb-8 max-w-md">
              {profissional.bio}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={profissional.instagram.url} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-brand-rose text-white px-5 py-3 rounded-full hover:brightness-95 transition-all">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                <span className="text-[14px] font-sans tracking-wide font-medium">{profissional.instagram.handle}</span>
              </Link>
              
              <Link href={profissional.whatsapp.url} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-brand-rose text-white px-5 py-3 rounded-full hover:brightness-95 transition-all">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                <span className="text-[14px] font-sans tracking-wide font-medium">{profissional.whatsapp.display}</span>
              </Link>
            </div>
          </div>

          <div className="order-3 lg:col-start-2 lg:row-start-2 grid grid-cols-2 gap-4">
            <div className="rounded-[24px] border border-brand-rose bg-white p-6 flex flex-col items-center justify-center text-center">
              <span className="font-sans font-semibold text-text-dark leading-tight">Escolha o<br/>serviço</span>
            </div>
            <div className="rounded-[24px] border border-brand-rose bg-white p-6 flex flex-col items-center justify-center text-center">
              <span className="font-sans font-semibold text-text-dark leading-tight">Agende seu<br/>horário</span>
            </div>
          </div>

          <div className="order-4 lg:col-start-1 lg:row-start-2 lg:row-span-3 bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-brand-warm flex flex-col w-full h-full">
            <h3 className="text-[32px] font-display italic uppercase text-text-dark mb-8">SERVIÇOS</h3>
            
            <div className="flex flex-col gap-12">
              {profissional.servicos.map((categoria, catIdx) => (
                <div key={catIdx} className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8 border-b border-brand-warm/60 pb-8 last:border-0 last:pb-0">
                  <h4 className="text-[24px] font-display text-text-muted leading-tight">
                    {categoria.categoria}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {categoria.itens.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex font-sans text-[14px] text-text-dark">
                        {item.nome === "" ? (
                          <div className="h-4 w-full"></div>
                        ) : (
                          <>
                            <span className="flex-shrink-0">{item.nome}</span>
                            <span className="mx-2 text-text-muted/50">—</span>
                            <span className="flex-shrink-0">{item.preco}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-5 lg:col-start-2 lg:row-start-3 flex flex-col items-center gap-6 py-6">
            <h3 className="text-[32px] font-display italic text-text-muted">Ficou interessada?</h3>
            <Link href={profissional.whatsapp.url} target="_blank" className="w-full">
              <button className="w-full btn border-none bg-brand-rose text-white hover:brightness-95 rounded-full px-8 h-14 uppercase font-semibold text-[15px] tracking-wide shadow-sm transition-transform hover:scale-[1.02]">
                Agende seu horário agora! &rarr;
              </button>
            </Link>
          </div>

          <div className="order-6 lg:col-start-2 lg:row-start-4 grid grid-cols-2 gap-4">
             <div className="w-full aspect-square bg-brand-warm rounded-card"></div>
             <div className="w-full aspect-square bg-brand-warm rounded-card"></div>
             <div className="w-full aspect-square bg-brand-warm rounded-card"></div>
             <div className="w-full aspect-square bg-brand-warm rounded-card"></div>
          </div>

        </div>
      </div>
    </main>
  );
}
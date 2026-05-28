import Link from "next/link";
import { profissionais } from "@/data/profissionais";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return profissionais.map((profissional) => ({
    slug: profissional.slug,
  }));
}

export default function ProfissionalPage({ params }: { params: { slug: string } }) {
  const profissional = profissionais.find((p) => p.slug === params.slug);
  if (!profissional) {
    notFound();
  }

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center bg-brand-rosy px-6 text-center">
      
      <div className="bg-white p-12 md:p-20 rounded-[24px] shadow-sm border border-brand-warm flex flex-col items-center max-w-xl w-full">
        <h1 className="text-h1 md:text-display font-display italic uppercase text-brand-burgundy mb-6">
          Em Breve
        </h1>
        
        <p className="text-[18px] text-brand-dark mb-10 leading-relaxed">
          A página de portfólio da <b>{profissional.nome}</b> ainda está a ser desenhada com muito carinho. Fique de olho!
        </p>
        
        <Link href="/">
          <button className="btn border-none bg-brand-blush text-brand-burgundy hover:brightness-95 rounded-full px-8 h-14 uppercase font-semibold text-[15px] tracking-wide shadow-sm transition-transform hover:scale-105">
            &larr; Voltar para a Home
          </button>
        </Link>
      </div>

    </main>
  );
}
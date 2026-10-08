import { notFound } from "next/navigation";
import { profissionais } from "@/data/profissionais";
import ProfissionalHeader from "@/components/profissional/ProfissionalHeader";
import ServicosSection from "@/components/profissional/ServicosSection";
import ServicosLista from "@/components/profissional/ServicosLista";
import ServicosCatalogo from "@/components/profissional/ServicosCatalogo";
import AgendaCard from "@/components/profissional/AgendaCard";
import ContatoCTA from "@/components/profissional/ContatoCTA";

export function generateStaticParams() {
  return profissionais.map((p) => ({ slug: p.slug }));
}

export default async function ProfissionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profissional = profissionais.find((p) => p.slug === slug);

  if (!profissional) return notFound();

  return (
    <main className="min-h-screen bg-brand-rosy py-12 px-6 md:px-12 lg:px-[150px]">
      <div className="max-w-[1440px] mx-auto">
        <ProfissionalHeader profissional={profissional} />

        {profissional.layout === "lista" ? (
          // No modelo lista, a agenda fica dentro da própria seção de serviços
          <ServicosSection>
            <ServicosLista servicos={profissional.servicos} />
          </ServicosSection>
        ) : (
          <>
            <ServicosSection>
              <ServicosCatalogo catalogo={profissional.catalogo} />
            </ServicosSection>
            <div className="max-w-lg mx-auto mb-16">
              <AgendaCard />
            </div>
          </>
        )}

        <ContatoCTA whatsappUrl={profissional.whatsapp.url} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="w-full aspect-square bg-border-light rounded-card" />
          <div className="w-full aspect-square bg-border-light rounded-card" />
          <div className="w-full aspect-square bg-border-light rounded-card hidden lg:block" />
          <div className="w-full aspect-square bg-border-light rounded-card hidden lg:block" />
        </div>
      </div>
    </main>
  );
}

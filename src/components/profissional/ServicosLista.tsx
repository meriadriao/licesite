import Image from "next/image";
import type { CategoriaLista } from "@/data/profissionais";
import AgendaCard from "./AgendaCard";

function CategoriaCard({ categoria, colunas }: { categoria: CategoriaLista; colunas?: boolean }) {
  return (
    <div className="bg-brand-rosy border border-border-light rounded-[24px] p-6 lg:p-10 w-full">
      <div className="flex items-center gap-3 mb-8 text-text-muted">
        {categoria.icone && (
          <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
            <Image
              src={categoria.icone.src}
              alt=""
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        )}
        <h4 className="text-[26px] font-display">{categoria.categoria}</h4>
      </div>

      <div className={colunas ? "columns-1 md:columns-2 gap-x-12 space-y-3" : "flex flex-col gap-3"}>
        {categoria.itens.map((item, i) =>
          item.nome ? (
            <p key={`${item.nome}-${i}`} className="font-sans text-[15px] leading-relaxed break-inside-avoid">
              <span className="text-text-muted">{item.nome}</span>
              <span className="mx-1 text-text-muted/40">—</span>
              <span className="italic text-text-muted">{item.preco}</span>
            </p>
          ) : (
            <div key={`spacer-${i}`} className="h-4" />
          )
        )}
      </div>
    </div>
  );
}

// Modelo 1: lista de serviços com preços. A categoria com mais itens ocupa a
// coluna maior (em duas colunas de texto); as demais ficam empilhadas ao lado.
export default function ServicosLista({ servicos }: { servicos: CategoriaLista[] }) {
  if (servicos.length === 0) {
    return <p className="font-sans text-[15px] text-text-muted text-center">Serviços não cadastrados.</p>;
  }

  const principal = servicos.reduce((a, b) => (b.itens.length > a.itens.length ? b : a));
  const demais = servicos.filter((s) => s !== principal);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
      <CategoriaCard categoria={principal} colunas />

      <div className="flex flex-col gap-6 lg:gap-8">
        {demais.map((s) => (
          <CategoriaCard key={s.categoria} categoria={s} />
        ))}
        <AgendaCard />
      </div>
    </div>
  );
}

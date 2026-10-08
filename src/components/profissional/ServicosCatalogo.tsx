import Image from "next/image";
import type { CategoriaCatalogo } from "@/data/profissionais";

// Modelo 2: catálogo. Cada categoria é uma fileira de cards (foto, nome,
// descrição curta e preço) com rolagem horizontal no celular e grade no desktop.
export default function ServicosCatalogo({ catalogo }: { catalogo: CategoriaCatalogo[] }) {
  if (catalogo.length === 0) {
    return <p className="font-sans text-[15px] text-text-muted text-center">Serviços não cadastrados.</p>;
  }

  return (
    <div className="flex flex-col gap-12">
      {catalogo.map((cat) => (
        <section key={cat.categoria}>
          <h4 className="text-[26px] font-display text-text-muted text-center mb-6">{cat.categoria}</h4>

          <ul
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2
              lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none
            "
          >
            {cat.itens.map((item, i) => (
              <li
                key={`${item.nome}-${i}`}
                className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-auto bg-brand-rosy rounded-[16px] p-5 flex flex-col"
              >
                <div className="relative w-full aspect-square bg-border-light rounded-[8px] overflow-hidden mb-4">
                  {item.imagem && (
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      fill
                      sizes="(min-width: 1024px) 25vw, 78vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <h5 className="font-display text-[22px] text-text-muted leading-tight mb-2">{item.nome}</h5>
                <p className="font-sans text-[14px] text-text-muted leading-snug line-clamp-2 mb-4">
                  {item.descricao}
                </p>
                <span className="mt-auto font-sans text-[14px] font-bold text-text-muted uppercase">
                  {item.preco}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

import type { ReactNode } from "react";

// Moldura branca com o título "SERVIÇOS", compartilhada pelos dois modelos
export default function ServicosSection({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-[40px] p-6 lg:p-16 shadow-sm border border-brand-warm relative mb-16 w-full">
      <div className="flex flex-col items-center justify-center mb-10">
        <h3 className="text-[32px] md:text-h2 font-display italic uppercase text-text-dark tracking-wide">
          SERVIÇOS
        </h3>
        <div className="w-16 h-[2px] bg-brand-rose mt-2" />
      </div>
      {children}
    </div>
  );
}

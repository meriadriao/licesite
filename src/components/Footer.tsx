import Link from "next/link";

export default function Footer() {
  const waMessage = encodeURIComponent("Olá! Gostaria de agendar um horário.");
  const waNumber = "5579999508111";
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <footer className="bg-brand-rosy py-16 px-6 md:px-12 lg:px-[150px] w-full mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="flex flex-col gap-4 md:pr-8">
            <h3 className="font-display text-[24px] text-text-dark">
              Lice Lima Pele e Cabelo
            </h3>
            <p className="font-sans text-[15px] text-text-muted leading-relaxed">
              O seu refúgio de beleza e bem-estar no coração da cidade. Especialistas em realçar sua essência natural.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[13px] font-bold text-text-dark uppercase tracking-widest mb-2">
              Links Rápidos
            </h4>
            <Link href={waUrl} target="_blank" className="font-sans text-[15px] text-text-muted underline decoration-1 underline-offset-4 hover:text-brand-rose transition-colors w-fit">
              WhatsApp
            </Link>
            <Link href="https://www.instagram.com/licelimapelecabelo/" target="_blank" className="font-sans text-[15px] text-text-muted underline decoration-1 underline-offset-4 hover:text-brand-rose transition-colors w-fit">
              Instagram
            </Link>
            <Link href="#local" className="font-sans text-[15px] text-text-muted underline decoration-1 underline-offset-4 hover:text-brand-rose transition-colors w-fit">
              Localização
            </Link>
          </div>

          {/* Coluna 3: Horários e Local */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-[13px] font-bold text-text-dark uppercase tracking-widest mb-2">
              Horário de Atendimento
            </h4>
            <p className="font-sans text-[15px] text-text-muted">
              Segunda a Sexta: 08h às 18h
            </p>
            <p className="font-sans text-[15px] text-text-muted mb-4">
              Sábado: 08h às 14h
            </p>
            <div className="flex items-center gap-3 text-text-muted">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="font-sans text-[15px]">Aracaju, Sergipe</span>
            </div>
          </div>

        </div>

        {/* Bottom: Copyright */}
        <div className="flex flex-col items-center justify-center text-center gap-1 pt-8">
          <p className="font-sans text-[14px] text-text-muted/60">
            © 2026 Lice Lima Pele & Cabelo. Todos os direitos reservados.
          </p>
          <p className="font-sans text-[14px] text-text-muted/60">
            Desenvolvido por{" "}
            <Link href="https://www.behance.net/gamadriao" target="_blank" className="hover:text-brand-rose transition-colors">
              Gabriela Adrião
            </Link>.
          </p>
        </div>

      </div>
    </footer>
  );
}
export default function AgendaCard() {
  return (
    <div className="bg-white border border-brand-rose rounded-[24px] p-6 lg:p-8 w-full flex flex-col justify-center">
      <h4 className="font-sans text-[16px] font-bold text-text-dark tracking-wide mb-2 uppercase">
        Agenda Aberta!
      </h4>
      <p className="font-sans text-[15px] text-text-dark leading-relaxed">
        Terça à Sexta - 09h - 18h
        <br />
        Sábado - 09h - 12h
      </p>
    </div>
  );
}

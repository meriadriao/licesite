import Link from "next/link";

export default function ContatoCTA({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <div className="flex flex-col items-center gap-6 py-6 w-full max-w-lg mx-auto mb-10">
      <h3 className="text-[32px] md:text-h2 font-display italic text-text-dark">Ficou interessada?</h3>
      <Link href={whatsappUrl} target="_blank" className="w-full">
        <button className="w-full btn border-none bg-footer text-white hover:brightness-95 rounded-full px-8 h-14 uppercase font-display semi-bold text-[14px] tracking-widest shadow-sm transition-transform hover:scale-[1.02]">
          Agende seu horário! &rarr;
        </button>
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function SorteiosPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-rosy px-6 py-12">
      <div className="max-w-3xl w-full bg-white rounded-[32px] p-10 shadow-sm border border-brand-warm text-center">
        <h1 className="text-[36px] md:text-[42px] font-display text-text-dark mb-6">
          Sorteios
        </h1>
        <p className="text-[16px] md:text-[18px] text-text-muted mb-8 leading-relaxed">
          Esta página ainda está em construção. Volte para a página inicial para ver nossos profissionais e serviços.
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-brand-rose px-8 py-3 text-white font-semibold hover:brightness-95 transition-all">
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}

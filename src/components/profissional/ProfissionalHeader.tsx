import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { Profissional } from "@/data/profissionais";
import { profissionalImages } from "@/data/profissionalImages";

const pill =
  "flex items-center gap-2 bg-brand-rose text-white px-5 py-3 rounded-full hover:brightness-95 transition-all";

export default function ProfissionalHeader({ profissional }: { profissional: Profissional }) {
  const foto = profissionalImages[profissional.slug];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
      <div className="w-full aspect-[4/5] lg:aspect-[3/4] bg-brand-blush rounded-[32px] overflow-hidden shadow-sm relative">
        {foto && <Image src={foto} alt={profissional.nome} fill className="object-cover" />}
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-[40px] md:text-display font-display text-text-dark mb-2">
          {profissional.nome}
        </h1>
        <h2 className="text-[24px] font-display text-text-muted mb-6">{profissional.servico}</h2>
        <p className="text-[16px] text-text-dark leading-relaxed font-sans mb-8 max-w-md">
          {profissional.bio}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href={profissional.instagram.url} target="_blank" className={pill}>
            <FontAwesomeIcon icon={faInstagram} className="w-[18px] h-[18px]" />
            <span className="text-[14px] font-sans tracking-wide font-medium">
              {profissional.instagram.handle}
            </span>
          </Link>

          <Link href={profissional.whatsapp.url} target="_blank" className={pill}>
            <FontAwesomeIcon icon={faWhatsapp} className="w-[18px] h-[18px]" />
            <span className="text-[14px] font-sans tracking-wide font-medium">
              {profissional.whatsapp.display}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

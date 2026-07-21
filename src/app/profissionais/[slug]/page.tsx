import Image from "next/image";
import Link from "next/link";
import { profissionais } from "@/data/profissionais";
import { notFound } from "next/navigation";
import { profissionalImages } from "@/app/page";

export function generateStaticParams() {
  return profissionais.map((profissional) => ({
    slug: profissional.slug,
  }));
}

export default async function ProfissionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const profissional = profissionais.find((p) => p.slug === slug);

  if (!profissional) {
    return notFound();
  }

  const normalizeIconPath = (icone?: string | { src: string }) => {
    const src = typeof icone === "string" ? icone : icone?.src;
    return src
      ? src.replace(/\\/g, "/").replace(/^public/, "").replace(/^(?!\/)/, "/")
      : undefined;
  };

  const epilacaoService = profissional.servicos.find((service) =>
    service.categoria.toLowerCase().includes("epil")
  );
  const extraServices = profissional.servicos.filter(
    (service) => service !== epilacaoService
  );

  const epilacaoIconSrc = epilacaoService?.icone
    ? normalizeIconPath(epilacaoService.icone)
    : undefined;

  return (
    <main className="min-h-screen bg-brand-rosy py-12 px-6 md:px-12 lg:px-[150px]">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          <div className="w-full aspect-[4/5] lg:aspect-[3/4] bg-brand-blush rounded-[32px] overflow-hidden shadow-sm relative">
             {<Image src={profissionalImages[profissional.slug]} alt={profissional.nome} fill className="object-cover" />}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-[40px] md:text-display font-display text-text-dark mb-2">
              {profissional.nome}
            </h1>
            <h2 className="text-[24px] font-display text-text-muted mb-6">
              {profissional.servico}
            </h2>
            <p className="text-[16px] text-text-dark leading-relaxed font-sans mb-8 max-w-md">
              {profissional.bio}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={profissional.instagram.url} target="_blank" className="flex items-center gap-2 bg-brand-rose text-white px-5 py-3 rounded-full hover:brightness-95 transition-all">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z" fill="#343C54 "/>
<path d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z" fill="#343C54 "/>
</svg>

                <span className="text-[14px] font-sans tracking-wide font-medium">{profissional.instagram.handle}</span>
              </Link>

              <Link href={profissional.whatsapp.url} target="_blank" className="flex items-center gap-2 bg-brand-rose text-white px-5 py-3 rounded-full hover:brightness-95 transition-all">
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.074 4.89389C17.2091 3.02894 14.6689 2 12.0644 2C6.59814 2 2.12869 6.4373 2.12869 11.9035C2.12869 13.672 2.57885 15.3441 3.44702 16.8875L2.03223 22L7.33769 20.6495C8.78464 21.4212 10.4245 21.8714 12.0965 21.8714C17.5306 21.8392 21.9679 17.4019 21.9679 11.9035C21.9679 9.26688 20.939 6.791 19.074 4.89389ZM12.0322 20.1672C10.5853 20.1672 9.07403 19.7492 7.82001 18.9775L7.49846 18.7846L4.37949 19.5884L5.24766 16.5659L5.05473 16.2444C4.25088 14.926 3.80072 13.3826 3.80072 11.8392C3.80072 7.30547 7.46631 3.63987 12.0322 3.63987C14.2187 3.63987 16.2766 4.50804 17.82 6.05145C19.3634 7.59486 20.2316 9.68489 20.2316 11.9035C20.2959 16.5016 16.566 20.1672 12.0322 20.1672ZM16.566 13.9936C16.3088 13.865 15.119 13.254 14.8297 13.2219C14.6046 13.1254 14.4116 13.0932 14.283 13.3505C14.1544 13.6077 13.6399 14.1222 13.5113 14.3151C13.3827 14.4437 13.2541 14.508 12.9647 14.3473C12.7075 14.2187 11.9358 13.9936 10.9711 13.0932C10.2316 12.4502 9.71711 11.6463 9.62065 11.3569C9.49203 11.0997 9.5885 11.0032 9.74927 10.8424C9.87788 10.7138 10.0065 10.5852 10.103 10.3923C10.2316 10.2637 10.2316 10.135 10.3602 9.97428C10.4888 9.84566 10.3924 9.65274 10.328 9.52412C10.2316 9.3955 9.78142 8.17364 9.55634 7.65917C9.36342 7.1447 9.13834 7.24116 9.00972 7.24116C8.8811 7.24116 8.68817 7.24116 8.55956 7.24116C8.43094 7.24116 8.1094 7.27331 7.91647 7.5627C7.69139 7.81994 7.0483 8.43087 7.0483 9.65273C7.0483 10.8746 7.91647 12 8.07724 12.2251C8.20586 12.3537 9.84573 14.8939 12.2895 15.9871C12.8682 16.2444 13.3184 16.4051 13.7043 16.5338C14.283 16.7267 14.8297 16.6624 15.2477 16.6302C15.73 16.5981 16.6946 16.0514 16.9197 15.4405C17.1126 14.8939 17.1126 14.3473 17.0483 14.2508C16.984 14.1865 16.7911 14.09 16.566 13.9936Z" fill="#343C54"/>
                </svg>
                <span className="text-[14px] font-sans tracking-wide font-medium">{profissional.whatsapp.display}</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-6 lg:p-16 shadow-sm border border-brand-warm relative mb-16 w-full">
          
          <div className="flex flex-col items-center justify-center mb-10">
            <h3 className="text-[32px] md:text-h2 font-display italic uppercase text-text-dark tracking-wide">SERVIÇOS</h3>
            <div className="w-16 h-[2px] bg-brand-rose mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
            {epilacaoService ? (
              <div className="bg-brand-rosy border border-border-light rounded-[24px] p-6 lg:p-10 w-full">
                <div className="flex items-center gap-3 mb-8 text-text-muted">
                  {epilacaoIconSrc ? (
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                      <Image
                        src={epilacaoIconSrc}
                        alt={`${epilacaoService.categoria} icon`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  ) : null}
                  <h4 className="text-[26px] font-display">{epilacaoService.categoria}</h4>
                </div>
                <div className="columns-1 md:columns-2 gap-x-12 space-y-3">
                  {epilacaoService.itens.map((item, itemIndex) =>
                    item.nome ? (
                      <p
                        key={`${item.nome}-${itemIndex}`}
                        className="font-sans text-[15px] leading-relaxed break-inside-avoid"
                      >
                        <span className="text-text-muted">{item.nome}</span>
                        <span className="mx-1 text-text-muted/40">—</span>
                        <span className="italic text-text-muted">{item.preco}</span>
                      </p>
                    ) : (
                      <div
                        key={`spacer-${itemIndex}`}
                        className="h-4"
                      />
                    )
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-brand-rosy border border-border-light rounded-[24px] p-6 lg:p-10 w-full">
                <p className="font-sans text-[15px] text-text-muted">Serviços não cadastrados.</p>
              </div>
            )}

            <div className="flex flex-col gap-6 lg:gap-8">
              {extraServices.map((service, serviceIndex) => {
                const serviceIconSrc = normalizeIconPath(service.icone);
                return (
                  <div
                    key={`${service.categoria}-${serviceIndex}`}
                    className="bg-brand-rosy border border-border-light rounded-[24px] p-6 lg:p-10 w-full"
                  >
                    <div className="flex items-center gap-3 mb-8 text-text-muted">
                      {serviceIconSrc ? (
                        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                          <Image
                            src={serviceIconSrc}
                            alt={`${service.categoria} icon`}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                      ) : null}
                      <h4 className="text-[26px] font-display">{service.categoria}</h4>
                    </div>
                    <div className="flex flex-col gap-3">
                      {service.itens.map((item, itemIndex) =>
                        item.nome ? (
                          <p
                            key={`${item.nome}-${itemIndex}`}
                            className="font-sans text-[15px] leading-relaxed"
                          >
                            <span className="text-text-muted">{item.nome}</span>
                            <span className="mx-1 text-text-muted/40">—</span>
                            <span className="italic text-text-muted">{item.preco}</span>
                          </p>
                        ) : (
                          <div
                            key={`spacer-${itemIndex}`}
                            className="h-4"
                          />
                        )
                      )}
                    </div>
                  </div>
                );
              })}

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

            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 py-6 w-full max-w-lg mx-auto mb-10">
          <h3 className="text-[32px] md:text-h2 font-display italic text-text-dark">Ficou interessada?</h3>
          <Link href={profissional.whatsapp.url} target="_blank" className="w-full">
            <button className="w-full btn border-none bg-footer text-white hover:brightness-95 rounded-full px-8 h-14 uppercase font-display semi-bold text-[14px] tracking-widest shadow-sm transition-transform hover:scale-[1.02]">
              Agende seu horário! &rarr;
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="w-full aspect-square bg-border-light rounded-card"></div>
            <div className="w-full aspect-square bg-border-light rounded-card"></div>
            <div className="w-full aspect-square bg-border-light rounded-card hidden lg:block"></div>
            <div className="w-full aspect-square bg-border-light rounded-card hidden lg:block"></div>
        </div>

      </div>
    </main>
  );
}
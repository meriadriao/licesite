import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "../components/ScrollReveal";

import { profissionais } from "@/data/profissionais";

const placeholders = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  src: `/images/placeholder-${i + 1}.jpg`, // Local image
  alt: `Instagram photo ${i + 1}`,
}));

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-[700px] bg-brand-burgundy flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        <Image src="/images/foto hero section.jpg" alt="Foto em preto e branco de materiais de beleza (pentes e tesoura)." className="absolute inset-0 w-full h-full object-cover opacity-15" fill sizes="100vw" />
        <div className="z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h1 className="text-[40px] md:text-[64px] font-display font-regular text-white uppercase text-center leading-[1.1] mb-6">
            Seu cabelo e sua pele em boas mãos
          </h1>

          <p className="text-[18px] md:text-[20px] font-sans text-white text-center mb-8 max-w-lg">
            Um espaço com especialistas dedicadas a realçar a sua beleza
            natural.
          </p>

          <Link href="#profissionais">
            <button className="btn border-none bg-brand-blush text-brand-burgundy hover:brightness-95 rounded-full px-8 h-14 uppercase font-semibold text-[15px] tracking-wide">
              Agende Agora &rarr;
            </button>
          </Link>
        </div>
      </section>

      {/* Sobre Nós */}
      <section
        id="sobre"
        className="py-22 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1.5fr] gap-12 lg:gap-16 items-center"
      >
        <ScrollReveal>
          <div className="bg-white rounded-card p-8 md:p-10 shadow-sm border border-brand-warm">
            <h2 className="text-[32px] md:text-h2 font-display italic uppercase mb-4 text-brand-burgundy">
              Sobre Nós
            </h2>
            <p className="text-body text-brand-dark leading-relaxed">
              Parágrafo curto com a história e identidade do estúdio. Tom
              pessoal e acolhedor. De preferência 4/5 frases pra encaixar
              direitinho aqui.
            </p>
          </div>
        </ScrollReveal>

        <div className="hidden lg:block w-[1px] h-3/4 bg-brand-warm mx-auto"></div>

        <ScrollReveal>
          <div className="flex flex-col items-center">
            <h2 className="text-[28px] md:text-[32px] font-display italic uppercase mb-8 text-center lg:text-left text-brand-burgundy">
              Nosso Fluxo de Agendamento
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-brand-warm rounded-card p-6 flex flex-col items-center text-center border border-brand-muted transition-transform duration-300 hover:scale-105">
                <span className="text-[32px] font-display text-brand-burgundy mb-2">
                  1
                </span>
                <p className="text-[20px] font-sans text-brand-dark">
                  Escolha a<br />
                </p>
                <p className="text-[20px] font-sans text-brand-dark font-semibold">
                  profissional
                </p>
              </div>

              <div className="bg-brand-warm rounded-card p-6 flex flex-col items-center text-center border border-brand-muted transition-transform duration-300 hover:scale-105">
                <span className="text-[32px] font-display text-brand-burgundy mb-2">
                  2
                </span>
                <p className="text-[20px] font-sans text-brand-dark">
                  Escolha seu
                </p>
                <p className="text-[20px] font-sans text-brand-dark font-semibold">
                  serviço
                </p>
              </div>

              <div className="bg-brand-warm rounded-card p-6 flex flex-col items-center text-center border border-brand-muted transition-transform duration-300 hover:scale-105">
                <span className="text-[32px] font-display text-brand-burgundy mb-2">
                  3
                </span>
                <p className="text-[20px] font-sans text-brand-dark">
                  Agende seu
                </p>
                <p className="text-[20px] font-sans text-brand-dark font-semibold">
                  horário
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Profissionais */}
      <section
        id="profissionais"
        className="py-22 px-6 md:px-12 w-full bg-white text-center"
      >
        <ScrollReveal>
          <h2 className="text-[32px] md:text-h2 font-display italic uppercase mb-12 text-brand-burgundy">
            Nossas Profissionais
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 justify-items-center max-w-7xl mx-auto">
            {profissionais.map((profissional) => (
              <div
                key={profissional.id}
                className="group flex flex-col items-center"
              >
                <div className="relative w-[300px] h-[300px] rounded-arch overflow-hidden shadow-sm">
                  <div className="absolute inset-0 bg-brand-warm flex items-center justify-center">
                    <span className="text-brand-muted font-mono">
                      [Foto: 300x300]
                    </span>
                    )
                  </div>

                  <div className="absolute inset-0 bg-brand-burgundy/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-6 gap-3 transition-all duration-300">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9203 6.0505C18.7834 5.86991 18.5665 5.75324 18.3223 5.75315L9.32695 5.75C8.91265 5.74985 8.57667 6.08545 8.57653 6.49958C8.57638 6.9137 8.91212 7.24954 9.32643 7.24968L16.5172 7.2522L5.79779 17.9716C5.5049 18.2645 5.5049 18.7394 5.79779 19.0323C6.09069 19.3252 6.56556 19.3252 6.85845 19.0323L17.5725 8.31828L17.5748 15.4945C17.5749 15.9086 17.9109 16.2442 18.3252 16.2441C18.7395 16.244 19.0752 15.9081 19.0751 15.494L19.0722 6.56074C19.0853 6.38214 19.0346 6.19976 18.9203 6.0505Z"
                        fill="#FFF"
                      />
                    </svg>
                    <Link
                      href={`/profissionais/${profissional.slug}`}
                      className="text-[15px] font-sans text-white uppercase tracking-widest hover:underline"
                    >
                      Ver serviços
                    </Link>
                  </div>
                </div>

                <Link
                  href={`/profissionais/${profissional.slug}`}
                  className="mt-6 flex flex-col gap-1 items-center text-center"
                >
                  <h3 className="text-h3 text-brand-burgundy uppercase">
                    {profissional.nome}
                  </h3>
                  <p className="text-caption text-brand-muted">
                    {profissional.servico}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Instagram */}
      <section id="instagram" className="py-22 w-full bg-transparent">
        <ScrollReveal>
          <div className="relative max-w-[1440px] mx-auto overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {placeholders.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`aspect-square overflow-hidden bg-brand-warm ${index >= 4 ? "hidden md:block" : ""}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <Link
              href="https://www.instagram.com/licelimapelecabelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                           flex items-center gap-3 px-6 py-3 
                           bg-white rounded-full shadow-sm border border-brand-warm
                           transition-transform duration-300 hover:scale-105"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="text-brand-burgundy"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z" />
                <path d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z" />
              </svg>
              <span className="text-brand-dark font-display text-center text-body">
                INSTAGRAM
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Depoimentos */}
      <section
        id="depoimentos"
        className="py-22 px-6 w-full max-w-7xl mx-auto flex flex-col items-center"
      >
        <ScrollReveal>
          <h2 className="text-[32px] md:text-h2 font-display italic uppercase text-brand-burgundy mb-12 text-center">
            Depoimentos
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-[270px] flex flex-col items-center text-center bg-white rounded-[24px] p-8 shadow-sm border border-brand-warm transition-transform duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4 text-brand-burgundy">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-brand-dark leading-relaxed mb-6 flex-grow">
                “O espaço é <b>super agradável e climatizado!</b> Superou minhas
                expectativas, com profissionais atenciosas e com preço
                acessível. [...] Já indiquei para a minha família e com certeza
                voltarei.”
              </p>
              <p className="text-[12px] font-extrabold tracking-wider uppercase text-brand-dark">
                RAILANE B.
              </p>
            </div>
            <div className="w-[270px] flex flex-col items-center text-center bg-white rounded-[24px] p-8 shadow-sm border border-brand-warm transition-transform duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4 text-brand-burgundy">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-brand-dark leading-relaxed mb-6 flex-grow">
                “Amo esse lugar! Sempre que sou atendida,{" "}
                <b>
                  sinto que estou nas mãos certas e confio de olhos fechados
                </b>
                . O ambiente é super acolhedor [...] e{" "}
                <b>as profissionais são impecáveis</b> em tudo o que fazem.”
              </p>
              <p className="text-[12px] font-extrabold tracking-wider uppercase text-brand-dark">
                ISA R.
              </p>
            </div>

            <div className="w-[270px] flex flex-col items-center text-center bg-white rounded-[24px] p-8 shadow-sm border border-brand-warm transition-transform duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4 text-brand-burgundy">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-brand-dark leading-relaxed mb-6 flex-grow">
                “Espaço aconchegante, atendimento maravilhoso e profissionais
                incríveis. É raro encontrar{" "}
                <b>preço acessível e alta qualidade juntos</b>, mas aqui eles
                entregam os dois. Parabéns pelo trabalho!”
              </p>
              <p className="text-[12px] font-extrabold tracking-wider uppercase text-brand-dark">
                EMILY V.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Features */}
      <section id="features" className="py-22 px-15 w-full max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="w-full max-w-md mx-auto lg:mx-0 h-[450px] md:h-[550px] bg-brand-burgundy relative overflow-hidden shadow-sm">
              {/* Exemplo de como a imagem ficará depois:
               <img src="/sua-foto.jpg" alt="Profissional trabalhando" className="absolute inset-0 w-full h-full object-cover" />
             */}
            </div>

            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-h2 font-display italic uppercase text-brand-burgundy mb-12 text-center lg:text-left">
                Por que nos escolher?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center shrink-0 text-brand-dark">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M313 87.2c9.2-7.3 15-18.6 15-31.2 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 12.6 5.9 23.9 15 31.2L194.6 194.8c-10 15.7-31.3 19.6-46.2 8.4L88.9 158.7c4.5-6.4 7.1-14.3 7.1-22.7 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 21.8 17.5 39.6 39.2 40L87.8 393.5c4.7 31.3 31.6 54.5 63.3 54.5l273.8 0c31.7 0 58.6-23.2 63.3-54.5L520.8 176c21.7-.4 39.2-18.2 39.2-40 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 8.4 2.6 16.3 7.1 22.7l-59.4 44.6c-14.9 11.2-36.2 7.3-46.2-8.4L313 87.2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-display text-[22px] leading-tight text-brand-dark mb-1">
                      Confiança e cuidado
                    </h3>
                    <p className="font-sans text-[18px] font-semibold text-brand-dark tracking-wide">
                      Profissionais excelentes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center shrink-0 text-brand-dark">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M168.5 72l87.5 93 87.5-93-175 0zM383.9 99.1l-72.3 76.9 129 0-56.6-76.9zm50 124.9L78.1 224 256 420.3 433.9 224zM71.5 176l129 0-72.3-76.9-56.6 76.9zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z" />
                    </svg>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-display text-[22px] leading-tight text-brand-dark mb-1">
                      Qualidade premium
                    </h3>
                    <p className="font-sans text-[18px] font-semibold text-brand-dark tracking-wide">
                      Serviço que supera expectativas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center shrink-0 text-brand-dark">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z" />
                    </svg>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-display text-[22px] leading-tight text-brand-dark mb-1">
                      Atendimento acolhedor
                    </h3>
                    <p className="font-sans text-[18px] font-semibold text-brand-dark tracking-wide">
                      Sinta-se em casa conosco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center shrink-0 text-brand-dark">
                    <svg
                      width="18"
                      height="24"
                      viewBox="0 0 320 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z" />
                    </svg>
                  </div>
                  <div className="flex flex-col pt-1">
                    <h3 className="font-display text-[22px] leading-tight text-brand-dark mb-1">
                      Preço justo
                    </h3>
                    <p className="font-sans text-[18px] font-semibold text-brand-dark tracking-wide">
                      Excelente custo-benefício
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Mapa */}
      <section id="local" className="py-22 px-6 md:px-12 lg:px-[150px] max-w-[1440px] mx-auto w-full bg-white">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-h2 font-display italic uppercase text-brand-burgundy mb-10 text-center lg:text-left">
                Nosso Endereço
              </h2>
              <div className="flex flex-col gap-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center shrink-0 text-brand-dark">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 640 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M576 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L413.5 77.5 234.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C70.8 88.8 64 99.9 64 112l0 352c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 173.3 57.8c-4.3-6.4-8.5-13.1-12.6-19.9-11-18.3-21.9-39.3-30-61.8l-101.2-33.7 0-284.5 128 42.7 0 99.3c31-35.8 77-58.4 128-58.4 22.6 0 44.2 4.4 64 12.5L576 48zM512 224c-66.3 0-120 52.8-120 117.9 0 68.9 64.1 150.4 98.6 189.3 11.6 13 31.3 13 42.9 0 34.5-38.9 98.6-120.4 98.6-189.3 0-65.1-53.7-117.9-120-117.9zM472 344a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
                    </svg>
                  </div>
                  <p className="font-sans text-[18px] md:text-body font-regular text-brand-dark leading-snug">
                    R. Abgail Ferreira Araújo Ramos, 391 -
                    <br className="hidden sm:block" />
                    Ponto Novo, Aracaju - SE
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-blush flex items-center justify-center shrink-0 text-brand-dark">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                  </div>
                  <p className="font-sans text-[18px] md:text-body font-regular text-brand-dark leading-snug">
                    Terça à Sexta - 09h-18h
                    <br />
                    Sábado - 09h-14h
                  </p>
                </div>
                <Link href="#profissionais">
            <button className="btn border-none bg-brand-blush text-brand-burgundy rounded-full shadow-sm border border-brand-warm transition-transform duration-300 hover:scale-105 uppercase font-semibold text-[15px] tracking-wide">
              Agende Agora &rarr;
            </button>
          </Link>
              </div>
            </div>

            <div className="w-full h-[350px] md:h-[450px] rounded-[12px] overflow-hidden shadow-sm border border-brand-warm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1958.7117813714317!2d-37.0707096!3d-10.9313427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3b9e6d28ff9%3A0x33c210594ca48f02!2sSalao%20Lice%20Lima%20Pele%20e%20Cabelo!5e0!3m2!1spt-BR!2sbr!4v1779975235500!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa do Salão Lice Lima"
              ></iframe>
            </div>
            
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

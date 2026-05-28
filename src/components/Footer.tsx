import Link from "next/link";

export default function Footer() {
  // Formatação segura da mensagem e do número para o link do WhatsApp
  // Adicionei o "55" (Brasil) antes do DDD 79
  const waMessage = encodeURIComponent("Olá! Gostaria de agendar um horário.");
  const waNumber = "5579999508111";
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    // Fundo bordeaux com o mesmo padding lateral luxuoso do mapa
    <footer className="bg-brand-burgundy py-10 px-6 md:px-12 lg:px-[150px] w-full text-white mt-auto leading-tight">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        
        <div className="font-display text-[18px] md:text-[20px] uppercase tracking-widest text-center lg:text-left">
          Lice Lima Pele & Cabelo
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/licelimapelecabelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-blush transition-all hover:scale-110 duration-300"
            aria-label="Instagram"
          >
            <svg width="28" height="28" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </Link>

          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-blush transition-all hover:scale-110 duration-300"
            aria-label="WhatsApp"
          >
            <svg width="28" height="28" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </Link>
        </div>

        <div className="font-sans text-[14px] text-center lg:text-right text-white/80">
          Desenvolvido com 💖<br className="hidden lg:block" /> por{" "}
          <Link 
            href="https://www.behance.net/gamadriao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-brand-blush hover:underline transition-colors"
          >
            Gabriela Adrião
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
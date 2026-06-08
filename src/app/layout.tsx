import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lice Lima Pele & Cabelo",
  description:
    "Um espaço com especialistas dedicadas a realçar a sua beleza natural.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
</style>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
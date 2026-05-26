import type { Metadata } from "next";
import Navbar from "../components/Navbar";
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
        @import
        url('https://fonts.googleapis.com/css2?family=Baskervville:ital,wght@0,400..700;1,400..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

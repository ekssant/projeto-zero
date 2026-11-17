import type { Metadata } from "next";
import { Manrope, Inter, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Aprender em Foco",
    default: "Aprender em Foco — Psicopedagogia, Aprendizagem e Desenvolvimento Humano",
  },
  description:
    "Portal de Psicopedagogia com conteúdo baseado em evidências científicas sobre aprendizagem, cognição, desenvolvimento humano e intervenção para famílias, educadores e profissionais.",
  keywords: [
    "psicopedagogia",
    "aprendizagem",
    "dislexia",
    "discalculia",
    "TDAH",
    "intervenção psicopedagógica",
    "avaliação psicopedagógica",
    "desenvolvimento humano",
  ],
  authors: [{ name: "Aprender em Foco" }],
  openGraph: {
    siteName: "Aprender em Foco",
    title: "Aprender em Foco — Ciência, compreensão e intervenção para transformar a aprendizagem",
    description:
      "Conteúdo baseado em evidências científicas sobre Psicopedagogia, aprendizagem e desenvolvimento humano.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

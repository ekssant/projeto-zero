import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { SITE } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: "%s | Núcleo Equilibra",
    default:
      "Núcleo Equilibra — Psicologia e Psicopedagogia na Ilha do Governador",
  },
  description:
    "Avaliação e intervenção em dificuldades de aprendizagem e acompanhamento psicológico para crianças, adolescentes e adultos na Ilha do Governador, Rio de Janeiro.",
  keywords: [
    "psicopedagogia",
    "psicologia",
    "avaliação psicopedagógica",
    "dificuldades de aprendizagem",
    "autismo",
    "ABA",
    "terapia cognitivo-comportamental",
    "orientação de pais",
    "Ilha do Governador",
    "Rio de Janeiro",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: "Núcleo Equilibra — Equilíbrio para pensar, sentir e aprender",
    description:
      "Psicologia e Psicopedagogia na Ilha do Governador, RJ. Avaliação, intervenção e acompanhamento para todas as idades.",
    images: [
      {
        url: "/images/logo-lockup.webp",
        width: 1440,
        height: 1332,
        alt: "Núcleo Equilibra — Psicologia e Psicopedagogia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Núcleo Equilibra — Psicologia e Psicopedagogia",
    description:
      "Equilíbrio para pensar, sentir e aprender. Atendimento na Ilha do Governador, RJ.",
    images: ["/images/logo-lockup.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#c2cfb6",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE.name,
  description:
    "Clínica de Psicologia e Psicopedagogia com avaliação e intervenção em dificuldades de aprendizagem, psicoterapia e apoio ao neurodesenvolvimento.",
  url: SITE.url,
  telephone: SITE.phoneE164,
  areaServed: "Ilha do Governador, Rio de Janeiro - RJ",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  sameAs: [SITE.instagramUrl, SITE.whatsappUrl],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Ir para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContentCard } from "@/components/content-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { getAllArticles } from "@/content/articles";
import { getAllReferences } from "@/lib/content";

export const metadata = {
  title: "Aprender em Foco — Psicopedagogia, Aprendizagem e Desenvolvimento Humano",
  description:
    "Portal de Psicopedagogia com conteúdo baseado em evidências científicas sobre aprendizagem, cognição, desenvolvimento humano e intervenção para famílias, educadores e profissionais.",
};

const disorderCards = [
  {
    id: "dislexia",
    title: "Dislexia",
    description:
      "Transtorno específico de aprendizagem com prejuízo na leitura. Conheça características, critérios de referência e intervenção.",
    href: "/transtornos/dislexia",
  },
  {
    id: "discalculia",
    title: "Discalculia",
    description:
      "Dificuldades persistentes no senso numérico e na matemática. Saiba como identificar e intervir.",
    href: "/transtornos/discalculia",
  },
  {
    id: "escrita",
    title: "Expressão escrita",
    description:
      "Transtorno específico de aprendizagem com prejuízo na escrita: ortografia, frases e organização textual.",
    href: "/transtornos/expressao-escrita",
  },
  {
    id: "tdah",
    title: "TDAH",
    description:
      "Transtorno do neurodesenvolvimento. Funções executivas, repercussões na aprendizagem e estratégias educacionais.",
    href: "/transtornos/tdah",
  },
];

export default async function Home() {
  const allArticles = await getAllArticles();
  const recentArticles = allArticles.slice(0, 4);
  const allReferences = await getAllReferences();
  const highlightedReferences = allReferences.slice(0, 4);
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        {/* Hero */}
        <Hero />

        {/* O que é Psicopedagogia */}
        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="O que é Psicopedagogia?"
              description="A área que investiga como acontece a aprendizagem humana, seus fatores facilitadores e obstáculos, atuando na interface entre psicologia e pedagogia."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Educação",
                  text: "Explicar como acontece o processo de aprendizagem de forma clara e acessível.",
                },
                {
                  title: "Ciência",
                  text: "Apresentar conhecimentos atualizados sobre cognição, desenvolvimento e transtornos de aprendizagem.",
                },
                {
                  title: "Prática profissional",
                  text: "Mostrar a atuação psicopedagógica, avaliação e possibilidades de intervenção.",
                },
              ].map((item) => (
                <Card key={item.title} className="h-full border-secondary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-text leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quando procurar atendimento */}
        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Quando procurar atendimento?"
              description="Sinais que podem indicar dificuldades de aprendizagem e o momento adequado para buscar orientação profissional."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Leitura e escrita",
                  text: "Dificuldades persistentes em decodificar palavras, escrever ou compreender textos.",
                },
                {
                  title: "Matemática",
                  text: "Dificuldades com senso numérico, operações e raciocínio matemático.",
                },
                {
                  title: "Organização e atenção",
                  text: "Dificuldades de foco, planejamento de tarefas e autonomia nos estudos.",
                },
              ].map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-text leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild>
                <Link href="/atendimento">Entender o atendimento psicopedagógico</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Transtornos */}
        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Conheça os transtornos de aprendizagem"
              description="Páginas individuais com definição, características, critérios de referência e possibilidades de intervenção para cada condição."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {disorderCards.map((card) => (
                <Card key={card.id} className="h-full cursor-pointer group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-heading">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                  <Link
                    href={card.href}
                    className="absolute inset-0 z-10"
                    aria-label={`Ler mais sobre ${card.title}`}
                  />
                </Card>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground text-center">
              O TDAH é um transtorno do neurodesenvolvimento, não um transtorno
              específico de aprendizagem.
            </p>
          </div>
        </section>

        {/* Ciência aplicada */}
        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Ciência aplicada à aprendizagem"
              description="Conteúdos baseados em evidências científicas, com fontes verificáveis e classificação do nível de evidência."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Neurociência e cognição",
                  text: "Como o cérebro aprende: memória, atenção e funções executivas.",
                },
                {
                  title: "Desenvolvimento infantil",
                  text: "Etapas do desenvolvimento e sua relação com a alfabetização.",
                },
                {
                  title: "Educação inclusiva",
                  text: "Práticas de ensino que respeitam a diversidade de ritmos e formas de aprender.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-text leading-relaxed">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona o atendimento - timeline visual */}
        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Como funciona o atendimento?"
              description="Primeiro contato → Entrevista inicial → Investigação → Análise → Planejamento → Intervenção → Monitoramento → Reavaliação."
            />
            <div className="mt-12 flex flex-col md:flex-row gap-4">
              {[
                "Primeiro contato",
                "Entrevista inicial",
                "Investigação",
                "Análise",
                "Planejamento",
                "Intervenção",
                "Monitoramento",
                "Reavaliação",
              ].map((step, i) => (
                <div
                  key={step}
                  className="flex-1 flex flex-col items-center gap-2 relative"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      i % 2 === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-text"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className="text-xs text-muted-foreground text-center leading-tight">
                    {step}
                  </span>
                  {i < 7 && (
                    <div
                      className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-px h-4 bg-border"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground text-center">
              A avaliação psicopedagógica não equivale a diagnóstico médico,
              psicológico ou neuropsicológico.
            </p>
          </div>
        </section>

        {/* Conteúdos recentes */}
        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Conteúdos recentes"
              description="Artivos e materiais educativos organizados por tema."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentArticles.map((article) => (
                <ContentCard
                  key={article.id}
                  title={article.title}
                  description={article.summary}
                  href={`/artigos/${article.slug}`}
                  category={article.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Biblioteca científica */}
        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Biblioteca científica"
              description="Referências científicas organizadas por categoria, com autores, ano, resumo e DOI quando disponível."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlightedReferences.map((ref) => (
                <Card key={ref.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-heading leading-snug">
                      {ref.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <p className="text-xs text-muted-foreground">
                      {ref.authors} ({ref.year})
                    </p>
                    <p className="text-xs text-text">{ref.category}</p>
                    {ref.doi && (
                      <a
                        href={ref.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline underline-offset-2 hover:text-primary-dark"
                      >
                        Ver DOI
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild>
                <Link href="/biblioteca">Acessar a biblioteca científica completa</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA de contato */}
        <section className="px-4 py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-primary p-8 md:p-12 text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Precisa de orientação?
            </h2>
            <p className="text-primary-foreground/90 mb-8 leading-relaxed">
              Conteúdo educativo não substitui o atendimento de um
              psicopedagogo ou outro profissional qualificado.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contato">Fale conosco</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/biblioteca">Biblioteca científica</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-xs text-primary-foreground/80">
              <Phone className="w-4 h-4" /> contato@aprenderemfoco.exemplo
              <span className="w-px h-4 bg-primary-foreground/30" aria-hidden="true" />
              <Mail className="w-4 h-4" />
              <span className="w-px h-4 bg-primary-foreground/30" aria-hidden="true" />
              <MapPin className="w-4 h-4" /> Brasil
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Link from "next/link";
import { Users, School, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getArticleBySlug } from "@/content/articles";

export const metadata = {
  title: "Psicopedagogia",
  description:
    "Fundamentos da Psicopedagogia: conceito, desenvolvimento histórico, campos de atuação e fundamentos interdisciplinares.",
};

async function getPsicopedagogiaArticle() {
  return getArticleBySlug("o-que-e-psicopedagogia");
}

export default async function PsicopedagogiaPage() {
  const article = await getPsicopedagogiaArticle();

  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="O que é Psicopedagogia?"
              description="A área que investiga como acontece a aprendizagem humana, seus fatores facilitadores e obstáculos, atuando na interface entre psicologia e pedagogia."
            />
            {article && (
              <div className="mt-8 prose prose-lg text-text leading-relaxed" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
            )}
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Campos de atuação"
              description="O psicopedagogo atua em âmbitos clínico e institucional, distintos e complementares."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Atuação clínica",
                  icon: Users,
                  text: "Acompanhamento individualizado, avaliação psicopedagógica e intervenção nas dificuldades e transtornos de aprendizagem.",
                },
                {
                  name: "Atuação institucional",
                  icon: School,
                  text: "Atuação em escolas e instituições, com projetos pedagógicos, formação de professores e práticas inclusivas.",
                },
                {
                  name: "Responsabilidade ética",
                  icon: ShieldCheck,
                  text: "Sigilo profissional, respeito à LGPD e atendimento ao Código de Ética da ABPp.",
                },
              ].map((item) => (
                <Card key={item.name}>
                  <CardHeader className="flex flex-row items-center gap-3 pb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                    <CardTitle className="text-base">{item.name}</CardTitle>
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

        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Fundamentos interdisciplinares"
              description="A Psicopedagogia dialoga com a psicologia, a pedagogia, a neurociência e o estudo do desenvolvimento humano."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                "Psicologia do desenvolvimento e da aprendizagem",
                "Pedagogia e teorias da aprendizagem",
                "Neurociência cognitiva",
                "Linguagem e alfabetização",
                "Saúde e desenvolvimento humano",
                "Educação inclusiva",
              ].map((fund) => (
                <Card key={fund}>
                  <CardContent className="p-6 pt-4">
                    <p className="text-sm text-text leading-relaxed">{fund}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <Button asChild>
            <Link href="/atendimento">Ver como funciona o atendimento psicopedagógico</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

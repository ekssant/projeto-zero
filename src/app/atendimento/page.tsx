import Link from "next/link";
import { Users, FileText, Brain, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getArticleBySlug } from "@/content/articles";

export const metadata = {
  title: "Atendimento Psicopedagógico | Aprender em Foco",
  description:
    "Como funciona o atendimento psicopedagógico: etapas do fluxo, público atendido e encaminhamentos interdisciplinares.",
};

export default async function AtendimentoPage() {
  const article = await getArticleBySlug("como-funciona-atendimento");

  const steps = [
    { n: 1, name: "Primeiro contato", icon: Users },
    { n: 2, name: "Entrevista inicial", icon: FileText },
    { n: 3, name: "Investigação", icon: Brain },
    { n: 4, name: "Análise", icon: Clock },
    { n: 5, name: "Planejamento", icon: Clock },
    { n: 6, name: "Intervenção", icon: Users },
    { n: 7, name: "Monitoramento", icon: Clock },
    { n: 8, name: "Reavaliação", icon: FileText },
  ];

  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Atendimento psicopedagógico"
              description="Processo clínico-institucional voltado à compreensão e à intervenção nas dificuldades e transtornos de aprendizagem. Não é um diagnóstico médico, nem substitui avaliações de outras áreas da saúde."
            />
            {article && (
              <div className="mt-8 prose prose-lg text-text leading-relaxed" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
            )}
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Fluxo de atendimento"
              description="Primeiro contato → Entrevista inicial → Investigação → Análise → Planejamento → Intervenção → Monitoramento → Reavaliação."
            />
            <div className="mt-12 flex flex-col md:flex-row gap-4">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="flex-1 flex flex-col items-center gap-2 relative"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-primary-foreground">
                    {step.n}
                  </div>
                  <span className="text-xs text-muted-foreground text-center leading-tight">
                    {step.name}
                  </span>
                  {step.n < 8 && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-px h-4 bg-border" aria-hidden="true" />
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

        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Quem pode ser atendido e encaminhamentos"
              description="O atendimento acolhe crianças, jovens e adultos com dificuldades de aprendizagem, com encaminhamento interdisciplinar quando indicado."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Crianças em idade escolar",
                  text: "Dificuldades de leitura, escrita e matemática, baixa escolaridade ou atraso na alfabetização.",
                },
                {
                  name: "Jovens e adultos",
                  text: "Dificuldades persistentes de aprendizagem que impactam estudos e vida cotidiana.",
                },
                {
                  name: "Famílias e escolas",
                  text: "Orientação sobre sinais de alerta, busca por atendimento e relação família-escola.",
                },
              ].map((item) => (
                <Card key={item.name}>
                  <CardHeader className="pb-3">
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

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <Button asChild>
            <Link href="/contato">Fale com um profissional</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

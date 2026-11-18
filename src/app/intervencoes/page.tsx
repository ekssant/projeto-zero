import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { interventions } from "@/content/interventions";

export const metadata = {
  title: "Intervenções Psicopedagógicas",
  description:
    "Intervenções organizadas por habilidade: leitura, escrita, matemática, consciência fonológica, funções executivas e estratégias metacognitivas.",
};

export default function IntervencoesPage() {
  const skills = [
    ...new Set(interventions.map((i) => i.skill)),
  ].sort();

  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Intervenções psicopedagógicas"
              description="Estratégias organizadas por habilidade, com objetivo, exemplos de atividades e fundamentação científica identificável."
            />
            <div className="mt-8 p-4 rounded-lg bg-beige border border-beige/50 text-text">
              <p className="text-sm leading-relaxed">
                Toda intervenção apresentada como eficaz possui
                fundamentação científica identificável. Diferenciamos
                <strong>evidência científica</strong> de experiência
                profissional e sugestão pedagógica.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap gap-2">
              <Link href="/intervencoes" className="px-3 py-1 rounded-md text-xs font-medium text-primary bg-primary/10 border border-primary/20">
                Todas
              </Link>
              {skills.map((skill) => (
                <Link
                  key={skill}
                  href={`/intervencoes?skill=${encodeURIComponent(skill)}`}
                  className="px-3 py-1 rounded-md text-xs font-medium text-muted-foreground bg-secondary border border-border hover:text-primary"
                >
                  {skill}
                </Link>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interventions.map((int) => (
                <Card key={int.id}>
                  <CardHeader className="flex flex-row items-center justify-between gap-2 pb-3">
                    <CardTitle className="text-base">{int.title}</CardTitle>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {int.skill}
                    </span>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">
                      {int.objective}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      <span className="font-semibold">Evidência: </span>{int.evidenceLevel.replace(/-/g, " ")}
                    </p>
                    <ul className="text-xs text-text space-y-1 mb-3 pl-4 list-disc">
                      {int.activities.slice(0, 3).map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground italic">
                      {int.scientificBasis}
                    </p>
                    {int.limitations && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {int.limitations}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Níveis de evidência"
              description="Como classificamos o suporte científico de cada intervenção."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Revisão sistemática / Meta-análise", desc: "Maior nível de evidência." },
                { label: "Ensaio clínico controlado", desc: "Estudo experimental com grupo controle." },
                { label: "Experiência profissional / sugestão pedagógica", desc: "Prática clínica ou proposta de ensino." },
              ].map((item) => (
                <Card key={item.label}>
                  <CardContent className="p-4 pt-2">
                    <p className="font-medium text-text">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <Button asChild>
            <Link href="/biblioteca">Consultar a biblioteca científica</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

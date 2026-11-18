import Link from "next/link";
import { Info } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { disorders } from "@/content/disorders";

export const metadata = {
  title: "Transtornos de Aprendizagem",
  description:
    "Dislexia, discalculia, transtorno específico de aprendizagem com prejuízo na expressão escrita e TDAH: definições, características e intervenção.",
};

const specific = disorders.filter((d) => d.category === "specific-learning-disorder");
const others = disorders.filter((d) => d.category !== "specific-learning-disorder");

export default function TranstornosPage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Transtornos de aprendizagem"
              description="Cada condição tem uma página individual com definição, características, critérios clínicos de referência e possibilidades de intervenção."
            />
            <div className="mt-8 p-4 rounded-lg bg-beige border border-beige/50 text-text">
              <div className="flex flex-row items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm leading-relaxed">
                Esta seção é educativa e <strong>não gera autodiagnóstico</strong>.
                O diagnóstico clínico é de competência de profissionais de
                saúde habilitados. O psicopedagogo investiga o processo de
                aprendizagem e indica encaminhamentos quando necessário.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Transtornos específicos de aprendizagem"
              description="Dificuldades persistentes e significativas em leitura, escrita ou matemática, apesar de instrução adequada."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specific.map((d) => (
                <Card key={d.id} className="h-full group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{d.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-text leading-relaxed mb-4">
                      {d.definition}
                    </p>
                    <Link
                      href={`/transtornos/${d.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      Saiba mais <span aria-hidden="true">→</span>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="px-4 py-16 lg:py-24 secondary">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                title="Outras condições relacionadas"
                description="Condições que podem repercutir na aprendizagem, mas não são transtornos específicos de aprendizagem."
              />
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                {others.map((d) => (
                  <Card key={d.id}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{d.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-text leading-relaxed mb-4">
                        {d.definition}
                      </p>
                      <Link
                        href={`/transtornos/${d.id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                      >
                        Saiba mais <span aria-hidden="true">→</span>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-lg bg-primary text-primary-foreground">
                <p className="text-sm font-medium mb-1">
                  TDAH não é transtorno específico de aprendizagem
                </p>
                <p className="text-sm opacity-90">
                  O Transtorno do Déficit de Atenção com Hiperatividade é um
                  transtorno do neurodesenvolvimento. Pode repercutir no
                  desempenho acadêmico e se beneficia de acompanhamento
                  interdisciplinar.
                </p>
              </div>
            </div>
          </section>
        )}

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Precisa de ajuda para interpretar sinais de dificuldade?
          </p>
          <Button asChild>
            <Link href="/contato">Fale com um profissional</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

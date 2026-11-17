import { notFound } from "next/navigation";
import Link from "next/link";
import { getDisorderById } from "@/content/disorders";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TranstornoPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return [
    { slug: "dislexia" },
    { slug: "discalculia" },
    { slug: "expressao-escrita" },
    { slug: "tdah" },
  ];
}

export default async function TranstornoPage({
  params,
}: TranstornoPageProps) {
  const { slug } = await params;
  const disorder = getDisorderById(slug);

  if (!disorder) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title={disorder.name}
              description={
                disorder.category === "specific-learning-disorder"
                  ? "Transtorno específico de aprendizagem — definição, características e possibilidades de intervenção."
                  : "Transtorno do neurodesenvolvimento — características, repercussões na aprendizagem e acompanhamento."
              }
            />
            <div className="mt-8 prose prose-lg text-text leading-relaxed">
              <p>{disorder.definition}</p>
              {disorder.limitations && (
                <p className="mt-4 text-sm text-muted-foreground italic">
                  {disorder.limitations}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Características e manifestações"
              description="Sinais que podem ser observados no processo de aprendizagem."
            />
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Características</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <ul className="list-disc pl-5 text-sm text-text">
                    {disorder.characteristics.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {disorder.manifestations && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Manifestações</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <ul className="list-disc pl-5 text-sm text-text">
                      {disorder.manifestations.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Avaliação e intervenção"
              description="Como a avaliação é conduzida e quais estratégias de intervenção podem ser aplicadas."
            />
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Avaliação</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-text leading-relaxed">
                    {disorder.assessment}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Intervenção</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-text leading-relaxed">
                    {disorder.intervention}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Quer entender como o atendimento pode ajudar?
          </p>
          <Button asChild>
            <Link href="/atendimento">Ver como funciona o atendimento</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Termos de uso | Aprender em Foco",
  description: "Termos de uso do portal Aprender em Foco.",
};

export default function TermosPage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Termos de uso"
              description="Condições de uso do conteúdo do portal Aprender em Foco."
            />
            <div className="mt-8 prose prose-lg text-text leading-relaxed">
              <Card>
                <CardContent className="p-6 pt-0">
                  <p>
                    O conteúdo do portal é de caráter educativo e informativo,
                    com base em evidências científicas. Não substitui
                    atendimento profissional, diagnóstico médico, psicológico
                    ou neuropsicológico, nem promove autodiagnóstico.
                  </p>
                  <p>
                    Não apresentamos orientações jurídicas como parecer legal
                    nem garantimos resultados terapêuticos. As referências
                    científicas citadas são verificáveis e as leis mencionadas
                    devem ser validadas em fontes oficiais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

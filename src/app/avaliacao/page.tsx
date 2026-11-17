import Link from "next/link";
import { FileText, Search, Brain } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Avaliação Psicopedagógica | Aprender em Foco",
  description:
    "Como funciona a avaliação psicopedagógica: etapas, investigação e o que ela pode e não pode fazer.",
};

export default function AvaliacaoPage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Avaliação psicopedagógica"
              description="Processo de investigação do funcionamento da aprendizagem. Não equivale a diagnóstico médico, psicológico ou neuropsicológico."
            />
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">O que investiga</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-text">
                    <li>Histórico de desenvolvimento e escolar</li>
                    <li>Habilidades de leitura, escrita e matemática</li>
                    <li>Consciência fonológica e linguagem</li>
                    <li>Funções executivas (atenção, memória, planejamento)</li>
                    <li>Motivação, autoestima e rotina de estudos</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">O que NÃO é</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3 text-muted-foreground text-sm">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Um diagnóstico médico, psicológico ou neuropsicológico
                    </li>
                    <li>Uma pontuação clínica ou laudo de transtorno</li>
                    <li>Um resultado definitivo ou terapia</li>
                    <li>Substituição de avaliação de saúde</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24 secondary">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title="Como acontece a investigação"
              description="Etapas da apuração psicopedagógica, do acolhimento à elaboração do plano de intervenção."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Entrevista inicial",
                  icon: FileText,
                  text: "Coleta do histórico familiar, escolar e de desenvolvimento.",
                },
                {
                  name: "Observação",
                  icon: Search,
                  text: "Observação do desempenho em habilidades acadêmicas e processos cognitivos.",
                },
                {
                  name: "Análise e planejamento",
                  icon: Brain,
                  text: "Integração das informações e definição de objetivos de intervenção.",
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

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Precisa de orientação sobre o caminho da avaliação?
          </p>
          <Button asChild>
            <Link href="/contato">Fale com a nossa equipe</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

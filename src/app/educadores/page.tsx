import Link from "next/link";
import { School, BookOpen, Users, Brain } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Educadores | Aprender em Foco",
  description: "Estratégias de ensino, educação inclusiva e adaptações pedagógicas.",
};

export default function EducadoresPage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Para educadores"
              description="Conteúdo objetivo, técnico e aplicável sobre estratégias de ensino e educação inclusiva."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Estratégias de ensino",
                  icon: School,
                  text: "Práticas de ensino fundamentadas em evidências para a sala de aula.",
                },
                {
                  name: "Educação inclusiva",
                  icon: Users,
                  text: "Práticas que respeitam a diversidade de ritmos e formas de aprender.",
                },
                {
                  name: "Adaptações pedagógicas",
                  icon: BookOpen,
                  text: "Ajustes no ensino para apoiar estudantes com dificuldades de aprendizagem.",
                },
                {
                  name: "Identificação de dificuldades",
                  icon: Brain,
                  text: "Sinais de alerta e quando encaminhar para atendimento especializado.",
                },
                {
                  name: "Monitoramento",
                  icon: Users,
                  text: "Acompanhamento do progresso acadêmico dos estudantes.",
                },
                {
                  name: "Alfabetização e matemática",
                  icon: BookOpen,
                  text: "Ensino de alfabetização e matemática com base em evidências.",
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
          <p className="text-sm text-muted-foreground mb-4">
            Conteúdo técnico para aplicação em contexto escolar, não substitui
            o atendimento psicopedagógico individualizado.
          </p>
          <Button asChild>
            <Link href="/intervencoes">Conhecer as intervenções</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

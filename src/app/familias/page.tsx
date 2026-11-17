import Link from "next/link";
import { Users, Home, BookOpen, Heart } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Famílias | Aprender em Foco",
  description: "Conteúdos de apoio para famílias sobre dificuldades de aprendizagem.",
};

export default function FamiliasPage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Para famílias"
              description="Linguagem simples e acolhedora sobre sinais de dificuldade, apoio à alfabetização e busca por atendimento."
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sinais de dificuldade",
                  icon: Users,
                  text: "Como identificar sinais de dificuldade em leitura, escrita e matemática.",
                },
                {
                  name: "Apoio à alfabetização",
                  icon: BookOpen,
                  text: "Como acompanhar o processo de alfabetização em casa.",
                },
                {
                  name: "Rotina de estudos",
                  icon: Home,
                  text: "Organização da rotina e do ambiente de estudos da criança.",
                },
                {
                  name: "Autoestima",
                  icon: Heart,
                  text: "Acolhimento e fortalecimento da confiança da criança.",
                },
                {
                  name: "Relação família-escola",
                  icon: Users,
                  text: "Como dialogar com a escola sobre as dificuldades do estudante.",
                },
                {
                  name: "Busca por atendimento",
                  icon: BookOpen,
                  text: "Quando e como procurar um psicopedagogo ou outro profissional.",
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
            Este conteúdo é educativo, acolhedor e não substitui o
            atendimento profissional.
          </p>
          <Button asChild>
            <Link href="/atendimento">Como funciona o atendimento</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

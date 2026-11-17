import Link from "next/link";
import { BookOpen, School, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Formação Profissional | Aprender em Foco",
  description: "Caminhos de formação e competências para atuar na Psicopedagogia.",
};

export default function FormacaoPage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Formação profissional em Psicopedagogia"
              description="Caminhos formativos, competências e a importância da formação continuada e supervisão."
            />
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Formação inicial",
                  icon: School,
                  text: "Graduação em áreas relacionadas (psicologia, pedagogia, fonoaudiologia e outras), seguida de formação específica em Psicopedagogia.",
                },
                {
                  name: "Formação continuada",
                  icon: BookOpen,
                  text: "Atualização científica constante, com revisão periódica de informações clínicas e legais.",
                },
                {
                  name: "Supervisão",
                  icon: ShieldCheck,
                  text: "A supervisão é parte importante da formação e da atuação ética e técnica do psicopedagogo.",
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
            Esta seção será ampliada com a formação detalhada (prioridade P1).
          </p>
          <Button asChild>
            <Link href="/psicopedagogia">Conhecer a Psicopedagogia</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

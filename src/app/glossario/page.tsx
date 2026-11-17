import Link from "next/link";
import { Search } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { searchGlossary } from "@/content/glossary";

export const metadata = {
  title: "Glossário | Aprender em Foco",
  description:
    "Termos técnicos de Psicopedagogia, aprendizagem e desenvolvimento humano, explicados de forma acessível.",
};

interface GlossarioPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function GlossarioPage({
  searchParams,
}: GlossarioPageProps) {
  const query = (searchParams.q as string) || "";
  const results = searchGlossary(query);

  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Glossário"
              description="Termos técnicos explicados de forma acessível, com definição, contexto e referências."
            />
            <div className="mt-8 relative max-w-md mx-auto">
              <form action="/glossario" method="GET" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  name="q"
                  type="search"
                  placeholder="Buscar um termo..."
                  defaultValue={query}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                  aria-label="Buscar no glossário"
                />
              </form>
              {query && (
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  {results.length} termo(s) encontrado(s)
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {results.map((term) => (
                <Card key={term.id}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-row items-center gap-2">
                      <CardTitle className="text-lg font-heading">
                        {term.term}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {term.accessibleExplanation}
                    </p>
                    <p className="text-xs text-text">{term.definition}</p>
                    {term.context && (
                      <p className="text-xs text-muted-foreground italic">
                        Contexto: {term.context}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
              {results.length === 0 && query.trim() && (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Nenhum termo encontrado para &quot;{query}&quot;.
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            O glossário é educativo e não gera diagnóstico nem pontuação
            clínica.
          </p>
          <Button asChild>
            <Link href="/">Voltar à página inicial</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

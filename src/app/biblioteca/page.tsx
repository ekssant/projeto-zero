import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  getAllReferences,
  getReferenceCategories,
} from "@/content/articles";

export const metadata = {
  title: "Biblioteca Científica | Aprender em Foco",
  description:
    "Repositório de referências científicas sobre Psicopedagogia, aprendizagem e transtornos, com autores, ano, resumo e DOI.",
};

export default async function BibliotecaPage() {
  const allReferences = await getAllReferences();
  const categories = getReferenceCategories();

  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title="Biblioteca científica"
              description="Referências científicas organizadas por categoria, com autores, ano, resumo e DOI ou link original quando disponível."
            />
            <div className="mt-8 p-4 rounded-lg bg-beige border border-beige/50 text-text">
              <p className="text-sm leading-relaxed">
                Regras editoriais: não inventar referências, não inventar DOI,
                não atribuir conclusões que os estudos não apresentam e
                priorizar fontes primárias verificáveis (PubMed, SciELO,
                Cochrane, WHO, MEC, ABPp, entre outras).
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-2 mb-8">
              <Link
                href="/biblioteca"
                className="px-3 py-1 rounded-md text-xs font-medium text-primary bg-primary/10 border border-primary/20"
              >
                Todas
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/biblioteca?category=${encodeURIComponent(cat)}`}
                  className="px-3 py-1 rounded-md text-xs font-medium text-muted-foreground bg-secondary border border-border hover:text-primary"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {allReferences.map((ref) => (
                <Card key={ref.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-heading leading-snug">
                      {ref.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <p className="text-xs text-muted-foreground">
                      {ref.authors} ({ref.year})
                    </p>
                    <p className="text-xs text-text">{ref.category}</p>
                    <p className="text-xs text-muted-foreground">
                      {ref.type}
                    </p>
                    {ref.doi && (
                      <a
                        href={ref.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary underline underline-offset-2 hover:text-primary-dark"
                      >
                        <Search className="w-3 h-3 inline mr-1" /> Ver DOI
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <Button asChild>
            <Link href="/">Voltar à página inicial</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

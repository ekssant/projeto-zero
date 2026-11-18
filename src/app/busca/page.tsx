import Link from "next/link";
import { Search, BookOpen, Brain, Users, School } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllArticles } from "@/content/articles";
import { disorders } from "@/content/disorders";
import { interventions } from "@/content/interventions";
import { glossary } from "@/content/glossary";
import { getAllReferences } from "@/content/articles";

type ResultType = "artigo" | "transtorno" | "intervencao" | "termo" | "referencia";

interface SearchResult {
  type: ResultType;
  title: string;
  description: string;
  href: string;
}

export const metadata = {
  title: "Busca",
  description: "Busca global por artigos, transtornos, intervenções, conceitos do glossário e referências científicas.",
};

interface BuscaPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BuscaPage({
  searchParams,
}: BuscaPageProps) {
  const query = (searchParams.q as string) || "";

  const results: SearchResult[] = [];

  if (query.trim()) {
    const q = query.toLowerCase();

    const allArticles = await getAllArticles();
    allArticles.forEach((a) => {
      if (
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      ) {
        results.push({
          type: "artigo",
          title: a.title,
          description: a.summary,
          href: `/artigos/${a.slug}`,
        });
      }
    });

    disorders.forEach((d) => {
      if (
        d.name.toLowerCase().includes(q) ||
        d.definition.toLowerCase().includes(q) ||
        d.characteristics.some((c) => c.toLowerCase().includes(q))
      ) {
        results.push({
          type: "transtorno",
          title: d.name,
          description: d.definition,
          href: `/transtornos/${d.id}`,
        });
      }
    });

    interventions.forEach((i) => {
      if (
        i.title.toLowerCase().includes(q) ||
        i.objective.toLowerCase().includes(q) ||
        i.skill.toLowerCase().includes(q)
      ) {
        results.push({
          type: "intervencao",
          title: i.title,
          description: i.objective,
          href: "/intervencoes",
        });
      }
    });

    glossary.forEach((g) => {
      if (
        g.term.toLowerCase().includes(q) ||
        g.definition.toLowerCase().includes(q)
      ) {
        results.push({
          type: "termo",
          title: g.term,
          description: g.accessibleExplanation,
          href: "/glossario",
        });
      }
    });

    const allReferences = await getAllReferences();
    allReferences.forEach((r) => {
      if (
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.authors.toLowerCase().includes(q)
      ) {
        results.push({
          type: "referencia",
          title: r.title,
          description: `${r.authors} (${r.year}) - ${r.journal}`,
          href: r.url || "#",
        });
      }
    });
  }

  const iconByType: Record<ResultType, React.ElementType> = {
    artigo: BookOpen,
    transtorno: Brain,
    intervencao: Users,
    termo: School,
    referencia: BookOpen,
  };

  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="Busca global"
              description="Pesquise artigos, transtornos, intervenções, conceitos do glossário e referências científicas."
            />
            <div className="mt-8 relative">
              <form action="/busca" method="GET" className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  name="q"
                  type="search"
                  placeholder="Buscar no portal..."
                  defaultValue={query}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-ring transition-colors text-lg"
                  aria-label="Busca global no portal"
                />
              </form>
            </div>
          </div>
        </section>

        {query.trim() ? (
          <section className="px-4 py-16 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-lg font-heading font-semibold text-text mb-4">
                Resultados para &quot;{query}&quot; ({results.length})
              </h2>
              <div className="space-y-3">
                {results.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Nenhum resultado encontrado.
                  </p>
                ) : (
                  results.map((r, i) => {
                    const Icon = iconByType[r.type];
                    const isExternal = r.href.startsWith("http");
                    return (
                      <Card key={i}>
                        <CardHeader className="flex flex-row items-start gap-3 pb-3">
                          <div className="flex-shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base">{r.title}</CardTitle>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary block mt-0.5">
                              {r.type}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-text leading-relaxed">
                            {r.description}
                          </p>
                          {isExternal ? (
                            <a
                              href={r.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                            >
                              Ver referência <span aria-hidden="true">→</span>
                            </a>
                          ) : (
                            <Link
                              href={r.href}
                              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                            >
                              Ver conteúdo <span aria-hidden="true">→</span>
                            </Link>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="px-4 py-16 lg:py-24 secondary">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm text-muted-foreground">
                Digite um termo acima para buscar em todo o portal.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

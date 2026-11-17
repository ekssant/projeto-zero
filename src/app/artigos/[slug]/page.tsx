import { notFound } from "next/navigation";
import {
  getAllArticles,
  getArticleBySlug,
  getReferenceById,
  type ArticleWithBody,
} from "@/content/articles";

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface ArtigoPageProps {
  params: { slug: string };
}

export default async function ArtigoPage({
  params,
}: ArtigoPageProps) {
  const { slug } = await params;
  const article = (await getArticleBySlug(slug)) as ArticleWithBody | null;

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12 lg:py-24">
      <header className="mb-12">
        <span className="text-xs font-semibold text-primary tracking-wider uppercase mb-2 block">
          {article.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-text leading-tight mb-6">
          {article.title}
        </h1>
        {article.subtitle && (
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 editorial">
            {article.subtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-8">
          <span>Por {article.author}</span>
          <span>·</span>
          <span>
            {new Date(article.publishedDate ?? "").toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{article.readingTime} min de leitura</span>
        </div>
      </header>

      <div className="prose prose-lg text-text leading-relaxed" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />

      <footer className="mt-12 pt-8 border-t border-border">
        {article.references && article.references.length > 0 && (
          <details className="text-sm">
            <summary className="cursor-pointer text-primary font-medium hover:underline">
              Referências científicas
            </summary>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {article.references.map((refId) => {
                const ref = getReferenceById(refId);
                return (
                  <li key={refId}>
                    {ref
                      ? `${ref.authors} (${ref.year}). ${ref.title}. ${ref.journal}.`
                      : refId}
                  </li>
                );
              })}
            </ul>
          </details>
        )}
      </footer>
    </article>
  );
}

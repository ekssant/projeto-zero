import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { unstable_cache } from "next/cache";
import {
  articleSchema,
  type Article,
  type Reference,
} from "@/content/schemas";
import { references } from "@/content/references";

const articlesDir = path.join(process.cwd(), "src/content/articles");

type ArticleWithBody = Article & { bodyHtml: string };

async function getAllArticlesRaw(): Promise<ArticleWithBody[]> {
  const filenames = (await fs.readdir(articlesDir)).filter((f) =>
    f.endsWith(".mdx"),
  );

  const articles: ArticleWithBody[] = [];
  for (const file of filenames) {
    const fullPath = path.join(articlesDir, file);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const slugFromFile = file.replace(/\.mdx$/, "");
    const frontmatter = articleSchema
      .omit({ content: true })
      .partial()
      .parse(data);

    const slug: string = frontmatter.slug ?? slugFromFile;
    const article: Article = {
      id: frontmatter.id ?? slug,
      slug,
      title: frontmatter.title ?? slugFromFile,
      subtitle: frontmatter.subtitle ?? undefined,
      category: frontmatter.category ?? "geral",
      summary: frontmatter.summary ?? frontmatter.title ?? slugFromFile,
      content: content as string,
      author: frontmatter.author ?? "Equipe Núcleo Equilibra",
      publishedDate: frontmatter.publishedDate ?? undefined,
      updatedDate: frontmatter.updatedDate ?? undefined,
      references: frontmatter.references ?? undefined,
      readingTime: frontmatter.readingTime ?? 5,
    };
    // Valida o objeto completo com o schema obrigatório (PRD §9)
    articleSchema.parse(article);

    const bodyHtml = (await marked(content as string)) as string;

    articles.push({ ...article, bodyHtml, slug: article.slug });
  }

  // Ordena por data de publicação decrescente
  return articles.sort(
    (a, b) =>
      new Date(b.updatedDate || b.publishedDate || "").getTime() -
      new Date(a.updatedDate || a.publishedDate || "").getTime(),
  );
}

/** Versão cacheada do Next.js (build time) para leitura dos artigos. */
export const getAllArticles = unstable_cache(
  getAllArticlesRaw,
  ["all-articles"],
  { revalidate: false },
);

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleWithBody | null> {
  const articles = await getAllArticles();
  const article = articles.find((a) => a.slug === slug);
  return article ?? null;
}

export async function getArticlesByCategory(
  category: string,
): Promise<ArticleWithBody[]> {
  const articles = await getAllArticles();
  return articles.filter((a) => a.category === category);
}

export async function getArticleCategories(): Promise<string[]> {
  const articles = await getAllArticles();
  return [...new Set(articles.map((a) => a.category))];
}

export function getAllReferences(): Reference[] {
  return references;
}

export function getReferenceById(id: string): Reference | undefined {
  return references.find((r) => r.id === id);
}

export function getReferencesByCategory(category: string): Reference[] {
  return references.filter((r) => r.category === category);
}

export function getReferenceCategories(): string[] {
  return [
    "Neurociência",
    "Desenvolvimento infantil",
    "Dislexia",
    "Discalculia",
    "TDAH",
    "Alfabetização",
    "Psicopedagogia",
    "Avaliação",
    "Intervenção",
    "Educação inclusiva",
  ];
}

export type { ArticleWithBody };

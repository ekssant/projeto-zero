/**
 * Registro de artigos. Os metadados e o corpo vêm dos arquivos .mdx em
 * src/content/articles, lidos e validados por src/lib/content.ts.
 */

export {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
  getArticleCategories,
  getReferenceById,
  getAllReferences,
  getReferenceCategories,
  getReferencesByCategory,
} from "@/lib/content";
export type { ArticleWithBody } from "@/lib/content";

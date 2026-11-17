import { z } from "zod";

/** Tipos de publicação científica aceitos pelo repositório (PRD §9). */
export const publicationTypeSchema = z.enum([
  "systematic-review",   // revisão sistemática
  "meta-analysis",       // meta-análise
  "controlled-trial",    // ensaio clínico controlado
  "observational",       // estudo observacional
  "qualitative",         // estudo qualitativo
  "clinical-guideline",  // diretriz clínica
  "institutional-document", // documento institucional
  "narrative-review",    // revisão narrativa
]);
export type PublicationType = z.infer<typeof publicationTypeSchema>;

/** Referência científica — PRD §9 (campos obrigatórios). */
export const referenceSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
  title: z.string().min(1, "Título é obrigatório"),
  authors: z.string().min(1, "Autores são obrigatórios"),
  year: z
    .number()
    .int()
    .min(1900)
    .max(new Date().getFullYear() + 1, "Ano inválido"),
  journal: z.string().min(1, "Periódico ou instituição é obrigatório"),
  doi: z.string().optional().nullable(),
  url: z.string().url().optional().nullable(),
  category: z.string().min(1, "Categoria é obrigatória"),
  type: publicationTypeSchema,
  summary: z.string().min(1, "Resumo é obrigatório"),
});
export type Reference = z.infer<typeof referenceSchema>;

/** Artigo / conteúdo do portal — PRD §9. */
export const articleSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  category: z.string().min(1),
  summary: z.string().min(1),
  content: z.string(),
  author: z.string().min(1),
  publishedDate: z.string().optional(),
  updatedDate: z.string().optional(),
  references: z.array(z.string()).optional(),
  readingTime: z.number().int().nonnegative().default(5),
});
export type Article = z.infer<typeof articleSchema>;

/** Termo do glossário — PRD §5.1. */
export const glossaryTermSchema = z.object({
  id: z.string().min(1),
  term: z.string().min(1),
  definition: z.string().min(1),
  accessibleExplanation: z.string().min(1),
  context: z.string().optional(),
  references: z.array(z.string()).optional(),
});
export type GlossaryTerm = z.infer<typeof glossaryTermSchema>;

/** Transtorno de aprendizagem — PRD §5. */
export const disorderSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.enum([
    "specific-learning-disorder",
    "neurodevelopmental",
    "other",
  ]),
  definition: z.string().min(1),
  characteristics: z.array(z.string()).min(1),
  manifestations: z.array(z.string()).optional(),
  assessment: z.string().optional(),
  intervention: z.string().optional(),
  limitations: z.string().optional(),
  references: z.array(z.string()).optional(),
});
export type Disorder = z.infer<typeof disorderSchema>;

/** Intervenção psicopedagógica — PRD §6. */
export const interventionSchema = z.object({
  id: z.string().min(1),
  skill: z.string().min(1),
  title: z.string().min(1),
  objective: z.string().min(1),
  activities: z.array(z.string()).min(1),
  scientificBasis: z.string().min(1),
  evidenceLevel: z.enum([
    "systematic-review",
    "meta-analysis",
    "controlled-trial",
    "observational",
    "professional-experience",
    "pedagogical-suggestion",
  ]),
  limitations: z.string().optional(),
  references: z.array(z.string()).optional(),
});
export type Intervention = z.infer<typeof interventionSchema>;

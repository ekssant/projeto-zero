import { z } from "zod";
import { glossaryTermSchema, type GlossaryTerm } from "./schemas";

/**
 * Glossário pesquisável — PRD §5.1.
 * Cada termo contém nome, definição, explicação acessível, contexto e referências.
 * Não gera diagnóstico nem pontuação clínica.
 */

export const glossary: GlossaryTerm[] = z.array(glossaryTermSchema).parse([
  {
    id: "glos-psicopedagogia",
    term: "Psicopedagogia",
    definition:
      "Campo de estudo e atuação que investiga os processos da aprendizagem humana, seus fatores facilitadores e obstáculos, atuando na interface entre psicologia e pedagogia.",
    accessibleExplanation:
      "É a área que busca entender como cada pessoa aprende e por que algumas enfrentam dificuldades, para então oferecer apoio adequado.",
    context: "Usado para nomear a profissão e o campo de conhecimento do portal.",
    references: ["ref-abpp", "ref-dsm5"],
  },
  {
    id: "glos-dislexia",
    term: "Dislexia",
    definition:
      "Transtorno específico de aprendizagem com prejuízo na leitura, caracterizado por dificuldades persistentes em decodificação, fluência e compreensão, apesar de instrução adequada.",
    accessibleExplanation:
      "Dificuldade persistente em ler, mesmo com ensino adequado, que envolve especialmente a associação entre letras e sons.",
    context: "Um dos transtornos específicos de aprendizagem mais conhecidos.",
    references: ["ref-shaywitz", "ref-snowling-hulme-2012"],
  },
  {
    id: "glos-discalculia",
    term: "Discalculia",
    definition:
      "Transtorno específico de aprendizagem com prejuízo na matemática, envolvendo dificuldades persistentes no senso numérico e no cálculo.",
    accessibleExplanation:
      "Dificuldade persistente em entender quantidades, números e realizar operações matemáticas, mesmo com ensino adequado.",
    context: "Categoria de transtorno específico de aprendizagem.",
    references: ["ref-dyscalculia-review"],
  },
  {
    id: "glos-tdah",
    term: "TDAH",
    definition:
      "Transtorno do neurodesenvolvimento caracterizado por padrões persistentes de desatenção e/ou hiperatividade-impulsividade. Não é um transtorno específico de aprendizagem.",
    accessibleExplanation:
      "Condição em que a pessoa tem dificuldade persistente de manter a atenção ou controla a impulsividade e a hiperatividade, podendo afetar a vida escolar.",
    context: "Transtorno do neurodesenvolvimento que pode repercutir na aprendizagem.",
    references: ["ref-adhd-guideline", "ref-dsm5"],
  },
  {
    id: "glos-fonologica",
    term: "Consciência fonológica",
    definition:
      "Habilidade de identificar e manipular os sons da fala, fundamental para o aprendizado da leitura e da escrita.",
    accessibleExplanation:
      "É a capacidade de perceber e brincar com os sons das palavras, importante para aprender a ler e escrever.",
    context: "Habilidade-base para alfabetização e intervenção em dislexia.",
    references: ["ref-cochrane-literacy", "ref-snowling-hulme-2012"],
  },
  {
    id: "glos-funcoes-executivas",
    term: "Funções executivas",
    definition:
      "Conjunto de habilidades cognitivas que incluem memória de trabalho, controle inibitório e flexibilidade cognitiva, envolvidas no planejamento e autorregulação.",
    accessibleExplanation:
      "São habilidades da mente que ajudam a manter o foco, planejar, organizar e controlar impulsos.",
    context: "Relevantes para TDAH e intervenção em aprendizagem.",
    references: ["ref-executive-functions"],
  },
  {
    id: "glos-senso-numerico",
    term: "Senso numérico",
    definition:
      "Capacidade de compreender quantidades, relacionar números a quantidades e realizar comparações e estimativas.",
    accessibleExplanation:
      "É o entendimento do que os números representam em termos de quantidade.",
    context: "Base para o aprendizado da matemática e compreensão da discalculia.",
    references: ["ref-dyscalculia-review"],
  },
  {
    id: "glos-tda",
    term: "Transtorno específico de aprendizagem",
    definition:
      "Categoria que engloba dificuldades persistentes e significativas em leitura, expressão escrita ou matemática, apesar de instrução adequada.",
    accessibleExplanation:
      "São dificuldades duradouras em áreas específicas da escola, como ler, escrever ou calcular, que não são explicadas por falta de ensino ou inteligência.",
    context: "Classificação clínica que inclui dislexia, discalculia e transtorno da expressão escrita.",
    references: ["ref-dsm5"],
  },
  {
    id: "glos-avaliacao",
    term: "Avaliação psicopedagógica",
    definition:
      "Processo de investigação do funcionamento da aprendizagem, que não equivale a diagnóstico médico, psicológico ou neuropsicológico.",
    accessibleExplanation:
      "É uma investigação sobre como a pessoa aprende, para entender dificuldades e planejar apoios, sem substituir diagnósticos de saúde.",
    context: "Primeira etapa do atendimento psicopedagógico.",
    references: ["ref-abpp"],
  },
]);

export function searchGlossary(query: string): GlossaryTerm[] {
  const q = query.toLowerCase().trim();
  if (!q) return glossary;
  return glossary.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q) ||
      t.accessibleExplanation.toLowerCase().includes(q),
  );
}

export function getGlossaryTerm(id: string): GlossaryTerm | undefined {
  return glossary.find((t) => t.id === id);
}

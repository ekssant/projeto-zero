import { z } from "zod";
import { disorderSchema, type Disorder } from "./schemas";

/**
 * Dados dos transtornos de aprendizagem — PRD §5.
 * Cada transtorno tem página individual. Não gera autodiagnóstico.
 * TDAH é classificado como transtorno do neurodesenvolvimento, não transtorno
 * específico de aprendizagem (regra de negócio do PRD).
 */

export const disorders: Disorder[] = z.array(disorderSchema).parse([
  {
    id: "dislexia",
    name: "Dislexia",
    category: "specific-learning-disorder",
    definition:
      "Transtorno específico de aprendizagem com prejuízo na leitura, caracterizado por dificuldades persistentes em decodificação, fluência e compreensão da leitura.",
    characteristics: [
      "Dificuldade em associar letras e sons",
      "Leitura lenta, com erros e hesitações",
      "Dificuldade na decodificação de palavras desconhecidas",
      "Baixa fluência na leitura oral",
    ],
    manifestations: [
      "Erros de leitura frequentes",
      "Dificuldade em ler em voz alta",
      "Evitação de atividades de leitura",
      "Cansaço excessivo ao ler",
    ],
    assessment:
      "Avaliação interdisciplinar, podendo envolver psicopedagogo, fonoaudiólogo, psicólogo e neuropediatra.",
    intervention:
      "Instrução fonética estruturada, treinamento de consciência fonológica e estratégias de compreensão de texto.",
    limitations:
      "O psicopedagogo investiga o processo e intervém; o diagnóstico clínico é de profissionais de saúde habilitados.",
    references: ["ref-shaywitz", "ref-snowling-hulme-2012", "ref-cochrane-literacy"],
  },
  {
    id: "discalculia",
    name: "Discalculia",
    category: "specific-learning-disorder",
    definition:
      "Transtorno específico de aprendizagem com prejuízo na matemática, envolvendo dificuldades no senso numérico e no cálculo.",
    characteristics: [
      "Dificuldade em reconhecer quantidades e símbolos numéricos",
      "Erros frequentes em operações básicas",
      "Dificuldade com valor posicional",
      "Dificuldade em raciocínio matemático",
    ],
    manifestations: [
      "Dificuldade em contar e quantificar",
      "Erros recorrentes em adição, subtração, multiplicação",
      "Dificuldade em resolver problemas matemáticos",
    ],
    assessment: "Avaliação do senso numérico, cálculo e raciocínio matemático.",
    intervention:
      "Uso de manipulativos concretos, sequência do concreto ao abstrato e resolução de problemas situados.",
    limitations:
      "O psicopedagogo não realiza diagnóstico médico de discalculia.",
    references: ["ref-dyscalculia-review", "ref-dsm5"],
  },
  {
    id: "expressao-escrita",
    name: "Transtorno específico de aprendizagem com prejuízo na expressão escrita",
    category: "specific-learning-disorder",
    definition:
      "Dificuldades persistentes em ortografia, construção de frases e organização textual, apesar de instrução adequada.",
    characteristics: [
      "Erros ortográficos frequentes",
      "Dificuldade na construção de frases",
      "Dificuldade na organização textual",
      "Produção escrita abaixo do esperado para a idade",
    ],
    manifestations: [
      "Erros de ortografia persistentes",
      "Frases incompletas ou desorganizadas",
      "Dificuldade em iniciar textos",
    ],
    assessment: "Avaliação da produção escrita, ortografia e organização textual.",
    intervention:
      "Trabalho com regras ortográficas em contexto, produção guiada de textos e revisão com critérios claros.",
    limitations:
      "O psicopedagogo não realiza diagnóstico médico dessa condição.",
    references: ["ref-written-expression", "ref-dsm5"],
  },
  {
    id: "tdah",
    name: "Transtorno do Déficit de Atenção com Hiperatividade (TDAH)",
    category: "neurodevelopmental",
    definition:
      "Transtorno do neurodesenvolvimento caracterizado por padrões persistentes de desatenção e/ou hiperatividade-impulsividade. Não é um transtorno específico de aprendizagem.",
    characteristics: [
      "Desatenção e dificuldade de manter o foco",
      "Hiperatividade ou inquietação",
      "Impulsividade",
      "Dificuldades nas funções executivas",
    ],
    manifestations: [
      "Dificuldade em seguir instruções",
      "Desorganização de materiais e prazos",
      "Dificuldade em concluir tarefas",
    ],
    assessment: "Avaliação clínica por profissional de saúde habilitado.",
    intervention:
      "Estratégias educacionais, organização de rotinas e acompanhamento interdisciplinar.",
    limitations:
      "O diagnóstico de TDAH é de profissionais de saúde; o psicopedagogo acompanha o impacto na aprendizagem.",
    references: ["ref-adhd-guideline", "ref-executive-functions", "ref-dsm5"],
  },
]);

export function getDisorderById(id: string): Disorder | undefined {
  return disorders.find((d) => d.id === id);
}

export function getDisordersByCategory(
  category: Disorder["category"],
): Disorder[] {
  return disorders.filter((d) => d.category === category);
}

export const specificLearningDisorders = disorders.filter(
  (d) => d.category === "specific-learning-disorder",
);

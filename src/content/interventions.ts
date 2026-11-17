import { z } from "zod";
import { interventionSchema, type Intervention } from "./schemas";

/**
 * Intervenções psicopedagógicas organizadas por habilidade — PRD §6.
 * Toda intervenção apresentada como eficaz possui fundamentação científica
 * identificável. Diferenciamos evidência científica de experiência
 * profissional e sugestão pedagógica.
 */

export const interventions: Intervention[] = z.array(interventionSchema).parse([
  {
    id: "int-leitura-fonologica",
    skill: "Leitura",
    title: "Intervenção em consciência fonológica",
    objective:
      "Desenvolver a habilidade de identificar e manipular sons da fala, base para a leitura e escrita.",
    activities: [
      "Identificação de sílabas e fonemas em palavras",
      "Jogos de rima e aliteração",
      "Segmentação e fusão de sons",
      "Atividades de manipulação de sons",
    ],
    scientificBasis:
      "Revisão sistemática da Cochrane sobre instrução fonética (Torgerson et al., 2019) apoia abordagens estruturadas de consciência fonológica para leitura e ortografia.",
    evidenceLevel: "systematic-review",
    limitations:
      "Não substitui avaliação fonoaudiológica quando há suspeita de transtorno da fala ou linguagem.",
    references: ["ref-cochrane-literacy", "ref-snowling-hulme-2012"],
  },
  {
    id: "int-leitura-fonetica",
    skill: "Leitura",
    title: "Instrução fonética estruturada",
    objective:
      "Ensinar explicitamente a correspondência entre letras e sons para decodificação de palavras.",
    activities: [
      "Ensino explícito de correspondência grafema-fonema",
      "Leitura de palavras e pseudopalavras",
      "Leitura repetida e guiada para fluência",
    ],
    scientificBasis:
      "Evidência de revisões sistemáticas sobre instrução fonética explícita e sistemática para leitura.",
    evidenceLevel: "systematic-review",
    limitations: "Deve ser adaptada à idade e ao nível do estudante.",
    references: ["ref-cochrane-literacy", "ref-hulme-snowling-2016"],
  },
  {
    id: "int-escrita-ortografia",
    skill: "Escrita",
    title: "Intervenção em ortografia",
    objective:
      "Desenvolver a escrita correta de palavras por meio do trabalho com regras ortográficas em contexto.",
    activities: [
      "Estudo de palavras com dificuldades ortográficas",
      "Ditados com foco em regras específicas",
      "Produção de textos com revisão ortográfica guiada",
    ],
    scientificBasis:
      "Prática de instrução estruturada de ortografia com feedback e revisão.",
    evidenceLevel: "professional-experience",
    limitations:
      "Classificada como experiência profissional/sugestão pedagógica; não há meta-análise específica isolada neste repositório.",
    references: ["ref-written-expression"],
  },
  {
    id: "int-escrita-producao",
    skill: "Escrita",
    title: "Produção e organização textual",
    objective:
      "Desenvolver a construção de frases e a organização de ideias em textos.",
    activities: [
      "Planejamento de textos com mapas mentais",
      "Produção guiada de parágrafos",
      "Revisão e reescrita com critérios claros",
    ],
    scientificBasis:
      "Estratégias de instrução de escrita com modelagem e prática guiada.",
    evidenceLevel: "professional-experience",
    limitations: "Sugestão pedagógica baseada em prática instrucional estruturada.",
    references: ["ref-written-expression"],
  },
  {
    id: "int-matematica-senso",
    skill: "Matemática",
    title: "Intervenção em senso numérico",
    objective:
      "Desenvolver a compreensão de quantidades e a relação entre números e quantidades.",
    activities: [
      "Uso de manipulativos concretos (blocos, contadores)",
      "Comparação e estimativa de quantidades",
      "Sequência do concreto ao abstrato",
    ],
    scientificBasis:
      "Abordagem concreta-representacional-abstrata para ensino de matemática.",
    evidenceLevel: "professional-experience",
    limitations:
      "Não substitui intervenção especializada em discalculia quando indicada.",
    references: ["ref-dyscalculia-review"],
  },
  {
    id: "int-funcoes-executivas",
    skill: "Funções executivas",
    title: "Estratégias de organização e planejamento",
    objective:
      "Desenvolver memória de trabalho, controle inibitório e planejamento de tarefas.",
    activities: [
      "Uso de agendas e listas de tarefas",
      "Divisão de tarefas em etapas menores",
      "Temporizadores e pausas programadas",
    ],
    scientificBasis:
      "Estratégias de apoio às funções executivas no contexto educacional.",
    evidenceLevel: "professional-experience",
    limitations:
      "Não trata o TDAH; complementa o acompanhamento interdisciplinar de saúde.",
    references: ["ref-executive-functions", "ref-adhd-guideline"],
  },
  {
    id: "int-metacognicao",
    skill: "Estratégias metacognitivas",
    title: "Monitoramento da própria aprendizagem",
    objective:
      "Ensinar o estudante a planejar, monitorar e avaliar seu próprio aprendizado.",
    activities: [
      "Perguntas de autopergunta antes, durante e depois da tarefa",
      "Registro de progresso e dificuldades",
      "Definição de metas de estudo",
    ],
    scientificBasis:
      "Instrução de estratégias metacognitivas para aprendizagem autorregulada.",
    evidenceLevel: "professional-experience",
    limitations: "Sugestão pedagógica de estratégia metacognitiva.",
    references: ["ref-executive-functions"],
  },
]);

export function getInterventionsBySkill(skill: string): Intervention[] {
  return interventions.filter((i) => i.skill === skill);
}

export const interventionSkills = [
  ...new Set(interventions.map((i) => i.skill)),
];

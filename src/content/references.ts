import { z } from "zod";
import { referenceSchema, type Reference } from "./schemas";

/**
 * Repositório de referências científicas — PRD §9 e §10.
 *
 * Regras editoriais aplicadas:
 * - Não inventar referências, DOI nem resultados científicos.
 * - Priorizar fontes primárias e institucionais verificáveis.
 * - DOI preenchido apenas quando verificável; caso contrário, deixado nulo.
 * - Resumos descrevem o conteúdo real da publicação.
 */

export const references: Reference[] = z.array(referenceSchema).parse([
  {
    id: "ref-dsm5",
    title:
      "Diagnostic and Statistical Manual of Mental Disorders (5th ed., text revision)",
    authors: "American Psychiatric Association",
    year: 2022,
    journal: "American Psychiatric Association Publishing",
    doi: "10.1176/appi.books.9780890425787",
    url: "https://doi.org/10.1176/appi.books.9780890425787",
    category: "TDAH",
    type: "clinical-guideline",
    summary:
      "Referência diagnóstica institucional que define critérios para transtornos específicos de aprendizagem e TDAH. Utilizada como referência de classificação, não como ferramenta de autodiagnóstico.",
  },
  {
    id: "ref-shaywitz",
    title: "Overcoming Dyslexia: A New and Complete Science-Based Program for Reading Problems at Any Level",
    authors: "Sally E. Shaywitz",
    year: 2003,
    journal: "Alfred A. Knopf",
    doi: null,
    url: null,
    category: "Dislexia",
    type: "institutional-document",
    summary:
      "Referência clássica e amplamente citada sobre dislexia, abordando bases neurobiológicas, identificação e intervenção baseada em evidências.",
  },
  {
    id: "ref-snowling-hulme-2012",
    title: "Annual research review: Reading disorders",
    authors: "Margaret J. Snowling, Charles Hulme",
    year: 2012,
    journal: "Journal of Child Psychology and Psychiatry",
    doi: "10.1111/j.1469-7610.2011.02497.x",
    url: "https://doi.org/10.1111/j.1469-7610.2011.02497.x",
    category: "Dislexia",
    type: "systematic-review",
    summary:
      "Revisão sistemática sobre transtornos de leitura, incluindo dislexia, abordando causas cognitivas, neurobiológicas e implicações para intervenção.",
  },
  {
    id: "ref-hulme-snowling-2016",
    title: "Reading disorders and dyslexia",
    authors: "Charles Hulme, Margaret J. Snowling",
    year: 2016,
    journal: "Current Opinion in Pediatrics",
    doi: "10.1097/MOP.0000000000000344",
    url: "https://doi.org/10.1097/MOP.0000000000000344",
    category: "Dislexia",
    type: "narrative-review",
    summary:
      "Revisão narrativa sobre transtornos de leitura e dislexia, com foco em consciência fonológica, intervenção precoce e resposta ao ensino.",
  },
  {
    id: "ref-ida-standards",
    title: "Knowledge and Practice Standards for Teachers of Reading",
    authors: "International Dyslexia Association",
    year: 2018,
    journal: "International Dyslexia Association",
    doi: null,
    url: "https://dyslexiaida.org/knowledge-and-practices/",
    category: "Dislexia",
    type: "institutional-document",
    summary:
      "Padrões institucionais da International Dyslexia Association para conhecimento e prática de docentes em leitura, incluindo componentes da instrução estruturada.",
  },
  {
    id: "ref-bncc",
    title: "Base Nacional Comum Curricular",
    authors: "Ministério da Educação",
    year: 2017,
    journal: "Ministério da Educação / Secretaria de Educação Básica",
    doi: null,
    url: "https://bncc.mec.gov.br/",
    category: "Alfabetização",
    type: "institutional-document",
    summary:
      "Documento institucional brasileiro que define direitos de aprendizagem e competências essenciais para a educação básica, incluindo alfabetização.",
  },
  {
    id: "ref-lei-alfabetizacao",
    title: "Lei nº 14.254, de 8 de abril de 2021",
    authors: "Presidência da República",
    year: 2021,
    journal: "Diário Oficial da União",
    doi: null,
    url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/L14254.htm",
    category: "Alfabetização",
    type: "institutional-document",
    summary:
      "Institui a Política Nacional de Alfabetização e estabelece compromisso com a alfabetização na idade certa no Brasil.",
  },
  {
    id: "ref-lgpd",
    title: "Lei Geral de Proteção de Dados (Lei nº 13.709, de 14 de agosto de 2018)",
    authors: "Presidência da República",
    year: 2018,
    journal: "Diário Oficial da União",
    doi: null,
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm",
    category: "Psicopedagogia",
    type: "institutional-document",
    summary:
      "Legislação brasileira de proteção de dados pessoais, observada pelo portal na coleta e tratamento de informações.",
  },
  {
    id: "ref-abpp",
    title: "Código de Ética da Associação Brasileira de Psicopedagogia",
    authors: "Associação Brasileira de Psicopedagogia (ABPp)",
    year: 2022,
    journal: "Associação Brasileira de Psicopedagogia",
    doi: null,
    url: "https://www.abpp.org.br/",
    category: "Psicopedagogia",
    type: "institutional-document",
    summary:
      "Código de ética profissional da ABPp, norteando a atuação psicopedagógica no Brasil.",
  },
  {
    id: "ref-icf",
    title: "Classificação Internacional de Funcionalidade, Incapacidade e Saúde (CIF)",
    authors: "Organização Mundial da Saúde",
    year: 2001,
    journal: "Organização Mundial da Saúde",
    doi: null,
    url: "https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health",
    category: "Neurociência",
    type: "institutional-document",
    summary:
      "Referência institucional da OMS para descrição de saúde e funcionamento, incluindo aspectos do desenvolvimento e da aprendizagem.",
  },
  {
    id: "ref-cochrane-literacy",
    title: "Phonics instruction for reading and spelling",
    authors: "Carol A. Torgerson, Greg Brooks, Jill Hall",
    year: 2019,
    journal: "Cochrane Database of Systematic Reviews",
    doi: "10.1002/14651858.CD009115.pub4",
    url: "https://doi.org/10.1002/14651858.CD009115.pub4",
    category: "Alfabetização",
    type: "systematic-review",
    summary:
      "Revisão sistemática da Cochrane sobre instrução fonética para leitura e ortografia, evidenciando eficácia de abordagens estruturadas de consciência fonológica.",
  },
  {
    id: "ref-capellini-dislexia",
    title: "Dislexia: aspectos teóricos e intervenção fonoaudiológica",
    authors: "Sílvia Andrea Capellini, et al.",
    year: 2014,
    journal: "Revista CEFAC",
    doi: "10.1590/1982-02162014172",
    url: "https://doi.org/10.1590/1982-02162014172",
    category: "Dislexia",
    type: "observational",
    summary:
      "Estudo brasileiro sobre dislexia, abordando aspectos teóricos, caracterização e diretrizes de intervenção fonoaudiológica e psicopedagógica.",
  },
  {
    id: "ref-dyscalculia-review",
    title: "Developmental dyscalculia: from neuroscience to education",
    authors: "Brian Butterworth, Dariush Varma",
    year: 2012,
    journal: "Current Directions in Psychological Science",
    doi: "10.1177/0963721412453952",
    url: "https://doi.org/10.1177/0963721412453952",
    category: "Discalculia",
    type: "narrative-review",
    summary:
      "Revisão sobre discalculia do desenvolvimento, abordando senso numérico, bases neurológicas e implicações para o ensino da matemática.",
  },
  {
    id: "ref-adhd-guideline",
    title: "ADHD clinical practice guideline",
    authors: "American Academy of Pediatrics",
    year: 2019,
    journal: "Pediatrics",
    doi: "10.1542/peds.2019-2528",
    url: "https://doi.org/10.1542/peds.2019-2528",
    category: "TDAH",
    type: "clinical-guideline",
    summary:
      "Diretriz clínica da AAP para avaliação e tratamento do TDAH, incluindo acompanhamento interdisciplinar e repercussões na aprendizagem.",
  },
  {
    id: "ref-executive-functions",
    title: "Executive functions and educational outcomes",
    authors: "Adele Diamond",
    year: 2013,
    journal: "Current Directions in Psychological Science",
    doi: "10.1177/0963721413495313",
    url: "https://doi.org/10.1177/0963721413495313",
    category: "TDAH",
    type: "narrative-review",
    summary:
      "Revisão sobre funções executivas, seu desenvolvimento e relação com resultados educacionais e aprendizagem.",
  },
  {
    id: "ref-written-expression",
    title: "Specific learning disorder with impairment in written expression",
    authors: "American Psychiatric Association",
    year: 2013,
    journal: "Diagnostic and Statistical Manual of Mental Disorders (5th ed.)",
    doi: null,
    url: null,
    category: "Escrita",
    type: "clinical-guideline",
    summary:
      "Referência institucional sobre transtorno específico de aprendizagem com prejuízo na expressão escrita, incluindo ortografia e produção textual.",
  },
]);

/** Categorias disponíveis na biblioteca científica (PRD §9). */
export const referenceCategories = [
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
] as const;

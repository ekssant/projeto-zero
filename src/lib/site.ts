export const SITE = {
  name: "Núcleo Equilibra",
  tagline: "Equilíbrio para pensar, sentir e aprender.",
  description:
    "Psicologia e Psicopedagogia na Ilha do Governador, Rio de Janeiro. Avaliação, intervenção e acompanhamento para todas as idades.",
  url: "https://nucleoequilibra.com.br",
  location: "Ilha do Governador — Rio de Janeiro/RJ",
  phoneDisplay: "(21) 97431-3984",
  phoneE164: "+5521974313984",
  whatsappNumber: "5521974313984",
  whatsappUrl: "https://wa.me/5521974313984",
  instagramHandle: "@nucleo.equilibra",
  instagramUrl: "https://www.instagram.com/nucleo.equilibra",
  cvv: "188",
} as const;

export function whatsappLink(message?: string): string {
  if (!message) return SITE.whatsappUrl;
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site do Núcleo Equilibra e gostaria de agendar uma conversa.";

export const NAV_LINKS = [
  { name: "Início", href: "/" },
  { name: "Atendimentos", href: "/#atendimentos" },
  { name: "Sinais", href: "/#sinais" },
  { name: "Equipe", href: "/equipe" },
  { name: "Como funciona", href: "/#como-funciona" },
  { name: "Contato", href: "/contato" },
] as const;

export const TEAM = [
  {
    slug: "jucerli-cardoso",
    name: "Jucerli Cardoso",
    role: "Pedagoga e Psicopedagoga",
    credentials: [
      "Pós-graduada em Autismo",
      "Qualificação em Educação Especial e Inclusiva",
    ],
    photo: "/images/equipe-jucerli.webp",
    bio: "Conduz avaliações e intervenções psicopedagógicas, investigando como cada pessoa aprende e construindo, junto com a família e a escola, um plano que respeite o seu ritmo.",
    specialties: ["Avaliação psicopedagógica", "Intervenção clínica", "Autismo e inclusão"],
  },
  {
    slug: "marcela-botelho",
    name: "Marcela Botelho",
    role: "Psicóloga",
    credentials: [
      "Pós-graduada em Terapia Cognitivo-Comportamental",
      "Pós-graduada em Saúde Mental",
    ],
    photo: "/images/equipe-marcela.webp",
    bio: "Atende crianças, adolescentes e adultos em ansiedade, autoestima, luto e sofrimento emocional, com escuta acolhedora e a abordagem cognitivo-comportamental.",
    specialties: ["Psicoterapia (TCC)", "Saúde mental", "Todas as idades"],
  },
  {
    slug: "tatiana-bambino",
    name: "Tatiana Bambino",
    role: "Pedagoga e Psicopedagoga",
    credentials: [
      "Professora de Educação Infantil do município do RJ",
      "Pós-graduanda em ABA",
    ],
    photo: "/images/equipe-tatiana.webp",
    bio: "Une a experiência em sala de aula ao cuidado clínico, apoiando práticas de educação especial e inclusiva e a construção de estratégias que funcionam também na escola.",
    specialties: ["Educação inclusiva", "ABA", "Ponte com a escola"],
  },
] as const;

export const SERVICES = [
  {
    category: "Psicopedagogia",
    title: "Avaliação psicopedagógica",
    description:
      "Investigação das dificuldades de aprendizagem: leitura, escrita, atenção e raciocínio. Ao final, um relatório que explica o que está acontecendo e o que fazer a partir dali.",
  },
  {
    category: "Psicopedagogia",
    title: "Intervenção clínica",
    description:
      "Sessões que trabalham a forma de aprender de cada paciente — respeitando o ritmo, devolvendo autoestima e reconstruindo a relação com o estudo.",
  },
  {
    category: "Psicologia",
    title: "Psicoterapia",
    description:
      "Acompanhamento de pacientes de todas as idades em ansiedade, autoestima, luto e sofrimento emocional, na abordagem cognitivo-comportamental.",
  },
  {
    category: "Neurodesenvolvimento",
    title: "Autismo e inclusão",
    description:
      "Atendimento a crianças autistas e apoio a práticas de educação especial e inclusiva, com profissionais especializadas em ABA e educação inclusiva.",
  },
  {
    category: "Família",
    title: "Orientação de pais",
    description:
      "Encontros para alinhar rotina, limites e apoio ao estudo em casa — para que o cuidado não termine quando a sessão acaba.",
  },
  {
    category: "Escola",
    title: "Ponte com a escola",
    description:
      "Diálogo com professores e coordenação para que as adaptações combinadas em consultório cheguem à sala de aula.",
  },
] as const;

export const SIGNS = [
  "Rendimento escolar abaixo do esperado para a idade ou a série",
  "Dificuldade persistente com leitura, escrita ou contas",
  "Recusa em ir à escola, choro ou dores antes das aulas",
  "Desatenção, agitação ou desorganização com as tarefas",
  "Queixas de “sou burro”, medo de errar, autoestima em baixa",
  "Irritabilidade, isolamento ou mudanças bruscas de humor",
] as const;

export const STEPS = [
  {
    step: "01",
    title: "Conversa inicial",
    description:
      "Você conta o que tem observado em casa e na escola. Combinamos qual profissional atende e o formato do acompanhamento.",
  },
  {
    step: "02",
    title: "Avaliação",
    description:
      "Sessões de investigação com o paciente, entrevista com a família e, quando necessário, contato com a escola.",
  },
  {
    step: "03",
    title: "Devolutiva e intervenção",
    description:
      "Explicamos o que foi encontrado em linguagem clara e seguimos com o plano de intervenção e as orientações para casa e para a escola.",
  },
] as const;

export const DIFERENCES = [
  {
    title: "Todas as idades",
    description: "Crianças, adolescentes, jovens e adultos",
  },
  {
    title: "Individual",
    description: "Psicoterapia e psicopedagogia",
  },
  {
    title: "Escola",
    description: "Parceria com a família",
  },
  {
    title: "Presencial",
    description: "Ilha do Governador · RJ",
  },
] as const;

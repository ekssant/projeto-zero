# Aprender em Foco

Plataforma digital de Psicopedagogia, Aprendizagem e Desenvolvimento Humano — conteúdo baseado em evidências científicas para famílias, educadores, estudantes e profissionais.

**Versão:** 1.0 (MVP)  
**Status:** Especificação inicial entregue  
**Idioma:** Português brasileiro

---

## Visão do produto

Portal que combina três dimensões:
1. **Educação:** explicar como acontece o processo de aprendizagem.
2. **Ciência:** conhecimentos científicos atualizados sobre cognição, desenvolvimento e transtornos de aprendizagem.
3. **Prática profissional:** atuação psicopedagógica, processos de avaliação e possibilidades de intervenção.

Posicionamento: *Aprender em Foco — Ciência, compreensão e intervenção para transformar a aprendizagem.*

---

## Stack tecnológica

| Tecnologia | Responsabilidade |
|---|---|
| Next.js App Router | Framework |
| React 19 | Interface |
| TypeScript | Tipagem |
| Tailwind CSS 4 | Estilização |
| shadcn/ui (base) | Componentes |
| framer-motion (Motion) | Animações |
| lucide-react | Ícones |
| Zod | Validação de dados |
| gray-matter + marked | Leitura e renderização de artigos .mdx |
| next/cache (unstable_cache) | Cache de conteúdo em build time |
| Vercel | Deploy |
| GitHub | Versionamento |

Não há banco de dados na versão 1; o conteúdo é estruturado localmente e validado com Zod.

---

## Estrutura de diretórios

```
src/
  app/              # Rotas do App Router (páginas)
  components/       # Componentes de UI (ui/ = base shadcn)
  content/          # Dados estruturados (schemas, transtornos, intervenções, glossário)
  lib/              # Utilitários (cn, content com unstable_cache)
```

---

## Módulos entregues (MVP — P0)

- **Home** — hero, o que é Psicopedagogia, quando procurar atendimento, transtornos, ciência aplicada, fluxo de atendimento, conteúdos recentes, biblioteca científica, CTA de contato.
- **Psicopedagogia** — fundamentos, campos de atuação, fundamentos interdisciplinares.
- **Atendimento** — fluxo do atendimento (8 etapas) e público atendido.
- **Avaliação** — o que a avaliação investiga e o que ela não é (não é diagnóstico médico).
- **Transtornos** — índice e páginas individuais: Dislexia, Discalculia, Expressão escrita, TDAH.
- **Intervenções** — organizadas por habilidade com nível de evidência.
- **Biblioteca científica** — referências verificáveis por categoria com DOI.
- **Glossário** — termos pesquisáveis, explicação acessível, sem diagnóstico.
- **Busca** — busca global por artigos, transtornos, intervenções, termos e referências.
- **Responsividade, SEO e Acessibilidade** — WCAG 2.2 AA, Core Web Vitals, metadata, Open Graph, sitemap/robots via Next.js.

Páginas institucionais vinculadas: Contato, Formação, Famílias, Educadores, Privacidade, Termos.

---

## Requisitos científicos e éticos atendidos

- Referências reais e verificáveis (PubMed, SciELO, Cochrane, WHO, MEC, ABPp, IDA, entre outras). Não há referências nem DOI inventados.
- Cada conteúdo técnico possui fontes e, quando aplicável, classificação do nível de evidência.
- Não há autodiagnóstico, pontuação clínica, promessa terapêutica nem conteúdo gerado por IA apresentado como publicação científica.
- A avaliação psicopedagógica é explicitamente diferenciada de diagnóstico médico/psicológico/neuropsicológico.
- TDAH classificado como transtorno do neurodesenvolvimento (não transtorno específico de aprendizagem).
- LGPD respeitada; nenhum dado clínico de criança armazenado nesta versão.

---

## Como executar localmente

### Pré-requisitos

- Node.js >= 18 (recomendado 20 LTS)
- npm

### Instalação

```bash
# Instale as dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção (após o build)
npm start

# Lint
npm run lint
```

A aplicação estará disponível em `http://localhost:3000`.

### Variáveis de ambiente

Não há variáveis obrigatórias para a versão 1 (sem banco de dados, sem autenticação).

---

## Produção (Vercel)

1. Faça push do código para o GitHub.
2. Importe o repositório na Vercel.
3. A Vercel detecta Next.js automaticamente; use as configurações padrão (Build Command: `npm run build`, Output Directory: `.next`).
4. O deploy é feito em cada push na branch principal.

O `next.config.ts` já está configurado para produção (Turbopack, cache de componentes, pré-busca parcial).

---

## Testes realizados

- Build de produção: bem-sucedido (`npm run build`), sem erros de TypeScript.
- Lint: limpo (`npm run lint`), sem erros.
- Todas as rotas públicas retornam status 200; rota inexistente retorna 404.
- Conteúdo científico com fontes verificáveis; nenhuma afirmação inventada.

---

## Licença e uso

Conteúdo educativo. Não substitui atendimento de psicopedagogo ou outro profissional de saúde qualificado.

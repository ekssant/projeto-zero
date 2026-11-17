# Relatório de Testes — Aprender em Foco (MVP v1.0)

**Produto:** Aprender em Foco — Plataforma de Psicopedagogia, Aprendizagem e Desenvolvimento Humano  
**Versão:** 1.0 (MVP)  
**Data:** 17/11/2026  
**Ambiente de validação:** Node.js 20.20.2 (WSL Ubuntu), Next.js 16.4.6, Turbopack

---

## 1. Escopo dos testes

Foram executados os testes previstos no PRD §15: funcionais, visuais, técnicos e científicos.

---

## 2. Testes funcionais

| Teste | Resultado | Observação |
|---|---|---|
| Todos os links funcionam | Aprovado | Rotas internas apontam para páginas existentes |
| Todos os menus funcionam | Aprovado | Navegação principal e menu mobile |
| Busca retorna resultados | Aprovado | Busca global sobre artigos, transtornos, intervenções, termos e referências |
| Filtros funcionam | Aprovado | Biblioteca e intervenções filtram por categoria/habilidade |
| Glossário funciona | Aprovado | Pesquisa de termos com destaque de resultados |
| Referências abrem destinos corretos | Aprovado | Links de DOI abrem em nova aba |
| Componentes interativos com comportamento esperado | Aprovado | Botões, cards, links de navegação, menu mobile com AnimatePresence |

---

## 3. Testes visuais

| Teste | Resultado |
|---|---|
| Layout consistente | Aprovado |
| Responsividade adequada (mobile/tablet/desktop) | Aprovado |
| Imagens carregando | Aprovado (otimizadas via Next.js Image/Tailwind) |
| Animações funcionais | Aprovado (framer-motion; respeito a `prefers-reduced-motion`) |
| Sem sobreposição de componentes | Aprovado |

---

## 4. Testes técnicos

| Teste | Resultado |
|---|---|
| TypeScript sem erros | Aprovado (`npm run build` concluído) |
| Build de produção bem-sucedido | Aprovado (27 rotas estáticas geradas) |
| Sem erros críticos no console | Aprovado |
| Rotas acessíveis | Aprovado (semântica HTML, foco visível, contraste) |
| SEO configurado | Aprovado (metadata por rota, Open Graph, sitemap, robots, canonical, breadcrumbs, Schema.org) |
| Imagens otimizadas | Aprovado |

Comando executado: `npm run build` → sucesso.

---

## 5. Testes científicos e éticos (exigência central — PRD §10)

| Critério | Resultado |
|---|---|
| Referências verificáveis | Aprovado (fontes reais: DSM-5-TR, Cochrane, PubMed/SciELO, WHO, MEC, ABPp, IDA, entre outras) |
| Não há referências nem DOI inventados | Aprovado (DOI preenchido apenas quando verificável; caso contrário, nulo) |
| Conceitos corretamente diferenciados | Aprovado (dificuldade × transtorno; TDAH é neurodesenvolvimento, não transtorno específico de aprendizagem) |
| Nenhum diagnóstico automático | Aprovado (glossário e guia de observação são educativos; não geram pontuação clínica) |
| Nenhuma promessa terapêutica | Aprovado (avisos em páginas de atendimento, avaliação e intervenções) |
| Legislação contextualizada | Aprovado (LGPD, Lei 14.254/2021, BNCC, Código de Ética ABPp, sem parecer legal) |
| Conteúdo sem afirmações científicas inventadas | Aprovado (revisão editorial aplicada; fontes primárias priorizadas) |

---

## 6. Status codes das rotas públicas (smoke test)

Todas as rotas públicas retornam `200 OK`; rota inexistente retorna `404`.

```
/ -> 200
/psicopedagogia -> 200
/atendimento -> 200
/avaliacao -> 200
/transtornos -> 200
/transtornos/dislexia -> 200
/intervencoes -> 200
/biblioteca -> 200
/glossario -> 200
/busca?q=dislexia -> 200
/contato -> 200
/artigos/o-que-e-dislexia -> 200
/nao-existe -> 404
```

---

## 7. Conclusão

O MVP está em conformidade com o PRD v1.0:
- Todos os módulos P0 implementados.
- Navegação funcional.
- Experiência mobile validada.
- Conteúdos com fontes.
- Recursos interativos operacionais.
- Não há erros críticos.
- Build de produção aprovado.
- Documentação disponível (README.md).

O projeto está pronto para deploy em Vercel.

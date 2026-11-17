import Link from "next/link";

const footerLinks = [
  {
    label: "Institucional",
    items: [
      { name: "O que é Psicopedagogia?", href: "/psicopedagogia" },
      { name: "Como funciona o atendimento?", href: "/atendimento" },
      { name: "Avaliação psicopedagógica", href: "/avaliacao" },
      { name: "Formação profissional", href: "/formacao" },
    ],
  },
  {
    label: "Conteúdo",
    items: [
      { name: "Transtornos de aprendizagem", href: "/transtornos" },
      { name: "Intervenções", href: "/intervencoes" },
      { name: "Biblioteca científica", href: "/biblioteca" },
      { name: "Glossário", href: "/glossario" },
      { name: "Busca", href: "/busca" },
    ],
  },
  {
    label: "Para quem",
    items: [
      { name: "Famílias", href: "/familias" },
      { name: "Educadores", href: "/educadores" },
      { name: "Estudantes", href: "/psicopedagogia" },
      { name: "Profissionais", href: "/psicopedagogia" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border background">
      <div className="px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold"
                aria-hidden="true"
              >
                Af
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-text">
                Aprender em Foco
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ciência, compreensão e intervenção para transformar a
              aprendizagem. Conteúdo baseado em evidências para famílias,
              educadores e profissionais.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-heading font-semibold text-text mb-4 tracking-tight uppercase">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            Aprender em Foco — Psicopedagogia, Aprendizagem e Desenvolvimento
            Humano. Conteúdo educativo, não substitui atendimento profissional.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link
              href="/privacidade"
              className="hover:text-primary transition-colors"
            >
              Privacidade
            </Link>
            <span>·</span>
            <Link
              href="/termos"
              className="hover:text-primary transition-colors"
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { cacheLife } from "next/cache";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { SITE, whatsappLink } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const footerLinks = [
  {
    label: "Núcleo",
    items: [
      { name: "Atendimentos", href: "/#atendimentos" },
      { name: "Sinais de alerta", href: "/#sinais" },
      { name: "Equipe", href: "/equipe" },
      { name: "Como funciona", href: "/#como-funciona" },
      { name: "Contato", href: "/contato" },
    ],
  },
  {
    label: "Conteúdo",
    items: [
      { name: "Artigos", href: "/artigos" },
      { name: "Transtornos de aprendizagem", href: "/transtornos" },
      { name: "Intervenções", href: "/intervencoes" },
      { name: "Biblioteca científica", href: "/biblioteca" },
      { name: "Glossário", href: "/glossario" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex flex-col leading-none"
              aria-label="Núcleo Equilibra — página inicial"
            >
              <span className="font-heading text-2xl font-extrabold tracking-tight text-primary">
                núcleo
              </span>
              <span className="font-heading text-2xl font-extrabold tracking-tight text-primary">
                equilibra
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Psicologia e Psicopedagogia na Ilha do Governador. Avaliação,
              intervenção e acompanhamento para todas as idades — com
              acolhimento, escuta e respeito ao ritmo de cada um.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-text transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-text transition-colors hover:text-primary"
                >
                  <InstagramIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="inline-flex items-center gap-3 text-text transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {SITE.location}
              </li>
            </ul>
          </div>

          {footerLinks.map((group) => (
            <nav key={group.label} aria-label={group.label}>
              <h2 className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
                {group.label}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-divider bg-background p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-text">Em crise ou risco de vida?</strong>{" "}
          Ligue <a href="tel:188" className="font-semibold text-accent-dark">188</a>{" "}
          (CVV) — atendimento gratuito e sigiloso, 24h por dia. O Núcleo Equilibra
          não realiza atendimento de urgência ou emergência.
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-divider pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> Núcleo Equilibra · Psicologia e
            Psicopedagogia. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacidade" className="transition-colors hover:text-primary">
              Privacidade
            </Link>
            <Link href="/termos" className="transition-colors hover:text-primary">
              Termos de uso
            </Link>
            <Link href="/contato" className="transition-colors hover:text-primary">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_MESSAGE, TEAM, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Equipe",
  description:
    "Conheça as profissionais do Núcleo Equilibra: psicopedagogas e psicóloga com formação em autismo, educação inclusiva, ABA e terapia cognitivo-comportamental.",
  alternates: { canonical: "/equipe" },
};

export default function EquipePage() {
  return (
    <main id="conteudo" className="flex-grow">
      <section className="relative overflow-hidden border-b border-divider bg-secondary">
        <div className="container-page py-14 md:py-20">
          <SectionHeading
            align="left"
            eyebrow="Equipe"
            title="Quem atende você"
            description="Cada profissional traz uma formação específica — e todas compartilham o mesmo cuidado: escutar antes de intervir, respeitar o ritmo e envolver a família no processo."
          />
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-8 lg:gap-10">
          {TEAM.map((member, index) => (
            <article
              key={member.slug}
              className="grid gap-6 rounded-[1.75rem] border border-divider bg-surface p-5 shadow-soft md:grid-cols-[280px_1fr] md:gap-8 md:p-7"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary md:aspect-auto md:min-h-[320px]">
                <Image
                  src={member.photo}
                  alt={`Retrato de ${member.name}`}
                  width={366}
                  height={460}
                  sizes="(max-width: 768px) 92vw, 280px"
                  priority={index === 0}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-light">
                  {member.role}
                </p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold text-text md:text-3xl">
                  {member.name}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {member.bio}
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-text">
                      Formação
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                      {member.credentials.map((credential) => (
                        <li key={credential} className="flex gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                            aria-hidden="true"
                          />
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-text">
                      Áreas de atuação
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <li
                          key={specialty}
                          className="rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-primary-dark"
                        >
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <div className="rounded-[2rem] bg-sage p-8 text-center md:p-12">
          <h2 className="text-primary-dark">Quer conversar com a equipe?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-primary-dark/80 md:text-base">
            Conte o que você tem observado. A partir daí indicamos o profissional
            mais adequado e combinamos a primeira conversa.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-dark/25 text-primary-dark hover:bg-primary-dark/5"
            >
              <Link href="/contato">
                Ver canais de contato
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

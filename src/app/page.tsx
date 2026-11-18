import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  School,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  DIFERENCES,
  SERVICES,
  SIGNS,
  SITE,
  STEPS,
  TEAM,
  whatsappLink,
} from "@/lib/site";

export const metadata = {
  title: "Núcleo Equilibra — Psicologia e Psicopedagogia na Ilha do Governador",
  description:
    "Núcleo Equilibra: avaliação psicopedagógica, intervenção clínica, psicoterapia, autismo e inclusão, orientação de pais e ponte com a escola. Atendimento presencial na Ilha do Governador, RJ.",
  alternates: { canonical: "/" },
};

const differenceIcons = [Users, UserRound, School, MapPin] as const;

const serviceIcons = [
  Brain,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Users,
  School,
] as const;

export default function Home() {
  return (
    <main id="conteudo" className="flex-grow">
      <Hero />

      {/* Saúde mental / prevenção */}
      <section className="border-y border-accent/20 bg-accent-soft">
        <div className="container-page grid gap-8 py-12 md:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-dark">
              Saúde mental · Falar é um ato de cuidado
            </p>
            <h2 className="mt-4 max-w-lg text-2xl text-text md:text-3xl">
              Às vezes, por trás de um “estou bem”, existe alguém cansado de
              carregar tudo sozinho.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Se alguém próximo não está bem, aproxime-se, escute e incentive a
              busca por ajuda profissional. Cuidar da saúde mental é prevenção.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <a href="tel:188">
                  Ligue 188 — CVV
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/contato">Falar com a equipe</Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-accent-dark">
              Atendimento gratuito e sigiloso, 24h por dia.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-accent/20 bg-background/80 p-5">
              <h3 className="text-sm font-bold text-text">Sinais de alerta</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Isolamento repentino</li>
                <li>Falta de esperança</li>
                <li>Tristeza persistente</li>
                <li>Mudanças no sono e apetite</li>
                <li>Falas sobre morte ou desistência</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-background/80 p-5">
              <h3 className="text-sm font-bold text-text">Como ajudar</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Escute sem julgar</li>
                <li>Mostre que se importa</li>
                <li>Incentive a busca por ajuda</li>
                <li>Esteja presente</li>
                <li>Respeite o tempo da pessoa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container-page py-12 md:py-16">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {DIFERENCES.map((item, index) => {
            const Icon = differenceIcons[index];
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-divider bg-surface p-5"
              >
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-heading text-base font-bold text-text">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Atendimentos */}
      <section id="atendimentos" className="scroll-mt-24 bg-secondary">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="O que fazemos"
            title="Atendimentos"
            description="Um cuidado que integra aprendizagem e saúde mental — com avaliação cuidadosa, intervenção individualizada e diálogo com a família e a escola."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Card
                  key={service.title}
                  className="group h-full border-divider bg-surface transition-transform duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <CardHeader className="pb-3">
                    <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-light text-primary-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
                      {service.category}
                    </p>
                    <CardTitle className="font-heading text-lg font-bold leading-snug">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 sm:flex sm:justify-center">
            <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
              <a
                href={whatsappLink(
                  "Olá! Gostaria de saber qual atendimento faz sentido para o meu caso.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar sobre meu caso
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Citação */}
      <section className="container-page py-16 md:py-24">
        <figure className="mx-auto max-w-4xl rounded-[2rem] bg-sage px-6 py-12 text-center md:px-16 md:py-16">
          <blockquote className="font-heading text-2xl font-extrabold leading-tight text-primary-dark md:text-4xl">
            “Nunca é só sobre dificuldade de aprendizagem. É sobre autoestima,
            frustração, medo de errar e vontade de desistir.”
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary-dark/80">
            Jucerli Cardoso · Psicopedagoga
          </figcaption>
        </figure>
      </section>

      {/* Sinais */}
      <section id="sinais" className="scroll-mt-24 bg-secondary">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="Quando procurar"
                title="Por trás de um “ele não aprende” existe um “ele ainda não encontrou a sua forma de aprender”."
                description="Se você percebe que seu filho está enfrentando dificuldades, não espere que ele desista de tentar. O sofrimento também aparece no silêncio, no afastamento, na irritabilidade, no cansaço ou naquele “está tudo bem” que esconde muita coisa."
              />
              <Button asChild className="mt-8 rounded-full">
                <a
                  href={whatsappLink(
                    "Olá! Percebi alguns sinais e gostaria de orientação.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  Falar com a equipe
                </a>
              </Button>
            </div>

            <ol className="space-y-3">
              {SIGNS.map((sign, index) => (
                <li
                  key={sign}
                  className="flex items-start gap-4 rounded-2xl border border-divider bg-background p-5"
                >
                  <span className="font-heading text-sm font-extrabold text-primary-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-text md:text-base">
                    {sign}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="scroll-mt-24">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Equipe"
            title="Quem atende você"
            description="Profissionais com formação específica para olhar a aprendizagem, o desenvolvimento e o sofrimento emocional por inteiro."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <article
                key={member.slug}
                className="group overflow-hidden rounded-[1.5rem] border border-divider bg-surface shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  <Image
                    src={member.photo}
                    alt={`Retrato de ${member.name}`}
                    width={366}
                    height={460}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-text">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary-light">
                    {member.role}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
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
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/equipe">
                Conhecer a equipe completa
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="scroll-mt-24 bg-secondary">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Como funciona"
            title="Do primeiro contato ao plano"
            description="Um caminho claro, sem pressa e sem julgamento — para que você saiba exatamente o que esperar em cada etapa."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((item) => (
              <li
                key={item.step}
                className="relative flex h-full flex-col rounded-2xl border border-divider bg-background p-6"
              >
                <span className="inline-flex w-fit rounded-full bg-sage-light px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary-dark">
                  Etapa {item.step}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-24">
        <div className="container-page py-16 md:py-24">
          <div className="overflow-hidden rounded-[2rem] bg-primary text-primary-foreground">
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage">
                  Contato
                </p>
                <h2 className="mt-4 text-primary-foreground">
                  Vamos entender juntos como ajudar.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                  Conte o que está acontecendo. A partir daí combinamos a
                  primeira conversa e o caminho de avaliação.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="secondary" size="lg" asChild>
                    <a
                      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                      WhatsApp {SITE.phoneDisplay}
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/contato">Ver todos os canais</Link>
                  </Button>
                </div>
              </div>

              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                    Onde
                  </dt>
                  <dd className="mt-1 text-primary-foreground">
                    {SITE.location}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                    Público
                  </dt>
                  <dd className="mt-1 text-primary-foreground">
                    Crianças, adolescentes, jovens e adultos
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                    Instagram
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={SITE.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground underline decoration-primary-foreground/30 underline-offset-4 hover:text-sage"
                    >
                      {SITE.instagramHandle}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="border-t border-primary-foreground/15 px-8 py-5 text-xs text-primary-foreground/70 md:px-12 lg:px-16">
              Atendimento presencial na Ilha do Governador. Emergências: ligue
              188 (CVV) ou procure o serviço de saúde mais próximo.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

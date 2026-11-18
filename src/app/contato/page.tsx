import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldAlert,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { InstagramIcon } from "@/components/icons";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contato",
  description:
    "Fale com o Núcleo Equilibra pelo WhatsApp (21) 97431-3984 ou Instagram @nucleo.equilibra. Atendimento presencial na Ilha do Governador, Rio de Janeiro.",
  alternates: { canonical: "/contato" },
};

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Ilha%20do%20Governador%2C%20Rio%20de%20Janeiro%20-%20RJ";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    description: "Forma mais rápida de agendar e tirar dúvidas.",
    href: whatsappLink(),
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: SITE.instagramHandle,
    description: "Conteúdos, bastidores e informações do Núcleo.",
    href: SITE.instagramUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: SITE.phoneDisplay,
    description: "Ligue em horário comercial.",
    href: `tel:${SITE.phoneE164}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Onde estamos",
    value: SITE.location,
    description: "Atendimento presencial, com hora marcada.",
    href: mapUrl,
    external: true,
  },
];

export default function ContatoPage() {
  return (
    <main id="conteudo" className="flex-grow">
      <section className="border-b border-divider bg-secondary">
        <div className="container-page py-14 md:py-20">
          <SectionHeading
            align="left"
            eyebrow="Contato"
            title="Vamos entender juntos como ajudar."
            description="Conte o que está acontecendo. A partir daí combinamos a primeira conversa e o caminho de avaliação. Atendemos crianças, adolescentes, jovens e adultos."
          />
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="rounded-[1.75rem] border border-divider bg-surface p-6 shadow-soft md:p-8">
            <h2 className="font-heading text-xl font-bold text-text">
              Envie uma mensagem
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha os campos e continue a conversa no WhatsApp com a
              mensagem pronta.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-4">
            <ul className="grid gap-4 sm:grid-cols-2">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex h-full flex-col rounded-2xl border border-divider bg-surface p-5 transition-colors hover:border-primary/30 hover:bg-secondary"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-primary-dark">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-light">
                        {channel.label}
                      </span>
                      <span className="mt-1 text-sm font-semibold text-text">
                        {channel.value}
                      </span>
                      <span className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {channel.description}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="rounded-2xl border border-divider bg-surface p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-text">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Horário de atendimento
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Segunda a sexta, das 8h às 18h. Atendimentos com hora marcada.
                Mensagens recebidas fora desse período são respondidas no
                próximo dia útil.
              </p>
            </div>

            <div className="rounded-2xl border border-accent/25 bg-accent-soft p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent-dark">
                <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                Em caso de urgência
              </div>
              <p className="mt-2 text-sm leading-relaxed text-accent-dark/90">
                O Núcleo não realiza atendimento de emergência. Em crise ou risco
                de vida, ligue{" "}
                <a href="tel:188" className="font-semibold underline">
                  188 (CVV)
                </a>{" "}
                — gratuito e sigiloso, 24h — ou procure o serviço de saúde mais
                próximo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-divider bg-secondary">
        <div className="container-page py-10">
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-background p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage text-primary-dark">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-heading text-base font-bold text-text">
                  {SITE.location}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Endereço completo informado no momento do agendamento.
                </p>
              </div>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Ver no mapa →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

const subjects = [
  "Avaliação psicopedagógica",
  "Intervenção clínica",
  "Psicoterapia",
  "Autismo e inclusão",
  "Orientação de pais",
  "Ponte com a escola",
  "Outro assunto",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const text = [
    `Olá! Meu nome é ${name || "…"}.`,
    `Assunto: ${subject}.`,
    message ? `\n${message}` : "",
    email ? `\nE-mail para retorno: ${email}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: { name?: string; message?: string } = {};
    if (!name.trim()) nextErrors.name = "Informe seu nome.";
    if (!message.trim()) nextErrors.message = "Conte brevemente o que está acontecendo.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-text">
            Nome <span className="text-accent-dark">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-text outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="Como podemos te chamar?"
          />
          {errors.name && (
            <p id="name-error" className="text-xs font-medium text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-text">
            E-mail <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-text outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="voce@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold text-text">
          Assunto
        </label>
        <select
          id="subject"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
        >
          {subjects.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-text">
          Mensagem <span className="text-accent-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30"
          placeholder="Conte brevemente o que você tem observado e para quem é o atendimento."
        />
        {errors.message ? (
          <p id="message-error" className="text-xs font-medium text-destructive">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="text-xs text-muted-foreground">
            Evite dados sensíveis. Detalhes clínicos serão conversados no
            atendimento.
          </p>
        )}
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Ao enviar, você será direcionado ao WhatsApp do Núcleo com a mensagem
        preenchida. Não armazenamos os dados deste formulário. Este canal não é
        indicado para urgências — em crise, ligue 188 (CVV).
      </p>

      <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
        <Send className="mr-2 h-4 w-4" aria-hidden="true" />
        Enviar pelo WhatsApp
      </Button>

      <div aria-live="polite">
        {sent && (
          <p className="flex items-start gap-2 rounded-xl bg-sage-light p-4 text-sm text-primary-dark">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Abrimos o WhatsApp em uma nova aba. Se não abriu, toque em
            “Enviar pelo WhatsApp” novamente ou use o número{" "}
            <a
              href={whatsappLink(text)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              (21) 97431-3984
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

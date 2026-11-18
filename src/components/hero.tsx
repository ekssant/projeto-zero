"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[26rem] bg-gradient-to-b from-sage-light/70 via-background to-background"
      />
      <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Psicologia · Psicopedagogia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 text-primary"
          >
            Equilíbrio para pensar,
            <br className="hidden sm:block" /> sentir e aprender.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Avaliação e intervenção em dificuldades de aprendizagem,
            acompanhamento psicológico para pacientes de todas as idades — com
            acolhimento, escuta e respeito ao ritmo de cada um.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="rounded-full">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar conversa
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#atendimentos">
                Ver atendimentos
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-light" aria-hidden="true" />
              Ilha do Governador · RJ
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
              Todas as idades
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
              Atendimento presencial
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] bg-sage/60"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-divider bg-secondary shadow-card">
            <Image
              src="/images/hero-girassol.webp"
              alt="Girassol em vaso de cerâmica ao lado de uma caneca com a marca do Núcleo Equilibra"
              width={598}
              height={1152}
              priority
              sizes="(max-width: 1024px) 92vw, 42vw"
              className="h-[22rem] w-full object-cover object-[50%_35%] sm:h-[26rem] lg:h-[34rem]"
            />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/95 p-4 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-light">
              Núcleo Equilibra
            </p>
            <p className="mt-1 text-sm font-medium text-text">
              Cuidado que olha para a pessoa inteira — não só para a dificuldade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

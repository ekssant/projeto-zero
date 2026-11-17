"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative px-4 py-16 lg:py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-text tracking-tight leading-tight mb-6">
            Ciência, compreensão e intervenção para transformar a
            aprendizagem.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Conteúdo baseado em evidências científicas sobre como acontece a
            aprendizagem, dificuldades e transtornos de aprendizagem, avaliação
            psicopedagógica e intervenção. Para famílias, educadores e
            profissionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/psicopedagogia">
                <Play className="w-4 h-4 mr-2" /> Conhecer a Psicopedagogia
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/atendimento">Como funciona o atendimento</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

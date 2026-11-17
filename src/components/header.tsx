"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Search,
  BookOpen,
  Brain,
  Users,
  School,
  Menu as MenuIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Psicopedagogia", href: "/psicopedagogia" },
  { name: "Atendimento", href: "/atendimento" },
  { name: "Avaliação", href: "/avaliacao" },
  { name: "Transtornos", href: "/transtornos" },
  { name: "Intervenções", href: "/intervencoes" },
  { name: "Biblioteca científica", href: "/biblioteca" },
  { name: "Glossário", href: "/glossario" },
];

const iconByName: Record<string, React.ElementType> = {
  Psicopedagogia: Brain,
  Atendimento: Users,
  Avaliação: School,
  Transtornos: BookOpen,
  Intervenções: BookOpen,
  "Biblioteca científica": BookOpen,
  Glossário: BookOpen,
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () =>
      setIsScrolled(window.scrollY > 10),
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border background/95 backdrop-blur supports-[backdrop-blur]:background/80",
        isScrolled ? "shadow-soft" : "shadow-none",
        "transition-colors duration-300",
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Aprender em Foco - página inicial"
        >
          <div
            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg"
            aria-hidden="true"
          >
            Af
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-text">
            Aprender em Foco
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            const Icon = iconByName[item.name];
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                aria-label={item.name}
              >
                {Icon ? <Icon className="w-4 h-4" /> : null}
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/busca"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Search className="w-4 h-4" /> Busca
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/contato">Fale conosco</Link>
          </Button>
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-secondary hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-left rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/busca"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-left rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary transition-colors flex items-center gap-2"
              >
                <Search className="w-4 h-4" /> Busca
              </Link>
              <Button asChild className="w-full">
                <Link href="/contato">Fale conosco</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

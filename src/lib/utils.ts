import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes de Tailwind de forma segura, removendo conflitos.
 * Útil para componentes com variantes (class-variance-authority).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

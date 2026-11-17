"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center space-y-2", className)}>
      <AnimatePresence mode="wait">
        <motion.h2
          key="title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="text-2xl md:text-3xl font-heading font-bold text-text tracking-tight"
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            key="desc"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

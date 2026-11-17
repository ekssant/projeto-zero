import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  category?: string;
  variant?: "default" | "featured";
}

export function ContentCard({
  title,
  description,
  href,
  category,
  variant = "default",
}: ContentCardProps) {
  return (
    <Card
      className={cn(
        "group hover:shadow-medium transition-all duration-300",
        variant === "featured" ? "shadow-card" : "",
      )}
    >
      {category && (
        <CardHeader className="pb-2">
          <span className="text-xs font-semibold text-primary tracking-wider uppercase">
            {category}
          </span>
        </CardHeader>
      )}
      <CardHeader className="pt-0">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
      >
        Ler mais <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </Card>
  );
}

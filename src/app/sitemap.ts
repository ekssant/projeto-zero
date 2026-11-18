import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/equipe", changeFrequency: "monthly", priority: 0.9 },
    { path: "/contato", changeFrequency: "monthly", priority: 0.9 },
    { path: "/atendimento", changeFrequency: "monthly", priority: 0.7 },
    { path: "/psicopedagogia", changeFrequency: "monthly", priority: 0.7 },
    { path: "/avaliacao", changeFrequency: "monthly", priority: 0.7 },
    { path: "/transtornos", changeFrequency: "monthly", priority: 0.6 },
    { path: "/intervencoes", changeFrequency: "monthly", priority: 0.6 },
    { path: "/artigos", changeFrequency: "weekly", priority: 0.6 },
    { path: "/biblioteca", changeFrequency: "monthly", priority: 0.5 },
    { path: "/glossario", changeFrequency: "monthly", priority: 0.5 },
    { path: "/familias", changeFrequency: "monthly", priority: 0.5 },
    { path: "/educadores", changeFrequency: "monthly", priority: 0.5 },
    { path: "/formacao", changeFrequency: "monthly", priority: 0.4 },
    { path: "/privacidade", changeFrequency: "yearly", priority: 0.2 },
    { path: "/termos", changeFrequency: "yearly", priority: 0.2 },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

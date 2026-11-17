import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Fale Conosco | Aprender em Foco",
  description: "Canais de contato do portal Aprender em Foco.",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Fale conosco"
              description="Envie uma mensagem ou use os canais abaixo para entrar em contato com o Aprender em Foco."
            />
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Enviar mensagem</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <form className="space-y-4" action="#" method="POST" noValidate>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text">Nome</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text">E-mail</label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text">Mensagem</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Ao enviar, você concorda com nossa Política de Privacidade.
                      Não coletamos dados sensíveis desnecessariamente (LGPD).
                    </p>
                    <Button type="submit">Enviar mensagem</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Canais</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-text">contato@aprenderemfoco.exemplo</div>
                      <div className="text-xs text-muted-foreground">E-mail institucional</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-text">(11) 0000-0000</div>
                      <div className="text-xs text-muted-foreground">Telefone de contato</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-text">Brasil</div>
                      <div className="text-xs text-muted-foreground">Atendimento online</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Este é um canal institucional do portal. Não atendemos
                    emergências clínicas nem realizamos diagnósticos por este
                    meio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

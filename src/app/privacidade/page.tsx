import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacidade",
  description: "Política de privacidade e tratamento de dados do portal.",
};

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen background">
      <main className="flex-grow">
        <section className="px-4 py-12 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Privacidade e proteção de dados"
              description="Como o Núcleo Equilibra trata as informações dos usuários, respeitando a LGPD."
            />
            <div className="mt-8 prose prose-lg text-text leading-relaxed">
              <Card>
                <CardContent className="p-6 pt-0">
                  <p>
                    O portal não coleta dados sensíveis desnecessariamente e
                    não armazena informações clínicas de crianças nesta versão.
                    Qualquer dado fornecido por formulários de contato é
                    tratado com sigilo, respeitando a Lei Geral de Proteção de
                    Dados (LGPD — Lei nº 13.709/2018).
                  </p>
                  <p>
                    Não são utilizadas técnicas de rastreamento que
                    comprometam a privacidade do usuário. Conteúdos científicos
                    não reproduzem artigos protegidos integralmente.
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

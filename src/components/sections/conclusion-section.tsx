import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export function ConclusionSection() {
  return (
    <Section
      title="Prêt à Simplifier Votre Avenir Financier Transfrontalier ?"
      className="bg-primary text-primary-foreground"
      titleClassName="text-primary-foreground"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-lg">
          Le lancement de ce cabinet représente une opportunité de marché significative. En résolvant directement les "pain points" des frontaliers et en offrant une expérience client fluide et optimisée grâce à la technologie, notre cabinet se positionnera comme le partenaire de référence.
        </p>
        <p className="text-lg font-semibold">
          Nous garantissons non seulement la conformité mais aussi l'optimisation financière et la tranquillité d'esprit des frontaliers. Le "MyFrontaliers Web Kit" est un atout différenciateur majeur qui concrétisera cette vision.
        </p>
        <div className="pt-6">
          <Button size="lg" variant="secondary" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground hover:text-accent-foreground">
            <Link href="#ai-insights">
              <Rocket className="mr-2 h-5 w-5" />
              Contactez-nous pour une consultation
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

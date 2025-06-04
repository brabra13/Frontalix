import { Section } from "@/components/shared/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, FileCheck2, DollarSign } from "lucide-react";

const healthcareChoicePoints = [
  {
    icon: HeartPulse,
    title: "Droit d'Option",
    description: "En tant que frontalier, vous avez un droit d'option initial pour choisir entre la CMU (France) et la LAMal (Suisse).",
  },
  {
    icon: FileCheck2,
    title: "Critères de Choix",
    description: "Le choix dépend de votre situation personnelle, familiale, de vos besoins de couverture et des coûts associés.",
  },
  {
    icon: DollarSign,
    title: "Impact Financier",
    description: "Les cotisations CMU sont basées sur le Revenu Fiscal de Référence. Les primes LAMal varient selon l'assureur et le canton.",
  },
];

export function HealthcareChoicesFlowchartSection() {
  return (
    <Section
      title="Choix d'Assurance Maladie : CMU ou LAMal ?"
      subtitle="Une décision importante avec des implications financières et de couverture."
      className="bg-secondary/30"
    >
      <p className="text-center text-lg text-foreground mb-10 max-w-2xl mx-auto">
        Le choix entre la Couverture Maladie Universelle (CMU) française et l'assurance maladie suisse (LAMal) est crucial. Nous vous aidons à y voir clair.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {healthcareChoicePoints.map((point, index) => (
          <Card key={index} className="text-center shadow-lg bg-card">
            <CardHeader>
              <div className="mx-auto flex items-center justify-center h-16 w-116 bg-primary/10 rounded-full mb-4 p-3">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary font-headline">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-card-foreground">{point.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-10 italic">
        Note: L'optimisation de ce choix est un élément clé de notre accompagnement.
      </p>
    </Section>
  );
}

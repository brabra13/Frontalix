import { Section } from "@/components/shared/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Scale, FileQuestion } from "lucide-react";

const taxChoicePoints = [
  {
    icon: MapPin,
    title: "Canton de Travail",
    description: "Le canton où vous exercez votre activité professionnelle est un facteur déterminant.",
  },
  {
    icon: Scale,
    title: "Situation Matrimoniale",
    description: "La situation de votre conjoint (résidence, activité) influence le lieu d'imposition.",
  },
  {
    icon: FileQuestion,
    title: "Conventions Fiscales",
    description: "Les accords bilatéraux entre la France et la Suisse dictent les règles d'attribution de l'imposition.",
  },
];

export function TaxChoicesFlowchartSection() {
  return (
    <Section
      title="Où Payer l'Impôt ?"
      subtitle="Une question centrale pour les frontaliers, dépendant de multiples facteurs."
      className="bg-card"
    >
      <p className="text-center text-lg text-card-foreground mb-10 max-w-2xl mx-auto">
        La détermination du lieu d'imposition (Suisse, France, ou les deux) est une source majeure de confusion. Voici les principaux éléments à considérer pour y voir plus clair. Une analyse personnalisée est essentielle.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {taxChoicePoints.map((point, index) => (
          <Card key={index} className="text-center shadow-lg bg-background">
            <CardHeader>
              <div className="mx-auto flex items-center justify-center h-16 w-116 bg-accent/10 rounded-full mb-4 p-3">
                <point.icon className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl text-primary font-headline">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground">{point.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
       <p className="text-center text-sm text-muted-foreground mt-10 italic">
        Note: Ceci est une simplification. Chaque situation est unique et requiert une analyse détaillée.
      </p>
    </Section>
  );
}

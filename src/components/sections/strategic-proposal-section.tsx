import { Section } from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, ShieldCheck, TrendingUp, Brain } from "lucide-react";

const valuePropositions = [
  {
    icon: Brain,
    title: "Expertise Inégalée en Fiscalité Franco-Suisse",
    description: "Capitalisant sur une expertise approfondie (démontrée par votre mémoire d'expertise comptable sur l'accompagnement des frontaliers), nous offrons une maîtrise parfaite des conventions fiscales bilatérales, des régimes d'imposition (impôt à la source, TOU, quasi-résident), et de la prévoyance (AVS, LPP, 3e pilier, PER)."
  },
  {
    icon: TrendingUp,
    title: "Optimisation Fiscale et Sociale Maximale",
    description: "Notre objectif est l'optimisation de la situation fiscale et sociale de chaque client, en identifiant toutes les déductions et avantages possibles pour générer des économies substantielles."
  },
  {
    icon: ShieldCheck,
    title: "Sécurité et Tranquillité d'Esprit",
    description: "Nous garantissons une gestion rigoureuse et proactive pour éviter les erreurs coûteuses, la double imposition, les amendes, et assurer la conformité aux obligations déclaratives."
  },
  {
    icon: Users,
    title: "Accompagnement Personnalisé et Pédagogique",
    description: "Un service sur mesure qui va au-delà de la simple production, en éduquant les clients et en les aidant à prendre des décisions éclairées. Les experts-comptables bénéficient d'une confiance élevée (91% des chefs d'entreprise), ce qui légitime notre rôle de conseiller."
  }
];

export function StrategicProposalSection() {
  return (
    <Section
      title="Notre Proposition Stratégique"
      subtitle="Un Partenaire Digitalisé pour l'Optimisation et la Sérénité."
    >
      <div className="text-center mb-12">
        <p className="text-lg text-foreground max-w-3xl mx-auto">
          Nous proposons un cabinet d'expertise comptable ultra-spécialisé, positionné comme un partenaire stratégique et digitalisé, pour transformer les prestations de production en prestations de prédiction et de conseil à forte valeur ajoutée.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-primary text-center mb-8 font-headline">Notre Proposition de Valeur Fondamentale :</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {valuePropositions.map((prop, index) => (
          <Card key={index} className="bg-card shadow-lg">
            <CardHeader className="flex flex-row items-start space-x-4 pb-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <prop.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-primary font-headline mt-1">{prop.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground">{prop.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

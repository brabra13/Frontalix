import { Section } from "@/components/shared/section";
import { FeatureCard } from "@/components/shared/feature-card";
import { FileInput, Calculator, FolderKanban, Zap, BarChartBig, Users2, BrainCircuit, Handshake } from "lucide-react";

const toolkitFeatures = [
  {
    icon: FileInput,
    title: "Questionnaires Numériques",
    description: "Collecte rapide et structurée des informations client."
  },
  {
    icon: Calculator,
    title: "Simulateurs Intégrés",
    description: "Simulateurs fiscaux (quasi-résident, PER vs. 3e pilier), comparateurs CMU/LAMal pour des projections claires."
  },
  {
    icon: FolderKanban,
    title: "Plateforme Collaborative Client (GED)",
    description: "Espace sécurisé pour dépôt de documents, échange et communication en temps réel, accessible."
  },
  {
    icon: Zap,
    title: "Automatisation des Tâches",
    description: "Récupération des flux bancaires, préparation de déclarations préremplies, libérant du temps pour le conseil."
  },
  {
    icon: BarChartBig,
    title: "Reporting Personnalisé",
    description: "Rapports clairs avec visualisation des optimisations réalisées."
  },
  {
    icon: Users2,
    title: "Outils de Gestion Interne (CRM/RH)",
    description: "Suivi client efficace et gestion optimisée des collaborateurs."
  },
  {
    icon: BrainCircuit,
    title: "Analyse de Données et IA",
    description: "Utilisation de l'IA pour l'analyse prédictive et la rédaction de rapports, amplifiant l'expertise humaine."
  },
  {
    icon: Handshake,
    title: "Partenariats Stratégiques",
    description: "Collaboration avec des fintechs spécialisées (ex: Wise, b-sharpe) pour des solutions de transfert de salaires optimisées."
  }
];

export function DigitalToolkitSection() {
  return (
    <Section
      title={`Intégration d'Outils Numériques : "MyFrontaliers Web Kit"`}
      subtitle="Une approche renforcée par une intégration complète d'outils numériques avancés."
      className="bg-secondary/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {toolkitFeatures.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            className="bg-card"
          />
        ))}
      </div>
      <div className="mt-12 text-center p-6 bg-primary/10 rounded-lg">
        <p className="text-lg text-primary font-medium">
          L'automatisation nous permet de passer de la production au conseil. Nous maintenons des valeurs de proximité et d'écoute active, la technologie renforçant cette relation. Nous investissons dans le développement continu des compétences pour maîtriser les spécificités transfrontalières et les outils numériques.
        </p>
      </div>
    </Section>
  );
}

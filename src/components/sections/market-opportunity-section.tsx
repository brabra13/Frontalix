import { Section } from "@/components/shared/section";
import { Lightbulb } from "lucide-react";

export function MarketOpportunitySection() {
  return (
    <Section 
      title="Contexte et Opportunité de Marché"
      subtitle="Un marché en pleine expansion avec des besoins spécifiques non satisfaits."
      className="bg-card"
    >
      <div className="max-w-4xl mx-auto text-left md:text-lg space-y-6 text-card-foreground">
        <p>
          Le marché des travailleurs frontaliers franco-suisses est en pleine expansion, avec une augmentation significative de leur nombre, notamment dans la région lémanique (<span className="font-semibold text-primary">+24%</span> depuis début 2021). Cette population, qui représente plus de <span className="font-semibold text-primary">106 488 frontaliers</span> travaillant rien qu'à Genève en 2023, est hétérogène (salariés, indépendants, retraités) et dispose d'un revenu fiscal de référence individualisé moyen de <span className="font-semibold text-primary">55 472 euros</span>.
        </p>
        <blockquote className="border-l-4 border-accent pl-6 py-2 my-6 bg-accent/5 text-accent-foreground italic text-black">
          Malgré cette croissance, les frontaliers font face à une complexité fiscale et sociale unique qui génère d'importantes frustrations et des besoins non satisfaits. Il existe actuellement "peu de structures qui proposent une offre structurée et adaptée à cette typologie de clientèle", créant ainsi un vide sur le marché et une opportunité significative pour un cabinet ultra-spécialisé.
        </blockquote>
        <div className="flex items-center justify-center p-6 bg-primary/10 rounded-lg mt-8">
            <Lightbulb className="h-10 w-10 text-primary mr-4 shrink-0" />
            <p className="text-primary font-medium">
                Cette dynamique crée un appel clair pour une expertise ciblée, capable de naviguer les subtilités des deux systèmes et d'offrir une réelle valeur ajoutée.
            </p>
        </div>
      </div>
    </Section>
  );
}

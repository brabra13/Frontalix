import { Section } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, FileWarning, SearchSlash, Calculator, Banknote, Hourglass } from "lucide-react";

const painPointsData = [
  {
    id: "pain1",
    title: "Complexité et Confusion Fiscale et Sociale",
    icon: AlertTriangle,
    content: [
      "Les règles fiscales sont perçues comme très compliquées et dépendent de multiples facteurs (canton de travail, situation matrimoniale du conjoint).",
      "La question de savoir où payer l'impôt (Suisse, France, ou les deux) est une source majeure de confusion.",
      "Le système de retraite suisse (trois piliers) est significativement différent du système français, rendant les comparaisons difficiles."
    ]
  },
  {
    id: "pain2",
    title: "Risque de Double Imposition",
    icon: FileWarning,
    content: [
      "Beaucoup sont soumis à l'impôt à la source en Suisse, soulevant la crainte de payer en double.",
      "L'absence de l'attestation de résidence fiscale (formulaire 2041-AS) peut entraîner une double imposition difficile à corriger."
    ]
  },
  {
    id: "pain3",
    title: "Difficulté à Naviguer dans les Formulaires et Procédures",
    icon: SearchSlash,
    content: [
      "La déclaration fiscale française nécessite des documents et imprimés fiscaux très spécifiques (ex: 2042, 2047, 3916/3916 bis).",
      "Remplir correctement ces annexes est technique et source d'erreurs potentielles."
    ]
  },
  {
    id: "pain4",
    title: "Manque d'Information ou Mauvaise Information",
    icon: AlertTriangle,
    content: [
      "Les employeurs ne renseignent pas toujours sur l'importance de documents clés comme la 2041-AS.",
      "Les frontaliers se sentent souvent seuls face à la complexité administrative."
    ]
  },
  {
    id: "pain5",
    title: "Gestion des Déductions et Optimisations",
    icon: Calculator,
    content: [
      "Connaître et appliquer les déductions possibles (frais professionnels, LAMal/CMU, rachats 2ème et 3ème piliers) est complexe et nécessite une expertise spécifique."
    ]
  },
  {
    id: "pain6",
    title: "Difficultés avec les Outils Numériques Existants",
    icon: SearchSlash,
    content: [
      "Les plateformes et simulateurs publics ou cantonaux peuvent présenter des difficultés (bugs), un manque de prise en compte de tous les paramètres, et l'absence d'un outil unique pour simuler la situation fiscale globale France/Suisse."
    ]
  },
  {
    id: "pain7",
    title: "Poids des Obligations Déclaratives (CMU, Comptes Étrangers)",
    icon: Banknote,
    content: [
      "La déclaration en France est obligatoire même si l'impôt est payé en Suisse, notamment pour le calcul du Revenu Fiscal de Référence (RFR) qui détermine le coût de la CMU.",
      "Il existe une obligation stricte de déclarer tous les comptes bancaires étrangers (y compris les 3ème piliers) sur le formulaire 3916, sous peine d'amende significative."
    ]
  },
  {
    id: "pain8",
    title: "Impact à Long Terme et Coût de la Vie",
    icon: Hourglass,
    content: [
      "Coût de la vie élevé en Suisse, frais de transport importants, et complexité des démarches pour faire valoir les droits à la retraite dans deux systèmes différents."
    ]
  }
];

export function PainPointsSection() {
  return (
    <Section
      title="Les 'Pain Points' des Frontaliers Franco-Suisses"
      subtitle="Naviguer entre deux systèmes fiscaux et sociaux distincts entraîne de nombreux défis et frustrations."
      className="bg-secondary/30"
    >
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {painPointsData.map((point) => (
          <AccordionItem value={point.id} key={point.id} className="bg-card mb-3 rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
              <div className="flex items-center space-x-3">
                <point.icon className="h-6 w-6 text-accent shrink-0" />
                <span className="font-semibold text-primary font-headline">{point.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-card-foreground">
              <ul className="list-disc list-inside space-y-2">
                {point.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

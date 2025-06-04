import { Section } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, TrendingUp, Users, Home, BarChart, Briefcase } from "lucide-react";

const serviceOfferingsData = [
  {
    id: "service1",
    title: "Diagnostic Fiscal et Social Complet",
    icon: FileText,
    content: "Analyse initiale approfondie pour déterminer le régime fiscal applicable et les leviers d'optimisation."
  },
  {
    id: "service2",
    title: "Gestion des Déclarations Complexes",
    icon: Briefcase,
    content: "Déclaration d'impôt française (2042, 2047-Suisse, 3916/3916 bis) avec application des crédits d'impôt et déductions, demande de rectification d'impôt à la source en Suisse (DRIS/TOU) et accompagnement pour le statut de quasi-résident, vérification et déclaration des cotisations CMU."
  },
  {
    id: "service3",
    title: "Conseil en Prévoyance et Retraite",
    icon: TrendingUp,
    content: "Optimisation des choix LAMal/CMU, arbitrage PER/3e pilier suisse, et planification de la retraite transfrontalière."
  },
  {
    id: "service4",
    title: "Accompagnement du Télétravail",
    icon: Home,
    content: "Conseils spécifiques sur les implications fiscales et sociales du télétravail transfrontalier."
  },
  {
    id: "service5",
    title: "Optimisation Patrimoniale",
    icon: BarChart,
    content: "Intégration de conseils en gestion de patrimoine franco-suisse."
  }
];

export function ServiceOfferingsSection() {
  return (
    <Section
      title="Une Offre de Services Complète"
      subtitle="Des solutions sur mesure pour chaque aspect de votre situation transfrontalière."
      className="bg-card"
    >
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {serviceOfferingsData.map((service) => (
          <AccordionItem value={service.id} key={service.id} className="bg-background mb-3 rounded-lg shadow-sm border border-border">
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
               <div className="flex items-center space-x-3">
                <service.icon className="h-6 w-6 text-accent shrink-0" />
                <span className="font-semibold text-primary font-headline">{service.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-foreground">
              <p>{service.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

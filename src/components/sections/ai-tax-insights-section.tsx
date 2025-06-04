import { Section } from "@/components/shared/section";
import { TaxInsightsClient } from "@/components/ai/tax-insights-client";

export function AiTaxInsightsSection() {
  return (
    <Section
      id="ai-insights"
      title="Assistant Fiscal IA"
      subtitle="Recevez des conseils personnalisés pour optimiser votre situation fiscale grâce à notre outil intelligent."
      className="bg-gradient-to-b from-background to-secondary/40"
      contentClassName="flex justify-center"
    >
      <TaxInsightsClient />
    </Section>
  );
}

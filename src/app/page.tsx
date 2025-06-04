import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MarketOpportunitySection } from "@/components/sections/market-opportunity-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { StrategicProposalSection } from "@/components/sections/strategic-proposal-section";
import { ServiceOfferingsSection } from "@/components/sections/service-offerings-section";
import { DigitalToolkitSection } from "@/components/sections/digital-toolkit-section";
import { TaxChoicesFlowchartSection } from "@/components/sections/tax-choices-flowchart-section";
import { HealthcareChoicesFlowchartSection } from "@/components/sections/healthcare-choices-flowchart-section";
import { AiTaxInsightsSection } from "@/components/sections/ai-tax-insights-section";
import { ConclusionSection } from "@/components/sections/conclusion-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MarketOpportunitySection />
        <PainPointsSection />
        <TaxChoicesFlowchartSection />
        <HealthcareChoicesFlowchartSection />
        <StrategicProposalSection />
        <ServiceOfferingsSection />
        <DigitalToolkitSection />
        <AiTaxInsightsSection />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
}

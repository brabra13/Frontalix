"use client";
import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import { useScrollFadeIn } from '@/hooks/use-scroll-fade-in';
import { cn } from '@/lib/utils';
import { TrendingUp, Users, Briefcase } from "lucide-react"; // Using Briefcase as a proxy for Euro/income
import Link from "next/link";

export function HeroSection() {
  const { ref, isVisible } = useScrollFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className={cn("bg-gradient-to-br from-background to-secondary/30 py-20 md:py-32 scroll-fade-in", isVisible && 'is-visible')}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-headline">
          Frontalix: Votre Expertise Comptable Transfrontalière
        </h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-10">
          Simplifiez votre fiscalité franco-suisse. Optimisez vos revenus. Vivez sereinement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <StatCard
            icon={TrendingUp}
            title="Augmentation des frontaliers"
            value="+24%"
            description="Depuis début 2021 (région lémanique)"
          />
          <StatCard
            icon={Users}
            title="Frontaliers à Genève"
            value="106 488"
            description="En 2023"
          />
          <StatCard
            icon={Briefcase} // Placeholder for Euro/income
            title="Revenu moyen"
            value="€55 472"
            description="Revenu fiscal de référence individualisé"
          />
        </div>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#ai-insights">Découvrez nos solutions</Link>
        </Button>
      </div>
    </div>
  );
}

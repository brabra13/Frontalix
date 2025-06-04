import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn("shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col bg-card", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-accent/10 rounded-md">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <CardTitle className="text-lg font-semibold text-primary font-headline">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-card-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

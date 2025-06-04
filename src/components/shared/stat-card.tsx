import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description?: string;
  className?: string;
}

export function StatCard({ icon: Icon, title, value, description, className }: StatCardProps) {
  return (
    <Card className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-card-foreground">{title}</CardTitle>
        <Icon className="h-6 w-6 text-accent" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary font-headline">{value}</div>
        {description && <p className="text-xs text-muted-foreground pt-1">{description}</p>}
      </CardContent>
    </Card>
  );
}

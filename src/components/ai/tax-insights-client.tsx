"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { taxInsights, type TaxInsightsInput, type TaxInsightsOutput } from "@/ai/flows/tax-insights";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  annualIncomeEuro: z.coerce.number().min(0, "Le revenu annuel doit être positif."),
  swissTaxPaid: z.coerce.number().min(0, "L'impôt payé doit être positif."),
  isCMUMember: z.boolean().default(false),
  hasThirdPillar: z.boolean().default(false),
  thirdPillarContributionEuro: z.coerce.number().optional(),
  additionalDeductionsEuro: z.coerce.number().optional(),
}).refine(data => !data.hasThirdPillar || (data.hasThirdPillar && data.thirdPillarContributionEuro !== undefined && data.thirdPillarContributionEuro >= 0), {
  message: "La contribution au 3ème pilier est requise si vous en possédez un.",
  path: ["thirdPillarContributionEuro"],
});


type FormValues = z.infer<typeof formSchema>;

export function TaxInsightsClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [insights, setInsights] = useState<TaxInsightsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      annualIncomeEuro: 50000,
      swissTaxPaid: 5000,
      isCMUMember: false,
      hasThirdPillar: false,
      thirdPillarContributionEuro: 0,
      additionalDeductionsEuro: 0,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setInsights(null);
    try {
      const result = await taxInsights(data as TaxInsightsInput); // Zod ensures compatibility
      setInsights(result);
      toast({
        title: "💡 Aperçus fiscaux générés!",
        description: "Vos optimisations potentielles sont prêtes.",
      });
    } catch (error) {
      console.error("Error fetching tax insights:", error);
      toast({
        title: "Erreur",
        description: "Impossible de générer les aperçus fiscaux. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const watchHasThirdPillar = form.watch("hasThirdPillar");

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl bg-card">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2 text-primary font-headline">
          <Sparkles className="h-7 w-7 text-accent" />
          Vos Aperçus Fiscaux Personnalisés par IA
        </CardTitle>
        <CardDescription className="text-card-foreground">
          Remplissez vos informations pour découvrir des pistes d'optimisation fiscale.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="annualIncomeEuro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Revenu Annuel (Euros)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ex: 60000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="swissTaxPaid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Impôt Payé en Suisse (Euros)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ex: 5000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
               <FormField
                control={form.control}
                name="isCMUMember"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm bg-background">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Membre CMU ?</FormLabel>
                      <FormDescription>
                        Êtes-vous affilié à la CMU ?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasThirdPillar"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm bg-background">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">3ème Pilier Suisse ?</FormLabel>
                      <FormDescription>
                        Possédez-vous un 3ème pilier ?
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            {watchHasThirdPillar && (
              <FormField
                control={form.control}
                name="thirdPillarContributionEuro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contribution Annuelle 3ème Pilier (Euros)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="ex: 6800" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="additionalDeductionsEuro"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Autres Déductions (Euros)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="ex: 1200" {...field} value={field.value ?? ''} />
                  </FormControl>
                  <FormDescription>Frais professionnels, dons, etc.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                "Obtenir mes aperçus"
              )}
            </Button>
            {insights && (
              <div className="mt-6 p-6 border border-primary/20 rounded-lg bg-primary/5 text-primary">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Vos Pistes d'Optimisation :
                </h4>
                <p className="whitespace-pre-wrap">{insights.taxOptimizationInsights}</p>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

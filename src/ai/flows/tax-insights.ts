// This file uses server-side code.
'use server';

/**
 * @fileOverview Provides personalized insights into potential tax optimizations for Franco-Swiss border workers.
 *
 * - taxInsights - A function that processes user-provided financial data and returns tailored tax optimization insights.
 * - TaxInsightsInput - The input type for the taxInsights function, defining the expected financial data.
 * - TaxInsightsOutput - The return type for the taxInsights function, providing personalized tax optimization insights.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TaxInsightsInputSchema = z.object({
  annualIncomeEuro: z
    .number()
    .describe('Your annual income in Euros.'),
  swissTaxPaid: z
    .number()
    .describe('Amount of tax already paid in Switzerland.'),
  isCMUMember: z
    .boolean()
    .describe('Are you a member of CMU (Couverture Maladie Universelle)?'),
  hasThirdPillar: z
    .boolean()
    .describe('Do you have a Swiss third pillar retirement account?'),
  thirdPillarContributionEuro: z
    .number()
    .optional()
    .describe('If yes, how much did you contribute this year in Euros?'),
  additionalDeductionsEuro: z
    .number()
    .optional()
    .describe('Any additional deductions you want to include in Euros?'),
});
export type TaxInsightsInput = z.infer<typeof TaxInsightsInputSchema>;

const TaxInsightsOutputSchema = z.object({
  taxOptimizationInsights: z.string().describe('Personalized insights into potential tax optimizations.'),
});
export type TaxInsightsOutput = z.infer<typeof TaxInsightsOutputSchema>;

export async function taxInsights(input: TaxInsightsInput): Promise<TaxInsightsOutput> {
  return taxInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'taxInsightsPrompt',
  input: {schema: TaxInsightsInputSchema},
  output: {schema: TaxInsightsOutputSchema},
  prompt: `You are an expert in Franco-Swiss cross-border taxation. A user will provide their financial details, and you will provide personalized insights into potential tax optimizations they can consider to minimize their tax liabilities. Consider all deductions, credits, and applicable tax regimes that apply to Franco-Swiss border workers.

User Details:
Annual Income (Euros): {{{annualIncomeEuro}}}
Swiss Taxes Paid: {{{swissTaxPaid}}}
CMU Member: {{#if isCMUMember}}Yes{{else}}No{{/if}}
Has Third Pillar: {{#if hasThirdPillar}}Yes{{else}}No{{/if}}
{{#if hasThirdPillar}}Third Pillar Contribution (Euros): {{{thirdPillarContributionEuro}}}{{/if}}
Additional Deductions (Euros): {{{additionalDeductionsEuro}}}

Provide clear, actionable, and personalized insights. Do not include disclaimers, and write conversationally.
`, // Removed safetySettings config
});

const taxInsightsFlow = ai.defineFlow(
  {
    name: 'taxInsightsFlow',
    inputSchema: TaxInsightsInputSchema,
    outputSchema: TaxInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

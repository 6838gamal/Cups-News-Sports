// src/ai/flows/generate-ai-sports-insights.ts
'use server';
/**
 * @fileOverview Generates AI-driven sports insights and analysis.
 *
 * - generateAISportsInsights - A function that generates AI-driven insights on sports topics.
 * - GenerateAISportsInsightsInput - The input type for the generateAISportsInsights function.
 * - GenerateAISportsInsightsOutput - The return type for the generateAISportsInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAISportsInsightsInputSchema = z.object({
  topic: z.string().describe('The specific sports topic or question for analysis.'),
});
export type GenerateAISportsInsightsInput = z.infer<typeof GenerateAISportsInsightsInputSchema>;

const GenerateAISportsInsightsOutputSchema = z.object({
  insights: z.string().describe('AI-generated insights and analysis on the given sports topic.'),
});
export type GenerateAISportsInsightsOutput = z.infer<typeof GenerateAISportsInsightsOutputSchema>;

export async function generateAISportsInsights(input: GenerateAISportsInsightsInput): Promise<GenerateAISportsInsightsOutput> {
  return generateAISportsInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAISportsInsightsPrompt',
  input: {schema: GenerateAISportsInsightsInputSchema},
  output: {schema: GenerateAISportsInsightsOutputSchema},
  prompt: `You are an expert sports analyst providing insightful analysis. Based on the topic provided, generate comprehensive and easy-to-understand insights.

Topic: {{{topic}}}`,
});

const generateAISportsInsightsFlow = ai.defineFlow(
  {
    name: 'generateAISportsInsightsFlow',
    inputSchema: GenerateAISportsInsightsInputSchema,
    outputSchema: GenerateAISportsInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

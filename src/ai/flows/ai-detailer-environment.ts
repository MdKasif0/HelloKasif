
// src/ai/flows/ai-detailer-environment.ts
'use server';

/**
 * @fileOverview AI Detailer Flow - Generates personalized environment details based on site content.
 *
 * This file defines a Genkit flow that takes site content as input and generates detailed, personalized
 * environment descriptions to enhance user engagement. It includes the flow definition, input/output
 * schemas, and a wrapper function to invoke the flow.
 *
 * - aiDetailerEnvironmentGeneration - A function that generates personalized environment details based on site content.
 * - AIDetailerEnvironmentGenerationInput - The input type for the aiDetailerEnvironmentGeneration function.
 * - AIDetailerEnvironmentGenerationOutput - The return type for the aiDetailerEnvironmentGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIDetailerEnvironmentGenerationInputSchema = z.object({
  siteContent: z
    .string()
    .describe('The content of the current page, used to generate environment details.'),
});

export type AIDetailerEnvironmentGenerationInput = z.infer<
  typeof AIDetailerEnvironmentGenerationInputSchema
>;

const AIDetailerEnvironmentGenerationOutputSchema = z.object({
  environmentDescription: z
    .string()
    .describe('A detailed description of the personalized environment.'),
});

export type AIDetailerEnvironmentGenerationOutput = z.infer<
  typeof AIDetailerEnvironmentGenerationOutputSchema
>;

export async function aiDetailerEnvironmentGeneration(
  input: AIDetailerEnvironmentGenerationInput
): Promise<AIDetailerEnvironmentGenerationOutput> {
  return aiDetailerEnvironmentGenerationFlow(input);
}

// Example site content for the portfolio
const portfolioSiteContent = `
  HelloKasif: An interactive and immersive portfolio by Md Kasif Uddin.
  This digital space showcases skills in Next.js, Tailwind CSS, TypeScript, and cutting-edge AI integration.
  Featured projects include innovative web applications, design explorations, and AI/ML concepts.
  The overall theme is futuristic, sophisticated, and deeply engaging, inviting users to explore a world of digital craftsmanship.
`;

const aiDetailerEnvironmentGenerationPrompt = ai.definePrompt({
  name: 'aiDetailerEnvironmentGenerationPrompt',
  input: {schema: AIDetailerEnvironmentGenerationInputSchema},
  output: {schema: AIDetailerEnvironmentGenerationOutputSchema},
  prompt: `You are an AI environment detailer that generates a personalized environment detail based on the site content. 

  Generate a detailed, imaginative, and engaging environment based on the content below:
  Site Content: {{{siteContent}}}
  `,
});

const aiDetailerEnvironmentGenerationFlow = ai.defineFlow(
  {
    name: 'aiDetailerEnvironmentGenerationFlow',
    inputSchema: AIDetailerEnvironmentGenerationInputSchema,
    outputSchema: AIDetailerEnvironmentGenerationOutputSchema,
  },
  async input => {
    // If siteContent is not provided in input, use the default portfolioSiteContent
    const contentToUse = input.siteContent || portfolioSiteContent;
    const {output} = await aiDetailerEnvironmentGenerationPrompt({ siteContent: contentToUse });
    return output!;
  }
);

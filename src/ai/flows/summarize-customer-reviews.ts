'use server';

/**
 * @fileOverview A flow that summarizes customer reviews for a product.
 *
 * - summarizeCustomerReviews - A function that summarizes customer reviews.
 * - SummarizeCustomerReviewsInput - The input type for the summarizeCustomerReviews function.
 * - SummarizeCustomerReviewsOutput - The return type for the summarizeCustomerReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCustomerReviewsInputSchema = z.object({
  productName: z.string().describe('The name of the product being reviewed.'),
  customerReviews: z
    .array(z.object({
      autor: z.string(),
      nota: z.number(),
      cidade: z.string(),
      texto: z.string(),
      fotoUrlComentario: z.string().nullable(),
    }))
    .describe('An array of customer reviews for the product.'),
});
export type SummarizeCustomerReviewsInput = z.infer<typeof SummarizeCustomerReviewsInputSchema>;

const SummarizeCustomerReviewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the customer reviews.'),
});
export type SummarizeCustomerReviewsOutput = z.infer<typeof SummarizeCustomerReviewsOutputSchema>;

export async function summarizeCustomerReviews(input: SummarizeCustomerReviewsInput): Promise<SummarizeCustomerReviewsOutput> {
  return summarizeCustomerReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCustomerReviewsPrompt',
  input: {schema: SummarizeCustomerReviewsInputSchema},
  output: {schema: SummarizeCustomerReviewsOutputSchema},
  prompt: `Summarize the following customer reviews for the product "{{{productName}}}". Consider the rating, text, and any provided media in the reviews to create a concise summary of the customer sentiment and key points. Include only relevant and representative information in the output. 

Customer Reviews:
{{#each customerReviews}}
  - Author: {{autor}}, Rating: {{nota}}, City: {{cidade}}, Review: {{texto}}
  {{#if fotoUrlComentario}} Photo: {{media url=fotoUrlComentario}}{{/if}}
{{/each}}`,
});

const summarizeCustomerReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeCustomerReviewsFlow',
    inputSchema: SummarizeCustomerReviewsInputSchema,
    outputSchema: SummarizeCustomerReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

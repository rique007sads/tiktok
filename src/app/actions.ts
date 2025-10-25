
'use server';

import { summarizeCustomerReviews } from '@/ai/flows/summarize-customer-reviews';
import type { ProductReview } from '@/types';

export async function generateSummary(productName: string, reviews: ProductReview[]) {
  try {
    const result = await summarizeCustomerReviews({
      productName,
      customerReviews: reviews.map(r => ({
        autor: r.autor,
        nota: r.nota,
        cidade: r.cidade,
        texto: r.texto,
        fotoUrlComentario: r.fotoUrlComentario,
      })),
    });
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error('Error generating summary:', error);
    return { summary: null, error: 'Failed to generate summary. Please try again.' };
  }
}

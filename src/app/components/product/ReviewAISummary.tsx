'use client';

import { useState, useTransition } from 'react';
import type { ProductReview } from '@/types';
import { generateSummary } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ReviewAISummaryProps {
  productName: string;
  reviews: ProductReview[];
}

export function ReviewAISummary({ productName, reviews }: ReviewAISummaryProps) {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ summary: string | null; error: string | null } | null>(null);
  const { toast } = useToast();

  const handleGenerate = () => {
    startTransition(async () => {
      const res = await generateSummary(productName, reviews);
      setResult(res);
      if (res.error) {
        toast({
          title: "Error",
          description: res.error,
          variant: "destructive"
        })
      }
    });
  };

  return (
    <Card className="bg-gradient-to-br from-card to-muted/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <CardTitle className="font-headline">Resumo com Inteligência Artificial</CardTitle>
        </div>
        <CardDescription>
          Não tem tempo de ler tudo? Deixe que a nossa IA resuma as avaliações para você.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {result?.summary && (
          <div className="p-4 bg-background rounded-lg border">
            <p className="text-muted-foreground leading-relaxed">{result.summary}</p>
          </div>
        )}
        {!result?.summary && (
          <Button onClick={handleGenerate} disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gerando resumo...
              </>
            ) : (
              'Gerar Resumo Rápido'
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

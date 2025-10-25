import type { Product } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Users, MessageSquare } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ReviewSummaryProps {
  stats: Product['estatisticas'];
  summary: Product['resumoAvaliacoes'];
}

export function ReviewSummary({ stats, summary }: ReviewSummaryProps) {
  const totalReviews = stats.totalAvaliacoesClientes;
  const ratingDistribution = [
    { level: 5, count: summary['5estrelas'] },
    { level: 4, count: summary['4estrelas'] },
    { level: 3, count: 0 }, // Placeholder
    { level: 2, count: 0 }, // Placeholder
    { level: 1, count: 0 }, // Placeholder
  ];

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="font-headline">Resumo das Avaliações</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-center text-center gap-4 bg-muted p-4 rounded-lg">
          <div>
            <p className="text-4xl font-bold">{stats.mediaAvaliacaoClientes}</p>
            <div className="flex justify-center text-amber-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">de {totalReviews} avaliações</p>
          </div>
        </div>

        <div className="space-y-3">
          {ratingDistribution.map(({ level, count }) => (
            <div key={level} className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground w-12">{level} estrelas</span>
              <Progress value={(count / totalReviews) * 100} className="flex-1 h-2" />
              <span className="text-sm text-muted-foreground w-8 text-right">{count}</span>
            </div>
          ))}
        </div>

        <div className="text-sm text-muted-foreground flex items-center justify-center gap-2 border-t pt-4">
          <MessageSquare className="w-4 h-4" />
          <span>{summary.incluiMidia} avaliações com fotos e vídeos</span>
        </div>
      </CardContent>
    </Card>
  );
}

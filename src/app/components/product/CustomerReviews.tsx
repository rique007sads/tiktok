
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronRight, CheckCircle } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { ProductReview } from '@/types';

interface CustomerReviewsProps {
  reviews: Omit<ProductReview, 'fotoUrlComentario'>[];
  totalReviews: number;
  averageRating: number;
}

export function CustomerReviews({ reviews, totalReviews, averageRating }: CustomerReviewsProps) {
  return (
    <Card>
      <CardHeader className="p-3">
        <button className="w-full flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <span>Avaliações dos clientes ({totalReviews})</span>
            <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>{averageRating}</span>
            </div>
          </CardTitle>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </button>
      </CardHeader>
      <CardContent className="p-3 pt-0 space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{review.autor.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{review.autor}</p>
                <p className="text-xs text-muted-foreground">{review.cidade}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.nota ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/30'}`}
                />
              ))}
            </div>
            <p className="text-sm">{review.texto}</p>
          </div>
        ))}
        {reviews.length > 0 && (
          <Button variant="outline" className="w-full">
            Ver todas as avaliações ({totalReviews})
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

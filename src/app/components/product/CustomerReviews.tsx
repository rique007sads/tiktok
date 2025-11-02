
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

interface Review {
    autor: string;
    cidade: string;
    nota: number;
    texto: string;
    fotoUrlComentario?: string | null;
    fotoUrlAutor?: string | null;
}

interface CustomerReviewsProps {
  reviews: Review[];
  totalReviews: number;
  averageRating: number;
  title: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-muted-foreground/30" />
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/30" />
      ))}
    </div>
  );
};


export function CustomerReviews({ reviews, totalReviews, averageRating, title }: CustomerReviewsProps) {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle className="text-base flex items-center gap-2">
            <span>{title} ({totalReviews})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0 space-y-4">
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-yellow-500">
                <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
                <span className="text-sm">/5</span>
            </div>
            <StarRating rating={averageRating} />
        </div>

        {reviews.map((review, index) => (
          <div key={index} className="space-y-2 border-b pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                {review.fotoUrlAutor ? (
                  <AvatarImage src={review.fotoUrlAutor} alt={`Foto de ${review.autor}`} />
                ) : (
                  <AvatarFallback>{review.autor.charAt(0)}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{review.autor}</p>
                <p className="text-xs text-muted-foreground">{review.cidade}</p>
              </div>
            </div>
            <StarRating rating={review.nota} />
            <p className="text-sm">{review.texto}</p>
            {review.fotoUrlComentario && (
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image src={review.fotoUrlComentario} alt={`Review photo by ${review.autor}`} fill className="object-cover" />
                </div>
            )}
          </div>
        ))}
        {reviews.length > 0 && (
          <Button variant="outline" className="w-full mt-4">
            Ver todas as avaliações ({totalReviews})
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
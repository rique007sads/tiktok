import type { ProductReview } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from './StarRating';
import Image from 'next/image';
import { imageMap } from '@/lib/product-data';

interface ReviewCardProps {
  review: ProductReview;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const authorInitials = review.autor
    .split(' ')
    .map((n) => n[0])
    .join('');
  const reviewImage = review.fotoUrlComentario ? imageMap[review.fotoUrlComentario] : null;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{review.autor}</p>
                <p className="text-sm text-muted-foreground">{review.cidade}</p>
              </div>
              <StarRating rating={review.nota} />
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">{review.texto}</p>
            {reviewImage && (
              <div className="mt-4 relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={reviewImage.imageUrl}
                  alt={`Review image from ${review.autor}`}
                  data-ai-hint={reviewImage.imageHint}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import type { ProductReview } from '@/types';
import { ReviewCard } from './ReviewCard';

interface ReviewListProps {
  reviews: ProductReview[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}

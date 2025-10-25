'use client';

import { useState } from 'react';
import Image from 'next/image';
import { imageMap } from '@/lib/product-data';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ProductImageGalleryProps {
  imageIds: string[];
}

export function ProductImageGallery({ imageIds }: ProductImageGalleryProps) {
  const [currentImageId, setCurrentImageId] = useState(imageIds[0]);
  const currentImage = imageMap[currentImageId];

  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            {currentImage && (
              <Image
                src={currentImage.imageUrl}
                alt={currentImage.description}
                data-ai-hint={currentImage.imageHint}
                fill
                className="object-cover transition-opacity duration-300 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            )}
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-6 gap-2">
        {imageIds.map((id) => {
          const thumb = imageMap[id];
          return (
            <button
              key={id}
              onClick={() => setCurrentImageId(id)}
              className={cn(
                'aspect-square relative rounded-md overflow-hidden transition-all duration-200 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                currentImageId === id ? 'ring-2 ring-primary' : 'hover:opacity-80'
              )}
            >
              {thumb && (
                <Image
                  src={thumb.imageUrl}
                  alt={thumb.description}
                  data-ai-hint={thumb.imageHint}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              )}
              <span className="sr-only">View image {id}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

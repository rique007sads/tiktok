
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ProductImage } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface ProductImageGalleryProps {
  mainImage: ProductImage;
  thumbnails: ProductImage[];
}

export function ProductImageGallery({ mainImage, thumbnails }: ProductImageGalleryProps) {
  const allImages = [mainImage, ...thumbnails];
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <div className="relative">
        <div className="aspect-square relative bg-card">
            {currentImage && (
              <Image
                src={currentImage.imageUrl}
                alt={currentImage.description}
                data-ai-hint={currentImage.imageHint}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 bg-black/50 p-1 rounded-full">
                {allImages.map((img) => (
                    <button 
                        key={img.id}
                        onClick={() => setCurrentImage(img)}
                        className={cn(
                            "h-1.5 w-1.5 rounded-full transition-colors",
                            currentImage.id === img.id ? 'bg-white' : 'bg-white/50'
                        )}
                    >
                        <span className='sr-only'>View image {img.id}</span>
                    </button>
                ))}
            </div>
        </div>
    </div>
  );
}

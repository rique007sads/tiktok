'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/types';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ProductImageGalleryProps {
  images: GalleryImage[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0] || { url: 'https://placehold.co/600x600', alt: 'Placeholder' });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (image: GalleryImage, index: number) => {
    setMainImage(image);
    setActiveIndex(index);
  };
  
  return (
    <div className="relative">
      <div className="aspect-square relative bg-card">
        <Image
          src={mainImage.url}
          alt={mainImage.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <Badge variant="secondary" className="absolute bottom-2 right-2 rounded-md">
          {activeIndex + 1} / {images.length}
        </Badge>
      </div>

      <div className="mt-2">
        <div className="galeria-miniaturas">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => handleThumbnailClick(image, index)}
              className={cn(
                'miniatura-item relative overflow-hidden',
                activeIndex === index && 'ativa'
              )}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="65px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

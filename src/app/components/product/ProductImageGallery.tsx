
'use client';

import Image from 'next/image';

interface ProductImageGalleryProps {
  mainImageUrl: string;
  productName: string;
}

export function ProductImageGallery({ mainImageUrl, productName }: ProductImageGalleryProps) {
  
  return (
    <div className="relative">
        <div className="aspect-square relative bg-card">
              <Image
                src={mainImageUrl}
                alt={productName}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
        </div>
    </div>
  );
}

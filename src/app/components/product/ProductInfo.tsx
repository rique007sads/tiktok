
import type { Product } from '@/types';
import { Badge } from '@/components/ui/badge';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col space-y-3">
        <div className='flex items-start gap-4'>
            <div className='flex-grow'>
                <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-primary">
                        R$ {product.preco.atual.toFixed(2).replace('.', ',')}
                    </p>
                    <p className="text-lg text-muted-foreground line-through">
                        R$ {product.preco.original.toFixed(2).replace('.', ',')}
                    </p>
                </div>
            </div>
        </div>

        <div className="flex items-start gap-2">
            <h1 className="text-lg font-semibold leading-snug flex-1">{product.nome}</h1>
        </div>
    </div>
  );
}

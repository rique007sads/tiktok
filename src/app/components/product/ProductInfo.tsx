
import type { Product } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Star, Bookmark } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
                        A partir de R$ {product.preco.minimo.toFixed(2).replace('.', ',')}
                    </p>
                    <p className="text-lg text-muted-foreground line-through">
                        R$ {product.preco.originalReferencia.toFixed(2).replace('.', ',')}
                    </p>
                    <Badge variant="destructive" className="text-base">
                        {product.preco.textoDesconto}
                    </Badge>
                </div>
                <p className="text-sm text-green-600 font-semibold">
                    em {product.parcelamento.parcelas}x de R$ {product.parcelamento.valorParcela.toFixed(2).replace('.', ',')} {product.parcelamento.juros}
                </p>
            </div>
        </div>

        <div className="flex items-start gap-2">
            <h1 className="text-lg font-semibold leading-snug flex-1">{product.nome}</h1>
            {product.acoesTopo.favoritar && <Bookmark className="w-5 h-5 text-muted-foreground mt-1" />}
        </div>
        
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{product.vendidos} vendidos</span>
        </div>
    </div>
  );
}

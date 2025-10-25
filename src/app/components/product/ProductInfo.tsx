
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
                        R$ {product.preco.atual.toFixed(2).replace('.', ',')}
                    </p>
                    <p className="text-lg text-muted-foreground line-through">
                        R$ {product.preco.original.toFixed(2).replace('.', ',')}
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
            {product.acoes.favoritar && <Bookmark className="w-5 h-5 text-muted-foreground mt-1" />}
        </div>
        
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold text-foreground">{product.estatisticas.mediaAvaliacao}</span>
          </div>
          <Separator orientation="vertical" className="h-4" />
          <span>{product.estatisticas.totalAvaliacoes} avaliações</span>
          <Separator orientation="vertical" className="h-4" />
          <span>{product.estatisticas.totalVendidos} vendidos</span>
        </div>
    </div>
  );
}

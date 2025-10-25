import type { Product } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, Flame } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { LogisticsInfo } from './LogisticsInfo';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <Badge variant="secondary">{product.marca}</Badge>
        <h1 className="text-3xl lg:text-4xl font-bold font-headline mt-2">{product.nome}</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>{product.estatisticas.mediaAvaliacaoClientes}</span>
          </div>
          <span>({product.estatisticas.totalAvaliacoesClientes} avaliações)</span>
          <Separator orientation="vertical" className="h-4" />
          <span>{product.estatisticas.totalVendidos} vendidos</span>
        </div>
      </div>

      {product.ofertaRelampago.ativa && (
        <Card className="bg-primary/10 border-primary/50">
          <CardHeader className="flex-row items-center gap-4 p-4">
            <Flame className="w-6 h-6 text-primary" />
            <div className="flex-grow">
              <h3 className="font-bold font-headline text-primary">{product.ofertaRelampago.titulo}</h3>
              <p className="text-sm">A oferta termina em:</p>
            </div>
            <CountdownTimer timeString={product.ofertaRelampago.tempoRestante} />
          </CardHeader>
        </Card>
      )}

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground line-through">
          R$ {product.preco.original.toFixed(2).replace('.', ',')}
        </p>
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold text-primary">
            R$ {product.preco.atual.toFixed(2).replace('.', ',')}
          </p>
          <Badge variant="destructive" className="text-base">
            {product.preco.economiaPorcentagem}% OFF
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">em até 12x sem juros</p>
      </div>

      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full text-lg h-12 font-bold">Comprar Agora</Button>
        <Button size="lg" variant="outline" className="w-full text-lg h-12 font-bold">Adicionar ao Carrinho</Button>
      </div>

      <Separator />

      <LogisticsInfo logistics={product.logistica} />
    </div>
  );
}

import type { Product } from '@/types';
import { Truck, ShieldCheck } from 'lucide-react';

interface LogisticsInfoProps {
  logistics: Product['logistica'];
}

export function LogisticsInfo({ logistics }: LogisticsInfoProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <Truck className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
        <div>
          <p className="font-bold">{logistics.frete.tipo}</p>
          <p className="text-sm text-muted-foreground">{logistics.frete.detalhe}</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
        <div>
          <p className="font-bold">{logistics.devolucao.tipo}</p>
          <p className="text-sm text-muted-foreground">{logistics.devolucao.detalhe}</p>
        </div>
      </div>
    </div>
  );
}

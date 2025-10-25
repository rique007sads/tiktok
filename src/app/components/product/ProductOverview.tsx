
import type { Product } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { CustomerReviews } from './CustomerReviews';

interface ProductOverviewProps {
  product: Product;
}

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export function ProductOverview({ product }: ProductOverviewProps) {
  const { visaoGeral } = product;

  if (!visaoGeral) {
    return null;
  }

  const reviews = Object.values(visaoGeral.avaliacoes.comentariosAmostra);

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6 text-sm space-y-4">
          <p className="font-semibold">{visaoGeral.resumoProduto}</p>
          {visaoGeral.diferenciais && visaoGeral.diferenciais.length > 0 && (
            <ul className="space-y-2">
              {visaoGeral.diferenciais.map((diferencial, index) => (
                <ListItem key={index}>{diferencial}</ListItem>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <CustomerReviews
        title={visaoGeral.avaliacoes.tituloSecao}
        reviews={reviews}
        totalReviews={visaoGeral.avaliacoes.estatisticas.totalAvaliacoes}
        averageRating={visaoGeral.avaliacoes.estatisticas.mediaAvaliacao}
      />
    </div>
  );
}

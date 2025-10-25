import type { Product } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecks, Info, Wrench } from 'lucide-react';

interface ProductDetailsProps {
  description: Product['descricaoDetalhada'];
}

export function ProductDetails({ description }: ProductDetailsProps) {
  return (
    <Card>
      <CardContent className="p-6 md:p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold font-headline mb-4">Descrição do Produto</h2>
          <p className="text-muted-foreground leading-relaxed">{description.paragrafoPrincipal}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-bold font-headline">
              <ListChecks className="text-primary" />
              Ficha Técnica
            </h3>
            <ul className="space-y-2 text-sm">
              {Object.entries(description.fichaTecnica).map(([key, value]) => (
                <li key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium text-muted-foreground">{key}:</span>
                  <span className="font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xl font-bold font-headline">
              <Wrench className="text-primary" />
              Dicas de Uso
            </h3>
            <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
              {description.dicasDeUso.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>

            <div className="flex items-start gap-2 pt-4">
              <Info className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">{description.avisoLegal}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

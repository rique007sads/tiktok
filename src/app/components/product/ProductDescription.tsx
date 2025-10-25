
import type { Product } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface ProductDescriptionProps {
  product: Product;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-bold text-base mt-4 mb-2">{children}</h3>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export function ProductDescription({ product }: ProductDescriptionProps) {
  if (!product.descricao && !product.diferenciais && !product.fichaTecnica) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Descrição do Produto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        {product.descricao && (
          <div>
            <p className="mb-2">{product.descricao.resumo}</p>
            <ul className="space-y-2">
              {product.descricao.detalhes.map((detalhe, index) => (
                <ListItem key={index}>{detalhe}</ListItem>
              ))}
            </ul>
          </div>
        )}

        {product.diferenciais && product.diferenciais.length > 0 && (
          <div>
            <SectionTitle>Diferenciais</SectionTitle>
            <ul className="space-y-2">
              {product.diferenciais.map((diferencial, index) => (
                <ListItem key={index}>{diferencial}</ListItem>
              ))}
            </ul>
          </div>
        )}

        {product.fichaTecnica && (
          <div>
            <SectionTitle>Ficha Técnica</SectionTitle>
            <ul className="space-y-1">
              {Object.entries(product.fichaTecnica).map(([key, value]) => (
                <li key={key} className="grid grid-cols-2 gap-2">
                  <span className="font-semibold">{key}</span>
                  {Array.isArray(value) ? (
                    <ul className="list-disc list-inside">
                      {value.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {product.dicasDeUso && product.dicasDeUso.length > 0 && (
            <div>
                <SectionTitle>Dicas de Uso</SectionTitle>
                <ul className="space-y-2">
                {product.dicasDeUso.map((dica, index) => (
                    <ListItem key={index}>{dica}</ListItem>
                ))}
                </ul>
            </div>
        )}

        {product.garantiasLoja && product.garantiasLoja.length > 0 && (
            <div className="bg-muted p-3 rounded-lg mt-4 space-y-2">
                {product.garantiasLoja.map((garantia, index) => (
                    <p key={index} className="text-xs font-bold text-center">{garantia}</p>
                ))}
            </div>
        )}
        
        {product.avisoLegal && (
             <p className="text-xs text-muted-foreground text-center mt-4">{product.avisoLegal}</p>
        )}

      </CardContent>
    </Card>
  );
}

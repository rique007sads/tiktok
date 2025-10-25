
import type { Product } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductDescriptionProps {
  product: Product;
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-bold text-base mt-4 mb-2">{children}</h3>
);

export function ProductDescription({ product }: ProductDescriptionProps) {
  const { descricao } = product;
  if (!descricao) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{descricao.titulo}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div>
          <p className="mb-2">{descricao.textoPrincipal}</p>
          <p className="text-muted-foreground">{descricao.textoCompleto}</p>
        </div>

        {descricao.fichaTecnica && (
          <div>
            <SectionTitle>Ficha Técnica</SectionTitle>
            <ul className="space-y-1">
              {Object.entries(descricao.fichaTecnica).map(([key, value]) => (
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
        
        {descricao.dicasDeUso && descricao.dicasDeUso.length > 0 && (
            <div>
                <SectionTitle>Dicas de Uso</SectionTitle>
                <ul className="space-y-2 list-disc list-inside">
                {descricao.dicasDeUso.map((dica, index) => (
                    <li key={index}>{dica}</li>
                ))}
                </ul>
            </div>
        )}
        
        {descricao.avisoLegal && (
             <p className="text-xs text-muted-foreground text-center mt-4">{descricao.avisoLegal}</p>
        )}

      </CardContent>
    </Card>
  );
}

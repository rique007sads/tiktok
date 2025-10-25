
import { productData, imageMap } from '@/lib/product-data';
import type { Product } from '@/types';
import { ProductImageGallery } from '@/app/components/product/ProductImageGallery';
import { ProductInfo } from '@/app/components/product/ProductInfo';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Share2, ShoppingCart, MessageSquare, Store, ChevronRight, Ticket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const product: Product = productData;

  const mainImage = imageMap[product.imagens.urlPrincipal];
  const thumbnailImages = product.imagens.miniaturas.map(id => imageMap[id]).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
        <div className="container mx-auto px-4 h-14 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-lg">{product.marca}</h1>
          </div>
          <div className="flex items-center gap-4">
            {product.acoes.compartilhar && <Button variant="ghost" size="icon"><Share2 className="h-5 w-5" /></Button>}
            {product.acoes.carrinho && <Button variant="ghost" size="icon"><ShoppingCart className="h-5 w-5" /></Button>}
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24">
        <ProductImageGallery mainImage={mainImage} thumbnails={thumbnailImages} />

        <div className="container mx-auto px-4 mt-4 space-y-4">
          <ProductInfo product={product} />

          {product.cupom.ativo && (
            <Card>
              <CardContent className="p-3">
                <button className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <Badge variant="destructive" className="font-bold">Cupom</Badge>
                        <p className="text-muted-foreground">{product.cupom.texto}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent className="p-3">
                 <button className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                        <span className="font-semibold">{product.logistica.frete.tipo}</span>
                        <p className="text-muted-foreground">{product.logistica.frete.previsaoEntrega}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-card border-t z-10">
        <div className="container mx-auto px-2 h-16 flex items-center justify-between gap-2">
            <div className="flex items-center justify-around w-1/3">
                 <Button variant="ghost" className="flex flex-col h-auto p-1 items-center gap-1">
                    <Store className="h-5 w-5" />
                    <span className="text-xs">{product.barraAcoesFixa.loja.texto}</span>
                </Button>
                <Button variant="ghost" className="flex flex-col h-auto p-1 items-center gap-1">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-xs">{product.barraAcoesFixa.chat.texto}</span>
                </Button>
            </div>
            <div className="flex items-center gap-2 w-2/3">
                <Button variant="outline" className="flex-1 h-12">
                   {product.barraAcoesFixa.carrinhoRapido.texto || <ShoppingCart />}
                </Button>
                <Button className="flex-1 h-12 flex flex-col items-start p-2">
                    <span className="font-bold text-base">{product.barraAcoesFixa.comprarAgora.texto}</span>
                    <span className="text-xs font-normal opacity-80">{product.barraAcoesFixa.comprarAgora.precoDetalhe}</span>
                </Button>
            </div>
        </div>
      </footer>
    </div>
  );
}


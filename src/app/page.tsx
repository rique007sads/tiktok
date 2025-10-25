import { productData } from '@/lib/product-data';
import type { Product, ProductReview } from '@/types';
import { ProductImageGallery } from '@/app/components/product/ProductImageGallery';
import { ProductInfo } from '@/app/components/product/ProductInfo';
import { ProductDetails } from '@/app/components/product/ProductDetails';
import { ReviewSummary } from '@/app/components/product/ReviewSummary';
import { ReviewList } from '@/app/components/product/ReviewList';
import { ReviewAISummary } from '@/app/components/product/ReviewAISummary';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const product: Product = productData;
  const reviews: ProductReview[] = Object.values(product.comentariosAmostra);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ProductImageGallery imageIds={product.imagens.miniaturas} />
          </div>
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        <Separator className="my-12" />

        <div className="space-y-12">
          <ProductDetails description={product.descricaoDetalhada} />

          <Separator className="my-12" />

          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline text-center">Opinião de quem já comprou</h2>
            
            <ReviewAISummary productName={product.nome} reviews={reviews} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pt-8">
              <div className="lg:col-span-1">
                <ReviewSummary
                  stats={product.estatisticas}
                  summary={product.resumoAvaliacoes}
                />
              </div>
              <div className="lg:col-span-2">
                <ReviewList reviews={reviews} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-card border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} eletriczbrasil. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}


'use client';

import { productData, storeData } from '@/lib/product-data';
import type { Product, Store } from '@/types';
import { Button } from '@/components/ui/button';
import { MessageSquare, Store as StoreIcon, ChevronRight, Star, Clock, Package, RotateCw, ShoppingCart, Verified, MessageCircle } from 'lucide-react';
import { OfferTimer } from './components/product/OfferTimer';
import { ProductImageGallery } from './components/product/ProductImageGallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductOverview } from './components/product/ProductOverview';
import { ProductDescription } from './components/product/ProductDescription';
import { StoreInfo } from './components/store/StoreInfo';


export default function Home() {
  const product: Product = productData;
  const store: Store = storeData;

  const handleBuyNowClick = () => {
    window.location.href = 'https://checkout.paymentsseguro.shop/VCCL1O8SCFAB';
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      <main className="flex-grow pb-24">
        <ProductImageGallery images={product.imagens.galeria} productName={product.nome} />

        <div className="container mx-auto px-4 mt-4 space-y-4">
          
          {/* Prices */}
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-bold text-primary">
              R$ {product.preco.atual.toFixed(2).replace('.', ',')}
            </p>
            <p className="text-lg text-muted-foreground line-through">
              R$ {product.preco.original.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <h1 className="text-lg font-semibold leading-snug flex-1 nome-produto">{product.nome}</h1>

          {/* Stats */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{product.estatisticas.mediaAvaliacao}</span>
            </div>
            <span>({product.estatisticas.totalAvaliacoes})</span>
            <span className="h-4 border-l mx-1"></span>
            <span>{product.estatisticas.totalVendidos} vendidos</span>
          </div>

          {/* Flash Offer */}
          {product.ofertaRelampago.ativa && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-destructive">Oferta Relâmpago</h2>
                <div className="flex items-center gap-2 text-destructive">
                  <Clock className="w-5 h-5" />
                  <OfferTimer timeString={product.ofertaRelampago.tempoRestante} />
                </div>
              </div>
              <p className="text-sm font-semibold bg-destructive/20 text-destructive rounded-full px-3 py-1 inline-block">
                Desconto de {product.ofertaRelampago.descontoPorcentagem}%
              </p>
              <p className="text-xs text-muted-foreground">
                Compre R$ {product.ofertaRelampago.condicaoCompra.minimoRequerido.toFixed(2).replace('.', ',')}, economize R$ {product.ofertaRelampago.condicaoCompra.economiaGanho.toFixed(2).replace('.', ',')}
              </p>
            </div>
          )}

           {/* Shipping & Returns */}
          <div className="border-t border-b divide-y">
             <button className="w-full flex items-center justify-between text-sm py-3">
                <div className="flex items-center gap-3">
                    <Package className='w-5 h-5 text-muted-foreground'/>
                    <span className="font-semibold">{product.logistica.frete.tipo}</span>
                    <p className="text-muted-foreground">{product.logistica.frete.previsaoEntrega}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="w-full flex items-center justify-between text-sm py-3">
                <div className="flex items-center gap-3">
                    <RotateCw className='w-5 h-5 text-muted-foreground'/>
                    <span className="font-semibold">{product.logistica.devolucao.tipo}</span>
                    <p className="text-muted-foreground flex-1 text-left">{product.logistica.devolucao.detalhe}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">{product.visaoGeral.titulo}</TabsTrigger>
              <TabsTrigger value="description">{product.descricao.titulo}</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <ProductOverview product={product} />
            </TabsContent>
            <TabsContent value="description">
              <ProductDescription product={product} />
            </TabsContent>
          </Tabs>

          <StoreInfo store={store} />

        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-card border-t z-10">
        <div className="container mx-auto px-2 h-16 flex items-center justify-between gap-2">
            <div className="flex items-center justify-around w-1/3">
                 <Button variant="ghost" className="flex flex-col h-auto p-1 items-center gap-1">
                    <StoreIcon className="h-5 w-5" />
                    <span className="text-xs">{product.barraAcoesFixa.loja.texto}</span>
                </Button>
                <Button variant="ghost" className="flex flex-col h-auto p-1 items-center gap-1">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-xs">{product.barraAcoesFixa.chat.texto}</span>
                </Button>
            </div>
            <div className="flex items-center gap-2 w-2/3">
                <Button variant="outline" className="flex-1 h-12">
                   <ShoppingCart />
                </Button>
                <div className="flex-1 h-12">
                  <button
                    onClick={handleBuyNowClick}
                    className="botao-comprar w-full h-full"
                  >
                    Comprar Agora
                  </button>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

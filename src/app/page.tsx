
'use client';

import { productData } from '@/lib/product-data';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Share2, ShoppingCart, MessageSquare, Store, ChevronRight, Star, Clock, Package, RotateCw } from 'lucide-react';
import Image from 'next/image';
import { OfferTimer } from './components/product/OfferTimer';
import { CustomerReviews } from './components/product/CustomerReviews';
import { ProductImageGallery } from './components/product/ProductImageGallery';
import { ProductDescription } from './components/product/ProductDescription';

export default function Home() {
  const product: Product = productData;

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
          
          {/* Product Description */}
          <ProductDescription product={product} />

          {/* Reviews */}
          <CustomerReviews 
            reviews={product.comentariosAmostra}
            totalReviews={product.estatisticas.totalAvaliacoes}
            averageRating={product.estatisticas.mediaAvaliacao}
          />

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
                   <ShoppingCart />
                </Button>
                <Button className="flex-1 h-12 flex flex-col items-center justify-center p-2 leading-tight botao-comprar-agora">
                    <span className="font-bold text-base">{product.barraAcoesFixa.comprarAgora.texto}</span>
                    <span className="text-xs font-normal opacity-80">{product.barraAcoesFixa.comprarAgora.precoDetalhe}</span>
                </Button>
            </div>
        </div>
      </footer>
    </div>
  );
}

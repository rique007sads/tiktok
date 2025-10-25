
import { productData } from '@/lib/product-data';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Share2, ShoppingCart, MessageSquare, Store, ChevronRight, Ticket, ShieldCheck, Bookmark, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const product: Product = productData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
        <div className="container mx-auto px-4 h-14 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Header can be expanded if needed */}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon"><Share2 className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon"><ShoppingCart className="h-5 w-5" /></Button>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24">
        {/* Main Image */}
        <div className="aspect-square relative bg-card">
          <Image
            src={product.imagens.urlPrincipal}
            alt={product.nome}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="container mx-auto px-4 mt-4 space-y-4">
          {/* Price and discount */}
          <div className="flex items-baseline gap-2">
            <p className="text-sm text-muted-foreground">A partir de</p>
            <p className="text-2xl font-bold text-primary">
              R$ {product.preco.minimo.toFixed(2).replace('.', ',')}
            </p>
            <p className="text-lg text-muted-foreground line-through">
              R$ {product.preco.originalReferencia.toFixed(2).replace('.', ',')}
            </p>
            <Badge variant="destructive" className="text-base">
              {product.preco.textoDesconto}
            </Badge>
          </div>

          {/* Product Name and Favorite */}
          <div className="flex items-start gap-2">
            <h1 className="text-lg font-semibold leading-snug flex-1">{product.nome}</h1>
            {product.acoesTopo.favoritar && <Bookmark className="w-5 h-5 text-muted-foreground mt-1" />}
          </div>

          <p className="text-sm text-muted-foreground">{product.vendidos} vendidos</p>
          
           {/* Purchase Warning */}
          {product.avisosCompra.map((aviso, index) => (
             <div key={index} className="bg-red-50 p-2 rounded-md flex justify-between items-center">
                <p className="text-xs text-primary font-medium">{aviso.texto}</p>
                <Button size="sm" variant="ghost" className="text-primary h-auto p-1">{aviso.botao} <ChevronRight className="h-4 w-4"/></Button>
            </div>
          ))}

          {/* Variations */}
           <Card>
              <CardContent className="p-3">
                <button className="w-full flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Opções</span>
                        <p className="font-semibold">{product.variacoes.textoGeral}</p>
                    </div>
                    <div className="flex items-center">
                        {product.variacoes.opcoes.slice(0, 3).map(v => (
                            <Image key={v.nome} src={v.urlMiniatura} alt={v.nome} width={24} height={24} className="rounded-sm border -ml-2"/>
                        ))}
                        <ChevronRight className="h-5 w-5 text-muted-foreground ml-2" />
                    </div>
                </button>
              </CardContent>
            </Card>

           {/* Shipping */}
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

          {/* TikTok Shop Services */}
          <Card>
            <CardHeader className='p-3 pb-2'>
              <CardTitle className='text-base'>{product.servicosShop.titulo}</CardTitle>
            </CardHeader>
            <CardContent className='p-3 pt-0'>
              <div className='grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground'>
                {product.servicosShop.itens.map(item => (
                  <div key={item} className="flex items-center gap-1.5">
                    <ShieldCheck className='h-3 w-3 text-green-600'/>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Offers */}
          <Card>
             <CardHeader className='p-3 pb-2'>
              <CardTitle className='text-base'>{product.secaoOfertas.titulo}</CardTitle>
            </CardHeader>
            <CardContent className='p-3 pt-0 space-y-2'>
              {product.secaoOfertas.cuponsAtivos.map((cupom, i) => (
                <div key={i} className='flex items-center justify-between'>
                    <div>
                        <p className='text-sm font-semibold flex items-center gap-1.5'><Ticket className='h-4 w-4 text-primary'/>{cupom.tipo}</p>
                        <p className='text-xs text-muted-foreground ml-6'>{cupom.detalhe}</p>
                    </div>
                    <Button variant="outline" size="sm">{cupom.botaoTexto}</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader className='p-3'>
              <button className="w-full flex items-center justify-between">
                <CardTitle className='text-base'>{product.avaliacoes.titulo}</CardTitle>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </CardHeader>
            {product.avaliacoes.total === 0 && (
              <CardContent className="p-3 pt-0 text-center text-sm text-muted-foreground">
                Ainda não há avaliações para este produto.
              </CardContent>
            )}
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
                   <ShoppingCart />
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

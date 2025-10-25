
import type { Store } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Verified, MessageCircle } from 'lucide-react';

interface StoreInfoProps {
  store: Store;
}

export function StoreInfo({ store }: StoreInfoProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <Image src={store.urlLogo} alt={`${store.nome} logo`} width={40} height={40} className="rounded-full" />
          <div>
            <h3 className="font-bold text-base">{store.nome}</h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MessageCircle className="w-3 h-3" />
                <span>{store.slogan}</span>
            </div>
          </div>
        </div>
        <Button variant="outline">Ir à loja</Button>
      </CardHeader>
      <CardContent className="p-3 pt-0 text-sm">
        {store.statusVerificacao.verificada && (
          <div className="text-xs text-green-600 flex items-center gap-1.5 mb-3 border-t pt-3">
            <Verified className="w-4 h-4" />
            <span>Loja verificada por {store.statusVerificacao.plataforma}</span>
          </div>
        )}
        <Accordion type="single" collapsible className="w-full border-t">
          {store.menusRodape.map((menu, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-3 text-sm">{menu.titulo}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-3">
                {menu.conteudo}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

    
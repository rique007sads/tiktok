
import type { Product } from '@/types';

export const productData: Product = {
  nome: 'Suporte Monitor North Bayou NB F80 Mesa P/ TV/Monitor 17 a 30" com pistão a gás',
  marca: 'North Bayou',
  modelo: 'NB F80',
  imagens: {
    contadorFotos: '1/6',
    urlPrincipal: 'suporte_principal',
    miniaturas: [
      'suporte_miniatura_1',
      'suporte_miniatura_2',
      'suporte_miniatura_3',
      'suporte_miniatura_4',
      'suporte_miniatura_5',
      'suporte_miniatura_6',
    ],
  },
  preco: {
    atual: 124.2,
    original: 166.0,
    descontoPorcentagem: 25,
    textoDesconto: '-25%',
  },
  parcelamento: {
    parcelas: 3,
    valorParcela: 41.4,
    juros: 'sem juros',
  },
  cupom: {
    ativo: true,
    texto: 'Desconto de 10%, máximo de R$ 25',
    acao: 'ver_detalhes_cupom',
  },
  estatisticas: {
    mediaAvaliacao: 3.9,
    totalAvaliacoes: 25,
    totalVendidos: 218,
  },
  acoes: {
    compartilhar: true,
    carrinho: true,
    favoritar: true,
  },
  logistica: {
    frete: {
      tipo: 'Frete grátis',
      previsaoEntrega: 'Receba até 27 de out - 1 de nov',
      taxaEnvio: 9.6,
      acao: 'ver_detalhes_frete',
    },
  },
  barraAcoesFixa: {
    loja: { texto: 'Loja', acao: 'navegar_loja' },
    chat: { texto: 'Chat', acao: 'abrir_chat' },
    carrinhoRapido: { icone: 'carrinho', texto: '', acao: 'adicionar_carrinho' },
    comprarAgora: {
      texto: 'Comprar agora',
      precoDetalhe: 'R$ 124,20 | Frete grátis',
      acao: 'checkout_direto',
    },
  },
};

import imageData from './placeholder-images.json';
import type { ProductImage } from '@/types';

const imagePlaceholders: ProductImage[] = imageData.placeholderImages;

export const imageMap: Record<string, ProductImage> = imagePlaceholders.reduce(
  (acc, img) => {
    acc[img.id] = img;
    return acc;
  },
  {} as Record<string, ProductImage>
);

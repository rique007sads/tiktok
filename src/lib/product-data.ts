
import type { Product, ProductImage, ProductReview } from '@/types';
import placeholderData from './placeholder-images.json';

export const productData: Product = {
  nome: "Patinete Elétrico Scooter De Alumínio Com Bluetooth 30km/h",
  estatisticas: {
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 892,
    totalVendidos: 8547
  },
  preco: {
    atual: 67.90,
    original: 619.90,
    economiaPorcentagem: 85,
    textoDetalheFrete: "Frete grátis"
  },
  ofertaRelampago: {
    ativa: true,
    tempoRestante: "00:06:45",
    descontoPorcentagem: 90,
    condicaoCompra: {
      minimoRequerido: 100.00,
      economiaGanho: 30.00
    }
  },
  logistica: {
    frete: {
      tipo: "Frete grátis",
      previsaoEntrega: "Receba até 22 de out - 25 de out"
    },
    devolucao: {
      tipo: "Devolução grátis",
      detalhe: "Devoluções gratuitas em 30 dias"
    }
  },
  comentariosAmostra: [
    {
      autor: "Pedro Raul",
      cidade: "Belo Horizonte, MG",
      nota: 5,
      texto: "Excelente meio de transporte para quem almeja não gastar com gasolina e busca praticidade..."
    },
    {
      autor: "Pietro Santos",
      cidade: "Curitiba, PR",
      nota: 5,
      texto: "Esse patinete é excelente!! recomendo demais ele sim pra quem mora a poucos quilômetros..."
    }
  ],
  imagens: {
    urlPrincipal: "https://picsum.photos/seed/scooter1/600/600",
    miniaturas: [
      "https://picsum.photos/seed/scooter2/100/100",
      "https://picsum.photos/seed/scooter3/100/100",
      "https://picsum.photos/seed/scooter4/100/100",
      "https://picsum.photos/seed/scooter5/100/100",
      "https://picsum.photos/seed/scooter6/100/100",
      "https://picsum.photos/seed/scooter7/100/100",
    ]
  },
  barraAcoesFixa: {
    loja: { texto: "Loja" },
    chat: { texto: "Chat" },
    carrinhoRapido: { icone: "carrinho", acao: "adicionar_carrinho" },
    comprarAgora: {
      texto: "Comprar agora",
      precoDetalhe: "R$ 67,90 | Frete grátis",
      acao: "checkout_direto"
    }
  }
};

const imagePlaceholders: ProductImage[] = placeholderData.placeholderImages;

export const imageMap: Record<string, ProductImage> = imagePlaceholders.reduce(
  (acc, img) => {
    acc[img.id] = img;
    return acc;
  },
  {} as Record<string, ProductImage>
);

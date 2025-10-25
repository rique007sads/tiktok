
import type { Product, ProductImage } from '@/types';
import placeholderData from './placeholder-images.json';

export const productData: Product = {
  nome: "Papel De Parede Ripado Efeito 3D Cinza Escuro Autocolante Fácil Aplicação",
  vendidos: 13,
  acoesTopo: {
    favoritar: true
  },
  preco: {
    minimo: 20.40,
    originalReferencia: 25.50,
    descontoPorcentagem: 20,
    textoDesconto: "-20%"
  },
  parcelamento: {
    parcelas: 4,
    valorParcela: 5.42,
    juros: "sem juros"
  },
  avisosCompra: [
    {
      tipo: "cupom",
      texto: "Compre R$ 60 e ganhe 3% de desconto",
      botao: "Compre R",
      "acao": "ativar_cupom_60"
    }
  ],
  logistica: {
    frete: {
      tipo: "Frete grátis",
      "previsaoEntrega": "Receba até 27 de out - 1 de nov",
      taxaEnvio: 9.60
    }
  },
  variacoes: {
    disponiveis: 3,
    textoGeral: "3 opções disponíveis",
    opcoes: [
      { "nome": "Cinza Escuro", "urlMiniatura": "https://picsum.photos/seed/wallpaper1/100/100" },
      { "nome": "Marrom", "urlMiniatura": "https://picsum.photos/seed/wallpaper2/100/100" },
      { "nome": "Bege", "urlMiniatura": "https://picsum.photos/seed/wallpaper3/100/100" }
    ],
    acao: "abrir_seletor_variacao"
  },
  servicosShop: {
    titulo: "Serviços do TikTok Shop",
    itens: [
      "Devolução gratuita",
      "Pagamento seguro",
      "Reembolso automático por dano",
      "Cupom por atraso na coleta"
    ]
  },
  secaoOfertas: {
    titulo: "Ofertas",
    cuponsAtivos: [
      {
        tipo: "Cupom de envio",
        detalhe: "Desconto de R$ 20 no frete em pedidos acima de R$ 9",
        "botaoTexto": "Resgatar",
        "acao": "resgatar_cupom_frete"
      },
      {
         tipo: "Geral",
         "detalhe": "10% OFF nos pedidos...",
         "botaoTexto": "Resgatar",
         "acao": "resgatar_cupom_10_off"
      }
    ]
  },
  avaliacoes: {
    titulo: "Avaliações dos clientes (0)",
    total: 0
  },
  barraAcoesFixa: {
    loja: { texto: "Loja" },
    chat: { texto: "Chat" },
    carrinhoRapido: { icone: "carrinho", acao: "adicionar_carrinho" },
    "comprarAgora": {
      texto: "Comprar agora",
      precoDetalhe: "R$ 20,40 | Frete grátis",
      acao: "checkout_direto"
    }
  },
  imagens: {
    urlPrincipal: "https://picsum.photos/seed/mainwallpaper/600/600",
    miniaturas: []
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

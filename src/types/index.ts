
export interface ProductImage {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface Product {
  nome: string;
  marca: string;
  modelo: string;
  imagens: {
    contadorFotos: string;
    urlPrincipal: string;
    miniaturas: string[];
  };
  preco: {
    atual: number;
    original: number;
    descontoPorcentagem: number;
    textoDesconto: string;
  };
  parcelamento: {
    parcelas: number;
    valorParcela: number;
    juros: string;
  };
  cupom: {
    ativo: boolean;
    texto: string;
    acao: string;
  };
  estatisticas: {
    mediaAvaliacao: number;
    totalAvaliacoes: number;
    totalVendidos: number;
  };
  acoes: {
    compartilhar: boolean;
    carrinho: boolean;
    favoritar: boolean;
  };
  logistica: {
    frete: {
      tipo: string;
      previsaoEntrega: string;
      taxaEnvio: number;
      acao: string;
    };
  };
  barraAcoesFixa: {
    loja: { texto: string; acao: string };
    chat: { texto: string; acao: string };
    carrinhoRapido: { icone: string; texto: string; acao: string };
    comprarAgora: {
      texto: string;
      precoDetalhe: string;
      acao: string;
    };
  };
}

// Keeping review types for potential future use, but they are not in the new product data.
export interface ProductReview {
  autor: string;
  nota: number;
  cidade: string;
  texto: string;
  fotoUrlComentario: string | null;
}

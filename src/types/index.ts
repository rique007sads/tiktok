
export interface ProductImage {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface ProductReview {
  autor: string;
  cidade: string;
  nota: number;
  texto: string;
  fotoUrlComentario?: string | null;
}

export interface Product {
  nome: string;
  estatisticas: {
    mediaAvaliacao: number;
    totalAvaliacoes: number;
    totalVendidos: number;
  };
  preco: {
    atual: number;
    original: number;
    economiaPorcentagem: number;
    textoDetalheFrete: string;
  };
  ofertaRelampago: {
    ativa: boolean;
    tempoRestante: string;
    descontoPorcentagem: number;
    condicaoCompra: {
      minimoRequerido: number;
      economiaGanho: number;
    };
  };
  logistica: {
    frete: {
      tipo: string;
      previsaoEntrega: string;
    };
    devolucao: {
      tipo: string;
      detalhe: string;
    };
  };
  comentariosAmostra: {
    autor: string;
    cidade: string;
    nota: number;
    texto: string;
  }[];
  imagens: {
    urlPrincipal: string;
    miniaturas: string[];
  };
  barraAcoesFixa: {
    loja: { texto: string };
    chat: { texto: string };
    carrinhoRapido: { icone: string; acao: string };
    comprarAgora: {
      texto: string;
      precoDetalhe: string;
      acao: string;
    };
  };
}

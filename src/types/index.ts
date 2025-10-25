
export interface ProductImage {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface Product {
  nome: string;
  vendidos: number;
  acoesTopo: {
    favoritar: boolean;
  };
  preco: {
    minimo: number;
    originalReferencia: number;
    descontoPorcentagem: number;
    textoDesconto: string;
  };
  parcelamento: {
    parcelas: number;
    valorParcela: number;
    juros: string;
  };
  avisosCompra: {
    tipo: string;
    texto: string;
    botao: string;
    acao: string;
  }[];
  logistica: {
    frete: {
      tipo: string;
      previsaoEntrega: string;
      taxaEnvio: number;
    };
  };
  variacoes: {
    disponiveis: number;
    textoGeral: string;
    opcoes: {
      nome: string;
      urlMiniatura: string;
    }[];
    acao: string;
  };
  servicosShop: {
    titulo: string;
    itens: string[];
  };
  secaoOfertas: {
    titulo: string;
    cuponsAtivos: {
      tipo: string;
      detalhe: string;
      botaoTexto: string;
      acao: string;
    }[];
  };
  avaliacoes: {
    titulo: string;
    total: number;
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
  imagens: {
    urlPrincipal: string;
    miniaturas: string[];
  };
}

export interface ProductReview {
  autor: string;
  nota: number;
  cidade: string;
  texto: string;
  fotoUrlComentario: string | null;
}

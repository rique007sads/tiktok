export interface ProductImage {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface ProductReview {
  autor: string;
  nota: number;
  cidade: string;
  texto: string;
  fotoUrlComentario: string | null;
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
    economiaPorcentagem: number;
    textoEconomia: string;
  };
  ofertaRelampago: {
    ativa: boolean;
    titulo: string;
    tempoRestante: string;
  };
  estatisticas: {
    mediaAvaliacaoClientes: number;
    totalAvaliacoesClientes: number;
    totalAvaliacoesLoja: number;
    totalVendidos: number;
  };
  logistica: {
    frete: {
      tipo: string;
      detalhe: string;
    };
    devolucao: {
      tipo: string;
      prazoDias: number;
      detalhe: string;
    };
  };
  resumoAvaliacoes: {
    incluiMidia: number;
    '5estrelas': number;
    '4estrelas': number;
  };
  comentariosAmostra: Record<string, ProductReview>;
  descricaoDetalhada: {
    paragrafoPrincipal: string;
    fichaTecnica: Record<string, string>;
    dicasDeUso: string[];
    avisoLegal: string;
  };
  vendedor: {
    nomeLoja: string;
    totalProdutos: number;
  };
}

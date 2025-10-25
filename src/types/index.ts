
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

export interface GalleryImage {
  id: string;
  url: string;
  tipo: string;
  alt: string;
}

interface Comentario {
    autor: string;
    cidade: string;
    nota: number;
    data: string;
    texto: string;
    fotoUrlComentario?: string | null;
}

export interface Product {
  nome: string;
  marca?: string;
  modelo?: string;
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
  imagens: {
    contadorAtual: number;
    contadorTotal: number;
    urlPrincipal: string;
    galeria: GalleryImage[];
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
  visaoGeral: {
    titulo: string;
    resumoProduto: string;
    diferenciais: string[];
    avaliacoes: {
        tituloSecao: string;
        avaliacoesGerais: {
            totalComentarios: number;
            mediaGeral: number;
        };
        comentarios: {
            [key: string]: Comentario;
        };
    }
  };
  descricao: {
    titulo: string;
    textoPrincipal: string;
    textoCompleto: string;
    fichaTecnica: Record<string, string | string[]>;
    dicasDeUso: string[];
    avisoLegal: string;
  }
}

    
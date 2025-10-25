import type { Product } from '@/types';

export const productData: Product = {
  nome: 'Patinete Elétrico Scooter De Alumínio Com Bluetooth 30km/h',
  marca: 'Foston',
  modelo: 'FS-S09 Pro',
  imagens: {
    contadorFotos: '1/6',
    urlPrincipal: 'patinete_principal',
    miniaturas: [
      'miniatura_1',
      'miniatura_2',
      'miniatura_3',
      'miniatura_4',
      'miniatura_5',
      'miniatura_6',
    ],
  },
  preco: {
    atual: 67.9,
    original: 619.9,
    economiaPorcentagem: 89,
    textoEconomia: 'Economize até 89%',
  },
  ofertaRelampago: {
    ativa: true,
    titulo: 'Promo do Mês',
    tempoRestante: '04:54', // From 294 seconds
  },
  estatisticas: {
    mediaAvaliacaoClientes: 4.8,
    totalAvaliacoesClientes: 892,
    totalAvaliacoesLoja: 207, // Keeping old value as it's not in new data.
    totalVendidos: 8547,
  },
  logistica: {
    frete: {
      tipo: 'Frete grátis',
      detalhe:
        'Entrega expressa em todo Brasil. Receba seu produto em até 15 dias úteis com código de rastreamento completo.',
    },
    devolucao: {
      tipo: 'Devolução grátis',
      prazoDias: 30,
      detalhe:
        'Não gostou? Devolvemos seu dinheiro sem burocracia. Frete de retorno gratuito e reembolso rápido garantido.',
    },
  },
  resumoAvaliacoes: {
    incluiMidia: 52,
    '5estrelas': 155,
    '4estrelas': 22,
  },
  comentariosAmostra: {
    carlosSilva: {
      autor: 'Carlos Silva',
      nota: 5,
      cidade: 'São Paulo, SP',
      texto:
        'Comprei pro meu filho ele amou está indo pro trabalho com o patinete fácil de andar praticidade na hora de guardar produto excelente e meu filho conseguiu colocar no seguro.',
      fotoUrlComentario: 'carlos_silva_review',
    },
    rafaelaLima: {
      autor: 'Rafaela Lima',
      nota: 5,
      cidade: 'Rio de Janeiro, RJ',
      texto:
        'Gostei bastante, achei que era mais lento mas a velocidade me surpreendeu, no manual diz que vai ate 25 mas claramente da pra ver a velocidade aumentando quando chega no limite de 25, deve chegar nos 30, a bateria dura até que bem, recarregamos a cada 3 dias.',
      fotoUrlComentario: null,
    },
    pedroRaul: {
      autor: 'Pedro Raul',
      nota: 4,
      cidade: 'Belo Horizonte, MG',
      texto:
        'Bom produto, mas a bateria poderia durar um pouco mais. No geral, estou satisfeito com a compra. Atinge uma boa velocidade.',
      fotoUrlComentario: null,
    },
    pietroSantos: {
      autor: 'Pietro Santos',
      nota: 5,
      cidade: 'Curitiba, PR',
      texto:
        'Excelente! Chegou rápido e é muito potente. A qualidade do material é ótima e o design é muito bonito. Recomendo a todos!',
      fotoUrlComentario: 'pietro_santos_review',
    },
  },
  descricaoDetalhada: {
    paragrafoPrincipal:
      'O Patinete Elétrico Foston FS-S09 Pro é a escolha ideal para quem busca mobilidade urbana com praticidade, tecnologia e desempenho. Leve, dobrável e com conexão Bluetooth, ele transforma seu trajeto diário em uma experiência moderna e eficiente. Equipado com um motor potente e bateria de longa duração, é perfeito para o dia a dia na cidade.',
    fichaTecnica: {
      Marca: 'Foston',
      Modelo: 'FS-S09 Pro',
      Potência: '300W',
      'Velocidade Máxima': 'Até 25 km/h',
      Bateria: 'Lítio 10.400mAh / 36V',
      Autonomia: 'de 20 a 32 km',
      'Peso Suportado': 'até 100 kg',
      'Sistema de Freios': 'Freio a disco',
      Estrutura: 'Alumínio reforçado',
    },
    dicasDeUso: [
      'Mantenha a calibragem correta dos pneus para melhor desempenho e conforto.',
      'Recarregue totalmente a bateria antes do primeiro uso.',
      'Evite terrenos extremamente irregulares ou molhados para maior durabilidade do equipamento.',
      'Acompanhe e controle as funções do patinete via aplicativo Bluetooth compatível.',
    ],
    avisoLegal: '• Idade mínima recomendada: 8 anos.',
  },
  vendedor: {
    nomeLoja: 'eletriczbrasil',
    totalProdutos: 307,
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

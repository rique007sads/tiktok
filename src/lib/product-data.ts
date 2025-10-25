
import type { Product, ProductImage, Store } from '@/types';
import placeholderData from './placeholder-images.json';

export const productData: Product = {
  idLoja: "nextWheelStore",
  vendedor: {
    nome: "NextWheel Store",
    urlIconeVerificacao: ""
  },
  nome: "Máquina de Bolhas Automática Elétrica – diversão garantida para crianças e família!, criando um ambiente mágico e divertido instantaneamente.",
  marca: "Foston",
  modelo: "FS-S09 Pro",
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
  imagens: {
    contadorAtual: 1,
    contadorTotal: 5,
    urlPrincipal: "https://i.postimg.cc/Dwtm8RFX/tiktok.webp",
    galeria: [
      { id: "img01", url: "https://i.postimg.cc/Dwtm8RFX/tiktok.webp", tipo: "principal", alt: "Patinete elétrico inteiro" },
      { id: "img02", url: "https://i.postimg.cc/GhvbX913/fototiktok2334ds.webp", tipo: "dobrado", alt: "Patinete elétrico dobrado" },
      { id: "img03", url: "https://i.postimg.cc/ry36XT9z/fototikodso23.webp", tipo: "detalhe", alt: "Detalhe da roda traseira do patinete" },
      { id: "img04", url: "https://i.postimg.cc/bJvX8NMY/fototiktok.webp", tipo: "vista_lateral", alt: "Vista lateral do patinete" },
      { id: "img05", url: "https://i.postimg.cc/XXSDZV2w/fotosd3dwtiktok.webp", tipo: "diagrama", alt: "Diagrama de dimensões do patinete" }
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
  },
  visaoGeral: {
    titulo: "Visão geral",
    resumoProduto: "A opção perfeita para transformar qualquer momento em diversão mágica!",
    diferenciais: [
      "Funciona automaticamente – é só ligar!",
      "Milhares de bolhas coloridas por minuto ✨",
      "Segura e fácil para crianças",
      "Ideal para presentes, festas e brincadeiras"
    ],
    avaliacoes: {
      tituloSecao: "Avaliações dos clientes",
      avaliacoesGerais: {
          totalComentarios: 491,
          mediaGeral: 4.7
      },
      comentarios: {
          "comentarioId_CS": {
              autor: "Carlos Silva",
              cidade: "São Paulo, SP",
              nota: 5,
              data: "2023-10-27T10:00:00Z",
              texto: "Comprei pro meu filho ele amou está indo pro trabalho com o patinete fácil fé andar praticidade na hora dd guardar produto excelente e meu filho conseguiu colocar no seguro.",
              fotoUrlComentario: null,
              fotoUrlAutor: "https://i.postimg.cc/fTx4jXj3/Cn-P-24102025-235201.png"
          },
          "comentarioId_RL": {
              autor: "Rafaela Lima",
              cidade: "Rio de Janeiro, RJ",
              nota: 4,
              data: "2023-10-27T10:15:00Z",
              texto: "Gostei bastante, achei que era mais lento mas a velocidade me surpreendeu, no manual diz que vai ate 25 mas claramente da pra ver a velocidade almentando quando chega no limite de 25, deve chegar nos 30, a bateria dura até que bem, recarregamos a cada 3 dias.",
              fotoUrlComentario: null,
              fotoUrlAutor: "https://i.postimg.cc/dtRXTFwr/Cn-P-24102025-235333.png"
          },
          "comentarioId_PR": {
              autor: "Pedro Raul",
              cidade: "Belo Horizonte, MG",
              nota: 5,
              data: "2023-10-27T10:30:00Z",
              texto: "Excelente meio de transporte para quem almeja não gastar com gasolina e busca praticidade, uso para ir ao trabalho e foi uma escolha ótima adquirir o produto!!.",
              fotoUrlComentario: "https://i.postimg.cc/tg4zJQ4d/Cn-P-24102025-233736.png",
              fotoUrlAutor: "https://i.postimg.cc/hvWyfyYN/Cn-P-24102025-235423.png"
          },
          "comentarioId_PS": {
              autor: "Pietro Santos",
              cidade: "Curitiba, PR",
              nota: 5,
              data: "2023-10-27T10:45:00Z",
              texto: "Esse patinete é excelente!! recomendo demais ele sim pra quem mora a poucos quilômetros do trabalho em área urbanizada ou até para lazer. A velocidade dele é ideal!! tenho 97 kg e ele alcança sim os 25km/h de boa! parece ser resistente e é discreto. Tem uma ótima frenagem! eu gostei muito dele! uso todo dia!.",
              fotoUrlComentario: null,
              fotoUrlAutor: "https://i.postimg.cc/JhsPKCCn/Cn-P-24102025-235500.png"
          }
      }
    }
  },
  descricao: {
    titulo: "Descrição",
    textoPrincipal: "O Patinete Elétrico Foston FS-S09 Pro é a escolha ideal para quem busca mobilidade urbana com praticidade, tecnologia e desempenho. Solução perfeita para sua locomoção diária, de forma rápida, segura e sustentável.",
    textoCompleto: "Equipado com motor de 300W, três modos de pilotagem e conexão via Bluetooth com aplicativo, este patinete oferece uma condução inteligente e segura. Sua estrutura 100% em alumínio reforçado garante resistência e leveza, enquanto o design dobrável o torna fácil de transportar e ideal para o dia a dia. Para maior estabilidade e segurança, conta com pneus com câmara de ar e freios a disco, além de farol em LED e sistema de freios eficiente. A conectividade Bluetooth permite controlar diversas funções pelo smartphone.",
    fichaTecnica: {
      "Marca": "Foston",
      "Potencia": "300W",
      "VelocidadeMaxima": "Até 25 km/h",
      "Bateria": "Lítio 10.400mAh / 36V (Longa duração)",
      "Autonomia": "de 20 a 32 km (varia conforme terreno e peso do condutor)",
      "PesoSuportado": "até 100 kg",
      "Pneus": "8.5\" com câmara de ar",
      "CalibragemRecomendada": "45 a 50 libras",
      "SistemaDeFreios": "Freio a disco",
      "Iluminacao": "Farol em LED",
      "Estrutura": "Aluminio reforçado (100% em alumínio)",
      "Tipo": "Dobrável com novo sistema de trava",
      "Carregador": "Bivolt (110V/2220V - 50/60Hz)",
      "Display": ["Marcador de velocidade", "Nível de bateria", "Indicador de modo de pilotagem"],
      "ModosPilotagem": ["ECO: até 10 km/h", "Drive: até 20 km/h", "Sport: até 25 km/h"],
      "TempoRecarga": "4 a 5 horas"
    },
    dicasDeUso: [
      "Mantenha a calibragem correta dos pneus para melhor desempenho e conforto.",
      "Recarregue totalmente a bateria antes do primeiro uso.",
      "Evite terrenos extremamente irregulares ou molhados para maior durabilidade do equipamento.",
      "Acompanhe e controle as funções do patinete via aplicativo Bluetooth compatível."
    ],
    avisoLegal: "Idade mínima recomendada: 8 anos."
  }
};

export const storeData: Store = {
  nome: "NextWheel Store",
  slogan: "Shop",
  statusVerificacao: {
    verificada: true,
    plataforma: "TikTok Shop"
  },
  urlLogo: "https://i.postimg.cc/X7tZFKJG/Cn-P-24102025-232009.png",
  menusRodape: [
    {
      titulo: "Informações da empresa",
      conteudo: "",
      acao: "expandir_ou_navegar"
    },
    {
      titulo: "Suporte ao cliente",
      conteudo: "",
      acao: "expandir_ou_navegar"
    },
    {
      titulo: "Políticas e aspectos legais",
      conteudo: "",
      acao: "expandir_ou_navegar"
    }
  ]
};


const imagePlaceholders: ProductImage[] = placeholderData.placeholderImages;

export const imageMap: Record<string, ProductImage> = imagePlaceholders.reduce(
  (acc, img) => {
    acc[img.id] = img;
    return acc;
  },
  {} as Record<string, ProductImage>
);


    
    


import type { Product, ProductImage, Store } from '@/types';
import placeholderData from './placeholder-images.json';

export const productData: Product = {
  idLoja: "nextWheelStore",
  vendedor: {
    nome: "BrincaKids",
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
    atual: 24.90,
    original: 69.90,
    economiaPorcentagem: 64,
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
      previsaoEntrega: "Receba entre 4 de nov - 11 de nov"
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
      { id: "img01", url: "https://i.postimg.cc/yx8wLn2k/Captura-de-tela-2025-11-02-135437.png", tipo: "principal", alt: "Máquina de Bolhas em uso" },
      { id: "img02", url: "https://i.postimg.cc/3x1fc2Cv/tela.webp", tipo: "dobrado", alt: "Máquina de bolhas de perto" },
      { id: "img03", url: "https://i.postimg.cc/rpSsTFsW-/ehhjsadfjjj.webp", tipo: "detalhe", alt: "Criança brincando com bolhas" },
      { id: "img04", url: "https://i.postimg.cc/bJvX8NMY/fototiktok.webp", tipo: "vista_lateral", alt: "Máquina de bolhas em ambiente externo" },
      { id: "img05", url: "https://i.postimg.cc/ncyQfWTJ/dfedf3343.webp", tipo: "diagrama", alt: "Detalhe da máquina de bolhas" }
    ]
  },
  barraAcoesFixa: {
    loja: { texto: "Loja" },
    chat: { texto: "Chat" },
    carrinhoRapido: { icone: "carrinho", acao: "adicionar_carrinho" },
    comprarAgora: {
      texto: "Comprar agora",
      precoDetalhe: "R$ 24,90 | Frete grátis",
      acao: "checkout_direto"
    }
  },
  visaoGeral: {
    titulo: "Visão geral",
    resumoProduto: "A opção perfeita para transformar qualquer momento em diversão mágica!",
    diferenciais: [
      "Funciona automaticamente – é só ligar!",
      "Milhares de bolhas coloridas por minuto",
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
          "comentarioId_AC": {
              autor: "Ana Costa",
              cidade: "Salvador, BA",
              nota: 5,
              data: "2023-11-05T11:00:00Z",
              texto: "Comprei para minha filha e ela ficou encantada! A Máquina de Bolhas Automática Elétrica é muito prática, é só ligar que começa a soltar várias bolhinhas. Usamos no aniversário e deixou tudo mais lindo e divertido. Recomendo demais! 🫧💕",
              fotoUrlComentario: "https://i.postimg.cc/HsZscnbG/Whats-App-Image-2025-10-25-at-03-34-32.jpg",
              fotoUrlAutor: "https://i.postimg.cc/jj8hBz7F/feeedbakc-perfil.jpg"
          },
          "comentarioId_BS": {
              autor: "Bruno Santos",
              cidade: "Fortaleza, CE",
              nota: 5,
              data: "2023-11-04T15:20:00Z",
              texto: "Achei que fosse fraca, mas me surpreendeu! As bolhas saem sem parar e fazem um efeito muito bonito. Meu filho corre atrás delas o tempo todo 😂. Leve, fácil de usar e dá pra levar em qualquer lugar.",
              fotoUrlComentario: "https://i.postimg.cc/DZL81hnZ/Whats-App-Image-2025-10-25-at-03-34-31.jpg",
              fotoUrlAutor: "https://i.postimg.cc/fTx4jXj3/Cn-P-24102025-235201.png"
          },
          "comentarioId_CO": {
              autor: "Carla Oliveira",
              cidade: "Brasília, DF",
              nota: 4,
              data: "2023-11-03T09:45:00Z",
              texto: "Gostei bastante! Só não dei 5 estrelas porque queria que viesse com mais líquido, mas nada que atrapalhe. Funciona super bem e as crianças amam. Usei na festa da minha sobrinha e foi sucesso!",
              fotoUrlComentario: null,
              fotoUrlAutor: "https://i.postimg.cc/dtRXTFwr/Cn-P-24102025-235333.png"
          },
          "comentarioId_DP": {
              autor: "Daniel Pereira",
              cidade: "Porto Alegre, RS",
              nota: 5,
              data: "2023-11-02T18:00:00Z",
              texto: "Excelente para deixar o ambiente mais alegre. Uso no quintal nos finais de semana. Ajuda até pra tirar fotos lindas com as crianças 🫧✨. Vale muito a pena, produto ótimo!",
              fotoUrlComentario: "https://i.postimg.cc/CKp7jhVf/foto-feeedbakc.jpg",
              fotoUrlAutor: "https://i.postimg.cc/hvWyfyYN/Cn-P-24102025-235423.png"
          },
          "comentarioId_FR": {
              autor: "Fernanda Ribeiro",
              cidade: "Manaus, AM",
              nota: 5,
              data: "2023-11-01T14:10:00Z",
              texto: "Amei! Eu uso na pracinha com minha filha e outras crianças acabam vindo brincar junto. A máquina funciona direitinho e é super segura. Presente perfeito 🎁💖",
              fotoUrlComentario: null,
              fotoUrlAutor: "https://i.postimg.cc/43w8ZDrd/images.jpg"
          }
      }
    }
  },
  descricao: {
    titulo: "Descrição",
    textoPrincipal: "Presente Perfeito para Crianças \n\n• Máquina de Bolhas Automática Elétrica:\nA escolha ideal para transformar qualquer momento em diversão! Basta ligar e a máquina começa a criar centenas de bolhas por minuto. As crianças ficam encantadas vendo o ambiente se encher de bolhinhas! \nPerfeita para festas, aniversários e brincadeiras no dia a dia.",
    textoCompleto: "• Funcionamento Prático e Seguro:\nCom design portátil e leve, a máquina é fácil de transportar e usar. Não precisa assoprar, não faz sujeira e é segura para crianças. Ideal para usar no quintal, na sala, no parque ou em ambientes externos.\n\n• Diversão Garantida:\nA chuva de bolhinhas cria uma atmosfera mágica e alegre. As crianças amam correr e estourar bolhas, e os adultos também! Um presente que garante sorrisos, fotos lindas e horas de entretenimento.",
    fichaTecnica: {
      "Nome do Produto": "Máquina de Bolhas Automática Elétrica",
      "Alimentação": "Pode variar por modelo: USB / Pilhas / Bateria Recarregável",
      "Material": "Plástico ABS resistente e seguro para crianças",
      "Uso": "Infantil / Festas / Brincadeiras Internas e Externas",
      "Produção de Bolhas": "Alto volume (vários furos que liberam bolhas contínuas)",
      "Portabilidade": "Leve e fácil de transportar",
      "Idade Recomendada": "3 anos ou mais"
    },
    dicasDeUso: [
      "Use líquido próprio para bolhas para melhor resultado (misturas caseiras também funcionam)",
      "Mantenha o reservatório sempre na altura correta para que a máquina não borre o motor",
      "Para usar em festas, posicione em um local elevado para espalhar as bolhas no ambiente",
      "Após o uso, limpe o bocal com um pano úmido para não acumular líquido seco",
      "Evite deixar o líquido derramar sobre o motor"
    ],
    avisoLegal: "Idade mínima recomendada: 8 anos."
  }
};

export const storeData: Store = {
  nome: "BrincaKids",
  slogan: "Shop",
  statusVerificacao: {
    verificada: true,
    plataforma: "TikTok Shop"
  },
  urlLogo: "https://i.postimg.cc/mZ3K6nr2/cf6b1864872cdd7d0b1f27f0bf831a47.jpg",
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


    
    

    

    









    

    

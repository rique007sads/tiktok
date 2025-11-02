
import type { Product, ProductImage, Store } from '@/types';
import placeholderData from './placeholder-images.json';

export const productData: Product = {
  idLoja: "nextWheelStore",
  vendedor: {
    nome: "BrincaKids",
    urlIconeVerificacao: ""
  },
  nome: "Óculos de Realidade Virtual Meta Quest 3s, 256GB + Batman Arkham Shadow",
  marca: "Meta",
  modelo: "Meta Quest 3s",
  estatisticas: {
    mediaAvaliacao: 4.8,
    totalAvaliacoes: 892,
    totalVendidos: 8547
  },
  preco: {
    atual: 64.90,
    original: 1241.90,
    economiaPorcentagem: 95,
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
      { id: "img04", url: "https://i.postimg.cc/mZ3n9xzC/wjasd88382.webp", tipo: "vista_lateral", alt: "Máquina de bolhas em ambiente externo" },
      { id: "img05", url: "https://i.postimg.cc/ncyQfWTJ/dfedf3343.webp", tipo: "diagrama", alt: "Detalhe da máquina de bolhas" }
    ]
  },
  barraAcoesFixa: {
    loja: { texto: "Loja" },
    chat: { texto: "Chat" },
    carrinhoRapido: { icone: "carrinho", acao: "adicionar_carrinho" },
    comprarAgora: {
      texto: "Comprar agora",
      precoDetalhe: "R$ 64,90 | Frete grátis",
      acao: "checkout_direto"
    }
  },
  visaoGeral: {
    titulo: "Visão geral",
    resumoProduto: "A opção perfeita para transformar qualquer espaço em uma experiência extraordinária!",
    diferenciais: [
      "Realidade mista e virtual em um só dispositivo",
      "Leve, sem fios e com liberdade total de movimento",
      "Gráficos impressionantes e som 3D imersivo",
      "Milhares de jogos, apps e experiências sociais",
      "Diversão, trabalho e entretenimento em um só lugar"
    ],
    avaliacoes: {
      tituloSecao: "Avaliações dos clientes",
      avaliacoesGerais: {
          totalComentarios: 491,
          mediaGeral: 4.8
      },
      comentarios: [
        {
          autor: "Juliana Costa",
          cidade: "Curitiba, PR",
          nota: 5,
          data: "2023-11-05T11:00:00Z",
          texto: "Comprei o Meta Quest 3s e estou impressionado! A imersão é absurda, parece que você realmente está dentro do jogo. Os gráficos são lindos e o som 3D deixa tudo ainda mais real. Melhor compra do ano! 🎮🔥",
          fotoUrlComentario: null,
          fotoUrlAutor: "https://i.postimg.cc/ZKz0nNkj/Ac677b2446d6342c8b038916607186965Q-jpg-960x960q75-jpg.avif"
        },
        {
          autor: "André Oliveira",
          cidade: "Salvador, BA",
          nota: 5,
          data: "2023-11-04T15:20:00Z",
          texto: "Meu marido e eu usamos juntos e é diversão garantida! Dá pra assistir filmes, jogar e até conversar com os amigos no WhatsApp sem tirar o headset. Muito prático e leve, adorei a liberdade de movimento! 💫",
          fotoUrlComentario: null,
          fotoUrlAutor: "https://i.postimg.cc/gk2QvSP8/A7b7407e7843942ee866d5c37abe67d895-jpg-960x960q75-jpg.avif"
        },
        {
          autor: "Camila Ferreira",
          cidade: "Rio de Janeiro, RJ",
          nota: 5,
          data: "2023-11-03T09:45:00Z",
          texto: "Achei que seria complicado de configurar, mas é super simples! Em minutos já estava jogando Batman Arkham Shadow e fiquei de boca aberta com os gráficos. Experiência surreal! 🦇⚡",
          fotoUrlComentario: null,
          fotoUrlAutor: "https://i.postimg.cc/dtRXTFwr/Cn-P-24102025-235333.png"
        },
        {
          autor: "Felipe Nunes",
          cidade: "Belo Horizonte, MG",
          nota: 5,
          data: "2023-11-02T18:00:00Z",
          texto: "Comprei pro meu filho e ele ficou encantado! Eu também uso pra ver séries e parece que estou num cinema gigante. A bateria dura bem e os controles são bem precisos. Produto top! 🍿😎",
          fotoUrlComentario: null,
          fotoUrlAutor: "https://i.postimg.cc/02hnbckT/A9994eee6ed9d4f758035b4693e6b2e5bq-jpeg-960x960q75-jpeg.avif"
        },
        {
          autor: "Fernanda Ribeiro",
          cidade: "Manaus, AM",
          nota: 5,
          data: "2023-11-01T14:10:00Z",
          texto: "Sensacional! Uso o Meta Quest 3s pra treinar boxe virtual e até pra relaxar assistindo vídeos. É leve, confortável e o som 3D é incrível. Recomendo pra quem quer tecnologia e diversão em um só produto! 💪🎧",
          fotoUrlComentario: null,
          fotoUrlAutor: "https://i.postimg.cc/02hnbckT/A9994eee6ed9d4f758035b4693e6b2e5bq-jpeg-960x960q75-jpeg.avif"
        }
      ]
    }
  },
  descricao: {
    titulo: "Descrição",
    textoPrincipal: "Meta quest 3s – Transforme sua realidade agora!\n\nTransforme qualquer espaço na sua casa em um incrível playground de realidade mista e virtual. Com o meta quest 3s, leve o batman: arkham shadow e viva experiências extraordinárias!",
    textoCompleto: "Realidade mista e virtual\nDescubra milhares de aventuras, misturando objetos digitais em seu espaço físico ou mergulhe de cabeça na realidade virtual.\n\nDiversão social ilimitada\nConecte-se com amigos ao redor do mundo, participe de shows ao vivo no meta horizon, ou transmita suas partidas diretamente para a tv. A diversão nunca para!\n\nMultitarefa como nunca antes\nAbra várias telas simultaneamente: navegue na web, assista a vídeos no youtube e converse com amigos, tudo ao mesmo tempo e sem sair do lugar.\n\nCinema privado em casa\nTransforme qualquer ambiente em um cinema gigantesco! Desfrute de seus filmes e séries favoritos com a melhor qualidade.\n\nRedes sociais integradas\nUse whatsapp, instagram e facebook messenger enquanto joga e permanece conectado aos seus amigos.\n\nLiberdade de movimento\nTreine virtualmente ou jogue com toda a liberdade! O meta quest 3s é leve e sem fio, permitindo movimentos naturais em qualquer ambiente.\n\nGráficos avançados\nDesfrute de um desempenho gráfico de tirar o fôlego com uma gpu duas vezes mais potente que a do meta quest 2. Utilize os controladores touch plus para precisão total e sensações realistas.\n\nControle parental simples e eficaz\nGerencie o uso diário, adicione usuários, compartilhe conteúdo e mantenha sua família segura com conselhos de segurança infantil online.\n\nExperiências extraordinárias a um preço incrível!\nDescubra o poder do meta quest 3s e reinvente a forma como você se diverte, trabalha e se conecta. As possibilidades são infinitas!\n\nOnde você vai começar sua aventura? Aproveite agora e leve sua experiência para o próximo nível com o meta quest 3s!",
    fichaTecnica: {
      "Marca": "Meta",
      "Modelo": "Meta Quest 3s",
      "Cor": "Branco",
      "Processador cpu": "qualcomm snapdragon xr2",
      "Áudio": "3d, som posicional",
      "Visor": "lcd",
      "Alto-falante": "integrados",
      "Conectividade wireless": "wi-fi",
      "Resolução da tela": "1832 × 1920",
      "Bateria": "óculos: 4.324 mah - controle touch: requer 1 pilha aa",
      "Memória": "256gb",
      "Memória ram": "8gb",
      "Duração da bateria": "aproximadamente 2h30min",
      "Alimentação": "através da entrada usb-c",
      "Dimensões aproximadas do produto (AxLxP)": "10x8x8cm",
      "Peso aproximado do produto sem embalagem": "900g",
      "Dimensões da embalagem (cm)": "21.7 x 11.9 x 24.4",
      "Peso bruto": "1385g",
      "Anatel": "002090905131",
      "Conteúdo da Embalagem": [
        "1 Óculos Meta Quest 3s, 256GB",
        "Jogo batman arkham shadow (versão digital)",
        "2 controles touch",
        "Adaptador de energia",
        "Cabo usb-c",
        "2 pilhas aa",
        "Separador de óculos",
        "Manual"
      ]
    },
    dicasDeUso: [],
    avisoLegal: "Garantia do Fornecedor: 3 Meses. Peso: 1385 gramas (bruto com embalagem)"
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


    
    

    

    









    

    

    

    











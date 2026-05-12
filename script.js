const botao = document.querySelector(".btn-iniciar");

botao.addEventListener("click", function(){

    const nome = document.getElementById("nome").value;
    const escola = document.getElementById("escola").value;
    const idade = document.getElementById("idade").value;

    if(nome == "" || escola == "" || idade == ""){
        alert("Preencha todos os campos!");
    } else {
        window.location.href = "jogo.html";
    }

});

const perguntas = [
  {
    pergunta: "Quem ajudou a começar a cidade de Brusque há muito tempo?",
    alternativas: [
      { texto: "Piratas", correta: false, imagem: "pirata.png" },
      { texto: "Imigrantes europeus", correta: true, imagem: "imigrante.png" },
      { texto: "Astronautas", correta: false, imagem: "astronauta.png" },
      { texto: "Vikings", correta: false, imagem: "viking.png" }
    ]
  },

  {
    pergunta: "De qual país vieram muitos imigrantes que ajudaram a formar Brusque?",
    alternativas: [
      { texto: "Alemanha", correta: true, imagem: "alemanha.png" },
      { texto: "México", correta: false, imagem: "méxico.png" },
      { texto: "Índia", correta: false, imagem: " índia.png" },
      { texto: "Austrália", correta: false, imagem: "austrália.png" }
    ]
  },

  {
    pergunta: "O que ajudou Brusque a crescer e ficar conhecida no passado?",
    alternativas: [
      { texto: "Fábricas de roupas e tecidos", correta: true, imagem: "roupas.png" },
      { texto: "Fábricas de foguetes", correta: false, imagem: "foguete.png" },
      { texto: "Fábricas de navios", correta: false, imagem: "navio.png" },
      { texto: "Fábricas de celulares", correta: false, imagem: "celular.png" }
    ]
  },

  {
    pergunta: "Quem foi uma pessoa importante para o crescimento de Brusque?",
    alternativas: [
      { texto: "Carlos Renaux", correta: true, imagem: "carlos.png" },
      { texto: "Dom Pedro", correta: false, imagem: "dompedro.png" },
      { texto: "Albert Einstein", correta: false, imagem: "albert.png" },
      { texto: "Neymar", correta: false, imagem: "neymar.png" }
    ]
  },

  {
    pergunta: "A fábrica de Carlos Renaux fazia principalmente:",
    alternativas: [
      { texto: "Roupas e tecidos", correta: true, imagem: "roupas.png" },
      { texto: "Aviões", correta: false, imagem: "avião.png" },
      { texto: "Bicicletas", correta: false, imagem: "bicicleta.png" },
      { texto: "Brinquedos", correta: false, imagem: "brinquedo.png" }
    ]
  },

  {
    pergunta: "Onde tem muitos animais?",
    alternativas: [
      { texto: "Parque Zoobotânico", correta: true, imagem: "zoobotânico.png" },
      { texto: "Escola", correta: false, imagem: "escola.png" },
      { texto: "Casa", correta: false, imagem: "casa.png" },
      { texto: "Mercado", correta: false, imagem: "mercado.png" }
    ]
  },

  {
    pergunta: "Quem veio morar em Brusque?",
    alternativas: [
      { texto: "Alemães", correta: true, imagem: "alemanha.png" },
      { texto: "Robô", correta: false, imagem: "robo.png" },
      { texto: "Dinossauro", correta: false, imagem: "dinossauro.png" },
      { texto: "Alien", correta: false, imagem: "alien.png" }
    ]
  },

  {
    pergunta: "Qual é a festa do marreco?",
    alternativas: [
      { texto: "Fenarreco", correta: true, imagem: "fenarreco.png" },
      { texto: "Natal", correta: false, imagem: "natal.png" },
      { texto: "Halloween", correta: false, imagem: "halloween.png" },
      { texto: "Páscoa", correta: false, imagem: "pascoa.png" }
    ]
  },

  {
    pergunta: "Qual é o marreco?",
    alternativas: [
      { texto: "Marreco", correta: true, imagem: "marreco.png" },
      { texto: "Galinha", correta: false, imagem: "galinha.png" },
      { texto: "Porco", correta: false, imagem: "porco.png" },
      { texto: "Peixe", correta: false, imagem: "peixe.png" }
    ]
  },

  {
    pergunta: "O que acontece no aniversário da cidade?",
    alternativas: [
      { texto: "Festa", correta: true, imagem: "festa.png" },
      { texto: "Halloween", correta: false, imagem: "halloween.png" },
      { texto: "Natal", correta: false, imagem: "natal.png" },
      { texto: "Páscoa", correta: false, imagem: "pascoa.png" }
    ]
  },

  {
    pergunta: "Em Brusque as pessoas podem brincar em…",
    alternativas: [
      { texto: "Parques", correta: true, imagem: "parque.png" },
      { texto: "Vulcões", correta: false, imagem: "vulcão.png" },
      { texto: "Desertos", correta: false, imagem: "deserto.png" },
      { texto: "Pirâmides", correta: false, imagem: "pirâmide.png" }
    ]
  },

  {
    pergunta: "Onde as pessoas vão quando estão doentes em Brusque?",
    alternativas: [
      { texto: "Hospital Azambuja", correta: true, imagem: "hospital.png" },
      { texto: "Padaria", correta: false, imagem: "padaria.png" },
      { texto: "Cinema", correta: false, imagem: "cinema.png" },
      { texto: "Parque", correta: false, imagem: "parque.png" }
    ]
  },

  {
    pergunta: "Onde muitas pessoas vão comprar roupas em Brusque?",
    alternativas: [
      { texto: "Lojas do centro", correta: true, imagem: "loja.png" },
      { texto: "Hospital", correta: false, imagem: "hospital.png" },
      { texto: "Escola", correta: false, imagem: "escola.png" },
      { texto: "Igreja", correta: false, imagem: "igreja.png" }
    ]
  },

  {
    pergunta: "Onde fica a Prefeitura de Brusque?",
    alternativas: [
      { texto: "Praça da Prefeitura", correta: true, imagem: "prefeitura.png" },
      { texto: "Praia", correta: false, imagem: "praia.png" },
      { texto: "Floresta", correta: false, imagem: "floresta.png" },
      { texto: "Montanha", correta: false, imagem: "montanha.png" }
    ]
  },

  {
    pergunta: "Qual é o time de futebol da cidade de Brusque?",
    alternativas: [
      { texto: "Brusque FC", correta: true, imagem: "brusquefc.png" },
      { texto: "Flamengo", correta: false, imagem: "flamengo.png" },
      { texto: "Barcelona", correta: false, imagem: "barcelona.png" },
      { texto: "Real Madrid", correta: false, imagem: "realmadrid.png" }
    ]
  }
];
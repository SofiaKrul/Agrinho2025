//OBJETIVO: Compreender como as quatro estações se relacionam com os preços das frutas em cada época.
//INSTRUÇÕES: clique no "play", depois na tela e na tecla "espaço".
//TÍTULO: O clima do preço: Estações que Moldam Sabores e Custos.
//REFERÊNCIAS: chatGPT, noticiasagricolas.com.br, canvas.

let tela = "intro";
let imagem = [];
let fundoAtual = 1;
let tempoTroca = 24000;
let ultimoTempo = 0;

function preload() {
  imagem[1] = loadImage("primavera1.png");
  imagem[2] = loadImage("verão1.png");
  imagem[3] = loadImage("outono1.png");
  imagem[4] = loadImage("inverno1.png");
}

function setup() {
  createCanvas(500, 500);
  ultimoTempo = millis(); // Tempo inicial
}

function draw() {
  if (tela === "intro") {
    mostrarIntroducao();
  } else if (tela === "apresentar") {
    apresentar();
  }
}

function mostrarIntroducao() {
  background("#02A797");  
  fill(255);
  textAlign(CENTER, CENTER);

  // Exemplo do uso de map para variar o tamanho do texto com o tempo (efeito visual)
  let tempoAtual = millis() % 2000; // valor entre 0 e 2000
  let tamanhoTexto = map(tempoAtual, 0, 2000, 20, 28); // varia entre 20 e 28

  textSize(tamanhoTexto);
  text("Será contada uma história", width / 2, 50);
  
  textSize(22);
  text("O Clima do Preço:", width / 2, 200);
  text("Estações que Moldam Sabores e Custos", width / 2, 225);

  textSize(14);
  fill(255, 255, 0);
  text("PARA COMEÇAR CLIQUE NA TELA E APERTE ESPAÇO!!", width / 2, 375);
}

function apresentar() {
  background(255);

  // Exibe a imagem de fundo atual
  if (imagem[fundoAtual]) {
    image(imagem[fundoAtual], 0, 0, width, height);
  }

  // Verifica se já passou o tempo definido
  if (millis() - ultimoTempo > tempoTroca) {
    fundoAtual++; // Avança para a próxima imagem
    if (fundoAtual > 4) {
      fundoAtual = 1; // Reinicia para a primeira imagem
    }
    ultimoTempo = millis(); // Reinicia o contador de tempo

    // Adiciona console.log para informar qual estação está sendo exibida
    switch (fundoAtual) {
      case 1:
        console.log("Estação atual: Primavera");
        break;
      case 2:
        console.log("Estação atual: Verão");
        break;
      case 3:
        console.log("Estação atual: Outono");
        break;
      case 4:
        console.log("Estação atual: Inverno");
        break;
    }
  }
}

function keyPressed() {
  if (tela === "intro" && key === " ") {
    tela = "apresentar";
    loop();
  }
}


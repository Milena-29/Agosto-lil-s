var capitulos = [
  { 
    texto: "Ana Clara está em casa com Eduardo. Ele começa a gritar porque a comida está fria. Ela sente medo, mas ainda não sabe o que fazer.",
    imagem: "ChatGPT Image 29 de set. de 2025, 09_35_11.png",
    audio: "Ana esta em casa com.mp3",
    opcoes: [
      { texto: "Fingir que está tudo bem", proximo: 1 },
      { texto: "Ligar para a amiga Lúcia", proximo: 2 }
    ]
  },
  { 
    texto: "Eduardo pede desculpas, mas logo volta a ofender. Ana começa a achar que a culpa é dela.",
    imagem: "ChatGPT Image 30 de set. de 2025, 08_22_01.png",
    audio: "Eduardo pede desculpa .mp3",
    opcoes: [
      { texto: "Continuar calada", proximo: 3 },
      { texto: "Anotar tudo em um caderno", proximo: 4 }
    ]
  },
  { 
    texto: "Lúcia percebe a situação e diz que ela não pode viver assim. Mostra informações sobre a Lei Maria da Penha e o número 180.",
    imagem: "ChatGPT Image 29 de set. de 2025, 09_35_06.png",
    audio: "Lucia.mp3",
    opcoes: [
      { texto: "Aceitar ajuda e ir à delegacia", proximo: 5 },
      { texto: "Desligar o telefone e não contar mais nada", proximo: 6 }
    ]
  },
  { 
    texto: "Eduardo quebra o celular de Ana e ameaça: “Se você contar para alguém, vai se arrepender.”",
    imagem: "ChatGPT Image 30 de set. de 2025, 08_30_36.png",
    audio: "Celular quebrado.mp3",
    opcoes: [
      { texto: "Acreditar na ameaça e se calar", proximo: -1 },
      { texto: "Pensar em fugir", proximo: 7 }
    ]
  },
  { 
    texto: "Ana registra cada agressão. Mais tarde, esse caderno vira uma prova importante.",
    imagem: "ChatGPT Image 30 de set. de 2025, 08_34_53.png",
    audio: "Registra.mp3",
    opcoes: [
      { texto: "Mostrar para a polícia", proximo: -2 },
      { texto: "Rasgar o caderno por medo", proximo: -3 }
    ]
  },
  { 
    texto: "Na delegacia, Ana é acolhida pela Delegada Rosa. Ela entende seus direitos e recebe medidas protetivas.",
    imagem: "ChatGPT Image 26 de set. de 2025, 10_13_04.png",
    audio: "Na delegacia.mp3",
    opcoes: [
      { texto: "Seguir com a denúncia", proximo: -4 },
      { texto: "Desistir da denúncia", proximo: 8 }
    ]
  },
  { 
    texto: "Ana volta para casa, mas o ciclo da violência continua.",
    imagem: "ChatGPT Image 30 de set. de 2025, 10_55_05.png",
    audio: "volta para casa.mp3",
    opcoes: [
      { texto: "Procurar ajuda depois de novo", proximo: 9 },
      { texto: "Se calar para sempre", proximo: -5 }
    ]
  },
  { 
    texto: "Ana tenta sair escondida, mas Eduardo descobre. Ela fica ainda mais machucada.",
    imagem: "ChatGPT Image 26 de set. de 2025, 10_09_23.png",
    audio: "Fuga.mp3",
    opcoes: [
      { texto: "Pedir socorro para vizinhos", proximo: -6 },
      { texto: "Voltar para dentro e aceitar", proximo: -7 }
    ]
  },
  { 
    texto: "Ana volta para casa sem proteção. Eduardo promete mudar, mas a violência retorna.",
    imagem: "ChatGPT Image 26 de set. de 2025, 10_09_23.png",
    audio: "ElevenLabs_2025-09-29T12_52_11_Rachel_pre_sp100_s50_sb75_se0_b_m2.mp3",
    opcoes: [
      { texto: "Voltar à delegacia com provas", proximo: -8 },
      { texto: "Acreditar nele novamente", proximo: -9 }
    ]
  },
  { 
    texto: "Ana liga para o 180. Uma assistente social atende e a orienta.",
    imagem: "ChatGPT Image 1 de out. de 2025, 08_18_57.png",
    audio: "Fim.mp3",
    opcoes: [
      { texto: "Seguir a orientação", proximo: -10 },
      { texto: "Desligar e desistir", proximo: -11 }
    ]
  }
];
 
var capituloAtual = 0;
var textoEl = document.getElementById("texto-digitado");
var imgEl = document.getElementById("imagem-capitulo");
var audioEl = document.getElementById("audio-narracao");
var botoesEl = document.getElementById("opcoes");
 
function carregarCapitulo(index) {
  var capitulo = capitulos[index];
  capituloAtual = index;
  textoEl.innerHTML = "";
  imgEl.style.display = "block";
  audioEl.style.display = "block";
  botoesEl.style.display = "block";
 
  var i = 0;
  var intervalo = setInterval(function() {
    textoEl.innerHTML += capitulo.texto.charAt(i);
    i++;
    if (i >= capitulo.texto.length) clearInterval(intervalo);
  }, 30);
 
  imgEl.src = capitulo.imagem;
  imgEl.alt = "Cena " + (index + 1);
  audioEl.src = capitulo.audio;
  audioEl.play();
 
  botoesEl.innerHTML = "";
  capitulo.opcoes.forEach(function(op) {
    var botao = document.createElement("button");
    botao.innerText = op.texto;
    botao.onclick = function() {
      if (op.proximo < 0) {
        mostrarFinal(op.proximo);
      } else {
        carregarCapitulo(op.proximo);
      }
    };
    botoesEl.appendChild(botao);
  });
}
 
function mostrarFinal(codigo) {
  var finais = {
    "-1": "Final Ruim 1: Aceitar a ameaça e se calar.",
    "-2": "Final Bom 1: Usar o caderno como prova.",
    "-3": "Final Ruim 2: Rasgar o caderno.",
    "-4": "Final Bom 2: Seguir com a denúncia.",
    "-5": "Final Ruim 3: Se calar para sempre.",
    "-6": "Final Bom 3: Pedir socorro aos vizinhos.",
    "-7": "Final Ruim 4: Voltar para dentro e aceitar.",
    "-8": "Final Bom 4: Voltar à delegacia com provas.",
    "-9": "Final Ruim 5: Acreditar que ele vai mudar.",
    "-10": "Final Bom 5: Seguir orientação do 180.",
    "-11": "Final Ruim 6: Desligar o 180 e desistir."
  };
  textoEl.innerHTML = finais[codigo] + "<br><br>Essa história é inspirada na vida real de Maria da Penha e de tantas outras mulheres. Agosto Lilás é o mês de dar voz, acolher e lutar contra a violência.<br><br>📞 Disque 180 - Central de Atendimento à Mulher";
  imgEl.style.display = "none";
  audioEl.pause();
  audioEl.style.display = "none";
  botoesEl.style.display = "none";
}
 
window.onload = function() {
  carregarCapitulo(0);
};
 
function tocarAudio() {
  const audio = document.getElementById('meuAudio');
  audio.play();
}
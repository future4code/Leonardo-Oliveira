//Inicio do jogo -Pergunta ao usuario
//1 - Criar um array de cartas, onde cada carta (elemento do array) é um objeto {text, valor}

function formaOBaralho() {
  const valoresCartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const naipesCartas = ["♦️", "♥️", "♣️", "♠️"];
  const baralho = [];

  for (let i = 0; i < naipesCartas.length; i++) {
    for (let j = 0; j < valoresCartas.length; j++) {
      let valor;
      const texto = naipesCartas[i] + valoresCartas[j];
      if (valoresCartas[j] === "A") {
        valor = 12;
      } else if (
        valoresCartas[j] === "K" ||
        valoresCartas[j] === "J" ||
        valoresCartas[j] === "Q"
      ) {
        valor = 10;
      } else {
        valor = Number(valoresCartas[j]);
      }
      const objetoCarta = { texto, valor };
      baralho.push(objetoCarta);
    }
  }
  return baralho;
}

let respostaUsuarioInico = confirm(
  "Boas vindas ao jogo de Blackjack!\n Quer iniciar o jogo?"
);

while (respostaUsuarioInico) {
  const baralho = formaOBaralho();

  //2 - Criar a função que sorteia a carta, retornando um ojeto do tipo carta: {text, valor}
  function sorteaCarta(baralho) {
    return baralho[Math.floor(Math.random() * baralho.length)];
  }

  const carta01Jogador1 = sorteaCarta(baralho);
  const carta02Jogador1 = sorteaCarta(baralho);

  const carta01Jogador2 = sorteaCarta(baralho);
  const carta02Jogador2 = sorteaCarta(baralho);

  const resultadoJogador01 = carta01Jogador1.valor + carta02Jogador1.valor;
  const resultadoJogador02 = carta01Jogador2.valor + carta02Jogador2.valor;

  //Lógica para mostrar o vencedor ou empate
  if (resultadoJogador01 > resultadoJogador02) {
    console.log(
      `Usuário - cartas: ${carta01Jogador1.texto} ${carta02Jogador1.texto}- pontuação ${resultadoJogador01}\nComputador - cartas: ${carta01Jogador2.texto} ${carta02Jogador2.texto}- pontuação ${resultadoJogador02}\nO Usuário venceu!`
    );
    alert(
      `Usuário - cartas: ${carta01Jogador1.texto} ${carta02Jogador1.texto}- pontuação ${resultadoJogador01}\nComputador - cartas: ${carta01Jogador2.texto} ${carta02Jogador2.texto}- pontuação ${resultadoJogador02}\nO Usuário venceu!`
    );
  } else if (resultadoJogador02 > resultadoJogador01) {
    console.log(
      `Usuário - cartas: ${carta01Jogador1.texto} ${carta02Jogador1.texto}- pontuação ${resultadoJogador01}\nComputador - cartas: ${carta01Jogador2.texto} ${carta02Jogador2.texto}- pontuação ${resultadoJogador02}\nO Computador venceu!`
    );
    alert(
      `Usuário - cartas: ${carta01Jogador1.texto} ${carta02Jogador1.texto}- pontuação ${resultadoJogador01}\nComputador - cartas: ${carta01Jogador2.texto} ${carta02Jogador2.texto}- pontuação ${resultadoJogador02}\nO Computador venceu!`
    );
  } else {
    console.log(
      `Usuário - cartas: ${carta01Jogador1.texto} ${carta02Jogador1.texto}- pontuação ${resultadoJogador01}\nComputador - cartas: ${carta01Jogador2.texto} ${carta02Jogador2.texto}- pontuação ${resultadoJogador02}\nEmpate!`
    );
    alert(
      `Usuário - cartas: ${carta01Jogador1.texto} ${carta02Jogador1.texto}- pontuação ${resultadoJogador01}\nComputador - cartas: ${carta01Jogador2.texto} ${carta02Jogador2.texto}- pontuação ${resultadoJogador02}\nEmpate`
    );
  }

  respostaUsuarioInico = confirm(
    "Boas vindas ao jogo de Blackjack!\n Quer iniciar uma nova rodada?"
  );
}

console.log("O jogo acabou!");
alert("O jogo acabou!");

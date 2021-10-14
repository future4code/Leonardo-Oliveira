// Exercícios de interpretação de código
/**
 * 1.
 *  => O código tem um laço FOR que faz uma soma acumulativa com a variavel valor
 *      até chegar a 4.
 *
 * 2.
 *  a) 19, 21, 23, 25, 27 e 30
 *  b) Com o for...of não temos a possibilidade de utilizar o indice do array, mas
 *     podemos criar uma váriavel auxiliar i = 0 e que somaria a cada iteração
 *     desta forma podemos utilizar o array[i].
 *
 * 3.
 *  => vão ser impressos uma pirâmede de asteriscos, pois para cada iteração WHILE
 *     temos dentro outra FOR que considera a quantidadeTotal + 1, e os asteriscos
 *     também serão concatenados junto das linhas.
 */

// - **Exercícios de escrita de código**

// 1.a
const bichinhosDeEstimacao = Number(
  prompt("Quantos bichinhos de estimação você tem?")
);

if (bichinhosDeEstimacao === 0) {
  console.log("Que pena! Você pode adotar um pet!");
}

//1.b & c
if (bichinhosDeEstimacao > 0) {
  let nomePet = "";
  if (bichinhosDeEstimacao === 1) {
    nomePet = prompt("Digite o nome do seu bichinho: ");
    console.log(`O nome do seu bichinho de estimação é: ${nomePet}`);
  } else {
    let qntdPets = bichinhosDeEstimacao;
    const arrayPets = [];
    while (qntdPets > 0) {
      nomePet = prompt("Digite o nome do seu bichinho: ");
      arrayPets.push(nomePet);
      qntdPets--;
    }
    console.log(`Os seus bichinhos fofos e lindos se chamam ${arrayPets}`);
  }
}

//2.a
const arrayOriginal = [5, -2, 0, 50, 70, 1, 3, 15, 25, 65, 7, 16];

function exibeNumeros(array) {
  for (numero of array) {
    console.log(numero);
  }
}

//2.b

function divideNumeroPor10(array) {
  for (numero of array) {
    console.log(`O número ${numero} dividido por ${10} é: ${numero / 10}`);
  }
}
//2.c
function exibeSomentePares(array) {
  const numerosPares = [];
  for (numero of array) {
    if (numero % 2 === 0 && numero !== 0) {
      numerosPares.push(numero);
    }
  }
  console.log(`Os números pares dentro do array são: ${numerosPares}`);
}

//2.d
function exibeMensagemArray(arrray) {
  const novoArray = [];
  let index = 0;
  for (numero of arrray) {
    novoArray.push(`O elemento do index ${index} é: ${numero}`);
    index++;
  }
  console.log(novoArray);
}

//2.e
function exibeMaiorEMenor(array) {
  let index = 0;
  let maior = array[index]; //6
  let menor = array[index]; // 0

  for (index; index < array.length; index++) {
    if (array[index + 1] > maior) {
      maior = array[index + 1];
    }
    if (array[index + 1] < menor) {
      menor = array[index + 1];
    }
  }

  console.log(`O maior número dentro do array é ${maior} e o menor é ${menor}`);
}

exibeNumeros(arrayOriginal);
divideNumeroPor10(arrayOriginal);
exibeSomentePares(arrayOriginal);
exibeMensagemArray(arrayOriginal);
exibeMaiorEMenor(arrayOriginal);

// Desafio 1 e 2 (Resolvi usando uma função com o if/else)

function jogoDeAdvinharNumero(tipoJogador) {
  console.log("Vamos jogar!");
  let numeroParaSerAdivinhado;

  if (tipoJogador.toLowerCase().trim() === "computador") {
    numeroParaSerAdivinhado = Math.floor(Math.random() * 100);
  } else if (tipoJogador.toLowerCase().trim() === "pessoa") {
    numeroParaSerAdivinhado = Number(
      prompt("Insira um número para o jogador 2 adivinha: ")
    );
  } else {
    return `Entrada inválida`;
  }

  alert(`O numero é: ${numeroParaSerAdivinhado} ;)`);
  let numeroJogador2 = Number(prompt("Tente adivinhar o número do jogador 1"));

  if (numeroParaSerAdivinhado === numeroJogador2) {
    console.log(`Acertou!\n O número de tentaticas foi: ${1}`);
    alert(`Acertou!\n O número de tentaticas foi: ${1}`);
  }

  let numeroTentativas = 0;

  while (numeroParaSerAdivinhado !== numeroJogador2) {
    numeroTentativas++;

    if (numeroParaSerAdivinhado > numeroJogador2) {
      console.log(
        `O número chutado foi: ${numeroJogador2}\nErrrrrrrrou, é maior`
      );
      alert(`O número chutado foi: ${numeroJogador2}\nErrrrrrrrou, é maior`);
    } else if (numeroParaSerAdivinhado < numeroJogador2) {
      console.log(
        `O número chutado foi: ${numeroJogador2}\nErrrrrrrrou, é menor`
      );
      alert(`O número chutado foi: ${numeroJogador2}\nErrrrrrrrou, é menor`);
    }
    numeroJogador2 = Number(prompt("Tente adivinhar o número do jogador 1"));
  }

  if (numeroTentativas === 0) {
    return;
  }
  console.log(`Acertou!\n O número de tentaticas foi: ${numeroTentativas}`);
  alert(`Acertou!\n O número de tentaticas foi: ${numeroTentativas}`);
}

jogoDeAdvinharNumero("Computador");
jogoDeAdvinharNumero("Pessoa");
console.log(jogoDeAdvinharNumero("Pessoasass")); // Entrada inválida

// Se eu tivesse que refazer o código tudo de novo só para ajustar para o computador
// adivinhar ficaria muito grande e seria gasto de tempo, com a função podemos reaproveitar o código
// já existente.

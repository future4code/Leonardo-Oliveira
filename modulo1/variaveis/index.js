let nome;

let idade;

console.log(typeof nome + "\n", typeof idade + "\n");

//R: Os valores das variáveis estão undefined porque nada foi atribuido
// a estas variáveis, ou seja, elas não foram definidas em nenhum momento.

nome = prompt("Olá, tudo bem? Qual é o seu nome?");
idade = prompt("Legal! e a sua idade? Digite sua idade, por favor.");
console.log(typeof nome + "\n", typeof idade + "\n");

//R: Agora os valores das variáveis vão ter algum conteúdo, mesmo que
// o usuário digite nada nos inputs, as variáveis terão algum valor, ou seja,
// serão definidas e terão um tipo.

console.log("Olá " + nome + "," + " você tem " + idade + " anos.");

let pergunta01 = prompt("Você gosta de matemática?");
let pergunta02 = prompt("Você bebeu 2L de água hoje?");
let pergunta03 = prompt("Você gosta de passear ao ar livre?");

console.log("Você gosta de matemática? - " + pergunta01);
console.log("Você bebeu 2L de água hoje?- " + pergunta02);
console.log("Você gosta de passear ao ar livre? - " + pergunta03);

let a = 10;
let b = 25;

// Aqui faremos uma lógica para trocar os valores

let c = a;
a = b;
b = c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10

// DESAFIO

let numero01 = prompt("Informe um numero:");
let numero02 = prompt("Informe outro número:");

console.log(
  "1. O primeiro número somado ao segundo número resulta em: " +
    numero01 +
    numero02
);
console.log(
  "2. O primeiro número multiplicado pelo segundo número resulta em: " +
    numero01 * numero02
);

// R: A soma está incorreta, porque os números digitados pelo usuário na verdade
// são strings para o javascript (a primeira vista), então quando se usa o símbolo de "+"
// o javascript entende que estamos concatenando duas strings (unindo) e não somando dois números
// já na multiplicação, a lingaguem entende que estamos fazendo uma operação matemática e as strings
// devem ser convertidas para numeros e assim feita a operação.

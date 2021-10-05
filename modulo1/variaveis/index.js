// Exercicio 01
let nome;

let idade;

alert(typeof nome + "\n", typeof idade + "\n");

//R: Os valores das variáveis estão undefined porque nada foi atribuido
// a estas variáveis, ou seja, elas não foram definidas em nenhum momento.

nome = prompt("Olá, tudo bem? Qual é o seu nome?");
idade = prompt("Legal! e a sua idade? Digite sua idade, por favor.");
alert(typeof nome + "\n", typeof idade + "\n");

//R: Agora os valores das variáveis vão ter algum conteúdo, mesmo que
// o usuário digite nada nos inputs, as variáveis terão algum valor, ou seja,
// serão definidas e terão um tipo.

alert("Olá " + nome + "," + " você tem " + idade + " anos.");

// Exercicio 02
const pergunta01 = prompt("Você gosta de matemática?");
const pergunta02 = prompt("Você bebeu 2L de água hoje?");
const pergunta03 = prompt("Você gosta de passear ao ar livre?");

alert("Você gosta de matemática? - " + pergunta01);
alert("Você bebeu 2L de água hoje?- " + pergunta02);
alert("Você gosta de passear ao ar livre? - " + pergunta03);

// Exercicio 03
let gaveta01 = 10;
let gaveta02 = 25;

// Aqui faremos uma lógica para trocar os valores

let gavetaAuxiliar = gaveta01;
gaveta01 = gaveta02;
gaveta02 = gavetaAuxiliar;

// Depois de trocados, teremos o seguinte resultado:
alert(`O novo valor de a é ${gaveta01}`); // O novo valor de a é 25
alert(`O novo valor de b é ${gaveta02}`); // O novo valor de b é 10

// + DESAFIO +

let numero01 = prompt("Informe um numero:");
let numero02 = prompt("Informe outro número:");

console.log(
  "1. O primeiro número somado ao segundo número resulta em: " +
    Number(numero01) +
    Number(numero02)
);
console.log(
  "2. O primeiro número multiplicado pelo segundo número resulta em: " +
    numero01 * numero02
);

// R: A soma fica incorreta sem a conversão direta, porque os números digitados pelo usuário na verdade
// são strings para o javascript (a primeira vista), então quando se usa o símbolo de "+"
// o javascript entende que estamos concatenando duas strings (unindo) e não somando dois números
// já na multiplicação, a lingaguem entende que estamos fazendo uma operação matemática e as strings
// devem ser convertidas para numeros e assim feita a operação.

/**
 * function minhaFuncao(variavel) {
	return variavel * 5
  }

  console.log(minhaFuncao(2))
  console.log(minhaFuncao(10))
 * => vai ser impresso: 10 e 50, respecticamente, pois estamos multiplicando
 * 
 * let textoDoUsuario = prompt("Insira um texto");

  const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
  }

  const resposta = outraFuncao(textoDoUsuario)
  console.log(resposta)
 * => a - A função transforma todas as palavras do texto em minusculas e verifica se existe
  a palavra cenouro no texto, caso exista, retorna true
  => b.1 - true
     b.2 - true
     b.3 - false
 */

//Exercicio 01
function breveAutoIntroducao() {
  return "Eu sou o Leo, tenho 24 anos, moro em Santana e sou estudante.";
}

function apresentacaoPessoal(nome, idade, cidade, profissao) {
  retrun`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`;
}

// Exercicio 02
const num1 = Number(prompt("Informe um numero: "));
const num2 = Number(prompt("Informe outro numero: "));

function somar(n1, n2) {
  return n1 + n2;
}

alert(`A soma de ${num1} + ${num2} é = ${somar(num1, num2)}`);
console.log(`A soma de ${num1} + ${num2} é = ${somar(num1, num2)}`);

function verificaMaiorOuIgual(n1, n2) {
  return n1 >= n2;
}

console.log(
  `O numero: ${num1} é maior ou igual a ${num2}: ${verificaMaiorOuIgual(
    num1,
    num2
  )}`
);

const num = Number(prompt("Insira um número aqui: "));

function verificaParOuImpar(num) {
  return num % 2 == 0;
}

console.log(`O numero ${num} é par? ${verificaParOuImpar(num)}`);

const msg = prompt("Insira uma mensagem aqui: ");

function palavraMaisuclaEtamanho(palavra) {
  return `A palavra tem ${
    palavra.replaceAll(" ", "").trim().split("").length
  } letras e em Maiscula fica: ${palavra.toUpperCase()}`;
}

console.log(palavraMaisuclaEtamanho(msg));

const numero01 = Number(prompt("Digite um número"));
const numero02 = Number(prompt("Digite outro número"));

function subtrair(numero01, numero02) {
  return numero01 - numero02;
}

function multiplicar(numero01, numero02) {
  return numero01 * numero02;
}

function dividir(numero01, numero02) {
  return numero01 / numero02;
}

console.log(
  `Numeros inseridos ${numero01} e ${numero02}\n Soma: ${somar(
    numero01,
    numero02
  )}\n Diferença: ${subtrair(
    numero01,
    numero02
  )}\n Multiplicação: ${multiplicar(numero01, numero02)}\n Divisão: ${dividir(
    numero01,
    numero02
  )}`
);

// Desafio 01

const imprimirParametro = (parametro) => {
  console.log(parametro);
};

const parametroUsuario = prompt("Digite qualquer coisa aqui: ");

imprimirParametro(parametroUsuario);

const somaSemRetorno = (par1, par2) => {
  const soma = par1 + par2;
  imprimirParametro(soma);
};

const num01 = Number(prompt("Digite um numero: "));
const num02 = Number(prompt("Digite outro numero: "));

somaSemRetorno(num01, num02);

// Desafio 02

const teoremaPitagoras = (cateto1, cateto2) => {
  const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
  return hipotenusa;
};

const cateto1 = Number(prompt("Informe um lado do triangulo retangilo: "));
const cateto2 = Number(prompt("Informe outro lado do triangulo retangilo: "));

console.log(
  `A hipotenusa do triângulo é: ${teoremaPitagoras(cateto1, cateto2)}`
);

/* let array
console.log('a. ', array)
=> undefined, pois o array não foi definido

array = null
console.log('b. ', array)
=> Será exibido null, pois foi atribuido este valor, mesmo que seja nulo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
=> O length retorna o tamanho do array (quantos elementos existem dentro dele), logo
o tamanho será 11, pois existem 11 elmentos dentro do array.

let i = 0
console.log('d. ', array[i])
=> array[i] retornara a primeira posição do array, que será 3

array[i+1] = 19
console.log('e. ', array)
=> array[i+1] que antes da atribuição era 4, agora passa a ser 19

const valor = array[i+6]
console.log('f. ', valor) 
=> o valor será igual a 9, pois na posição 0 + 6 do array, temos o 9.
*/

// Exercicio 01
const userName = prompt("Digite o seu nome: ");
const userEmail = prompt("Digite o seu email: ");

console.log(
  `O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}!`
);

// Exercicio 02
const favoriteFoods = [
  "Lasanha",
  "Pizza",
  "Bolo-caseiro",
  "Peixe-assado",
  "Açaí",
];

console.log(favoriteFoods);

console.log(
  `Essas são as minhas comidas preferidas: \n${favoriteFoods[0]}\n${favoriteFoods[1]}\n${favoriteFoods[2]}\n${favoriteFoods[3]}\n${favoriteFoods[4]}`
);

const userFavoriteFood = prompt("Qual a sua comida preferida?");

favoriteFoods[1] = userFavoriteFood;

console.log(favoriteFoods);

//Exercicio 03
const listaDeTarefas = [];

const task01 = prompt("Insira a primeira tarefa que você desja realizar: ");
const task02 = prompt("Insira a segunda tarefa que você desja realizar: ");
const task03 = prompt("Insira a terceira tarefa que você desja realizar: ");

listaDeTarefas.push(task01, task02, task03);

console.log(listaDeTarefas);

const removeTask = prompt("Informe a tarefa a ser retirada: 1 , 2 ou 3");

listaDeTarefas.splice(Number(removeTask - 1), 1);

console.log(listaDeTarefas);

// Desafio 01
const phrase = prompt("Digite uma frase aqui: ");

const arrayLetters = phrase.replaceAll(" ", "").trim().split("");

console.log(arrayLetters);

// Desafio 02
const fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

console.log(
  `O indice da palavra Abacaxi no array é: ${fruits.indexOf(
    "Abacaxi"
  )} e o tamanho do array é de:${fruits.length}`
);

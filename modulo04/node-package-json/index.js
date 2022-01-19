/* Responda como comentário no seu código: 
como fazemos para acessar os parâmetros 
passados na linha de comando para o Node?

Resposta: Utilizando o comando npm run <nome_comando> 
*/


/* Crie um programa que receba seu nome e sua idade. 
Após receber estes valores, imprima no console uma mensagem 
que siga a seguinte estrutura: 
"Olá, (Nome)! Você tem (sua idade) anos." */


const person = {
  name: 'Leonardo Oliveira',
  age: 25
}

const msg = `Hi, ${person.name}! You are ${person.age} yeras old.`

console.log(msg);

/* Altere o programa acima para que mostre também a sua idade daqui a sete anos. */

const msg7yearsAhead = `${msg} In seven years you will be ${person.age + 7}`;

console.log(msg7yearsAhead);


// Exercicio 02


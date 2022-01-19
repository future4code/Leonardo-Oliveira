/* Responda como comentário no seu código: 
como fazemos para acessar os parâmetros 
passados na linha de comando para o Node?

Resposta: Utilizando o comando npm run <nome_comando> 
*/

import { Msg } from "./exercicio01/exercicio01.js";
import { Msg7yearsAhead, CheckMathOperation as CheckMathOperation2 } from "./exercicio02/exercicio02.js";
import Tasks from "./exercicio03/exercicio03.js";


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

function CheckMathOperation(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid math operation!";
  }
}


const result = CheckMathOperation("*", 5, 20);

console.log(result);

// Exercicio 03

const tasks = [];

function AddTask(task, arrTasks) {
  arrTasks.push(task);
}


AddTask("Make breakfast!", tasks);
AddTask("Study programming", tasks);
AddTask("Workout 8:30 at morning", tasks);
AddTask("Read some pages of a book", tasks);

console.log(tasks);

// Exercicio 04

console.log(Msg);
console.log(Msg7yearsAhead);
console.log(CheckMathOperation2("+", 20, 6));
console.log(Tasks);
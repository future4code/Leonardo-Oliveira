import { Msg, person } from '../exercicio01/exercicio01.js';

export const Msg7yearsAhead = `${Msg} In seven years you will be ${person.age + 7}`;


export function CheckMathOperation(operation, value1, value2) {
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


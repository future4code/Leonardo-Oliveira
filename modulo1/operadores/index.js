// Exercicio 01
const minhaIdade = Number(prompt("Insira sua idade: "));
const melhorAmigoIdade = Number(prompt("Insira a idade do seu melhor amigo: "));

console.log(minhaIdade);
console.log(
  "Sua idade é maior que a do seu melhor amigo? " + minhaIdade >
    melhorAmigoIdade
);

console.log(
  "A diferença de idade entre vocês é de:",
  melhorAmigoIdade - minhaIdade,
  "anos de idade"
);

// Exercicio 02

const numeroPar = parseInt(prompt("Insira um número par: "));

console.log(
  `O resto da divisão do número ${numeroPar} por 2 é ${numeroPar % 2}`
);

// Quando dividimos um número par por dois sempre o resto da divisão será 0
// pois, como sabemos na matemática, quando dividimos um número e não sobra nada
// para a divisão restante, o resto dessa divisão é zero. Já para números impares, não conseguimos
// dividir de forma exata na primeira vez e por isso existe um resto 1.

// Exercicio 03

const idade = parseInt(prompt("Digite uma idade: "));

console.log(`Sua idade em meses é ${idade * 12}`);
console.log(`Sua idade em dias é aproximadamente: ${idade * 365}`);
console.log(`Sua idade em horas é aproximadamente: ${idade * (365 * 24)}`);

// Exercicio 04

const numero01 = Number(prompt("Digite um número: "));
const numero02 = Number(prompt("Digite outro número: "));

console.log("O primeiro numero é maior que segundo? " + (numero01 > numero02));
console.log("O primeiro numero é igual ao segundo? " + (numero01 === numero02));
console.log(
  "O primeiro numero é divisível pelo segundo? " + (numero01 % numero02 === 0)
);
console.log(
  "O segundo numero é divisível pelo primeiro? " + (numero02 % numero01 === 0)
);

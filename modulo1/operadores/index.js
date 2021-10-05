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

// Desafio 01

const grausEmKelvin = (77 - 32) * (5 / 9) + 273.15;
const grausEmF = 80 * (9 / 5) + 32;
const grausEmK2 = 30 + 273;
const grausEmF2 = 30 * (9 / 5) + 32;

console.log(`O resultado de 77ºF para Kelvin é ${grausEmKelvin}`);
console.log(`O resultado de 80ºC para Fahrenheit é ${grausEmF}`);
console.log(
  `O resultado de 30ºC para Fahrenheit e Kelvin, respectivamente é: ${grausEmF2} e ${grausEmK2}`
);

const grausEmCelcius = Number(prompt("Insira a temperatura em Celsius: "));

const grausEmK3 = grausEmCelcius + 273;
const grausEmF3 = grausEmCelcius * (9 / 5) + 32;

alert(
  `O resultado de ${grausEmCelcius}ºC para Fahrenheit e Kelvin, respectivamente é: ${grausEmF3} e ${grausEmK3}`
);

// Desafio 02
const valorASerPago = 0.05 * 280;

console.log(
  `Uma residência que consuma 280 quilowatt/hora deve pagar ao fim do mês:${valorASerPago}`
);

console.log(
  `Com o desconto aplicado de 15% ao valor anterior temos: ${
    valorASerPago - valorASerPago / 0.15
  }`
);

// Desafio 03
console.log(`20lb equivalem a ${20 * 0.45359237}kg`);
console.log(`10.5oz equivalem a ${10.5 * 0.02835}kg`);
console.log(`100mi equivalem a ${100 * 1609.34}m`);
console.log(`50ft equivalem a ${50 / 3.2808}m`);
console.log(`103.56gal equivalem a ${103.56 * 3.785411784}l`);
console.log(`450xic equivalem a ${450 * 0.24}l`);

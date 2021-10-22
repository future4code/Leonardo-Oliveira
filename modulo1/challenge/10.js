const ordenaArrayOrdemAlpha = (arrayDePalavras) => {
  const arrayOrdenado = arrayDePalavras.sort();

  return arrayOrdenado;
};

const nomesLugaresBr = [
  "Rio de Janeiro",
  "Copacabana",
  "Alter do chão",
  "Fortaleza de São José",
  "Miradouro",
];

console.log(ordenaArrayOrdemAlpha(nomesLugaresBr));

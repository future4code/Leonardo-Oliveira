const idadeUsuario = Number(prompt("Informe sua idade:"));

if (idadeUsuario >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}

const periodoDoDia = prompt(
  "Em que turno você estuda?  M (Matutino) ou V (Vespertino) ou N (Noturno)"
);

if (periodoDoDia.toLocaleLowerCase() === "matutino") {
  console.log("Bom Dia!");
} else if (periodoDoDia.toLocaleLowerCase() === "vespertino") {
  console.log("Boa Tarde!");
} else if (periodoDoDia.toLocaleLowerCase() === "noturno") {
  console.log("Boa Noite!");
} else {
  console.log("Entrada não válida!");
}

switch (periodoDoDia.toLocaleUpperCase()) {
  case "matutino":
    console.log("Bom Dia!");
    break;
  case "vespertino":
    console.log("Boa Tarde!");
    break;
  case "noturno":
    console.log("Boa Noite!");
    break;
  default:
    console.log("Entrada não válida!");
}

const generoFilme = prompt("Qual o gênero do filme? ");
const precoFilme = Number(prompt("Qual o preco do filme? "));
const lanchinho = prompt(
  "Qual lanche você quer? pipoca, chocolate, doces ou refrigerante"
);

if (generoFilme.toLocaleLowerCase() === "fantasia" && precoFilme < 15) {
  console.log(`Bom filme!\nAproveite o seu ${lanchinho}`);
} else {
  console.log("Escolha outro filme :(");
}

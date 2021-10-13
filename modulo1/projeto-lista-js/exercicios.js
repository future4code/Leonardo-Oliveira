// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Informe a altura do triângulo: "));
  const largura = Number(prompt("Informe a largura do triângulo: "));
  console.log(largura * altura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Informe o ano atual, por favor: "));
  const anoDeNasc = Number(prompt("Informe seu ano de nascimento :)"));
  console.log(anoAtual - anoDeNasc);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / altura ** 2;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Informe seu nome: ");
  const idade = Number(prompt("Informe sua idade: "));
  const email = prompt("Informe o seu email");

  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Informe sua 1ª cor favorita: ");
  const cor2 = prompt("Informe sua 2ª cor favorita: ");
  const cor3 = prompt("Informe sua 3ª cor favorita");

  const arrayCores = [];

  arrayCores.push(cor1, cor2, cor3);
  console.log(arrayCores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressos = custo / valorIngresso;
  return ingressos;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length >= string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const indiceUltimoElemento = array.length - 1;
  const primeiroElemento = array[0];
  const ultimoElemento = array[indiceUltimoElemento];

  array[0] = ultimoElemento;
  array[indiceUltimoElemento] = primeiroElemento;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual: "));
  const anoDeNasc = Number(prompt("Digite o seu ano de nascimento: "));
  const anoEmissaoRG = Number(
    prompt("Digite o ano que foi emitido a certeira RG:")
  );

  const result1 = anoAtual - anoDeNasc <= 20 && anoAtual - anoEmissaoRG >= 5;
  const result2 =
    anoAtual - anoDeNasc > 20 &&
    anoAtual - anoDeNasc <= 50 &&
    anoAtual - anoEmissaoRG >= 10;
  const result3 = anoAtual - anoDeNasc > 50 && anoAtual - anoEmissaoRG >= 15;

  console.log(result1 || result2 || result3);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoMultiplos400 = ano % 400 === 0;
  const anoMultiplosDe4 = ano % 4 === 0;
  const anoExceto100e4 = ano % 100 !== 0;

  return anoMultiplos400 || (anoMultiplosDe4 && anoExceto100e4);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const temMaisDe18 = prompt("Você tem mais de 18 anos? [sim] ou [não]");
  const enisnoMedioCompleto = prompt(
    "Você tem o ensino médio completo? [sim] ou [não]"
  );
  const disponibilidadeExclusiva = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso? [sim] ou [não]"
  );

  console.log(
    temMaisDe18 === "sim" &&
      enisnoMedioCompleto === "sim" &&
      disponibilidadeExclusiva === "sim"
  );
}

checaValidadeInscricaoLabenu();

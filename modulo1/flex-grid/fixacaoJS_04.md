function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contadorOcorrencias = 0;
  for (numero of arrayDeNumeros) {
    if (numero === numeroEscolhido) {
      contadorOcorrencias++;
    }
  }
  if (contadorOcorrencias === 0) {
    return `Número não encontrado`;
  }
  return `O número ${numeroEscolhido} aparece ${contadorOcorrencias}x`;
}

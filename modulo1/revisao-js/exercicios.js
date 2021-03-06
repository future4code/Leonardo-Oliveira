// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numerosPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const paresElevadoAoQuad = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      paresElevadoAoQuad.push(array[i] * array[i]);
    }
  }
  return paresElevadoAoQuad;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let i = 0;
  let maiorNum = array[0];
  while (i < array.length) {
    if (array[i + 1] !== undefined) {
      if (array[i + 1] > maiorNum) {
        maiorNum = array[i + 1];
      }
    }
    i++;
  }

  return maiorNum;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNum;
  let menorNum;
  let maiorDivisivelPorMenor;
  if (num1 > num2) {
    maiorNum = num1;
    menorNum = num2;
  } else if (num1 < num2) {
    maiorNum = num2;
    menorNum = num1;
  } else {
    maiorNum = num1 || num2;
    menorNum = num1 || num2;
  }

  if (maiorNum % menorNum === 0) {
    maiorDivisivelPorMenor = true;
  } else {
    maiorDivisivelPorMenor = false;
  }

  let diferenca = maiorNum - menorNum;

  return { maiorNumero: maiorNum, maiorDivisivelPorMenor, diferenca };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const arrayPrimeirosPares = [];
  let qndNumPares = 0;
  let numeroCorrente = 0;

  while (qndNumPares !== Number(n)) {
    if (numeroCorrente % 2 === 0) {
      arrayPrimeirosPares.push(numeroCorrente);
      qndNumPares++;
    }
    numeroCorrente++;
  }

  return arrayPrimeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  const equilatero = ladoA === ladoB && ladoA === ladoC && ladoB === ladoC;
  const isolecels = ladoA === ladoB || ladoA === ladoC || ladoB === ladoC;
  const escaleno = ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC;

  if (equilatero) {
    return "Equilátero";
  } else if (isolecels) {
    return "Isósceles";
  } else if (escaleno) {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function retornaArrayMaiorEMenor(array) {
    let i = 0;
    let maiorNum = array[0];
    let menorNum = array[0];

    if (array.length === 2 && array[i] !== array[i + 1]) {
      if (array[i] > array[i + 1]) {
        maiorNum = array[i];
        menorNum = array[i + 1];
      } else {
        maiorNum = array[i + 1];
        menorNum = array[i];
      }
    }

    while (i < array.length) {
      if (array[i + 1] !== undefined) {
        if (array[i + 1] > maiorNum) {
          maiorNum = array[i + 1];
        }
        if (array[i + 1] < menorNum) {
          menorNum = array[i + 1];
        }
      }
      i++;
    }
    return { array, maiorNum, menorNum };
  }

  const infoPrimeiroMaiorEMenor = retornaArrayMaiorEMenor(array);

  const primeiroMaiorNum = infoPrimeiroMaiorEMenor.maiorNum;
  const primeiroMenorNum = infoPrimeiroMaiorEMenor.menorNum;
  const primeiroArray = infoPrimeiroMaiorEMenor.array;

  console.log(primeiroArray);

  if (primeiroArray.length === 2) {
    if (infoPrimeiroMaiorEMenor.maiorNum === infoPrimeiroMaiorEMenor.menorNum) {
      return [
        infoPrimeiroMaiorEMenor.maiorNum,
        infoPrimeiroMaiorEMenor.menorNum,
      ];
    }
  } else {
    return [infoPrimeiroMaiorEMenor.maiorNum, infoPrimeiroMaiorEMenor.menorNum];
  }

  primeiroArray.splice(primeiroArray.indexOf(primeiroMaiorNum));
  primeiroArray.splice(primeiroArray.indexOf(primeiroMenorNum));

  const infoSegundoMaiorEMenor = retornaArrayMaiorEMenor(primeiroArray);

  return [infoSegundoMaiorEMenor.maiorNum, infoSegundoMaiorEMenor.menorNum];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}

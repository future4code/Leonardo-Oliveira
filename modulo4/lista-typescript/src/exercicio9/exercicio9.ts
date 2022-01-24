function fatorial (numero : number) {
  let num = 1;
  
  for (let i = numero; i > 1; i--) {
  
  num *= i;
  }
  return num;
  }


export const CalculaFatorial = (palavra: string): number => {
  return fatorial(palavra.length)
  }
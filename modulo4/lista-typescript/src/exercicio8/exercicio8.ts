export const VerificaCarteiraRenovacao = (dataNasc: string, dataEmissao: string): boolean => {
  const anoNasc: number = Number(dataNasc.split('/')[2]);
  const anoEmissao: number = Number(dataEmissao.split('/')[2]);
  const anoAtual:number = new Date().getFullYear(); 
  const difeEmissAtual = anoAtual - anoEmissao;
  const idade = anoAtual - anoNasc;

  if((idade < 20 || idade === 20) && difeEmissAtual>= 5  ){
    return true;
  }
  else if((idade > 20 && idade <= 50) && difeEmissAtual >= 10){
    return true;
  }
  else if (idade > 50 && difeEmissAtual < 15 ){
    return true;
  } 
  else {
    return false;
  }
}
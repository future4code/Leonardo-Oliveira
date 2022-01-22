function ExibeMensagemFormatada(nome: string, dataNasc: string): string{
  const arrString: string[] = dataNasc.split("/");

  return `Olá me chama ${nome}, nasci no dia ${arrString[0]} do mês ${arrString[1]} do ano ${arrString[2]}`
}


export default ExibeMensagemFormatada;
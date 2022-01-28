type Filme = {
  nome: string;
  anoLancamento: number;
  genero: string;
  pontuacao?: number | undefined;
}

export enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

export const ExibeFilme = (nome: string, anoLancamento:number, genero: GENERO, pontuacao?:number):Filme => {
  const objetoFilme: Filme = {nome, anoLancamento, genero, pontuacao };
  if(pontuacao){
    return objetoFilme;
  }
  delete objetoFilme.pontuacao;
  return objetoFilme;
}


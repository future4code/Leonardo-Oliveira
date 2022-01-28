type Colaborador = {
  nome: string;
  salario: number;
  setor: string;
  presencial: boolean;
}

export const colaboradores: Colaborador[] = [
	{ nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
];

export enum SETOR {
  MARKETING="marketing",
  VENDAS="vendas",
  FINANCEIRO="financeiro",
}

export const ExibeColaboradorSetor = (pessoasColaboradoras : Colaborador[], setor : SETOR) : Colaborador[] | Colaborador=>{
  const colaboradoresSetor = pessoasColaboradoras.filter((pessoaColaboradora: Colaborador) => {
    return pessoaColaboradora.setor === setor;
  })
  return colaboradoresSetor;
}
// filme.elenco[0] => "Matheus Nachtergaele"
// filme.elenco[filme.elenco.length - 1] => "Virginia Cavendish"
// filme.transmissoesHoje[2] => {canal: "Globo", horario: "14h"}

/* cachorro => {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
} 

gato => {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
} 

tartatura => {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}

=> a sintaxe "..." spread em objetos, copia tudo que está em um objeto para dentro de outro
    sobrescrevendo os mesmos atributos atuais pelo objeto está sendo "colado"dentro de outro, além
    de "colar" outros atributos não existentes no objeto atual. 
    (porém só é sobrescrito se o objeto com spread for declarado depois que já foi declarado no objeto)



minhaFuncao(pessoa, "backender") => false
minhaFuncao(pessoa, "altura") => undefined

No primeiro caso, a função acessa o objeto utilizando seu valor que existe dentro do objeto, retornando false.
No seguindo caso, a função faz a mesma coisa, porém a chave "altura" não existe dentro do objeto, consequentemente
seu valor também não, ou seja, undefined.

*/

//Exercicio 01
const saudacaoPessoa = (pessoa) => {
  return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`;
};

const pessoa1 = {
  nome: "Leonardo Oliveira",
  apelidos: ["Leo", "Leozinho", "Leloca"],
};

console.log(saudacaoPessoa(pessoa1));

const pessoa02 = {
  ...pessoa1,
  nome: "André Hoest",
  apelidos: ["Andrezinho", "Elio", "Honey"],
};

console.log(saudacaoPessoa(pessoa02));

// Exercicio 02
const objetoPessoa1 = {
  nome: "Leonardo Oliveira",
  idade: 24,
  profissao: "Software Enginner",
};
const objetoPessoa2 = {
  nome: "André Hoest",
  idade: 34,
  profissao: "Porter",
};

const retornaArrayInfo = (pessoa) => {
  const infoPessoa = [];

  infoPessoa.push(
    pessoa.nome,
    pessoa.nome.length,
    pessoa.idade,
    pessoa.profissao,
    pessoa.profissao.length
  );

  return infoPessoa;
};

console.log(retornaArrayInfo(objetoPessoa1));

//Exercicio 03
let carrinho = [];
const sacolao1 = { nome: "Uva", disponibilidade: true };
const sacolao2 = { nome: "Açaí", disponibilidade: false };
const sacolao3 = { nome: "Cupuaçu", disponibilidade: true };

function insereCarrinho(sacolao) {
  carrinho.push(sacolao);
}

insereCarrinho(sacolao1);
insereCarrinho(sacolao2);
insereCarrinho(sacolao3);

console.log(carrinho);

// Desafios
const imprimeObjeto = () => {
  const nome = prompt("Qual é o seu nome?");
  const idade = prompt("Qual é a sua idade?");
  const profissao = prompt("Qual é a sua profissao?");
  const objetoPessoa = { nome, idade, profissao };

  console.log(objetoPessoa, typeof objetoPessoa);
};

const mensagemFilme = (filme1, filme2) => {
  const anoDeLancamentoF01MaiorF02 =
    filme1.anoDeLancamento < filme2.anoDeLancamento;

  const anoDeLancamentoMesmoAno =
    filme1.anoDeLancamento === filme2.anoDeLancamento;

  reutrn`O primeiro filme foi lançado antes do segundo? ${anoDeLancamentoF01MaiorF02}
          O primeiro filme foi lançado no mesmo ano do segundo? ${anoDeLancamentoMesmoAno}`;
};

function inverterDisponibilidade(sacolao) {
  return {
    ...sacolao,
    disponibilidade: !sacolao.disponibilidade,
  };
}

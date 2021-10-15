// Exercícios de interpretação de código

/**
 * 1) a. Será impresso o item do array em cada posição que nesse caso será um
 *       objeto com dois atributos (nome e apelido) além do indice correspondente e o array em si.
 *
 *
 *
 *
 *
 *
 * 2) a. Será impresso um array com todos os nomes da pessoas do array somente.
 *
 *
 *
 *
 *
 * 3) a. Vai ser impresso um array com todos os elementos, exceto de quem tiver o apelido Chijo.
 */

// Exercícios de escrita de código

// 1
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const somenteNomesDoguinhos = pets.map((pet) => pet.nome);

console.log(somenteNomesDoguinhos);

const somenteDoguinhosSalsinha = pets.filter((pet) => pet.raca === "Salsicha");

console.log(somenteDoguinhosSalsinha);

const mensagemParaPoddlesFofos = pets
  .filter((pet) => pet.raca === "Poodle")
  .map(
    (poddle) =>
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${poddle.nome}!`
  );

console.log(mensagemParaPoddlesFofos);

// 2
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

const somenteNomesItens = produtos.map((produto) => produto.nome);

console.log(somenteNomesItens);

const produtos5PorcentoDesconto = produtos.map((produto) => {
  return {
    nome: produto.nome,
    preco: Number((produto.preco - produto.preco * 0.05).toFixed(2)),
  };
});

console.log(produtos5PorcentoDesconto);

const somenteBebidas = produtos.filter(
  (produto) => produto.categoria === "Bebidas"
);

console.log(somenteBebidas);

const somenteProdutosYpe = produtos.filter((produto) =>
  produto.nome.includes("Ypê")
);

console.log(somenteProdutosYpe);

const mensagemYpe = somenteProdutosYpe.map(
  (produtoYpe) => `Compre ${produtoYpe.nome} por R$${produtoYpe.preco}`
);

console.log(mensagemYpe);

// Desafios
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

const pokemonsAlfabetica = pokemons
  .map((pokemon) => pokemon.nome)
  .sort((stringA, stringB) => {
    const stringALowerCase = stringA.toLowerCase();
    const stringBLowerCase = stringB.toLowerCase();

    if (stringALowerCase < stringBLowerCase) {
      return -1;
    }
    if (stringALowerCase > stringBLowerCase) {
      return 1;
    }
    return 0;
  });

console.log(pokemonsAlfabetica);

const somentePokemonsTipos = pokemons.map((pokemon) => pokemon.tipo);
const tiposUnicos = somentePokemonsTipos.filter(
  (tipo, index) => somentePokemonsTipos.indexOf(tipo) === index
);

console.log(tiposUnicos);

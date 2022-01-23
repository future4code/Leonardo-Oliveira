import ExibeMensagemFormatada from "./exercicio1/exercicio1";
import ExibeTipo from "./exercicio2/exercicio2";
import { ExibeFilme, GENERO } from "./exercicio3/exercicio3";
import { colaboradores, ExibeColaboradorSetor, SETOR } from "./exercicio4/exercicio4";
import { ExibeUsuarioRole, usuarios } from "./exercicio5/exercicio5";
import { clientes, ExibeClientesNegativo } from "./exercicio6/exercicio6";
import { produtos, TransformaValorProduto } from "./exercicio7/exercicio7";


console.log(ExibeMensagemFormatada("Leonardo", "15/10/1996"));

console.log(ExibeTipo(5));


console.log(ExibeFilme("The shining", 1980, GENERO.TERROR));
console.log(ExibeFilme("The shining", 1980, GENERO.TERROR, 66));

console.log(ExibeColaboradorSetor(colaboradores, SETOR.MARKETING));

console.log(ExibeUsuarioRole(usuarios, "admin"));

console.log(ExibeClientesNegativo(clientes));

console.log(TransformaValorProduto(produtos));
import ExibeMensagemFormatada from "./exercicio1/exercicio1";
import ExibeTipo from "./exercicio2/exercicio2";
import { ExibeFilme, GENERO } from "./exercicio3/exercicio3";
import { colaboradores, ExibeColaboradorSetor, SETOR } from "./exercicio4/exercicio4";
import { ExibeUsuarioRole, usuarios } from "./exercicio5/exercicio5";
import { clientes, ExibeClientesNegativo } from "./exercicio6/exercicio6";
import { produtos, TransformaValorProduto } from "./exercicio7/exercicio7";
import { VerificaCarteiraRenovacao } from "./exercicio8/exercicio8";

// 01
console.log(ExibeMensagemFormatada("Leonardo", "15/10/1996"));

// 02
console.log(ExibeTipo(5));

// 03
console.log(ExibeFilme("The shining", 1980, GENERO.TERROR));
console.log(ExibeFilme("The shining", 1980, GENERO.TERROR, 66));

// 04
console.log(ExibeColaboradorSetor(colaboradores, SETOR.MARKETING));

// 05
console.log(ExibeUsuarioRole(usuarios, "admin"));

// 06
console.log(ExibeClientesNegativo(clientes));

// 07
console.log(TransformaValorProduto(produtos));

// 08
console.log(VerificaCarteiraRenovacao("15/10/1996", "04/08/2018"));
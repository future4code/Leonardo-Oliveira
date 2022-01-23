import ExibeMensagemFormatada from "./exercicio1/exercicio1";
import ExibeTipo from "./exercicio2/exercicio2";
import { ExibeFilme, GENERO } from "./exercicio3/exercicio3";
import { colaboradores, ExibeColaboradorSetor, SETOR } from "./exercicio4/exercicio4";


console.log(ExibeMensagemFormatada("Leonardo", "15/10/1996"));

console.log(ExibeTipo(5));


console.log(ExibeFilme("The shining", 1980, GENERO.TERROR));

console.log(ExibeFilme("The shining", 1980, GENERO.TERROR, 66));

console.log(ExibeColaboradorSetor(colaboradores, SETOR.MARKETING));
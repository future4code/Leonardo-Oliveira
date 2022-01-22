"use strict";
exports.__esModule = true;
function ExibeMensagemFormatada(nome, dataNasc) {
    var arrString = dataNasc.split("/");
    return "Ol\u00E1 me chama ".concat(nome, ", nasci no dia ").concat(arrString[0], " do m\u00EAs ").concat(arrString[1], " do ano ").concat(arrString[2]);
}
exports["default"] = ExibeMensagemFormatada;

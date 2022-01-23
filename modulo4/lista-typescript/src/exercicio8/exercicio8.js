"use strict";
exports.__esModule = true;
exports.VerificaCarteiraRenovacao = void 0;
var VerificaCarteiraRenovacao = function (dataNasc, dataEmissao) {
    var anoNasc = Number(dataNasc.split('/')[2]);
    var anoEmissao = Number(dataEmissao.split('/')[2]);
    var anoAtual = new Date().getFullYear();
    var difeEmissAtual = anoAtual - anoEmissao;
    var idade = anoAtual - anoNasc;
    if ((idade < 20 || idade === 20) && difeEmissAtual >= 5) {
        return true;
    }
    else if ((idade > 20 && idade <= 50) && difeEmissAtual >= 10) {
        return true;
    }
    else if (idade > 50 && difeEmissAtual < 15) {
        return true;
    }
    else {
        return false;
    }
};
exports.VerificaCarteiraRenovacao = VerificaCarteiraRenovacao;

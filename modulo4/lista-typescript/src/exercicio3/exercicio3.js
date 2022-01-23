"use strict";
exports.__esModule = true;
exports.ExibeFilme = exports.GENERO = void 0;
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO = exports.GENERO || (exports.GENERO = {}));
var ExibeFilme = function (nome, anoLancamento, genero, pontuacao) {
    var objetoFilme = { nome: nome, anoLancamento: anoLancamento, genero: genero, pontuacao: pontuacao };
    if (pontuacao) {
        return objetoFilme;
    }
    delete objetoFilme.pontuacao;
    return objetoFilme;
};
exports.ExibeFilme = ExibeFilme;

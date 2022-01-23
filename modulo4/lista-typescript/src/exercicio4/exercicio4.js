"use strict";
exports.__esModule = true;
exports.ExibeColaboradorSetor = exports.SETOR = exports.colaboradores = void 0;
exports.colaboradores = [
    { nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
    { nome: "Maria", salario: 1500, setor: "vendas", presencial: false },
    { nome: "Salete", salario: 2200, setor: "financeiro", presencial: true },
    { nome: "João", salario: 2800, setor: "marketing", presencial: false },
    { nome: "Josué", salario: 5500, setor: "financeiro", presencial: true },
    { nome: "Natalia", salario: 4700, setor: "vendas", presencial: true },
    { nome: "Paola", salario: 3500, setor: "marketing", presencial: true }
];
var SETOR;
(function (SETOR) {
    SETOR["MARKETING"] = "marketing";
    SETOR["VENDAS"] = "vendas";
    SETOR["FINANCEIRO"] = "financeiro";
})(SETOR = exports.SETOR || (exports.SETOR = {}));
var ExibeColaboradorSetor = function (pessoasColaboradoras, setor) {
    var colaboradoresSetor = pessoasColaboradoras.filter(function (pessoaColaboradora) {
        return pessoaColaboradora.setor === setor;
    });
    return colaboradoresSetor;
};
exports.ExibeColaboradorSetor = ExibeColaboradorSetor;

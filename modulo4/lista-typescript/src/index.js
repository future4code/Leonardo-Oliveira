"use strict";
exports.__esModule = true;
var exercicio1_1 = require("./exercicio1/exercicio1");
var exercicio2_1 = require("./exercicio2/exercicio2");
var exercicio3_1 = require("./exercicio3/exercicio3");
var exercicio4_1 = require("./exercicio4/exercicio4");
var exercicio5_1 = require("./exercicio5/exercicio5");
var exercicio6_1 = require("./exercicio6/exercicio6");
var exercicio7_1 = require("./exercicio7/exercicio7");
var exercicio8_1 = require("./exercicio8/exercicio8");
// 01
console.log((0, exercicio1_1["default"])("Leonardo", "15/10/1996"));
// 02
console.log((0, exercicio2_1["default"])(5));
// 03
console.log((0, exercicio3_1.ExibeFilme)("The shining", 1980, exercicio3_1.GENERO.TERROR));
console.log((0, exercicio3_1.ExibeFilme)("The shining", 1980, exercicio3_1.GENERO.TERROR, 66));
// 04
console.log((0, exercicio4_1.ExibeColaboradorSetor)(exercicio4_1.colaboradores, exercicio4_1.SETOR.MARKETING));
// 05
console.log((0, exercicio5_1.ExibeUsuarioRole)(exercicio5_1.usuarios, "admin"));
// 06
console.log((0, exercicio6_1.ExibeClientesNegativo)(exercicio6_1.clientes));
// 07
console.log((0, exercicio7_1.TransformaValorProduto)(exercicio7_1.produtos));
// 08
console.log((0, exercicio8_1.VerificaCarteiraRenovacao)("15/10/1996", "04/08/2018"));

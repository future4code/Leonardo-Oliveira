"use strict";
exports.__esModule = true;
var exercicio1_1 = require("./exercicio1/exercicio1");
var exercicio2_1 = require("./exercicio2/exercicio2");
var exercicio3_1 = require("./exercicio3/exercicio3");
console.log((0, exercicio1_1["default"])("Leonardo", "15/10/1996"));
console.log((0, exercicio2_1["default"])(5));
console.log((0, exercicio3_1.ExibeFilme)("The shining", 1980, exercicio3_1.GENERO.TERROR));
console.log((0, exercicio3_1.ExibeFilme)("The shining", 1980, exercicio3_1.GENERO.TERROR, 66));

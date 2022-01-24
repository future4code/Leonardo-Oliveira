"use strict";
exports.__esModule = true;
exports.CalculaFatorial = void 0;
function fatorial(numero) {
    var num = 1;
    for (var i = numero; i > 1; i--) {
        num *= i;
    }
    return num;
}
var CalculaFatorial = function (palavra) {
    return fatorial(palavra.length);
};
exports.CalculaFatorial = CalculaFatorial;

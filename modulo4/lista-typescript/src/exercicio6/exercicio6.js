"use strict";
exports.__esModule = true;
exports.ExibeClientesNegativo = exports.clientes = void 0;
exports.clientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
var ExibeClientesNegativo = function (arrClientes) {
    var clientesNegativos = arrClientes.filter(function (cliente) {
        var debitosTotal = cliente.debitos.reduce(function (prevsValue, currentValue) {
            return prevsValue + currentValue;
        }, 0);
        var result = cliente.saldoTotal - debitosTotal;
        return result < 0;
    });
    return clientesNegativos;
};
exports.ExibeClientesNegativo = ExibeClientesNegativo;

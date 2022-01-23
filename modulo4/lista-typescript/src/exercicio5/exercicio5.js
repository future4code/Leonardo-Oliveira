"use strict";
exports.__esModule = true;
exports.ExibeUsuarioRole = exports.usuarios = void 0;
exports.usuarios = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" },
];
var ExibeUsuarioRole = function (arrUsuarios, role) {
    var usuariosRole = arrUsuarios.filter(function (usuario) {
        return usuario.role === role;
    });
    return usuariosRole;
};
exports.ExibeUsuarioRole = ExibeUsuarioRole;

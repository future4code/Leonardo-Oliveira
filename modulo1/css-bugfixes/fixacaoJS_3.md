function calculaNota(ex, p1, p2) {
// Escreva seu código aqui
let resultado;
resultado = (ex _ 1 + p1 _ 2 + p2 \* 3 )/6;
if(resultado >= 9){
return 'A'
}
else if(resultado < 9 && resultado >= 7.5){
return 'B'
} else if(resultado < 7.5 && resultado >= 6){
return 'C'
}
else {
return 'D'
}
}

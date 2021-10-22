function calculaPrecoTotal(quantidade) {
// Escreva seu código aqui
let precoFinal;
if(quantidade < 12 && quantidade > 0){
precoFinal = quantidade _ 1.30;
}
else {
precoFinal = quantidade _ 1.00;
}
return precoFinal;
}

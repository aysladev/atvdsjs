var fatorial;
fatorial = parseFloat(prompt('Digite um número:'));
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
alert(resultado);
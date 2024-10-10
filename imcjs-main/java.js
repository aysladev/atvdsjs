function calcimc(peso, altura) {
    var imc = peso / (altura * altura);  
    return imc;
}
var peso = parseFloat(prompt("Digite seu peso:"));
var altura = parseFloat(prompt("Digite sua altura, separado por ponto:"));
var imc = calcimc(peso, altura);
alert(`O seu IMC é: ${imc.toFixed(2)}`);

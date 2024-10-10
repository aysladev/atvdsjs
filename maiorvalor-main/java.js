
function encontrarMaior(a, b, c) {
    return Math.max(a, b, c); 
}
var v1 = parseFloat(prompt("Digite o primeiro valor:"));
var v2 = parseFloat(prompt("Digite o segundo valor:"));
var v3 = parseFloat(prompt("Digite o terceiro valor:"));
var maiorValor = encontrarMaior(v1, v2, v3);
alert(`O maior valor é: ${maiorValor}`);
//chatgpt corrigiu e eu aderi ao math.max
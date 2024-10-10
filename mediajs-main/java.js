function calc(nota1, nota2, nota3) {
    // Calcula a média
    var media = (nota1 + nota2 + nota3) / 3;  
    return media;
}

// Leitura dos valores do usuário e conversão para números
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calcula a média
var media = calc(nota1, nota2, nota3);

// Exibe o resultado
alert(`A média das notas é: ${media.toFixed(2)}`);

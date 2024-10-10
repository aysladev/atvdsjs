
let soma = 0;
let numero;

do{
    numero = parseFloat(prompt('Digite um número positivo ou 0 para encerrar:'));
    if(numero > 0){
        soma += numero;
    }else if(numero < 0){
        alert('Insira um número positivo somente.');
    }
}
    while (numero !== 0);
alert('A soma dos números é: ' + soma);
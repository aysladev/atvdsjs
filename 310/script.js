let numeros = [];
for(let i = 1; i <= 10; i++){
    let numero = parseFloat(prompt("Digite um número: "));
    numeros.push(numero);
} for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < 0){
        console.log(`Esse número é negativo: ${numeros[i]} posição ${i}`);
    }
}

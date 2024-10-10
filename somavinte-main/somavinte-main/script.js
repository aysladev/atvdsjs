let soma = 0;
let numero = 1;

console.log('Sequência:');
for(let i = 1; i <= 20; i++){
    console.log(`${i}- ${numero}`);
    soma += numero;
    numero = 2 * numero + 1;
}
console.log(soma);

let carros = [];
while (true){
    let carro = {
        modelo: prompt("Qual o modelo do carro? "),
        marca: prompt("Qual a marca do veículo? "),
        ano: parseInt(prompt("Qual o ano do carro? ")),
        valor: parseFloat(prompt("Qual o valor do automóvel? ")),
    };
    carros.push(carro);
    let continuar = prompt("Deseja continuar e adicionar mais um carro?\n SIM ou NÃO");
    if (continuar === "não"){
        break;
    }
}
let carrocaro = carros[0];
for(let i = 1; i < carros.length; i++){
    if (carros[i].valor > carrocaro.valor){
        carrocaro = carros[i];
    }
}
console.log("O carro mais caro de todos inseridos é: ", carrocaro);
let pessoas = []
let continuar = true;

while (continuar){
    const altura = parseFloat(prompt("Insira a altura da pessoa em metros: "));
    const peso = parseFloat(prompt("Insira o peo da pessoa: "));
    const idade = parseInt(prompt("Insira a idade da pessoa: "))
}
pessoas.push({altura, peso, idade});
continuar = prompt("Deseja inserir dados de outra pessoa?") === 'sim';
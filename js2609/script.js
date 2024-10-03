let notas = [], nomes = [], media, total = 0;
for(let i = 1; i <=5; i++){
    nota = parseFloat(prompt("Digite sua nota: "));
    nome = prompt("Digite seu nome: ");
    notas.push(nota);
    nomes.push(nome);
    total += nota;
}
media = total / 5
console.log(notas, nomes, media);
console.log("Alunos abaixo da média: ")
for(let i = 0; i < notas.length; i++){ //começa no 0 pq é o 'length', loop pra mostrar as notas abaixp da media
    if(notas[i] < media){ //importante o i, tanto no if quanto no console log (praq? nao vou lembrar)
        console.log(`Aluno: ${nomes[i]} Nota: ${notas[i]}`);
    }
}
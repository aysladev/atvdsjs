let vA = [];
let vB = [];
let vC = [];

for (let i = 0; i < 5; i++){
    let nA = parseInt(prompt(`Digite um valor ${i + 1} para o vetor A: `));
    vA.push(nA);
}
for (let i=0; i < 5; i++){
    let nB = Math.floor(Math.random() * 10) + 1;
    vB.push(nB);
}
for (let i = 0; i < 5; i++){
    vC.push(vA[i] * vB[i]);
}
console.log(`Vetor C: ${vC } `)
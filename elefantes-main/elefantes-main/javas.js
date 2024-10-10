var i = 1
let numero = parseFloat(prompt("Digite um número:"));

for ( i = 1; i <= numero; i++){  
    if(i == 1){
    console.log(`${i} elefante incomoda muita gente,`)
  }else if(i == numero){
    console.log(`${i} elefantes incomodam muito mais.`)
  }else{
    console.log(`${i} elefantes incomodam muito mais. ${i} elefantes incomodam muita gente,`)
  }
}

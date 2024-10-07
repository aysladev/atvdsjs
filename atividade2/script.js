let pessoa = {
    nome: "Maria",
    idade: 27,  
    cidade: "São Paulo"
};
console.log("Dados: ", pessoa);
let opcao = prompt("Digite 1 para atualizar a idade ou 2 para atualizar a cidade: ");
if (opcao == "1"){
    let novaidade = parseInt(prompt("Digite sua nova idade atual: "));
    pessoa.idade = novaidade;
}else if(opcao == "2"){
    let novacidade = prompt("Digite sua nova cidade atual: ");
    pessoa.cidade = novacidade;
}else{
    console.log("Opção inválida! Por favor, caso tenha uma alteração selecione um dos números solicitados.")
}
console.log("Dados atualizados: ", pessoa);
let livro1 = {
    nome: prompt("Qual o título do primeiro livro? "),
    autor: prompt("Qual o autor deste livro? "),
    ano: parseInt(prompt("Qual o ano de publicação deste livro? ")),
};

let livro2 = {
    nome: prompt("Qual o título do segundo livro? "),
    autor: prompt("Qual o autor deste livro? "),
    ano: parseInt(prompt("Qual o ano de publicação do segundo livro? ")),
};
if (livro1.ano < livro2.ano){
    console.log("O livro mais antigo é: ", livro1.nome);
}else if(livro2.ano < livro1.ano){
    console.log("O livro mais antigo é: ", livro2.nome);
}else{
    console.log("Os dois livros têm a mesma data de publicação.")
}
let mesmonome = "estudando programação";
if (livro1.nome.toLowerCase() === mesmonome || livro2.nome.toLowerCase() === mesmonome){ ///||<pra verificar as duas variaveis ao mesmo tempo; tolowercase<passa todos nomes/titulos para letra minuscula
    console.log("SIM, um dos livros é o 'Estudando programação'.");
}else{
    console.log("NÃO, nenhum dos livros é o 'Estudando programação.");
}
if (livro1.autor === livro2.autor){
    console.log(`Ambos os lilvros são do mesmo autor: ${livro1.nome} e ${livro2.nome} são do ${livro1.autor}.`);
}else{
    console.log(`NÃO, os livros não são do mesmo autor. O primeiro livro pertence ao ${livro1.autor} e o segundo livro pertence ao ${livro2.autor}.`)
}
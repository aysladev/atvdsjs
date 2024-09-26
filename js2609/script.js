var quantas = parseFloat (prompt("Quantas cartas deseja virar?"));
for (let i = 0; i < quantas; i++){
var naipes = Math.floor(Math.random() * 4);
var valor = Math.floor(Math.random() * 10) + 1;
if(naipes == 0){
    alert(valor + ' paus');
}else if(naipes == 1){
    alert(valor + ' copas');
}else if(naipes == 2){
    alert(valor + ' espadas');
}else if(naipes == 3){
    alert(valor + ' ouros');
}
}

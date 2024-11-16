document.write("<br>Escolha seu pedido<br>");
document.write("<br>0 - Sorvete<br>1 - Suco<br>2 - Coca-cola<br>3 - Água");


function pedir(){

    x = prompt("O que deseja pedir? ");

    switch(x){
        case "0":
            alert("Você pediu sorvete!");
            break;
        case "1":
            alert("Você pediu suco!");
            break;
        case "2":
            alert("Você pediu coca-cola!");
            break;
        case "3":
            alert("Você pediu água!");
            break;
        default:
            alert("Não temos esta opção")
    }
}

//Esta função: 1- armazena na variável "x" o valor inserido pelo usuário, 
//2- compara este valor com o valor contido em cada "case",
//3- devolve uma mensagem correspondente.
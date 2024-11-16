function imprimir(){
    document.write("Executando o temporizador...<br>");
}


//necessita de dois parâmetros, a ação a ser executada e o tempo.
//a unidade de medida do tempo é em milisegundos (1000 mili = 1 segundo).
//repete a ação infinitamente.
setInterval(imprimir, 1000);

//atribuindo o setInterval a uma variável, é possível 
//fazer uma parada no temporizador, para isso, utiliza-se o clearInterval, 
//necessariamente com a variável como parâmetro.
var timer = setInterval(imprimir, 1000);
clearInterval(timer);


//outro tipo de temporizador é o setTimeOut.
//é parecida com a outra, mas esta só executa a ação uma única vez.
setTimeout(imprimir, 3000);

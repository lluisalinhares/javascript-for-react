//Função entrar

function entrar() {
     var area = document.getElementById('area');
     var texto = prompt('Qual mensagem quer imprimir? ');

     if (texto == '' || texto == null){
        alert('Por favor, digite alguma mensagem: ');
        texto = prompt('Qual mensagem quer imprimir? ');
     }else{
        area.innerHTML = texto;
     }
}

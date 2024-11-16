var nome = '';

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Por favor, digite seu nome");
}

nome = localStorage.nome;

document.getElementById('seunome').innerHTML = `o seu nome é: ${nome}`;
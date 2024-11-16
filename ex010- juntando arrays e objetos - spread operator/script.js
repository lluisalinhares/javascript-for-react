//spread operator

//Arrays

let primeiros = [50, 51, 52];

let segundo = [...primeiros, 53, 54, 55];

//saída no console:

[50, 51, 52, 53, 54, 55]

//ou seja, o spread operator (...) concatena o valor presente em duas listas diferentes. 



//Objetos

let pessoa = {
    nome: "luisa",
    idade: 31,
    profissão: "desenvolvedora front-end",
}

let novaPessoa = {
    ...pessoa,
    voz: "linda",
}

//saída no console quando o objeto "novaPessoa" é chamado:
{nome: 'luisa', idade: 31, profissão: 'desenvolvedora front-end', voz: 'linda'}

//ou seja, é o spread operator concatenando os valores dos dois objetos.
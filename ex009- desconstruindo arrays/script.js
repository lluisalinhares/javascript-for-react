// Objetos

const pessoa = {
    nome: "Matheus",
    sobrenome: "Fraga",
    idade: 30,
    cargo: "desenvolvedor"
};

//Desconstruindo objetos

let {nome} = pessoa;

//aqui, é criado uma variável "nome" que recebe o valor de "nome" contido no objeto "pessoa".
//a saida deste comando é o valor "Matheus".

//também pode-se trocar o nome da variável, por exemplo:
let {nome:feionome} = pessoa;

//aqui, criou-se uma outra variável para substituir "nome" e receber seu valor.
//a saida é deste comando é o valor "Matheus".

/************************************************************/

//Desconstruindo arrays - Pelo índice.

//esse é o array
let nomes = ["Luísa", "Maria", "Ana", "Joana"];

//cria-se uma variável ligada ao índice.
let {0:meunome} = nomes;
//aqui, vai ser criada uma variável chamada "meunome" relacionada ao indice 0, que vai receber o valor contido neste índice.
//a saida deste comando é o valor: "Luísa".

//também é possível fazer com 2 variáveis:
let {2:umnome, 3:outronome} = nomes;
//ou seja, criou-se duas variáveis relacionadas aos indices "2" e "3" do array "nomes".

//mostrando no console:
console.log(`Este é um nome: ${umnome} e este é outro nome: ${outronome}`);
//a saída deste comando é:
Este é um nome: Ana e este é outro nome: Joana


//outra forma de desconstruir arrays . 

//esse é o array
let nomes = ["luisa", "julia", "maria", "margarete"];

//e aqui esta se criando variáveis que recebem os valores contidos em cada índice.
let [eu, amiga, vizinha, mãe] = nomes;
//a saída no console é: "eu" recebe "luisa" / "amiga" recebe "julia" / "vizinha" recebe "maria" / "mãe" recebe "margarete". 

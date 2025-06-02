// "Var"
var var1 = 10;  //Fracamente tipado, var1: interio e var2: String
var var2 = 'Teste'; 

console.log(var1 + var2); // vai concatenar, não dá para fazer uma operação aritmética 
console.log(var1 - var2) // vai tentar converteser o texto em número e vai fazer a op aritmética


// "Hosting"
// Paradigma procedural - a ordem das declarações vão influenciar
// o Hosting vai pegar todas as funções e colocar elas para "cima", ou seja, vão ser executadas e declaradas primeiro


// let x var x const
//o let se restringe a qualquer tipo de bloco (função, if, for, while.....) não sofre o hosting no escopo global, apenas dentro do bloco 
//o var sofre hosting para o escopo global 
// const não sofre alterações durante o código, logo o seu valor é constante





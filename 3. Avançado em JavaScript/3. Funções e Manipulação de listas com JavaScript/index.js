// first class functions 
// highter order fuctions 
// Appy
const pessoa = {
    nome: "Daniel", 
    idade: 22 
}

function gritar(prefixo){
    console.log(prefixo, this.nome); //esse this não está em um contexto, então não funcionará sozinho 
}

gritar.apply(pessoa, ['Olaaaaaa'] ); //jogo a função para o contexto do objeto pessoa, e dou o valor que vai para a função 
 
//Call 
gritar.call(pessoa, 'Olaaaaaaaaaa'); //depois os argumentos separados por virgulas

//----------------------------------------------------------------------------------------------------------------------------------------------
function adicao(x, y){
    return x + y; 
}
function subtracao(x,y){
    return x - y; 
}

function calculadora(x, operacao, y){
    console.log(operacao(x, y)); 
}

calculadora(10, adicao, 11);

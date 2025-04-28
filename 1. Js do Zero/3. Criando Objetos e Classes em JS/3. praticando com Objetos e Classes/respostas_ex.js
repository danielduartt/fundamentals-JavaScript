/* 
Crie um objeto literal chamado `pessoa` com as propriedades: nome, idade e cidade. Adicione um método `apresentar()` que retorne uma string com a apresentação da pessoa.
*/

class Pessoa{
    constructor(nome,idade,cidade){
        this.nome = nome; 
        this.idade = idade;
        this.cidade = cidade; 
    }

    apresentar(){
        console.log(`Olá, eu me chamo ${this.nome}, tenho ${this.idade} e moro em ${this.cidade}`); 
    }
}

/* 
Crie um objeto `calculadora` com métodos para as 4 operações básicas. Cada método deve receber dois números como parâmetros.
*/
calculadora = {
    soma : function(n1, n2){
        return n1 + n2; 
    }, 
    subtracao: function(n1, n2){
        return n1- n2; 
    }, 
    mult: function(n1, n2){
        return n1 * n2; 
    },
    div: function(n1, n2){
        return n1 * n2; 
    }
}

/* 
Crie um objeto `biblioteca` que gerencie uma coleção de livros (array). Implemente métodos para adicionar, remover e listar livros.
*/
class Biblioteca{
    constructor(nome){

    }
}
class Pessoa{

     constructor(nome, idade){
        this.nome = nome; 
        this.idade = idade; 
     }

     descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
     }
}


const pessoa1 = new Pessoa("Daniel", 22); 
const pessoa2 = new Pessoa("Marcus", 28); 

function compararIdade(pessoa1, pessoa2){
    if( pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velho!`);
}else{
    console.log(`${pessoa2.nome} é mais velho!`);
    }
}


compararIdade(pessoa1,pessoa2); 
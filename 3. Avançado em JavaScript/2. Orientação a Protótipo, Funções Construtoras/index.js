// Orientação a protótipo 
const pessoa = {
    genero: 'masculino'
}

//o obj renan se basea no obj pessoa 
const renan = {
    nome: "renan", 
    idade: 30, 
    __proto__: pessoa
}

console.log(renan.genero);

// Funções construtoras 
// Funçãocom letra maiúscula

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    comer(alimento){
        console.log(`Comendo ${alimento}...`); 
    }
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`); 
}

const yasmim = new Pessoa('yasmim', 30);
console.log(yasmim);
yasmim.falar(); 

// Criando objetos literais com portótipos 

const pess = {
    genero: "feminino"
}

const luana = Object.create(pess);
luana.nome = "Luana";
console.log(luana.genero); 
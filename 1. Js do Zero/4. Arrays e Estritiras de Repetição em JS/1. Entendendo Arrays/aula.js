// O que são arrays 
const alunos = ["João", 'Vitor', 'Marina']; 

console.log(alunos);
console.log(alunos[0]); 

// add itens a um array
//pode ter tipos diferentes em um array
alunos.push("Daniel"); 
console.log(alunos);
console.log(alunos[3]);

// retirar item

console.log(alunos.pop("Daniel")); //pega e imprime, pode salvar em outra variável
// se colocar apenas o pop, é pegado o último 
console.log(alunos); 
// usa-se o shift para pegar o primeiro; 
console.log(alunos.shift());
// apagar em uma posição específica 

const notas = []; 

for (i = 1; i <= 5; i++){
    notas.push(i); 
}

console.log(notas.length);

let soma = 0; 
for (i = 0; i < 5; i++){
    soma = soma + notas[i]; 
}

console.log(soma); 
console.log(soma/notas.length); 



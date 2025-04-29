for(let i = 0; i < 10; i++){
    console.log(i); 
}
console.log("========================================================");
const nome = 'Daniel'; 
for (letra of nome){
    console.log(letra); 
}
console.log("========================================================");
for (let i = 0; i < nome.length;  i++){
    console.log(nome[i]);
}

const padaria = {
    nome: "Padaria do Zé Raimundo", 
    loc: "Rua 01, Av 2", 
    numero: "4002-8922"
}

for (key in padaria){
    console.log(key + ": " + padaria[key]); 
}
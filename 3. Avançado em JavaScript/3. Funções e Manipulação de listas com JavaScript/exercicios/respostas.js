function saudacao(nome){
    console.log(`Olá, ${nome}`); 
}

function operar(x , y, operacao){
    return operacao(x, y); 
}

const dobro = (n) => n * 2; 




const Objeto1 = {
    nome: "Daniel"
}
const Objeto2 = {
    nome: "Gabrielle"
}
function saudacao_obj(){
    return this.nome; 
}

console.log(saudacao_obj.call(Objeto1));
console.log(saudacao_obj.call(Objeto2));
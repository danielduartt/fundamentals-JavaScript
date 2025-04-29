function verificarIdade(idade){
    if(idade >= 18){
        return "maior de idade";
    }else{
        return "não é mairo de idade"; 
    }
}

console.log(verificarIdade(22))

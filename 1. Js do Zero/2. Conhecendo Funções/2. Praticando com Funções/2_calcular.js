function calcular(num1, num2, op){
    if(op == "+"){
        console.log(num1 + num2); 
    }else if(op == "-"){
        console.log(num1 - num2); 
    }else if(op == "/"){
        if(num2 =! 0){
            console.log(num1 / num2); 
        }else{
            console.log("Impossível dividir um número por 0")
        }
    }else if(op == "*"){
        console.log(num1 * num2); 
    }else{
        console.log("Opção inválida"); 
    }
}
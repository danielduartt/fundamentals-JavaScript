const saudar = (nome) => {
    console.log("Olá,  " + nome); 
}

const calcular =(num1, num2, op) => {
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

const ehPar = (num) => {
    if(num % 2 === 0){
        console.log("O número é par");
    }else{
        console.log("O número é impar");
    }
}

const celsius = (celsius) => {
    return celsius * 9/5 + 32;
}

const contarVogais = (texto) => {
    const vogais = "aeiouAEIOU";
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (vogais.includes(texto[i])) {
        contador++;
      }
    }
  
    return contador;
}
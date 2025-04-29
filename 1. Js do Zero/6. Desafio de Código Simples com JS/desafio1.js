// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const statusAluno = (arr) => {
    const somaArr = (arr) =>{
        let soma = 0; 
        for (num of arr){
            soma += num; 
        }
        return soma; 
    }

    let media = somaArr(arr) / arr.length; 
    if (media < 5){
        console.log("Reprovado"); 
    }else if(media >= 5 && media < 7){
        console.log("Recuperação"); 
    }else{
        console.log("Aprovado"); 
    }
}

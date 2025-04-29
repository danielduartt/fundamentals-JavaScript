// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1


const maiorNumPar = (numeros) => {
    const pares = [];
    const impares = [];

    for (let num of numeros) {
        if (num % 2 === 0) {
            pares.push(num);
        } else {
            impares.push(num);
        }
    }

    const maiorPar = pares.length > 0 ? Math.max(...pares) : "Nenhum número par informado";
    const menorImpar = impares.length > 0 ? Math.min(...impares) : "Nenhum número ímpar informado";

    console.log(`Maior número par: ${maiorPar}`);
    console.log(`Menor número ímpar: ${menorImpar}`);
};


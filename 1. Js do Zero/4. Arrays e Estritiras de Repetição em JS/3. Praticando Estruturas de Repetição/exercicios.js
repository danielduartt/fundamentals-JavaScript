console.log("===== EXERCÍCIOS BÁSICOS =====");
console.log("EXERCÍCIOS 01");
/* 
Calcule a soma de todos os elementos de um array
*/
function somarArray(arr){
    let soma = 0; 
    for(num of arr){
        soma +=  num; 
    }
    return soma; 
}
console.log("EXERCÍCIOS 02");
/* 
Encontre o maior e o menor valor em um array
*/
function maiorEMenor(arr){
    let menor ; 
    let maior; 
    for( let i = 0; i < arr.length; i++){
        if(i === 0){
            maior = arr[i];
            menor = arr[i];
        }
        if(arr[i] < menor){
            menor = arr[i]; 
        }else if(arr[i] > maior){
            maior = arr[i]; 
        }
    }
    return {maior, menor}; 
}
/*
	Calcule a média dos valores em um array
*/
function mediaArray(arr){
    let media, soma; 
    for(num of arr){
        soma += num; 
    }
    media = soma / arr.length; 
    return media; 
}
console.log("EXERCÍCIOS 04");
/*
Conte quantas vezes um determinado valor aparece
*/
function verificarRep(arr, elemento){
    let soma = 0; 
    for(value of arr){
        if(value === elemento) soma ++; 
    }
    return soma; 
}

console.log(verificarRep(arr, 25));
console.log("EXERCÍCIOS 05");
/*
Crie uma função que inverta a ordem dos elementos
*/
function inverterArray(arr) {
    const resultado = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        resultado.push(arr[i]);
    }
    return resultado;
}
console.log("===== EXERCÍCIOS INTERMEDIÁRIO =====");
console.log("EXERCÍCIOS 06");
/*Separe um array em dois: pares e ímpare*/ 
function imparPar(arr){
    let impar = new Array; 
    let par = new Array; 
    for(num of arr){
        if(num % 2 === 0){
            par.push(num);
        }else{
            impar.push(num); 
        }
    }
    return impar, par; 
}
console.log("EXERCÍCIOS 07");
/* Filtre valores maiores que um número específico */
function filtrarMaioresQueFilter(arr, numero){
    return arr.filter(n => n > numero); 
}

console.log("EXERCÍCIOS 08");
/*Remova elementos duplicados de um array */

function removerDuplicatas(arr){
    const resultado = new Array; 
    for (num of arr){
        if(!resultado.includes(num)){
            resultado.push(num); 
        }
    }
    return resultado; 
}
console.log("EXERCÍCIOS 09");
/*Ordene um array de objetos por propriedade*/
function ordenarPorPropriedade(arr, propriedade) {
    return [...arr].sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    });
} 

console.log("EXERCÍCIOS 10");
/*Crie uma tabela de multiplicação com loops*/
function criarTabelaMultiplicacao(n) {
    for (let i = 1; i <= n; i++){
        for(let j= 1; j <= n; j++){
            console.log(`${i} x ${j}: ${i * j}`); 
        }
    }
}
console.log("===== EXERCÍCIOS AVANÇADOS =====");
console.log("EXERCÍCIOS 11");
/*Combine dois arrays ordenados mantendo a ordem*/
function mesclarArraysOrdenados(arr1, arr2) {
    const resultado = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultado.push(arr1[i]);
            i++;
        } else {
            resultado.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        resultado.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        resultado.push(arr2[j]);
        j++;
    }
    
    return resultado;
}
console.log("EXERCÍCIOS 12");
/*Encontre todos os possíveis subconjuntos*/ 
function rotacionarArray(arr, k) {
    if (arr.length === 0) return [];
    k = k % arr.length; 
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        const novaPos = (i + k) % arr.length;
        resultado[novaPos] = arr[i];
    }
    return resultado;
}

console.log("EXERCÍCIOS 13");
/* Rotacione elementos k posições à direita */
function rotacionarArray(arr, k) {
    if (arr.length === 0) return [];
    
    k = k % arr.length; // Para casos onde k > arr.length
    
    const resultado = [];
    
    for (let i = 0; i < arr.length; i++) {
        const novaPos = (i + k) % arr.length;
        resultado[novaPos] = arr[i];
    }
    
    return resultado;
}

console.log("EXERCÍCIOS 14");
/*Encontre a subsequência contígua com maior soma*/ 
function maiorSomaSubsequencia(arr) {
    if (arr.length === 0) return 0;
    
    let maiorSoma = arr[0];
    let somaAtual = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        somaAtual = Math.max(arr[i], somaAtual + arr[i]);
        maiorSoma = Math.max(maiorSoma, somaAtual);
    }
    return maiorSoma;
}
console.log("EXERCÍCIOS 15");
/*Implemente suas versões de forEach, map, etc.*/ 
Array.prototype.meuForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.meuMap = function(callback) {
    const resultado = [];
    for (let i = 0; i < this.length; i++) {
        resultado.push(callback(this[i], i, this));
    }
    return resultado;
};

Array.prototype.meuFilter = function(callback) {
    const resultado = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resultado.push(this[i]);
        }
    }
    return resultado;
};

Array.prototype.meuReduce = function(callback, valorInicial) {
    let acumulador = valorInicial !== undefined ? valorInicial : this[0];
    const inicioIndice = valorInicial !== undefined ? 0 : 1;
    
    for (let i = inicioIndice; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    
    return acumulador;
};


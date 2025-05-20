//forEach: um pouco mais lento que o for normal
const lista = [];
for(let i = 1; i < 11; i++){
    lista.push(i);
}
lista.forEach((value, i , listRef) => {
    console.log(value, i ); 
})// valor, o índice e a lista que estamos fazendo o laço 

//Filter 
const numerosPares = lista.filter((element, i, listRef) => {
    return (element % 2 === 0); //retorna uma lista nova 
})
console.log(numerosPares); 

//Map 
class Pessoa{
    constructor(name){
        this.name = name; 
    }
}
const lista_pessoas = [new Pessoa("Andresa"), new Pessoa("Vitor"), new Pessoa("José")]; 
const lista_nome = lista_pessoas.map((value) => value.name); 
console.log(lista_pessoas);  //lista de objetos 
console.log(lista_nome); // lista de nomes 

//Reduce 
const somaDeTodosNumeros = lista.reduce((previus, current) => {
    return previus + current; 
}, 0) // o 0 mostra o valor inicial


// join 
console.log(lista.join('/')); //string entre os itens de uma lista 
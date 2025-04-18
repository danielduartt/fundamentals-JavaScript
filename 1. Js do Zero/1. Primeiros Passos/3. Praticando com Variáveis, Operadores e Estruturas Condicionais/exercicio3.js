/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 

    Código - Condição de pagamento:
    1 - À vista Débito: 10% de desconto
    2 - À vista no Dinheiro ou PIX: 15% de desconto
    3 - Em duas vezes: preço normal
    4 - Acima de duas vezes: preço normal + 10% de juros
*/

const precoEtiqueta = 100; 
const condicaoPagamento = 4; 

let precoFinal;

if (condicaoPagamento === 1) {
    precoFinal = precoEtiqueta * 0.9;
    console.log("Pagamento à vista no Débito. Desconto de 10%");
} else if (condicaoPagamento === 2) {
    precoFinal = precoEtiqueta * 0.85;
    console.log("Pagamento à vista no Dinheiro ou PIX. Desconto de 15%");
} else if (condicaoPagamento === 3) {
    precoFinal = precoEtiqueta;
    console.log("Pagamento em duas vezes. Sem desconto ou juros");
} else if (condicaoPagamento === 4) {
    precoFinal = precoEtiqueta * 1.10;
    console.log("Pagamento acima de duas vezes. Juros de 10%");
} else {
    console.log("Condição de pagamento inválida.");
}

if (precoFinal !== undefined) {
    console.log("Valor final a pagar: R$", precoFinal.toFixed(2));
}

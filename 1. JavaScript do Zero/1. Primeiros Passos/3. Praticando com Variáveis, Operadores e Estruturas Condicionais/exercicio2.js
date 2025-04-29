/*
    2) O IMC – Índice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Tabela de classificação:
    - Abaixo de 18.5: Abaixo do peso
    - Entre 18.5 e 25: Peso normal
    - Entre 25 e 30: Acima do peso
    - Entre 30 e 40: Obeso
    - Acima de 40: Obesidade Grave
*/

const peso = 100;
const altura = 1.70;

const imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Condição: Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Condição: Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Condição: Acima do peso");
} else if (imc >= 30 && imc <= 40) {
    console.log("Condição: Obeso");
} else {
    console.log("Condição: Obesidade Grave");
}

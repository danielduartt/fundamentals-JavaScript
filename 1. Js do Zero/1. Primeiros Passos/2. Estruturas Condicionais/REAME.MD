# 📘 Estruturas Condicionais em JavaScript

Este repositório reúne explicações, exemplos e exercícios práticos sobre as principais estruturas condicionais da linguagem JavaScript, fundamentais para o controle de fluxo de um programa.
---

## 🧩 Operadores de Comparação em JavaScript

Esses operadores comparam dois valores e retornam um **booleano**: `true` ou `false`.

---

### `==` (Igualdade solta)

Compara **valores**, mas **não compara tipos**.

```js
5 == "5" // true, porque o valor é igual, mesmo com tipos diferentes (Number e String)
```

⚠️ Pode causar resultados inesperados. Use com cautela.

---

### `===` (Igualdade estrita)

Compara **valor e tipo**. É o mais recomendado para evitar confusão.

```js
5 === "5" // false, tipos diferentes
5 === 5   // true
```

✅ Boa prática: **sempre prefira `===`** em vez de `==`.

---

### `!=` (Diferente solto)

Compara se os **valores são diferentes**, **sem considerar o tipo**.

```js
5 != "5" // false, pois os valores são "iguais"
```

---

### `!==` (Diferente estrito)

Compara **valor e tipo**, retorna `true` se **algum deles for diferente**.

```js
5 !== "5" // true, pois o tipo é diferente
5 !== 5   // false
```

---

### `>` (Maior que)

```js
10 > 5 // true
```

---

### `<` (Menor que)

```js
3 < 7 // true
```

---

### `>=` (Maior ou igual a)

```js
5 >= 5 // true
6 >= 5 // true
```

---

### `<=` (Menor ou igual a)

```js
4 <= 4 // true
3 <= 2 // false
```

---

## 🧠 Dica: Diferença entre `==` e `===`

| Expressão         | Resultado | Explicação                       |
|------------------|-----------|----------------------------------|
| `5 == "5"`        | `true`    | Compara apenas o valor          |
| `5 === "5"`       | `false`   | Compara valor **e tipo**        |
| `"true" == true`  | `false`   | String ≠ Boolean                |
| `0 == false`      | `true`    | Ambos são considerados "falsy"  |
| `0 === false`     | `false`   | Tipos diferentes (`number` vs `boolean`) |

---

## ✅ Resumo das Boas Práticas

- Use `===` e `!==` sempre que possível.
- Evite `==` e `!=`, a não ser que você **entenda bem o comportamento do JavaScript**.
- Combine operadores com `if`, `else if`, `switch` e operadores lógicos (`&&`, `||`, `!`) para criar lógicas mais robustas.

---

## 🧠 Mas ao final das contas, o que são Estruturas Condicionais?

Estruturas condicionais permitem que o código **tome decisões**, ou seja, execute diferentes blocos de código dependendo de condições específicas.

---

## 🔹 `if`, `else if`, `else`

A estrutura condicional mais comum. Avalia expressões booleanas e executa blocos de código conforme a condição for verdadeira (`true`) ou falsa (`false`).

### Sintaxe:
```js
if (condição) {
  // bloco executado se a condição for verdadeira
} else if (outraCondição) {
  // bloco executado se a primeira condição for falsa e essa for verdadeira
} else {
  // bloco executado se todas as condições anteriores forem falsas
}
```

### Exemplo:
```js
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

---

## 🔸 `switch`

O `switch` é uma alternativa ao `if...else` quando se precisa comparar a mesma variável ou expressão com vários valores.

### Sintaxe:
```js
switch (expressao) {
  case valor1:
    // bloco de código
    break;
  case valor2:
    // outro bloco
    break;
  default:
    // bloco padrão se nenhum valor for correspondente
}
```

### Exemplo:
```js
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("A cor é vermelha.");
    break;
  case "azul":
    console.log("A cor é azul.");
    break;
  default:
    console.log("Cor não reconhecida.");
}
```

---

## ⚡ Operador Ternário

Forma reduzida de escrever um `if...else` simples.

### Sintaxe:
```js
condição ? valorSeVerdadeiro : valorSeFalso;
```

### Exemplo:
```js
let idade = 20;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";

console.log(status); // "Maior de idade"
```

---

## ✅ Boas Práticas

- Evite excesso de `else if`; considere usar `switch` ou funções para melhorar a legibilidade.
- Sempre use `{}` mesmo em blocos simples, para evitar bugs.
- Prefira o operador ternário apenas para condições simples.

---

## 🧪 Exercícios Propostos

- Verificar se um número é positivo, negativo ou zero.
- Criar um sistema de verificação de nota: Aprovado, Recuperação ou Reprovado.
- Implementar uma calculadora simples com `switch`.
- Determinar o tipo de usuário com base em uma variável (`"admin"`, `"user"`, `"guest"`, etc).

---

## 🔗 Recursos Recomendados

- [MDN - if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN - switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)
- [MDN - Operador Ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

---

## 🚀 Objetivo

Oferecer uma base sólida sobre estruturas condicionais, ajudando desenvolvedores iniciantes a entender e aplicar lógica de decisão em seus códigos de forma clara e eficiente.


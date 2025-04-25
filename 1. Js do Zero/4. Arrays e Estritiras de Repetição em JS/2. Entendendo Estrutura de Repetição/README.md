# Estruturas de Repetição em JavaScript

As **estruturas de repetição**, também conhecidas como **loops**, são utilizadas para executar um bloco de código **várias vezes**, de forma controlada e eficiente.

---

## 🔄 Tipos de Estruturas de Repetição

JavaScript oferece diversas formas de criar loops. Vamos explorar cada uma delas com exemplos práticos.

---

## 1. `for` – Loop com controle por índice

Usado quando você sabe **quantas vezes** o loop deve ocorrer.

```js
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
```

---

## 2. `while` – Loop baseado em condição

Executa enquanto a **condição for verdadeira**.

```js
let i = 0;
while (i < 5) {
  console.log("Contando: " + i);
  i++;
}
```

---

## 3. `do...while` – Executa pelo menos uma vez

Semelhante ao `while`, mas **executa o bloco primeiro**, depois testa a condição.

```js
let i = 0;
do {
  console.log("Executado ao menos uma vez: " + i);
  i++;
} while (i < 5);
```

---

## 4. `for...of` – Loop para arrays e iteráveis

Percorre os **valores** de uma lista (ideal para arrays, strings, etc).

```js
const frutas = ["maçã", "banana", "laranja"];
for (const fruta of frutas) {
  console.log(fruta);
}
```

---

## 5. `for...in` – Loop para objetos

Percorre as **chaves (propriedades)** de um objeto.

```js
const pessoa = { nome: "Ana", idade: 28 };
for (const chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
```

---

## 🛑 Palavras-chave úteis

### `break`
Encerra o loop imediatamente.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // imprime de 0 a 4
}
```

### `continue`
Pula a iteração atual e vai para a próxima.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}
```

---

## 📚 Quando usar cada um?

| Loop         | Use quando...                                |
|--------------|-----------------------------------------------|
| `for`        | Precisa de um contador definido               |
| `while`      | A condição depende de algo externo            |
| `do...while` | Quer garantir que o bloco execute ao menos 1x |
| `for...of`   | Trabalha com arrays ou strings                |
| `for...in`   | Percorre objetos                              |

---

## 🧠 Exemplo prático: somar elementos de um array

```js
const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (const num of numeros) {
  soma += num;
}

console.log("Soma total:", soma);
```

---

## 🧪 Desafio

1. Crie um array com os números de 1 a 10.
2. Use um `for` para imprimir apenas os números pares.
3. Use `for...of` para somar todos os números.
4. Use `while` para contar regressivamente de 10 até 0.

---

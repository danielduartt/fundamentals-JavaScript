# 📚 Funções e Manipulação de Listas com JavaScript

Este módulo reúne os principais conceitos de **funções** e **manipulação de listas (arrays)** no JavaScript moderno. Dominar esses dois pilares vai te tornar muito mais eficiente no desenvolvimento web! 🧠💻

---

## ⚙️ Funções

### 🔹 First Class & Higher Order Functions, Declaração & Expressão
Funções são **cidadãs de primeira classe** em JavaScript. Isso significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

```js
function somar(a, b) {
  return a + b;
}

const subtrair = function(a, b) {
  return a - b;
}

const operar = (operacao, x, y) => operacao(x, y);
console.log(operar(somar, 2, 3)); // 5
````

➡️ **Higher Order Functions (HOFs)** são funções que recebem outras funções como argumento ou retornam funções.

---

### 🔹 Declaração Explícita e Arrow Function

As **arrow functions** são uma forma mais curta de escrever funções:

```js
const saudacao = nome => `Olá, ${nome}!`;
```

➡️ Não possuem seu próprio `this`, o que pode ser vantajoso (ou perigoso) dependendo do contexto.

---

### 🔹 Closures (Fechamentos)

Closures ocorrem quando uma função "lembra" do escopo onde foi criada, mesmo após esse escopo ter sido encerrado:

```js
function contador() {
  let i = 0;
  return function () {
    i++;
    console.log(i);
  }
}

const contar = contador();
contar(); // 1
contar(); // 2
```

---

### 🔹 Call, Apply, New e Invocação Direta

* `call()` e `apply()` permitem invocar funções com contexto específico (`this`)
* `new` cria um novo objeto e liga `this` ao novo contexto

```js
function Pessoa(nome) {
  this.nome = nome;
}
const p1 = new Pessoa('João');
```

---

### 🔹 Callback Functions

Funções passadas como argumento para serem chamadas depois de um evento ou operação assíncrona.

```js
setTimeout(() => {
  console.log("Chamado após 1 segundo");
}, 1000);
```

---

## 🔄 Manipulação de Listas (Arrays)

### 🔹 Introdução

Arrays armazenam múltiplos dados em uma única estrutura indexada. Manipular arrays é essencial em qualquer aplicação.

---

### 🔹 `forEach()`

Executa uma função para cada item do array — ideal para iteração.

```js
const frutas = ['🍎', '🍌', '🍍'];
frutas.forEach(fruta => console.log(fruta));
```

---

### 🔹 `filter()`

Cria um novo array com elementos que **passam em um teste**.

```js
const numeros = [1, 2, 3, 4];
const pares = numeros.filter(n => n % 2 === 0);
```

---

### 🔹 `map()`

Cria um novo array **com base na transformação** de cada item.

```js
const dobrados = numeros.map(n => n * 2);
```

---

### 🔹 `reduce()`

Reduz um array a **um único valor**, acumulando o resultado.

```js
const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
```

---

### 🔹 `join()` e Combinação de Funções

`join()` junta todos os itens do array em uma string:

```js
const letras = ['J', 'S'];
console.log(letras.join('')); // "JS"
```

Você pode **encadear funções** para transformar dados em etapas:

```js
const resultado = numeros
  .filter(n => n > 2)
  .map(n => n * 10)
  .reduce((acc, val) => acc + val, 0);
```

---

## 🧪 Conteúdo Prático

### ✅ Funções:

* ✔️ First-Class Functions, HOF, Declaração e Expressão — 10:26
* ✔️ Arrow Function e Sintaxe Moderna — 04:47
* ✔️ Closures — 04:48
* ✔️ Invocação Direta, `call`, `apply`, `new` — 07:41
* ✔️ Callbacks — 06:03

### ✅ Manipulação de Listas:

* 🔄 Introdução — 01:11
* 🔄 `forEach()` — 05:33
* 🔄 `filter()` — 04:02
* 🔄 `map()` — 07:35
* 🔄 `reduce()` — 07:08
* 🔄 `join()` e composição de funções — 08:26

---

## 🎯 Conclusão

Com esses conceitos, você já é capaz de criar aplicações **modulares, legíveis e funcionais**, manipulando dados de forma eficiente e elegante. Continue praticando para fixar! 💪🚀

---

📘 *Referência recomendada:*

* [MDN - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
* [MDN - Array Methods](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

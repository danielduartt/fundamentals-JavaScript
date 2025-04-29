# Trabalhando com Arrays em JavaScript

Arrays são uma das estruturas de dados mais fundamentais em JavaScript. Eles permitem armazenar e manipular **listas ordenadas de valores** — como números, strings, objetos e até outras arrays.

---

## 🧠 O que é um Array?

Um **array** é uma coleção de elementos armazenados em uma única variável. Cada elemento é acessado por um **índice numérico**, que começa do zero.

```js
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
```

---

## 🔧 Como criar Arrays

### 1. Literal
```js
const numeros = [1, 2, 3, 4];
```

### 2. Usando `new Array()`
```js
const letras = new Array("a", "b", "c");
```

---

## 🧭 Métodos comuns de Arrays

### 🔍 Acesso
```js
array[index]; // retorna o valor no índice
```

### 📏 Tamanho
```js
array.length;
```

### ➕ Adicionar itens
```js
array.push("fim");    // adiciona no final
array.unshift("início"); // adiciona no início
```

### ➖ Remover itens
```js
array.pop();     // remove do final
array.shift();   // remove do início
```

### 🔁 Percorrer com `for`
```js
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

### ✅ `forEach()`
```js
array.forEach((item) => {
  console.log(item);
});
```

### 🧱 `map()` – transforma os dados
```js
const dobro = numeros.map(n => n * 2);
```

### 🔍 `filter()` – filtra os dados
```js
const pares = numeros.filter(n => n % 2 === 0);
```

### 🔍 `find()` – encontra o primeiro item que satisfaz a condição
```js
const encontrado = numeros.find(n => n > 2);
```

---

## 🛠️ Outras operações úteis

### `includes()` – verifica se um item existe
```js
array.includes("banana"); // true ou false
```

### `indexOf()` – retorna a posição do item
```js
array.indexOf("banana"); // 1
```

### `splice()` – remove ou substitui elementos
```js
array.splice(1, 2); // remove 2 elementos a partir do índice 1
```

### `slice()` – cria uma cópia parcial do array
```js
const sub = array.slice(0, 2);
```

---

## 🧬 Arrays com Objetos

Você pode ter arrays de objetos, muito usados para representar listas de dados:

```js
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 }
];

usuarios.forEach(user => console.log(user.nome));
```

---

## 🚨 Cuidados comuns

- Índices começam em **0**, não em 1.
- `length` retorna o número de elementos, **não o maior índice**.
- Arrays são **mutáveis**, mesmo quando declarados com `const`.

---

## 📚 Desafio Rápido

1. Crie um array com os dias da semana.
2. Adicione "domingo" ao início e "sábado" ao fim.
3. Remova a quarta-feira.
4. Imprima a nova lista formatada.

---

## 🧠 Conclusão

Arrays são versáteis e poderosos no JavaScript. Compreendê-los bem é essencial para manipulação de dados, integração com APIs, e construção de interfaces modernas.

---

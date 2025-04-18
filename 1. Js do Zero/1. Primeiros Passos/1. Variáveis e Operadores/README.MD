# 📘 Variáveis e Operadores em JavaScript

Este repositório contém anotações, exemplos e exercícios sobre dois dos fundamentos mais importantes da linguagem JavaScript: **Variáveis** e **Operadores**.

## 🔹 Variáveis

Variáveis são usadas para armazenar dados que podem ser utilizados e manipulados ao longo do código.

### Tipos de declaração

- `var`: Escopo de função. Pode ser redeclarada e seu uso é desencorajado.
- `let`: Escopo de bloco. Pode ser atualizada, mas não redeclarada no mesmo escopo.
- `const`: Escopo de bloco. Não pode ser atualizada nem redeclarada.

### Exemplo:
```js
var nome = "João";
let idade = 25;
const PI = 3.14;

idade = 26; // válido
// PI = 3.1415; // inválido! const não pode ser reatribuída
```

---

## 🔹 Tipos de Dados

Alguns dos principais tipos primitivos em JavaScript:

- `String` → `"texto"`
- `Number` → `42`, `3.14`
- `Boolean` → `true`, `false`
- `Null` → ausência intencional de valor
- `Undefined` → valor não atribuído
- `Object`, `Array`, `Function` → tipos estruturais

---

## 🔸 Operadores

Operadores permitem realizar operações com valores e variáveis.

### Aritméticos
```js
+  // soma
-  // subtração
*  // multiplicação
/  // divisão
%  // resto da divisão
** // exponenciação
```

### Atribuição
```js
let x = 10;
x += 5; // equivale a x = x + 5
```

### Comparação
```js
==  // compara valores (sem considerar o tipo)
=== // compara valores e tipos (mais recomendado)
!=  // diferente
!== // diferente valor ou tipo
>   // maior que
<   // menor que
>=  // maior ou igual
<=  // menor ou igual
```

### Lógicos
```js
&& // E lógico
|| // OU lógico
!  // NÃO lógico
```

---

## 🧪 Exemplos e Exercícios

Neste repositório, você encontrará arquivos `.js` com exemplos práticos e exercícios para fixação de conteúdo, como:

- Criar e modificar variáveis
- Usar operadores para cálculos matemáticos
- Comparações lógicas e condicionais simples

---

## 📚 Recomendação de Leitura

- [MDN Web Docs - Variáveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#declara%C3%A7%C3%B5es_de_vari%C3%A1veis)
- [MDN Web Docs - Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)

---

## 🚀 Objetivo

Servir como base sólida para quem está iniciando em JavaScript, com foco em entender como variáveis e operadores funcionam na prática.
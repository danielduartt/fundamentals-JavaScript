# 📂 1. Variáveis, Escopo e Tipos de Dados em JavaScript 🚀

## 📜 Índice

1.  [Variáveis 📦](#-variáveis-)
    *   [Declaração: `var`, `let`, `const`](#declaração-var-let-const)
    *   [Hoisting (Içamento)](#hoisting-içamento)
    *   [Boas Práticas de Nomenclatura](#boas-práticas-de-nomenclatura)
2.  [Escopo (Scope) 🎯](#-escopo-scope-)
    *   [Escopo Global](#escopo-global)
    *   [Escopo de Função (Local)](#escopo-de-função-local)
    *   [Escopo de Bloco (`let` e `const`)](#escopo-de-bloco-let-e-const)
    *   [Escopo Léxico (Estático)](#escopo-léxico-estático)
3.  [Tipos de Dados 🧱](#-tipos-de-dados-)
    *   [Tipagem Dinâmica](#tipagem-dinâmica)
    *   [Tipos Primitivos](#tipos-primitivos)
        *   [`String`](#string-)
        *   [`Number`](#number-)
        *   [`Boolean`](#boolean-)
        *   [`Null`](#null-)
        *   [`Undefined`](#undefined-)
        *   [`Symbol` (ES6)](#symbol-es6)
        *   [`BigInt` (ES2020)](#bigint-es2020)
    *   [Tipo de Referência (Objeto)](#tipo-de-referência-objeto)
        *   [`Object`](#object-)
        *   [`Array`](#array-)
        *   [`Function`](#function-)
    *   [Verificando Tipos com `typeof`](#verificando-tipos-com-typeof)

---

## 📦 Variáveis <a name="-variáveis-"></a>

Variáveis são como "contêineres" ou "etiquetas" que usamos para armazenar e referenciar valores na memória durante a execução de um programa.

### Declaração: `var`, `let`, `const`

JavaScript oferece três palavras-chave para declarar variáveis:

*   **`var`**: A forma mais antiga de declarar variáveis.
    *   Possui escopo de função ou escopo global.
    *   Pode ser redeclarada e atualizada.
    *   Sofre hoisting (sua declaração é movida para o topo do escopo).

    ```javascript
    // Exemplo com var
    var nome = "Alice";
    console.log(nome); // Saída: Alice

    var nome = "Bob"; // Redeclarado
    console.log(nome); // Saída: Bob

    if (true) {
      var idadeVar = 30;
    }
    console.log(idadeVar); // Saída: 30 (acessível fora do bloco if)
    ```

*   **`let`**: Introduzida no ES6 (ECMAScript 2015).
    *   Possui escopo de bloco (`{}`).
    *   Não pode ser redeclarada no mesmo escopo.
    *   Pode ser atualizada.
    *   Sofre hoisting, mas entra na "Temporal Dead Zone" (TDZ) até a inicialização.

    ```javascript
    // Exemplo com let
    let cidade = "São Paulo";
    console.log(cidade); // Saída: São Paulo

    // let cidade = "Rio de Janeiro"; // Erro: SyntaxError: Identifier 'cidade' has already been declared
    cidade = "Rio de Janeiro"; // Atualizado
    console.log(cidade); // Saída: Rio de Janeiro

    if (true) {
      let estadoLet = "SP";
      console.log(estadoLet); // Saída: SP
    }
    // console.log(estadoLet); // Erro: ReferenceError: estadoLet is not defined
    ```

*   **`const`**: Também introduzida no ES6.
    *   Possui escopo de bloco.
    *   Não pode ser redeclarada nem reatribuída (para tipos primitivos).
    *   Deve ser inicializada no momento da declaração.
    *   Para objetos e arrays, a referência é constante, mas o conteúdo interno pode ser modificado.
    *   Sofre hoisting (TDZ).

    ```javascript
    // Exemplo com const
    const PAIS = "Brasil";
    console.log(PAIS); // Saída: Brasil

    // PAIS = "Argentina"; // Erro: TypeError: Assignment to constant variable.
    // const PAIS = "Portugal"; // Erro: SyntaxError

    const pessoa = { nome: "Carlos", idade: 25 };
    pessoa.idade = 26; // Válido: modifica propriedade do objeto
    console.log(pessoa); // Saída: { nome: 'Carlos', idade: 26 }

    // pessoa = { nome: "Ana" }; // Erro: TypeError: Assignment to constant variable.
    ```

💡 **Recomendação:** Prefira `const` por padrão. Use `let` apenas quando souber que a variável precisará ser reatribuída. Evite `var` em código moderno para evitar comportamentos inesperados devido ao seu escopo e hoisting.

### Hoisting (Içamento)

Hoisting é o comportamento do JavaScript de mover as declarações de variáveis e funções para o topo de seu escopo (global ou de função para `var`, ou bloco para `let`/`const` antes da TDZ) durante a fase de compilação.

```javascript
console.log(minhaVar); // Saída: undefined (devido ao hoisting de var)
var minhaVar = "Olá";

// Com let e const, o hoisting ocorre, mas acessá-las antes da declaração resulta em erro:
// console.log(minhaLet); // Erro: ReferenceError: Cannot access 'minhaLet' before initialization (TDZ)
let minhaLet = "Mundo";
```

### Boas Práticas de Nomenclatura 🏷️

*   Use nomes significativos e descritivos.
*   Use `camelCase` para variáveis (ex: `nomeCompletoUsuario`).
*   Para constantes que representam valores fixos e imutáveis, pode-se usar `UPPER_SNAKE_CASE` (ex: `MAX_USUARIOS`).
*   Evite nomes muito curtos ou abreviações confusas.

---

## 🎯 Escopo (Scope) <a name="-escopo-scope-"></a>

Escopo determina a acessibilidade (visibilidade) de variáveis e funções em diferentes partes do seu código.

### Escopo Global

Variáveis declaradas fora de qualquer função ou bloco têm escopo global. Elas são acessíveis de qualquer lugar no seu código.

```javascript
let variavelGlobal = "Eu sou global!";

function mostrarGlobal() {
  console.log(variavelGlobal); // Acessível aqui
}
mostrarGlobal(); // Saída: Eu sou global!
console.log(variavelGlobal); // Acessível aqui também
```
⚠️ **Cuidado:** Poluir o escopo global com muitas variáveis pode levar a conflitos de nomes e dificultar a manutenção.

### Escopo de Função (Local)

Variáveis declaradas dentro de uma função (com `var`, `let` ou `const`) têm escopo de função. Elas são acessíveis apenas dentro dessa função.

```javascript
function minhaFuncao() {
  let variavelLocal = "Eu sou local!";
  var outraLocal = "Também sou local!";
  console.log(variavelLocal); // Saída: Eu sou local!
}

minhaFuncao();
// console.log(variavelLocal); // Erro: ReferenceError: variavelLocal is not defined
// console.log(outraLocal); // Erro: ReferenceError: outraLocal is not defined
```

### Escopo de Bloco (`let` e `const`)

Variáveis declaradas com `let` e `const` dentro de um bloco de código (delimitado por `{}`) têm escopo de bloco. Elas são acessíveis apenas dentro desse bloco.

```javascript
if (true) {
  let variavelDeBloco = "Estou em um bloco";
  const constanteDeBloco = "Também estou no bloco";
  console.log(variavelDeBloco); // Saída: Estou em um bloco
}
// console.log(variavelDeBloco); // Erro: ReferenceError: variavelDeBloco is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // i é acessível aqui (escopo de bloco do for)
}
// console.log(i); // Erro: ReferenceError: i is not defined
```

### Escopo Léxico (Estático)

JavaScript usa escopo léxico (ou estático), o que significa que o escopo de uma variável é determinado pela sua localização no código no momento da escrita, e não em tempo de execução. Funções aninhadas têm acesso às variáveis de suas funções externas (closures).

```javascript
function externa() {
  let mensagemExterna = "Olá da função externa!";

  function interna() {
    // A função interna tem acesso a 'mensagemExterna'
    console.log(mensagemExterna);
  }

  interna();
}

externa(); // Saída: Olá da função externa!
```

---

## 🧱 Tipos de Dados <a name="-tipos-de-dados-"></a>

Tipos de dados especificam que tipo de valor uma variável pode conter.

### Tipagem Dinâmica

JavaScript é uma linguagem de **tipagem dinâmica**. Isso significa que você não precisa declarar o tipo de uma variável ao criá-la, e o tipo da variável pode mudar durante a execução do programa.

```javascript
let valor = "Sou uma string";
console.log(typeof valor); // Saída: string

valor = 100;
console.log(typeof valor); // Saída: number

valor = true;
console.log(typeof valor); // Saída: boolean
```

### Tipos Primitivos

São dados imutáveis (não podem ter seu valor alterado diretamente, uma nova atribuição cria um novo valor na memória).

*   #### `String` 🔤
    Sequência de caracteres, usada para texto. Pode ser delimitada por aspas simples (`' '`), duplas (`" "`) ou crases (template literals: `` ` ``).
    ```javascript
    let saudacao = "Olá, mundo!";
    let nomeUsuario = 'Maria';
    let frase = `Bem-vinda, ${nomeUsuario}!`; // Template literal
    console.log(frase); // Saída: Bem-vinda, Maria!
    ```

*   #### `Number` 🔢
    Representa números, tanto inteiros quanto de ponto flutuante. Inclui valores especiais como `Infinity`, `-Infinity` e `NaN` (Not a Number).
    ```javascript
    let idade = 30;
    let preco = 19.99;
    let resultado = 0 / 0; // NaN
    console.log(resultado); // Saída: NaN
    ```

*   #### `Boolean` ✅
    Representa um valor lógico: `true` ou `false`.
    ```javascript
    let ativo = true;
    let finalizado = false;
    console.log(10 > 5); // Saída: true
    ```

*   #### `Null` 👻
    Representa a ausência intencional de qualquer valor de objeto. É um valor atribuído explicitamente.
    ```javascript
    let objetoNulo = null;
    console.log(objetoNulo); // Saída: null
    console.log(typeof objetoNulo); // Saída: "object" (uma peculiaridade histórica do JS)
    ```

*   #### `Undefined` ❓
    Indica que uma variável foi declarada, mas ainda não teve um valor atribuído. Também é o valor retornado por funções que não retornam nada explicitamente.
    ```javascript
    let variavelNaoDefinida;
    console.log(variavelNaoDefinida); // Saída: undefined
    console.log(typeof variavelNaoDefinida); // Saída: "undefined"
    ```

*   #### `Symbol` (ES6) 💠
    Tipo de dado cujas instâncias são únicas e imutáveis. Usado principalmente para criar chaves de propriedade de objeto "ocultas" ou únicas.
    ```javascript
    const idUnico = Symbol('descricaoOpcional');
    const outroId = Symbol('descricaoOpcional');
    console.log(idUnico === outroId); // Saída: false
    ```

*   #### `BigInt` (ES2020) 🐘
    Usado para representar e manipular inteiros maiores do que o limite seguro para `Number` (`Number.MAX_SAFE_INTEGER`).
    ```javascript
    const numeroMuitoGrande = 9007199254740991n; // Note o 'n' no final
    const outroGrande = BigInt("9007199254740992");
    console.log(numeroMuitoGrande + 1n);
    ```

### Tipo de Referência (Objeto)

*   #### `Object` 🧩
    O tipo de dado mais complexo. É uma coleção de pares chave-valor (propriedades). Quase tudo em JavaScript que não é um tipo primitivo é um objeto.
    ```javascript
    let carro = {
      marca: "Toyota",
      modelo: "Corolla",
      ano: 2023,
      ligar: function() {
        console.log("Carro ligado!");
      }
    };
    console.log(carro.marca); // Saída: Toyota
    carro.ligar(); // Saída: Carro ligado!
    ```

*   #### `Array` 📊
    Um tipo especial de objeto, usado para armazenar listas ordenadas de valores. Os índices são numéricos.
    ```javascript
    let frutas = ["Maçã", "Banana", "Laranja"];
    console.log(frutas[0]); // Saída: Maçã
    frutas.push("Uva"); // Adiciona ao final
    console.log(frutas.length); // Saída: 4
    ```

*   #### `Function` ⚙️
    Também são um tipo especial de objeto. São blocos de código reutilizáveis que podem ser chamados (invocados) para executar uma tarefa.
    ```javascript
    function somar(a, b) {
      return a + b;
    }
    let resultadoSoma = somar(5, 3);
    console.log(resultadoSoma); // Saída: 8
    console.log(typeof somar); // Saída: "function"
    ```

### Verificando Tipos com `typeof` 🔍

O operador `typeof` retorna uma string indicando o tipo de um operando.

```javascript
console.log(typeof "Olá");       // "string"
console.log(typeof 100);         // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (peculiaridade)
console.log(typeof Symbol());    // "symbol"
console.log(typeof 123n);        // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (arrays são objetos)
console.log(typeof function(){});// "function" (funções são objetos especiais)
```

---

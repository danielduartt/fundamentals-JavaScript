# 🚀 Exercícios sobre Funções em JavaScript

Este repositório contém uma série de exercícios práticos para ajudar no aprendizado e domínio de funções em JavaScript. Os exercícios estão organizados por nível de dificuldade.

## 📚 Índice

- [Básico](#básico)
- [Intermediário](#intermediário)
- [Avançado](#avançado)
- [Soluções](#soluções)

## Básico

### 1. Função de Saudação
Crie uma função chamada `saudar` que receba um nome como parâmetro e retorne uma mensagem de saudação.

```javascript
// Exemplo:
// saudar("Maria") → "Olá, Maria!"
// saudar("João") → "Olá, João!"
```

### 2. Calculadora Básica
Crie uma função chamada `calcular` que receba dois números e uma operação ('+', '-', '*', '/') e retorne o resultado da operação.

```javascript
// Exemplo:
// calcular(5, 3, '+') → 8
// calcular(10, 2, '*') → 20
```

### 3. Verificador de Paridade
Crie uma função chamada `ehPar` que receba um número e retorne `true` se o número for par e `false` se for ímpar.

```javascript
// Exemplo:
// ehPar(4) → true
// ehPar(7) → false
```

### 4. Conversor de Temperatura
Crie uma função chamada `celsiusParaFahrenheit` que converta temperatura de Celsius para Fahrenheit.

```javascript
// Fórmula: F = C * 9/5 + 32
// Exemplo:
// celsiusParaFahrenheit(0) → 32
// celsiusParaFahrenheit(20) → 68
```

### 5. Contador de Vogais
Crie uma função chamada `contarVogais` que receba uma string e retorne o número de vogais nela.

```javascript
// Exemplo:
// contarVogais("javascript") → 3
// contarVogais("hello") → 2
```

## Intermediário

### 6. Função com Arrow Function
Converta as funções anteriores para arrow functions.

```javascript
// Exemplo:
// const saudar = (nome) => `Olá, ${nome}!`;
```

### 7. Funções de Alta Ordem
Crie uma função `aplicarOperacao` que receba dois números e uma função de operação como parâmetros.

```javascript
// Exemplo:
// const soma = (a, b) => a + b;
// aplicarOperacao(5, 3, soma) → 8
```

### 8. Closure para Contador
Crie uma função que retorne outra função que funcione como um contador incrementável.

```javascript
// Exemplo:
// const contador = criarContador();
// contador() → 1
// contador() → 2
// contador() → 3
```

### 9. Memoização Simples
Crie uma função que memorize resultados de cálculos para não repeti-los.

```javascript
// Exemplo:
// const fibonacci = memoize((n) => {...});
```

### 10. Promises Básicas
Crie uma função que simule uma chamada de API usando Promises.

```javascript
// Exemplo:
// buscarDados(id).then(dados => console.log(dados));
```

## Avançado

### 11. Currying
Implemente uma função que converta uma função com múltiplos argumentos em uma sequência de funções com um único argumento.

```javascript
// Exemplo:
// const soma = (a, b, c) => a + b + c;
// const somaCurried = curry(soma);
// somaCurried(1)(2)(3) → 6
```

### 12. Composição de Funções
Crie uma função `compose` que combine múltiplas funções em uma única.

```javascript
// Exemplo:
// const dobrar = x => x * 2;
// const adicionar5 = x => x + 5;
// const funcaoComposta = compose(dobrar, adicionar5);
// funcaoComposta(3) → 16
```

### 13. Debounce Implementation
Implemente uma função `debounce` que adie a execução de uma função até que um determinado tempo passe após a última chamada.

```javascript
// Exemplo:
// const debouncedFunc = debounce(() => console.log('Executado!'), 1000);
```

### 14. Async/Await com Retry
Crie uma função que tente executar uma operação assíncrona N vezes antes de falhar.

```javascript
// Exemplo:
// await retryAsync(funcaoAssincrona, 3);
```

### 15. Generator Pattern
Crie um generator para sequência de Fibonacci infinita.

```javascript
// Exemplo:
// const fib = fibonacciGenerator();
// fib.next() → 0
// fib.next() → 1
// fib.next() → 1
```

## 🎯 Como Usar

1. Clone este repositório
2. Crie um arquivo JavaScript para cada exercício
3. Implemente as funções conforme os requisitos
4. Execute seus testes para validar as soluções

## ✅ Dicas para Resolver

- Comece pelos exercícios básicos para entender os conceitos fundamentais
- Use `console.log()` para debugar seus códigos
- Consulte a documentação MDN para funções JavaScript
- Teste cada função com diferentes valores de entrada
- Tente resolver sem consultar as soluções primeiro

## 📝 Soluções

Crie um arquivo `solucoes.js` e implemente todas as funções. Uma solução de exemplo será fornecida após tentar resolver por conta própria.

### Estrutura Sugerida para Solução:

```javascript
// soluções.js

// Básico
function saudar(nome) {
  // seu código aqui
}

function calcular(a, b, operacao) {
  // seu código aqui
}

// ... continue com as outras funções ...
```

## 🤝 Contribuições

Sinta-se à vontade para contribuir com mais exercícios ou melhorias através de pull requests.

## 📖 Recursos Adicionais

- [MDN Web Docs - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Funções](https://javascript.info/function-basics)
- [Eloquent JavaScript - Funções](https://eloquentjavascript.net/03_functions.html)

---

**Bons estudos e divirta-se codando!** 💻✨
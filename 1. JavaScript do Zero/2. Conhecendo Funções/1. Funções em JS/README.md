# 🚀 Funções em JavaScript: Guia Completo

Uma função é um bloco de código que executa uma tarefa específica, podendo ser invocado (chamado) múltiplas vezes ao longo do programa. Funções são fundamentais para organizar código, evitar repetição e criar lógica reutilizável.

## 📌 Declaração de Funções

A forma mais tradicional de criar uma função em JavaScript é através da declaração:

```javascript
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Maria')); // "Olá, Maria!"
```

### ✨ Características
- Sofre hoisting (pode ser chamada antes da declaração)
- Usa a palavra-chave `function`
- Sempre recebe um nome

## 🔍 Expressões de Função

Funções também podem ser atribuídas a variáveis:

```javascript
const calculaArea = function(largura, altura) {
    return largura * altura;
};

console.log(calculaArea(5, 3)); // 15
```

### 🎭 Funções Anônimas
Funções sem nome que podem ser usadas como valores:

```javascript
setTimeout(function() {
    console.log('Executou após 1 segundo');
}, 1000);
```

## ➡️ Arrow Functions

Introduzidas no ES6, oferecem uma sintaxe mais concisa:

```javascript
// Sintaxe completa
const soma = (a, b) => {
    return a + b;
};

// Sintaxe reduzida para uma linha
const multiplica = (a, b) => a * b;

// Com um único parâmetro
const dobra = n => n * 2;

// Sem parâmetros
const horario = () => new Date().toLocaleTimeString();
```

### ⚠️ Particularidades
- Não possuem seu próprio `this`
- Não podem ser usadas como construtores
- Não possuem objeto `arguments`

## 📝 Parâmetros e Argumentos

### 🎯 Parâmetros Padrão
```javascript
function potencia(base, expoente = 2) {
    return Math.pow(base, expoente);
}

console.log(potencia(3));    // 9 (expoente padrão 2)
console.log(potencia(3, 3)); // 27
```

### 🌟 Rest Parameters
```javascript
function soma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(soma(1, 2, 3, 4, 5)); // 15
```

### 🏷️ Parâmetros Nomeados (Desestruturação)
```javascript
function criarUsuario({ nome, idade, email }) {
    return {
        nome,
        idade,
        email,
        dataCriacao: new Date()
    };
}

const usuario = criarUsuario({
    nome: 'João',
    idade: 30,
    email: 'joao@exemplo.com'
});
```

## 🔄 Return

O `return` especifica o valor que será retornado pela função:

```javascript
function calcularPrecoFinal(preco, desconto = 0) {
    if (desconto < 0 || desconto > 100) {
        return 'Desconto inválido';
    }
    return preco - (preco * desconto / 100);
}

console.log(calcularPrecoFinal(100, 20)); // 80
```

### 🏁 Early Return
```javascript
function processarDados(dados) {
    if (!dados) return null;
    if (dados.length === 0) return [];
    
    // Processamento aqui
    return dados.map(item => item.trim());
}
```

## 🔒 Escopo de Funções

### 🏠 Escopo Local
```javascript
function escopoLocal() {
    let variavelLocal = 'Só acessível dentro da função';
    console.log(variavelLocal);
}

// console.log(variavelLocal); // Erro: variavelLocal não está definida
```

### 🌍 Escopo Global
```javascript
let variavelGlobal = 'Acessível em qualquer lugar';

function acessaGlobal() {
    console.log(variavelGlobal);
}

acessaGlobal(); // "Acessível em qualquer lugar"
```

## 🔐 Closures

Funções que lembram do ambiente em que foram criadas:

```javascript
function criarContador() {
    let contador = 0;
    
    return function() {
        contador++;
        return contador;
    };
}

const contador1 = criarContador();
console.log(contador1()); // 1
console.log(contador1()); // 2

const contador2 = criarContador();
console.log(contador2()); // 1
```

## 📞 Callbacks

Funções passadas como argumento para outras funções:

```javascript
function processarArray(array, callback) {
    const resultado = [];
    for (let item of array) {
        resultado.push(callback(item));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4];
const dobrados = processarArray(numeros, n => n * 2);
console.log(dobrados); // [2, 4, 6, 8]
```

## 👑 Funções como Cidadãos de Primeira Classe

Em JavaScript, funções podem ser:
- Atribuídas a variáveis
- Passadas como argumentos
- Retornadas de outras funções

```javascript
const operacoes = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => a / b
};

function calculadora(operacao, a, b) {
    return operacoes[operacao](a, b);
}

console.log(calculadora('soma', 5, 3)); // 8
```

## ⏳ Funções Assíncronas

### 🔮 Funções com Promises
```javascript
function buscarDados(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, nome: 'Usuário' });
            } else {
                reject('ID inválido');
            }
        }, 1000);
    });
}

buscarDados(1)
    .then(dados => console.log(dados))
    .catch(erro => console.error(erro));
```

### ⚡ Async/Await
```javascript
async function obterUsuarioCompleto(id) {
    try {
        const usuario = await buscarDados(id);
        const perfil = await buscarPerfil(usuario.id);
        return { ...usuario, ...perfil };
    } catch (erro) {
        console.error('Erro:', erro);
        return null;
    }
}

// Função auxiliar para o exemplo
async function buscarPerfil(userId) {
    return { bio: 'Developer', cargo: 'Engenheiro' };
}
```

## 🌟 Boas Práticas

1. **📚 Nomenclatura Clara**
   ```javascript
   // ❌ Ruim
   function f(u) {
       return u.a + u.b;
   }
   
   // ✅ Bom
   function calcularTotal(item) {
       return item.preco + item.imposto;
   }
   ```

2. **🎯 Princípio da Responsabilidade Única**
   ```javascript
   // ❌ Ruim
   function salvarUsuarioEEnviarEmail(usuario) {
       // Salva no banco
       // Envia email
   }
   
   // ✅ Bom
   function salvarUsuario(usuario) {
       // Apenas salva no banco
   }
   
   function enviarEmailBoasVindas(usuario) {
       // Apenas envia email
   }
   ```

3. **📏 Funções Curtas e Focadas**
   - Mantenha funções pequenas e com uma única responsabilidade
   - Se a função passar de 20-30 linhas, considere dividí-la

4. **📝 Documentação com JSDoc**
   ```javascript
   /**
    * Calcula o desconto baseado no valor total e no cupom
    * @param {number} valor - Valor total da compra
    * @param {string} cupom - Código do cupom de desconto
    * @returns {number} - Valor do desconto
    */
   function calcularDesconto(valor, cupom) {
       // implementação
   }
   ```

5. **🛡️ Tratamento de Erros**
   ```javascript
   function dividir(a, b) {
       if (b === 0) {
           throw new Error('Divisão por zero não permitida');
       }
       return a / b;
   }
   ```

6. **🔒 Imutabilidade**
   ```javascript
   // ❌ Ruim - Modifica o array original
   function adicionarItem(array, item) {
       array.push(item);
       return array;
   }
   
   // ✅ Bom - Retorna novo array
   function adicionarItem(array, item) {
       return [...array, item];
   }
   ```

## 🎯 Conclusão

Funções são peças fundamentais na programação JavaScript, permitindo organizar código, criar lógica reutilizável e implementar padrões arquiteturais. Dominar os diferentes tipos de funções e suas características é essencial para desenvolver aplicações eficientes e manuteníveis.

Para continuar aprendendo, experimente:
- 🔨 Criar funções de alta ordem (funções que retornam funções)
- 🧠 Implementar padrões como memoização e throttling
- 🌈 Explorar functional programming com JavaScript
- 💪 Praticar com closures e funções assíncronas

Lembre-se: funções bem escritas são a base de código limpo e eficiente! 🚀
## 🧪 Lista de Exercícios – Funções e Manipulação de Listas com JavaScript

### 🔹 **Funções**

1. **Crie uma função `saudacao(nome)` que retorne a string "Olá, \[nome]!".**

   > Exemplo: `saudacao("Lucas") // "Olá, Lucas!"`

2. **Crie uma função de ordem superior `operar(a, b, operacao)` que receba dois números e uma função de operação (soma, subtração, etc).**

   > Use `operar(10, 5, (x, y) => x - y)` para testar.

3. **Reescreva a função abaixo usando arrow function:**

   ```js
   function dobro(n) {
     return n * 2;
   }
   ```

4. **Crie uma função `contador()` que retorna outra função que incrementa e exibe um número interno (closure).**

   > Use a função várias vezes e observe o valor acumulado.

5. **Utilize `call` para alterar o contexto de uma função que retorna `this.nome`.**

   > Dica: crie dois objetos diferentes com a propriedade `nome`.

---

### 🔹 **Manipulação de Listas**

6. **Crie um array com os números de 1 a 10 e use `forEach` para exibir cada número no console.**

7. **Use `filter` para criar um novo array contendo apenas os números pares do array anterior.**

8. **Use `map` para criar um novo array onde cada número é multiplicado por 3.**

9. **Use `reduce` para calcular a soma de todos os números do array original.**

10. **Combine `filter`, `map` e `reduce` para:**

    * Filtrar números maiores que 5
    * Multiplicar por 2
    * Somar todos os resultados

    > Tudo em uma única cadeia de chamadas.

---

## ✅ Gabarito – Exercícios de Funções e Manipulação de Listas

### 🔹 **Funções**

1. **Função `saudacao(nome)`**

   ```js
   function saudacao(nome) {
     return `Olá, ${nome}!`;
   }
   // Teste
   console.log(saudacao("Lucas")); // Olá, Lucas!
   ```

2. **Função de ordem superior `operar`**

   ```js
   function operar(a, b, operacao) {
     return operacao(a, b);
   }
   // Teste
   console.log(operar(10, 5, (x, y) => x - y)); // 5
   ```

3. **Reescrevendo como arrow function**

   ```js
   const dobro = n => n * 2;
   console.log(dobro(4)); // 8
   ```

4. **Closure – função `contador`**

   ```js
   function contador() {
     let count = 0;
     return function() {
       count++;
       console.log(count);
     };
   }

   const incrementar = contador();
   incrementar(); // 1
   incrementar(); // 2
   incrementar(); // 3
   ```

5. **Usando `call` para alterar o contexto**

   ```js
   function apresentar() {
     return `Olá, meu nome é ${this.nome}`;
   }

   const pessoa1 = { nome: "Ana" };
   const pessoa2 = { nome: "Carlos" };

   console.log(apresentar.call(pessoa1)); // Olá, meu nome é Ana
   console.log(apresentar.call(pessoa2)); // Olá, meu nome é Carlos
   ```

---

### 🔹 **Manipulação de Listas**

6. **`forEach` com array de 1 a 10**

   ```js
   const numeros = [1,2,3,4,5,6,7,8,9,10];
   numeros.forEach(num => console.log(num));
   ```

7. **`filter` – apenas pares**

   ```js
   const pares = numeros.filter(num => num % 2 === 0);
   console.log(pares); // [2, 4, 6, 8, 10]
   ```

8. **`map` – multiplicar por 3**

   ```js
   const triplicados = numeros.map(num => num * 3);
   console.log(triplicados); // [3, 6, 9, ..., 30]
   ```

9. **`reduce` – somar todos os números**

   ```js
   const soma = numeros.reduce((acc, num) => acc + num, 0);
   console.log(soma); // 55
   ```

10. **Encadeando `filter`, `map` e `reduce`**

```js
const resultado = numeros
  .filter(num => num > 5)        // [6, 7, 8, 9, 10]
  .map(num => num * 2)           // [12, 14, 16, 18, 20]
  .reduce((acc, num) => acc + num, 0); // 80

console.log(resultado); // 80
```

---

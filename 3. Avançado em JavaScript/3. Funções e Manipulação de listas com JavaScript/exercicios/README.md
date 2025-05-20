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

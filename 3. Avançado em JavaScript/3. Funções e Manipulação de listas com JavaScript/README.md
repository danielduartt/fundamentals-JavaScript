# 🔁 Funções e Manipulação de Listas com JavaScript

Bem-vindo(a)! Nesta parte do repositório, você aprenderá como **criar e utilizar funções** em JavaScript, além de dominar as principais técnicas para **manipular listas (arrays)** — um dos pilares da programação prática. 💡💻

---

## 🔧 Funções em JavaScript

Funções são blocos reutilizáveis de código que executam uma tarefa específica. Elas ajudam a tornar seu código **modular**, **legível** e **fácil de manter**.

### 📌 Sintaxes comuns

```js
// Função declarativa
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

// Função anônima atribuída a variável
const saudacao = function(nome) {
  return `Olá, ${nome}!`;
};

// Arrow function (função de seta)
const saudacao = (nome) => `Olá, ${nome}!`;
````

✅ **Dica**: use `return` para devolver valores da função, e lembre-se que funções podem receber *parâmetros* e retornar qualquer tipo de dado.

---

## 📚 Manipulação de Listas (Arrays)

Arrays em JavaScript são objetos usados para armazenar múltiplos valores em uma única variável. A manipulação de listas é essencial para trabalhar com dados dinâmicos.

### 🔨 Métodos mais comuns

```js
const frutas = ['🍎', '🍌', '🍇'];

// Adicionar e remover
frutas.push('🍍'); // adiciona no final
frutas.pop(); // remove do final
frutas.unshift('🍓'); // adiciona no início
frutas.shift(); // remove do início

// Percorrer elementos
frutas.forEach((fruta) => console.log(fruta));

// Criar novo array baseado em outro
const sucos = frutas.map((fruta) => fruta + ' 🍹');

// Filtrar elementos
const frutasComA = frutas.filter((fruta) => fruta.includes('a'));

// Reduzir array a um único valor
const totalCaracteres = frutas.reduce((acc, fruta) => acc + fruta.length, 0);
```

🧠 **Importante**: arrays são **mutáveis**, e muitos métodos os alteram diretamente (como `push`, `pop`). Já métodos como `map`, `filter` e `reduce` retornam **novos arrays** ou valores.

---

## 🧪 O que você encontrará nesta pasta

📁 `exemplos/` — Exemplos comentados de uso de funções e arrays
📁 `exercicios/` — Desafios práticos para aplicar os conceitos
📄 `notas.md` — Anotações teóricas e observações sobre boas práticas

---

## ⚙️ Boas Práticas

* Dê **nomes claros** para suas funções e variáveis.
* Prefira funções **puras** (sem efeitos colaterais) sempre que possível.
* Use métodos de array modernos (`map`, `filter`, `reduce`) para soluções mais concisas e funcionais.

---

## ✅ Conclusão

Com funções e listas, você já consegue escrever códigos que fazem muito! Continue explorando, testando e aplicando os conceitos aprendidos. 🚀📈

---

📚 *Referência complementar:*

* [MDN - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
* [MDN - Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

---
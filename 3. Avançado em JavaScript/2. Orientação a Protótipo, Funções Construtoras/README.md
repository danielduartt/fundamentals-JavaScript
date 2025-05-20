
**`2. Orientação a Protótipo, Funções Construtoras`**

---

````markdown
# 🧱 2. Orientação a Protótipo, Funções Construtoras

Bem-vindo à segunda etapa do nosso repositório! Neste módulo, exploramos os fundamentos da **orientação a protótipo** em JavaScript e o uso de **funções construtoras** para criação de objetos reutilizáveis de forma eficiente. 🚀

---

## 🧠 Teoria

### 🧬 Orientação a Protótipo

Em JavaScript, quase tudo é um objeto — e todos os objetos têm uma propriedade interna chamada `[[Prototype]]`, que é uma referência a outro objeto. Isso forma uma **cadeia de protótipos**, conhecida como *prototype chain*.

Essa abordagem permite que objetos compartilhem propriedades e métodos entre si sem a necessidade de duplicação de código. É o modelo de herança do JavaScript, diferente de linguagens como Java ou Python.

🔗 **Exemplo simples:**

```js
const animal = {
  fazerSom() {
    console.log("Som genérico");
  }
};

const cachorro = Object.create(animal);
cachorro.fazerSom(); // Som genérico
````

> Aqui, `cachorro` herda o método `fazerSom` de `animal` através da cadeia de protótipos.

---

### 🛠️ Funções Construtoras

Antes do `class` (ECMAScript 2015), a maneira padrão de criar objetos com "classes" em JavaScript era através das **funções construtoras**.

Uma função construtora é apenas uma função normal que, quando chamada com a palavra-chave `new`, cria um novo objeto e define seu protótipo automaticamente.

🔧 **Exemplo:**

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function() {
  console.log(`Olá, meu nome é ${this.nome}`);
};

const joao = new Pessoa("João", 25);
joao.falar(); // Olá, meu nome é João
```

> Aqui, `Pessoa` é uma função construtora. O método `falar` é adicionado ao seu protótipo, sendo compartilhado por todas as instâncias.

---

## 🧪 O que você encontrará nesta pasta

📁 `exemplos/` — Códigos ilustrando o uso de protótipos e funções construtoras
📁 `exercicios/` — Exercícios práticos para você aplicar os conceitos aprendidos
📄 `notas.md` — Anotações teóricas e observações úteis sobre o conteúdo

---

## 💡 Dicas úteis

* Sempre que possível, adicione métodos ao **protótipo** da função construtora para evitar duplicação em cada instância.
* Use `Object.create()` quando quiser herdar de um objeto específico sem usar classes.
* Verifique a herança com `obj.__proto__` ou `Object.getPrototypeOf(obj)` (embora a primeira seja obsoleta).

---

## ✅ Conclusão

Com a orientação a protótipo e as funções construtoras, você pode criar estruturas de objetos mais performáticas e organizadas no JavaScript, dominando os bastidores da linguagem. 🧠✨

---

📚 *Referência complementar:*

* [MDN - Prototype](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [MDN - Funções Construtoras](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Constructor)

---

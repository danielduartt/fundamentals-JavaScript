# 2. Entendendo Classes

Neste módulo, vamos explorar em detalhes o conceito de **classes** em JavaScript. Classes são uma forma de estruturar código orientado a objetos (OOP - *Object-Oriented Programming*) e ajudam na criação de objetos com propriedades e comportamentos definidos.

---

## 📘 O que é uma Classe?

Uma **classe** é uma estrutura que permite criar objetos com base em um molde. Ela define **atributos** (propriedades) e **métodos** (funções) que os objetos instanciados terão.

No JavaScript, as classes foram introduzidas oficialmente no ES6 (ECMAScript 2015) como uma forma mais clara e elegante de trabalhar com objetos e herança.

```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

---

## 🧱 Estrutura de uma Classe

### 1. `class NomeDaClasse`

Define o nome da classe.

### 2. `constructor()`

É o método especial usado para inicializar os objetos criados a partir da classe.

```js
constructor(param1, param2) {
  this.propriedade1 = param1;
  this.propriedade2 = param2;
}
```

### 3. Métodos

São funções definidas dentro da classe que representam comportamentos dos objetos.

```js
minhaFuncao() {
  // ação
}
```

---

## 🔄 Criando Objetos (Instanciando)

Para criar um objeto a partir de uma classe, usamos a palavra-chave `new`:

```js
const pessoa1 = new Pessoa("Carlos", 30);
pessoa1.saudacao(); // Olá, meu nome é Carlos e tenho 30 anos.
```

---

## 🔐 Modificadores de Acesso (Privado/Público)

Por padrão, todas as propriedades em JS são públicas. Mas com o ES2022, é possível definir propriedades **privadas** usando `#`.

```js
class Conta {
  #saldo = 0;

  depositar(valor) {
    this.#saldo += valor;
  }

  mostrarSaldo() {
    console.log(`Saldo: R$${this.#saldo}`);
  }
}
```

---

## 🧬 Herança

Classes podem **herdar** de outras usando a palavra-chave `extends`. O método `super()` chama o construtor da classe pai.

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} fez um som.`);
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(`${this.nome} latiu.`);
  }
}

const dog = new Cachorro("Rex");
dog.falar(); // Rex latiu.
```

---

## 🔁 Getters e Setters

Permitem controlar o acesso a propriedades:

```js
class Produto {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase();
  }
}

const p = new Produto("camiseta");
console.log(p.nome); // CAMISETA
```

---

## ✅ Quando Usar Classes?

Use classes quando:
- Você precisa criar múltiplos objetos com a mesma estrutura.
- Precisa organizar melhor a lógica do seu código.
- Está aplicando conceitos de orientação a objetos, como herança, encapsulamento e polimorfismo.
---
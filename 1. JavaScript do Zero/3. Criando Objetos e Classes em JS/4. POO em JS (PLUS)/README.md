# Programação Orientada a Objetos (POO) com JavaScript

A **Programação Orientada a Objetos (POO)** é um paradigma de programação baseado no conceito de "objetos", que podem conter dados (propriedades) e comportamentos (métodos). Em JavaScript, esse paradigma é amplamente utilizado, especialmente em aplicações de grande porte e desenvolvimento moderno com frameworks como React, Vue, e Node.js.

---

## 📦 Conceitos Fundamentais da POO

### ✅ 1. Classe
É um modelo (ou blueprint) para criar objetos com as mesmas propriedades e métodos.

```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

---

### ✅ 2. Objeto
É uma instância de uma classe, ou seja, uma representação concreta com valores definidos.

```js
const pessoa1 = new Pessoa("Maria", 28);
pessoa1.apresentar(); // Olá, meu nome é Maria e tenho 28 anos.
```

---

### ✅ 3. Encapsulamento
É a prática de esconder os detalhes internos de implementação e expor apenas o que for necessário. Em JavaScript moderno, usamos `#` para criar propriedades privadas.

```js
class Conta {
  #saldo = 0;

  depositar(valor) {
    this.#saldo += valor;
  }

  verSaldo() {
    return this.#saldo;
  }
}
```

---

### ✅ 4. Herança
Permite que uma classe herde propriedades e métodos de outra, promovendo reutilização de código.

```js
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(`${this.nome} fez um som.`);
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log(`${this.nome} latiu.`);
  }
}

const dog = new Cachorro("Toby");
dog.emitirSom(); // Toby latiu.
```

---

### ✅ 5. Polimorfismo
Significa que diferentes classes podem implementar o mesmo método de formas diferentes.

```js
const animais = [new Cachorro("Rex"), new Animal("Bicho")];

animais.forEach(animal => animal.emitirSom());
// Rex latiu.
// Bicho fez um som.
```

---

### ✅ 6. Abstração
Consiste em ocultar a complexidade e expor apenas o essencial de um objeto. Em JS, conseguimos aplicar isso através da criação de interfaces e métodos abstratos via convenções, já que o JS não possui abstrações nativas como outras linguagens.

---

## 🔁 Getters e Setters

Permitem acessar e modificar propriedades de forma controlada.

```js
class Produto {
  constructor(nome, preco) {
    this._nome = nome;
    this._preco = preco;
  }

  get preco() {
    return this._preco;
  }

  set preco(valor) {
    if (valor > 0) {
      this._preco = valor;
    }
  }
}
```

---

## 📚 Exemplo Completo

```js
class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  apresentar() {
    console.log(`Veículo: ${this.marca} ${this.modelo}`);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }

  apresentar() {
    console.log(`Carro: ${this.marca} ${this.modelo} com ${this.portas} portas.`);
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 4);
meuCarro.apresentar(); // Carro: Toyota Corolla com 4 portas.
```

---

## 🚀 Vantagens da POO

- Reutilização de código
- Organização mais clara e modular
- Facilidade na manutenção
- Base para frameworks modernos

---

## 🧠 Desafios Práticos

1. Crie uma classe `Funcionario` com atributos `nome`, `cargo` e `salario`.
2. Adicione um método que aumenta o salário em uma porcentagem.
3. Crie uma subclasse `Gerente` que herda de `Funcionario` e tem um método extra para adicionar um bônus.
4. Teste com pelo menos dois objetos diferentes.

---
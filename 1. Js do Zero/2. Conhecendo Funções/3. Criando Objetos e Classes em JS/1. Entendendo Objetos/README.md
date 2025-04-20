
---
# 📘 Entendendo Objetos em JavaScript

Objetos são uma das estruturas fundamentais do JavaScript. Eles permitem armazenar dados e funcionalidades relacionadas em uma única entidade. Se você já programou com outras linguagens orientadas a objetos, vai perceber que o JavaScript trata objetos de uma forma única, mas bastante poderosa.

---

## 🧠 O que é um Objeto?

Um **objeto** em JavaScript é uma coleção de pares **chave: valor**. Esses valores podem ser de qualquer tipo — números, strings, arrays, funções e até outros objetos.

```js
const pessoa = {
  nome: "Ana",
  idade: 25,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  }
};
```

---

## 🔑 Propriedades e Métodos

- **Propriedade**: uma variável dentro de um objeto.
- **Método**: uma função dentro de um objeto.

```js
console.log(pessoa.nome); // "Ana"
pessoa.saudacao(); // "Olá, meu nome é Ana"
```

---

## 🛠️ Como Criar Objetos

### 1. Usando a notação literal (mais comum):

```js
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2021
};
```

### 2. Usando o `new Object()`:

```js
const animal = new Object();
animal.tipo = "Cachorro";
animal.nome = "Bolt";
```

### 3. Usando funções (fábricas):

```js
function criarLivro(titulo, autor) {
  return {
    titulo,
    autor
  };
}

const livro = criarLivro("Dom Casmurro", "Machado de Assis");
```

---

## 🧭 Acessando Propriedades

### Notação de ponto:

```js
console.log(carro.marca);
```

### Notação de colchetes:

```js
console.log(carro["modelo"]);
```

---

## 🔄 Atualizando e Adicionando Propriedades

```js
carro.ano = 2022; // atualiza
carro.cor = "Prata"; // adiciona nova
```

---

## 🧹 Removendo Propriedades

```js
delete carro.ano;
```

---

## 🔍 Verificando Propriedades

```js
"modelo" in carro; // true
carro.hasOwnProperty("marca"); // true
```

---

## 🔁 Iterando sobre Objetos

```js
for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}
```

---

## ⚙️ Objetos Aninhados

Objetos podem conter outros objetos:

```js
const usuario = {
  nome: "Carlos",
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
};

console.log(usuario.endereco.cidade); // "São Paulo"
```

---

## ⚠️ `this` em Objetos

`this` faz referência ao próprio objeto:

```js
const usuario = {
  nome: "Julia",
  apresentar: function () {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
};
```

---

## 🧭 Conclusão

Objetos são essenciais em qualquer aplicação JavaScript. Eles são usados para representar dados do mundo real, agrupar funcionalidades, e são a base para conceitos mais avançados como classes, herança, e programação orientada a objetos.

---

📚 *Próximo passo:* entender como as **classes** ajudam a criar estruturas de objetos mais organizadas e reutilizáveis.

---

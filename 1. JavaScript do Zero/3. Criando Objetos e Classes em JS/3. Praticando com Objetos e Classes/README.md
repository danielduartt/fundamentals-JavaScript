# 🎯 Exercícios sobre Classes e Objetos em JavaScript

## 📚 Índice

- [Objetos Literais](#objetos-literais)
- [Classes Básicas](#classes-básicas)
- [Herança e Polimorfismo](#herança-e-polimorfismo)
- [Padrões de Design](#padrões-de-design)

## Objetos Literais

### 1. Pessoa
Crie um objeto literal chamado `pessoa` com as propriedades: nome, idade e cidade. Adicione um método `apresentar()` que retorne uma string com a apresentação da pessoa.

```javascript
// Exemplo:
// pessoa.apresentar() → "Olá, meu nome é João, tenho 25 anos e moro em São Paulo."
```

### 2. Calculadora de Objeto
Crie um objeto `calculadora` com métodos para as 4 operações básicas. Cada método deve receber dois números como parâmetros.

```javascript
// Exemplo:
// calculadora.somar(5, 3) → 8
// calculadora.dividir(10, 2) → 5
```

### 3. Biblioteca de Livros
Crie um objeto `biblioteca` que gerencie uma coleção de livros (array). Implemente métodos para adicionar, remover e listar livros.

```javascript
// Exemplo:
// biblioteca.adicionarLivro({ titulo: "Clean Code", autor: "Robert Martin" });
// biblioteca.listarLivros() → [{ titulo: "Clean Code", autor: "Robert Martin" }]
```

### 4. Carrinho de Compras
Crie um objeto `carrinho` que permita adicionar produtos com nome e preço, calcular o total e aplicar descontos em percentual.

```javascript
// Exemplo:
// carrinho.adicionarProduto({ nome: "Notebook", preco: 2500 });
// carrinho.calcularTotal() → 2500
// carrinho.aplicarDesconto(10) → 2250
```

### 5. Jogo de Adivinhação
Crie um objeto `jogo` que gere um número aleatório entre 1 e 100 e forneça métodos para adivinhar o número, dando dicas ("maior" ou "menor").

```javascript
// Exemplo:
// jogo.tentativa(50) → "Maior que 50"
// jogo.tentativa(75) → "Acertou em 2 tentativas!"
```

## Classes Básicas

### 6. Classe Retângulo
Crie uma classe `Retangulo` com propriedades largura e altura, e métodos para calcular área e perímetro.

```javascript
// Exemplo:
// const ret = new Retangulo(5, 3);
// ret.calcularArea() → 15
// ret.calcularPerimetro() → 16
```

### 7. Classe ContaBancaria
Crie uma classe `ContaBancaria` com métodos para depositar, sacar e verificar saldo. Implemente validações para não permitir saldo negativo.

```javascript
// Exemplo:
// const conta = new ContaBancaria(1000);
// conta.sacar(500) → true
// conta.sacar(600) → false (saldo insuficiente)
```

### 8. Classe Produto
Crie uma classe `Produto` com propriedades nome, preço e quantidade em estoque. Implemente métodos para atualizar estoque e calcular valor total em estoque.

```javascript
// Exemplo:
// const produto = new Produto("Notebook", 2500, 10);
// produto.calcularValorEstoque() → 25000
// produto.atualizarEstoque(5) → "Estoque atualizado para 15 unidades"
```

### 9. Classe Estudante
Crie uma classe `Estudante` com métodos para adicionar notas, calcular média e verificar situação (aprovado/reprovado com média >= 7).

```javascript
// Exemplo:
// const estudante = new Estudante("Ana");
// estudante.adicionarNota(8);
// estudante.adicionarNota(7.5);
// estudante.verificarSituacao() → "Aprovado com média 7.75"
```

### 10. Classe Playlist
Crie uma classe `Playlist` para gerenciar músicas, com métodos para adicionar, remover e embaralhar músicas.

```javascript
// Exemplo:
// const playlist = new Playlist("Favoritas");
// playlist.adicionarMusica({ titulo: "Imagine", artista: "John Lennon" });
// playlist.embaralhar();
```

## Herança e Polimorfismo

### 11. Hierarquia de Veículos
Crie uma classe base `Veiculo` e classes derivadas `Carro` e `Moto`. Implemente métodos específicos para cada tipo.

```javascript
// Exemplo:
// class Veiculo { mover() { ... } }
// class Carro extends Veiculo { abrirPortaMalas() { ... } }
// class Moto extends Veiculo { empinar() { ... } }
```

### 12. Sistema de Pagamentos
Crie uma classe abstrata `Pagamento` e classes derivadas `PagamentoCartao`, `PagamentoPix` e `PagamentoBoleto` com implementações específicas.

```javascript
// Exemplo:
// const pagamento = new PagamentoCartao(100);
// pagamento.processar() → "Processando pagamento de R$100 via cartão"
```

### 13. Hierarquia de Funcionários
Crie classes para diferentes tipos de funcionários (`Funcionario`, `Gerente`, `Desenvolvedor`) com cálculos de salário específicos.

```javascript
// Exemplo:
// const dev = new Desenvolvedor("Pedro", 5000);
// dev.calcularBonus() → 750 (15% do salário)
```

### 14. Formas Geométricas
Implemente uma hierarquia de formas geométricas (`Forma`, `Circulo`, `Quadrado`, `Triangulo`) com métodos para calcular área e perímetro.

```javascript
// Exemplo:
// const circulo = new Circulo(5);
// circulo.calcularArea() → 78.54
```

### 15. Sistema de Notificações
Crie um sistema de notificações com diferentes canais (`Email`, `SMS`, `Push`) que herdam de uma classe `Notificacao`.

```javascript
// Exemplo:
// const notificacao = new NotificacaoEmail("Olá!");
// notificacao.enviar() → "Enviando email: Olá!"
```

## Padrões de Design

### 16. Singleton para Configurações
Implemente uma classe `Configuracoes` usando o padrão Singleton para garantir apenas uma instância.

```javascript
// Exemplo:
// const config1 = Configuracoes.getInstance();
// const config2 = Configuracoes.getInstance();
// config1 === config2 → true
```

### 17. Factory de Veículos
Crie uma factory para criar diferentes tipos de veículos baseado em parâmetros.

```javascript
// Exemplo:
// const factory = new VeiculoFactory();
// const carro = factory.criar("carro", { modelo: "Sedan" });
```

### 18. Observer para Eventos
Implemente o padrão Observer para um sistema de eventos simples.

```javascript
// Exemplo:
// const observable = new Observable();
// observable.adicionar(observer);
// observable.notificar("Novo evento!");
```

### 19. Builder para Pedidos
Crie um builder para construir pedidos complexos passo a passo.

```javascript
// Exemplo:
// const pedido = new PedidoBuilder()
//   .adicionarItem({ nome: "Pizza", preco: 45 })
//   .definirEndereco("Rua A, 123")
//   .construir();
```

### 20. Decorator para Café
Implemente o padrão Decorator para adicionar extras a um pedido de café.

```javascript
// Exemplo:
// let cafe = new CafeSimples();
// cafe = new LeiteDecorator(cafe);
// cafe = new ChocolateDecorator(cafe);
// cafe.custo() → 12.50
```

## 🎯 Como Usar

1. Clone este repositório
2. Crie um arquivo para cada exercício (ex: `exercicio1.js`)
3. Implemente as classes e objetos conforme especificado
4. Teste suas implementações com exemplos práticos

## ✅ Dicas para Resolver

- Entenda a diferença entre objetos literais e classes
- Use `constructor()` para inicializar propriedades de classe
- Utilize `get` e `set` para criar propriedades computadas
- Implemente herança com `extends` e use `super()` quando necessário
- Considere usar métodos estáticos quando apropriado

## 📝 Estrutura Sugerida para Teste

```javascript
// teste.js
import { Retangulo } from './exercicio6.js';

const ret = new Retangulo(5, 3);
console.log(`Área: ${ret.calcularArea()}`);
console.log(`Perímetro: ${ret.calcularPerimetro()}`);
```

## 🤝 Contribuições

Sinta-se à vontade para sugerir novos exercícios ou melhorias através de pull requests.

## 📖 Recursos Adicionais

- [MDN Web Docs - Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - Classes](https://javascript.info/class)
- [Patterns.dev - Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/)

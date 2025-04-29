/**
 * Resolução dos Exercícios sobre Classes e Objetos em JavaScript
 * Data: 24/04/2025
 */

console.log("--- Exercícios JavaScript: Classes e Objetos ---");

// ==========================================
// Objetos Literais
// ==========================================
console.log("\n--- Objetos Literais ---");

// 1. Pessoa
console.log("\n--- 1. Pessoa ---");
const pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
  apresentar: function () {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
  },
};
console.log(pessoa.apresentar()); // Exemplo: "Olá, meu nome é João, tenho 25 anos e moro em São Paulo."

// 2. Calculadora de Objeto
console.log("\n--- 2. Calculadora de Objeto ---");
const calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    if (b === 0) {
      return "Erro: Divisão por zero!";
    }
    return a / b;
  },
};
console.log(`5 + 3 = ${calculadora.somar(5, 3)}`); // Exemplo: 8
console.log(`10 - 4 = ${calculadora.subtrair(10, 4)}`); // Exemplo: 6
console.log(`6 * 7 = ${calculadora.multiplicar(6, 7)}`); // Exemplo: 42
console.log(`10 / 2 = ${calculadora.dividir(10, 2)}`); // Exemplo: 5
console.log(`10 / 0 = ${calculadora.dividir(10, 0)}`); // Exemplo: Erro

// 3. Biblioteca de Livros
console.log("\n--- 3. Biblioteca de Livros ---");
const biblioteca = {
  livros: [],
  adicionarLivro: function (livro) {
    if (livro && livro.titulo && livro.autor) {
      this.livros.push(livro);
      console.log(`Livro "${livro.titulo}" adicionado.`);
    } else {
      console.log("Erro: Objeto de livro inválido.");
    }
  },
  removerLivro: function (titulo) {
    const index = this.livros.findIndex((livro) => livro.titulo === titulo);
    if (index !== -1) {
      const removido = this.livros.splice(index, 1);
      console.log(`Livro "${removido[0].titulo}" removido.`);
    } else {
      console.log(`Livro "${titulo}" não encontrado.`);
    }
  },
  listarLivros: function () {
    if (this.livros.length === 0) {
      console.log("A biblioteca está vazia.");
      return [];
    }
    console.log("Livros na biblioteca:");
    this.livros.forEach((livro, index) => {
      console.log(`${index + 1}. Título: ${livro.titulo}, Autor: ${livro.autor}`);
    });
    return this.livros;
  },
};

biblioteca.adicionarLivro({ titulo: "Clean Code", autor: "Robert Martin" });
biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien" });
biblioteca.listarLivros();
biblioteca.removerLivro("O Hobbit");
biblioteca.listarLivros();

// 4. Carrinho de Compras
console.log("\n--- 4. Carrinho de Compras ---");
const carrinho = {
  produtos: [],
  total: 0,
  adicionarProduto: function (produto) {
    if (produto && produto.nome && typeof produto.preco === "number") {
      this.produtos.push(produto);
      this.calcularTotal(); // Recalcula o total ao adicionar
      console.log(`Produto "${produto.nome}" adicionado.`);
    } else {
      console.log("Erro: Objeto de produto inválido.");
    }
  },
  calcularTotal: function () {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
    return this.total;
  },
  aplicarDesconto: function (percentual) {
    if (percentual < 0 || percentual > 100) {
      console.log("Percentual de desconto inválido.");
      return this.total;
    }
    const desconto = this.total * (percentual / 100);
    const totalComDesconto = this.total - desconto;
    console.log(`Desconto de ${percentual}% aplicado.`);
    return totalComDesconto;
  },
};

carrinho.adicionarProduto({ nome: "Notebook", preco: 2500 });
carrinho.adicionarProduto({ nome: "Mouse", preco: 150 });
console.log(`Total atual: R$${carrinho.calcularTotal()}`); // Exemplo: 2650
console.log(`Total com 10% de desconto: R$${carrinho.aplicarDesconto(10)}`); // Exemplo: 2385

// 5. Jogo de Adivinhação
console.log("\n--- 5. Jogo de Adivinhação ---");
const jogo = {
  numeroSecreto: Math.floor(Math.random() * 100) + 1,
  tentativas: 0,
  tentativa: function (palpite) {
    this.tentativas++;
    if (palpite === this.numeroSecreto) {
      const msg = `Acertou em ${this.tentativas} tentativas! O número era ${this.numeroSecreto}.`;
      // Resetar para um novo jogo (opcional)
      // this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
      // this.tentativas = 0;
      return msg;
    } else if (palpite < this.numeroSecreto) {
      return `Maior que ${palpite}`;
    } else {
      return `Menor que ${palpite}`;
    }
  },
};

// console.log("Número secreto (para teste):", jogo.numeroSecreto); // Descomente para ver o número
console.log(jogo.tentativa(50));
console.log(jogo.tentativa(75));
// Continue tentando até acertar...
// console.log(jogo.tentativa(jogo.numeroSecreto)); // Teste de acerto

// ==========================================
// Classes Básicas
// ==========================================
console.log("\n--- Classes Básicas ---");

// 6. Classe Retângulo
console.log("\n--- 6. Classe Retângulo ---");
class Retangulo {
  constructor(largura, altura) {
    if (largura <= 0 || altura <= 0) {
      throw new Error("Largura e altura devem ser positivas.");
    }
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }
}

const ret = new Retangulo(5, 3);
console.log(`Retângulo 5x3 -> Área: ${ret.calcularArea()}`); // Exemplo: 15
console.log(`Retângulo 5x3 -> Perímetro: ${ret.calcularPerimetro()}`); // Exemplo: 16

// 7. Classe ContaBancaria
console.log("\n--- 7. Classe ContaBancaria ---");
class ContaBancaria {
  #saldo; // Propriedade privada (convenção ou sintaxe #)

  constructor(saldoInicial = 0) {
    if (saldoInicial < 0) {
      throw new Error("Saldo inicial não pode ser negativo.");
    }
    this.#saldo = saldoInicial;
    console.log(`Conta criada com saldo inicial: R$${this.#saldo.toFixed(2)}`);
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("Valor de depósito deve ser positivo.");
      return false;
    }
    this.#saldo += valor;
    console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.#saldo.toFixed(2)}`);
    return true;
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor de saque deve ser positivo.");
      return false;
    }
    if (valor > this.#saldo) {
      console.log(`Saldo insuficiente para sacar R$${valor.toFixed(2)}. Saldo atual: R$${this.#saldo.toFixed(2)}`);
      return false;
    }
    this.#saldo -= valor;
    console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.#saldo.toFixed(2)}`);
    return true;
  }

  verificarSaldo() {
    return this.#saldo;
  }

  // Getter para saldo (opcional, para acesso controlado)
  get saldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria(1000);
console.log(`Saldo atual: R$${conta.verificarSaldo().toFixed(2)}`);
conta.depositar(200);
console.log(`Saque de 500: ${conta.sacar(500)}`); // Exemplo: true
console.log(`Saque de 800: ${conta.sacar(800)}`); // Exemplo: false (saldo insuficiente)
console.log(`Saldo final: R$${conta.saldo.toFixed(2)}`); // Usando o getter

// 8. Classe Produto
console.log("\n--- 8. Classe Produto ---");
class Produto {
  constructor(nome, preco, quantidade) {
    if (preco < 0 || quantidade < 0) {
      throw new Error("Preço e quantidade não podem ser negativos.");
    }
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorEstoque() {
    return this.preco * this.quantidade;
  }

  atualizarEstoque(quantidadeAdicional) {
    if (this.quantidade + quantidadeAdicional < 0) {
      console.log("Erro: Estoque não pode ficar negativo.");
      return `Estoque atual: ${this.quantidade} unidades`;
    }
    this.quantidade += quantidadeAdicional;
    return `Estoque atualizado para ${this.quantidade} unidades`;
  }
}

const produto = new Produto("Notebook", 2500, 10);
console.log(`Valor em estoque do ${produto.nome}: R$${produto.calcularValorEstoque().toFixed(2)}`); // Exemplo: 25000
console.log(produto.atualizarEstoque(5)); // Exemplo: "Estoque atualizado para 15 unidades"
console.log(produto.atualizarEstoque(-2)); // Exemplo: "Estoque atualizado para 13 unidades"
console.log(`Novo valor em estoque: R$${produto.calcularValorEstoque().toFixed(2)}`);

// 9. Classe Estudante
console.log("\n--- 9. Classe Estudante ---");
class Estudante {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }

  adicionarNota(nota) {
    if (typeof nota === "number" && nota >= 0 && nota <= 10) {
      this.notas.push(nota);
      console.log(`Nota ${nota} adicionada para ${this.nome}.`);
    } else {
      console.log("Nota inválida. Deve ser um número entre 0 e 10.");
    }
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      return 0;
    }
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }

  verificarSituacao(mediaMinima = 7) {
    const media = this.calcularMedia();
    if (media >= mediaMinima) {
      return `${this.nome}: Aprovado com média ${media.toFixed(2)}`;
    } else {
      return `${this.nome}: Reprovado com média ${media.toFixed(2)}`;
    }
  }
}

const estudante = new Estudante("Ana");
estudante.adicionarNota(8);
estudante.adicionarNota(7.5);
estudante.adicionarNota(6);
console.log(estudante.verificarSituacao()); // Exemplo: "Ana: Aprovado com média 7.17" (ou reprovado se a média for < 7)

const estudante2 = new Estudante("Carlos");
estudante2.adicionarNota(5);
estudante2.adicionarNota(6.5);
console.log(estudante2.verificarSituacao()); // Exemplo: "Carlos: Reprovado com média 5.75"

// 10. Classe Playlist
console.log("\n--- 10. Classe Playlist ---");
class Playlist {
  constructor(nome) {
    this.nome = nome;
    this.musicas = [];
  }

  adicionarMusica(musica) {
    if (musica && musica.titulo && musica.artista) {
      this.musicas.push(musica);
      console.log(`Música "${musica.titulo}" de ${musica.artista} adicionada à playlist "${this.nome}".`);
    } else {
      console.log("Objeto de música inválido.");
    }
  }

  removerMusica(titulo) {
    const index = this.musicas.findIndex((musica) => musica.titulo === titulo);
    if (index !== -1) {
      const removida = this.musicas.splice(index, 1);
      console.log(`Música "${removida[0].titulo}" removida da playlist.`);
    } else {
      console.log(`Música "${titulo}" não encontrada na playlist.`);
    }
  }

  // Algoritmo de Fisher-Yates (Knuth Shuffle)
  embaralhar() {
    if (this.musicas.length < 2) {
      console.log("Playlist muito curta para embaralhar.");
      return;
    }
    for (let i = this.musicas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.musicas[i], this.musicas[j]] = [this.musicas[j], this.musicas[i]]; // Troca
    }
    console.log(`Playlist "${this.nome}" embaralhada.`);
  }

  listarMusicas() {
    console.log(`\nMúsicas na Playlist "${this.nome}":`);
    if (this.musicas.length === 0) {
      console.log("Playlist vazia.");
      return;
    }
    this.musicas.forEach((m, i) => console.log(`${i + 1}. ${m.titulo} - ${m.artista}`));
  }
}

const playlist = new Playlist("Favoritas");
playlist.adicionarMusica({ titulo: "Imagine", artista: "John Lennon" });
playlist.adicionarMusica({ titulo: "Bohemian Rhapsody", artista: "Queen" });
playlist.adicionarMusica({ titulo: "Stairway to Heaven", artista: "Led Zeppelin" });
playlist.listarMusicas();
playlist.embaralhar();
playlist.listarMusicas(); // Mostra a ordem embaralhada
playlist.removerMusica("Imagine");
playlist.listarMusicas();

// ==========================================
// Herança e Polimorfismo
// ==========================================
console.log("\n--- Herança e Polimorfismo ---");

// 11. Hierarquia de Veículos
console.log("\n--- 11. Hierarquia de Veículos ---");
class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  mover() {
    console.log(`${this.constructor.name} ${this.marca} ${this.modelo} está se movendo.`);
  }

  detalhes() {
    return `${this.constructor.name}: ${this.marca} ${this.modelo} (${this.ano})`;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, numPortas) {
    super(marca, modelo, ano); // Chama o construtor da classe pai
    this.numPortas = numPortas;
  }

  abrirPortaMalas() {
    console.log(`Porta-malas do ${this.modelo} aberto.`);
  }

  // Sobrescrevendo o método detalhes (Polimorfismo)
  detalhes() {
    return `${super.detalhes()}, ${this.numPortas} portas`;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, ano, cilindradas) {
    super(marca, modelo, ano);
    this.cilindradas = cilindradas;
  }

  empinar() {
    console.log(`A ${this.modelo} está empinando! (Com segurança!)`);
  }

  // Sobrescrevendo o método detalhes (Polimorfismo)
  detalhes() {
    return `${super.detalhes()}, ${this.cilindradas}cc`;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2023, 4);
const minhaMoto = new Moto("Honda", "CB 500", 2022, 500);

console.log(meuCarro.detalhes());
meuCarro.mover();
meuCarro.abrirPortaMalas();

console.log(minhaMoto.detalhes());
minhaMoto.mover();
minhaMoto.empinar();

// 12. Sistema de Pagamentos (Simulando Abstração)
console.log("\n--- 12. Sistema de Pagamentos ---");
// Classe base "abstrata" (não pode ser instanciada diretamente)
class Pagamento {
  constructor(valor) {
    if (this.constructor === Pagamento) {
      throw new Error("A classe abstrata 'Pagamento' não pode ser instanciada diretamente.");
    }
    if (valor <= 0) {
      throw new Error("Valor do pagamento deve ser positivo.");
    }
    this.valor = valor;
  }

  // Método "abstrato" (deve ser implementado pelas subclasses)
  processar() {
    throw new Error("O método 'processar()' deve ser implementado pela subclasse.");
  }
}

class PagamentoCartao extends Pagamento {
  constructor(valor, numeroCartao) {
    super(valor);
    this.numeroCartao = numeroCartao; // Exemplo de propriedade específica
  }

  processar() {
    // Lógica específica para cartão
    console.log(`Processando pagamento de R$${this.valor.toFixed(2)} via cartão final ${this.numeroCartao?.slice(-4) ?? '****'}.`);
    return true; // Simula sucesso
  }
}

class PagamentoPix extends Pagamento {
  constructor(valor, chavePix) {
    super(valor);
    this.chavePix = chavePix;
  }

  processar() {
    // Lógica específica para PIX
    console.log(`Processando pagamento PIX de R$${this.valor.toFixed(2)} para a chave ${this.chavePix}.`);
    return true; // Simula sucesso
  }
}

class PagamentoBoleto extends Pagamento {
  constructor(valor, codigoBarras) {
    super(valor);
    this.codigoBarras = codigoBarras;
  }

  processar() {
    // Lógica específica para boleto
    console.log(`Processando pagamento de boleto de R$${this.valor.toFixed(2)} (Cód: ${this.codigoBarras}).`);
    return true; // Simula sucesso
  }
}

const pagamentoCartao = new PagamentoCartao(100, "1234567890123456");
const pagamentoPix = new PagamentoPix(50, "email@example.com");
const pagamentoBoleto = new PagamentoBoleto(200, "12345.67890 12345.678901 12345.678902 1 12345678901234");

pagamentoCartao.processar();
pagamentoPix.processar();
pagamentoBoleto.processar();

// Tentativa de instanciar a classe abstrata (deve dar erro)
try {
  const pagamentoAbstrato = new Pagamento(10);
} catch (error) {
  console.error("Erro esperado:", error.message);
}

// 13. Hierarquia de Funcionários
console.log("\n--- 13. Hierarquia de Funcionários ---");
class Funcionario {
  constructor(nome, salarioBase) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }

  getDescricao() {
    return `${this.constructor.name}: ${this.nome}, Salário Base: R$${this.salarioBase.toFixed(2)}`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salarioBase, bonusPercentual = 20) { // Bonus padrão de 20%
    super(nome, salarioBase);
    this.bonusPercentual = bonusPercentual;
  }

  calcularBonus() {
    return this.salarioBase * (this.bonusPercentual / 100);
  }

  // Sobrescreve calcularSalario
  calcularSalario() {
    return super.calcularSalario() + this.calcularBonus();
  }

  getDescricao() {
    return `${super.getDescricao()}, Bônus: ${this.bonusPercentual}%, Salário Total: R$${this.calcularSalario().toFixed(2)}`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, salarioBase, bonusPercentual = 15) { // Bonus padrão de 15%
    super(nome, salarioBase);
    this.bonusPercentual = bonusPercentual;
  }

  calcularBonus() {
    return this.salarioBase * (this.bonusPercentual / 100);
  }

  // Sobrescreve calcularSalario
  calcularSalario() {
    return super.calcularSalario() + this.calcularBonus();
  }

  getDescricao() {
    return `${super.getDescricao()}, Bônus: ${this.bonusPercentual}%, Salário Total: R$${this.calcularSalario().toFixed(2)}`;
  }
}

const gerente = new Gerente("Alice", 8000);
const dev = new Desenvolvedor("Pedro", 5000);

console.log(gerente.getDescricao());
console.log(`Bônus Gerente: R$${gerente.calcularBonus().toFixed(2)}`);

console.log(dev.getDescricao());
console.log(`Bônus Desenvolvedor: R$${dev.calcularBonus().toFixed(2)}`); // Exemplo: 750

// 14. Formas Geométricas
console.log("\n--- 14. Formas Geométricas ---");
class Forma {
  constructor() {
    if (this.constructor === Forma) {
      throw new Error("Classe abstrata 'Forma' não pode ser instanciada.");
    }
  }
  calcularArea() {
    throw new Error("Método 'calcularArea' deve ser implementado.");
  }
  calcularPerimetro() {
    throw new Error("Método 'calcularPerimetro' deve ser implementado.");
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    if (raio <= 0) throw new Error("Raio deve ser positivo.");
    this.raio = raio;
  }
  calcularArea() {
    return Math.PI * this.raio ** 2;
  }
  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    if (lado <= 0) throw new Error("Lado deve ser positivo.");
    this.lado = lado;
  }
  calcularArea() {
    return this.lado ** 2;
  }
  calcularPerimetro() {
    return 4 * this.lado;
  }
}

class Triangulo extends Forma {
  // Assumindo um triângulo qualquer para perímetro e base/altura para área
  constructor(base, altura, lado1, lado2, lado3) {
    super();
    if (base <= 0 || altura <= 0 || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
      throw new Error("Dimensões do triângulo devem ser positivas.");
    }
    // Validação básica se os lados formam um triângulo (desigualdade triangular)
    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        throw new Error("Lados fornecidos não formam um triângulo válido.");
    }
    this.base = base;
    this.altura = altura;
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  calcularArea() {
    return (this.base * this.altura) / 2;
  }
  calcularPerimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
// Triângulo com base 6, altura 4, lados 5, 5, 6 (isósceles)
const triangulo = new Triangulo(6, 4, 5, 5, 6);

console.log(`Círculo (raio 5) -> Área: ${circulo.calcularArea().toFixed(2)}, Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`); // Exemplo Área: 78.54
console.log(`Quadrado (lado 4) -> Área: ${quadrado.calcularArea().toFixed(2)}, Perímetro: ${quadrado.calcularPerimetro().toFixed(2)}`);
console.log(`Triângulo (b:6, h:4, l:5,5,6) -> Área: ${triangulo.calcularArea().toFixed(2)}, Perímetro: ${triangulo.calcularPerimetro().toFixed(2)}`);

// 15. Sistema de Notificações
console.log("\n--- 15. Sistema de Notificações ---");
class Notificacao {
  constructor(mensagem) {
    if (this.constructor === Notificacao) {
      throw new Error("Classe abstrata 'Notificacao' não pode ser instanciada.");
    }
    this.mensagem = mensagem;
  }

  enviar() {
    throw new Error("Método 'enviar' deve ser implementado.");
  }
}

class NotificacaoEmail extends Notificacao {
  constructor(mensagem, destinatario) {
    super(mensagem);
    this.destinatario = destinatario;
  }
  enviar() {
    console.log(`Enviando email para ${this.destinatario}: ${this.mensagem}`);
    return true; // Simula sucesso
  }
}

class NotificacaoSMS extends Notificacao {
  constructor(mensagem, numero) {
    super(mensagem);
    this.numero = numero;
  }
  enviar() {
    console.log(`Enviando SMS para ${this.numero}: ${this.mensagem}`);
    return true; // Simula sucesso
  }
}

class NotificacaoPush extends Notificacao {
  constructor(mensagem, deviceId) {
    super(mensagem);
    this.deviceId = deviceId;
  }
  enviar() {
    console.log(`Enviando Push Notification para ${this.deviceId}: ${this.mensagem}`);
    return true; // Simula sucesso
  }
}

const notificacaoEmail = new NotificacaoEmail("Olá!", "teste@email.com");
const notificacaoSMS = new NotificacaoSMS("Promoção!", "99999-8888");
const notificacaoPush = new NotificacaoPush("Atualização disponível", "device-123");

notificacaoEmail.enviar(); // Exemplo: "Enviando email para teste@email.com: Olá!"
notificacaoSMS.enviar();
notificacaoPush.enviar();

// ==========================================
// Padrões de Design
// ==========================================
console.log("\n--- Padrões de Design ---");

// 16. Singleton para Configurações
console.log("\n--- 16. Singleton para Configurações ---");
class Configuracoes {
  static #instance = null;
  #configData = {}; // Dados de configuração privados

  constructor() {
    // Previne múltiplas instâncias através do construtor
    if (Configuracoes.#instance) {
      console.warn("Singleton: Instância já existe, retornando a existente.");
      return Configuracoes.#instance;
    }
    // Simula carregamento de configurações
    this.#configData = {
      apiUrl: "https://api.example.com",
      timeout: 5000,
      theme: "dark",
    };
    console.log("Singleton: Instância de Configuracoes criada.");
    Configuracoes.#instance = this;
  }

  static getInstance() {
    if (!Configuracoes.#instance) {
      Configuracoes.#instance = new Configuracoes();
    }
    return Configuracoes.#instance;
  }

  get(key) {
    return this.#configData[key];
  }

  set(key, value) {
    this.#configData[key] = value;
    console.log(`Configuração '${key}' atualizada para '${value}'.`);
  }
}

// Teste do Singleton
const config1 = Configuracoes.getInstance();
const config2 = Configuracoes.getInstance(); // Deve retornar a mesma instância

console.log(`config1 === config2 ? ${config1 === config2}`); // Exemplo: true

console.log(`API URL (config1): ${config1.get("apiUrl")}`);
config2.set("theme", "light");
console.log(`Theme (config1): ${config1.get("theme")}`); // Deve refletir a mudança feita via config2

// Tentativa de criar nova instância diretamente (deve retornar a existente)
const config3 = new Configuracoes();
console.log(`config1 === config3 ? ${config1 === config3}`); // Exemplo: true

// 17. Factory de Veículos
console.log("\n--- 17. Factory de Veículos ---");
// Reutilizando as classes Veiculo, Carro, Moto do exercício 11

class VeiculoFactory {
  criar(tipo, opcoes) {
    switch (tipo.toLowerCase()) {
      case "carro":
        return new Carro(opcoes.marca, opcoes.modelo, opcoes.ano, opcoes.numPortas);
      case "moto":
        return new Moto(opcoes.marca, opcoes.modelo, opcoes.ano, opcoes.cilindradas);
      // Poderia adicionar outros tipos como Caminhao, Bicicleta, etc.
      default:
        throw new Error(`Tipo de veículo desconhecido: ${tipo}`);
    }
  }
}

const factory = new VeiculoFactory();

const carroFactory = factory.criar("carro", {
  marca: "Volkswagen",
  modelo: "Golf",
  ano: 2024,
  numPortas: 4,
});
const motoFactory = factory.criar("moto", {
  marca: "Yamaha",
  modelo: "MT-07",
  ano: 2023,
  cilindradas: 700,
});

console.log("Veículo criado pela Factory:");
console.log(carroFactory.detalhes());
console.log(motoFactory.detalhes());

try {
    const desconhecido = factory.criar("bicicleta", {});
} catch (e) {
    console.error("Erro esperado:", e.message);
}

// 18. Observer para Eventos
console.log("\n--- 18. Observer para Eventos ---");
// Subject (ou Observable)
class Observable {
  constructor() {
    this.observers = [];
  }

  adicionar(observer) {
    if (typeof observer?.update !== "function") {
      console.error("Observer inválido. Deve ter um método 'update'.");
      return;
    }
    this.observers.push(observer);
    console.log(`${observer.constructor.name || 'Observer'} adicionado.`);
  }

  remover(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
    console.log(`${observer.constructor.name || 'Observer'} removido.`);
  }

  notificar(data) {
    if (this.observers.length === 0) return;
    console.log(`\nNotificando ${this.observers.length} observers...`);
    this.observers.forEach(observer => {
      try {
        observer.update(data);
      } catch (error) {
        console.error(`Erro ao notificar ${observer.constructor.name || 'Observer'}:`, error);
      }
    });
  }
}

// Concrete Observer 1
class LoggerObserver {
    update(data) {
        console.log(`[Logger] Evento recebido:`, data);
    }
}

// Concrete Observer 2
class AlertaObserver {
    update(data) {
        // Em um app real, poderia mostrar um alerta na UI
        console.log(`[Alerta] Atenção! Novo evento: ${JSON.stringify(data)}`);
    }
}

// Teste do Observer
const centralEventos = new Observable();
const logger = new LoggerObserver();
const alerta = new AlertaObserver();

centralEventos.adicionar(logger);
centralEventos.adicionar(alerta);

centralEventos.notificar({ tipo: "LOGIN_SUCESSO", usuario: "user1" });
centralEventos.notificar("Nova mensagem importante!");

centralEventos.remover(alerta);
centralEventos.notificar({ tipo: "ATUALIZACAO", versao: "2.1.0" });


// 19. Builder para Pedidos
console.log("\n--- 19. Builder para Pedidos ---");
// Classe do objeto complexo
class Pedido {
  constructor() {
    this.itens = [];
    this.enderecoEntrega = null;
    this.formaPagamento = null;
    this.observacoes = "";
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  toString() {
    return `Pedido:
  Itens: ${this.itens.map(item => `${item.nome} (R$${item.preco.toFixed(2)})`).join(", ")}
  Endereço: ${this.enderecoEntrega || "Não definido"}
  Pagamento: ${this.formaPagamento || "Não definido"}
  Obs: ${this.observacoes || "Nenhuma"}`;
  }
}

// Builder
class PedidoBuilder {
  constructor() {
    this.pedido = new Pedido();
  }

  adicionarItem(item) {
    if (item && item.nome && typeof item.preco === 'number') {
      this.pedido.adicionarItem(item);
    } else {
        console.warn("Item inválido não adicionado:", item);
    }
    return this; // Permite encadeamento (fluent interface)
  }

  definirEndereco(endereco) {
    this.pedido.enderecoEntrega = endereco;
    return this;
  }

  definirFormaPagamento(forma) {
    this.pedido.formaPagamento = forma;
    return this;
  }

  adicionarObservacao(obs) {
    this.pedido.observacoes = obs;
    return this;
  }

  // Retorna o objeto Pedido construído
  construir() {
    // Validações opcionais antes de retornar
    if (this.pedido.itens.length === 0) {
      throw new Error("Não é possível construir um pedido sem itens.");
    }
    if (!this.pedido.enderecoEntrega) {
      console.warn("Pedido construído sem endereço de entrega.");
    }
    // Retorna uma cópia ou o objeto diretamente, dependendo da necessidade
    const pedidoFinalizado = this.pedido;
    // Reseta o builder para um novo pedido (opcional)
    this.pedido = new Pedido();
    return pedidoFinalizado;
  }
}

// Teste do Builder
const builder = new PedidoBuilder();

const pedidoComplexo = builder
  .adicionarItem({ nome: "Pizza Mussarela", preco: 45.00 })
  .adicionarItem({ nome: "Refrigerante 2L", preco: 10.50 })
  .definirEndereco("Rua A, 123, Bairro Centro")
  .definirFormaPagamento("Cartão de Crédito")
  .adicionarObservacao("Sem cebola na pizza, por favor.")
  .construir();

console.log("Pedido construído:");
console.log(pedidoComplexo.toString());

// Tentativa de construir pedido sem itens (deve dar erro)
try {
    const pedidoVazio = new PedidoBuilder().construir();
} catch(e) {
    console.error("Erro esperado:", e.message);
}

// 20. Decorator para Café
console.log("\n--- 20. Decorator para Café ---");

// Component Interface (usando classe base abstrata)
class Cafe {
  custo() {
    throw new Error("Método 'custo' deve ser implementado.");
  }
  descricao() {
    throw new Error("Método 'descricao' deve ser implementado.");
  }
}

// Concrete Component
class CafeSimples extends Cafe {
  custo() {
    return 5.00;
  }
  descricao() {
    return "Café simples";
  }
}

// Base Decorator (também implementa a interface)
class CafeDecorator extends Cafe {
  constructor(cafeDecorado) {
    super(); // Necessário mesmo em classes "abstratas" filhas
    if (!(cafeDecorado instanceof Cafe)) {
        throw new Error("O objeto a ser decorado deve ser uma instância de Cafe.");
    }
    this.cafeDecorado = cafeDecorado;
  }

  custo() {
    return this.cafeDecorado.custo();
  }

  descricao() {
    return this.cafeDecorado.descricao();
  }
}

// Concrete Decorator 1: Leite
class LeiteDecorator extends CafeDecorator {
  constructor(cafeDecorado) {
    super(cafeDecorado);
  }

  custo() {
    return super.custo() + 2.50; // Adiciona o custo do leite
  }

  descricao() {
    return super.descricao() + ", com leite"; // Adiciona à descrição
  }
}

// Concrete Decorator 2: Chocolate
class ChocolateDecorator extends CafeDecorator {
  constructor(cafeDecorado) {
    super(cafeDecorado);
  }

  custo() {
    return super.custo() + 3.00; // Adiciona o custo do chocolate
  }

  descricao() {
    return super.descricao() + ", com chocolate"; // Adiciona à descrição
  }
}

// Concrete Decorator 3: Chantilly
class ChantillyDecorator extends CafeDecorator {
    constructor(cafeDecorado) {
      super(cafeDecorado);
    }

    custo() {
      return super.custo() + 1.50; // Adiciona o custo do chantilly
    }

    descricao() {
      return super.descricao() + ", com chantilly"; // Adiciona à descrição
    }
  }


// Teste do Decorator
let meuCafe = new CafeSimples();
console.log(`${meuCafe.descricao()} custa R$${meuCafe.custo().toFixed(2)}`);

// Adiciona leite
meuCafe = new LeiteDecorator(meuCafe);
console.log(`${meuCafe.descricao()} custa R$${meuCafe.custo().toFixed(2)}`);

// Adiciona chocolate
meuCafe = new ChocolateDecorator(meuCafe);
console.log(`${meuCafe.descricao()} custa R$${meuCafe.custo().toFixed(2)}`); // Exemplo: 5 + 2.5 + 3 = 10.50 (se o exemplo do prompt estivesse correto)
                                                                            // O exemplo do prompt (12.50) sugere que o chocolate custa 5, ou o leite 4.5, ou o café base 7. Ajustando o custo do chocolate para 5 para bater com o exemplo:
// Refazendo com custo do chocolate ajustado para bater com o exemplo do prompt (12.50)
class ChocolateDecoratorAjustado extends CafeDecorator {
    constructor(cafeDecorado) { super(cafeDecorado); }
    custo() { return super.custo() + 5.00; } // Custo ajustado
    descricao() { return super.descricao() + ", com chocolate"; }
}

let cafeExemplo = new CafeSimples(); // 5.00
cafeExemplo = new LeiteDecorator(cafeExemplo); // 5.00 + 2.50 = 7.50
cafeExemplo = new ChocolateDecoratorAjustado(cafeExemplo); // 7.50 + 5.00 = 12.50
console.log(`\nExemplo do prompt: ${cafeExemplo.descricao()} custa R$${cafeExemplo.custo().toFixed(2)}`); // Exemplo: 12.50

// Adiciona Chantilly ao último café
cafeExemplo = new ChantillyDecorator(cafeExemplo);
console.log(`${cafeExemplo.descricao()} custa R$${cafeExemplo.custo().toFixed(2)}`); // 12.50 + 1.50 = 14.00

console.log("\n--- Fim dos Exercícios ---");

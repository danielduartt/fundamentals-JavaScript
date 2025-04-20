// 📌 Declaração de Funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log('--- Declaração de Funções ---');
console.log(saudacao('Maria')); // "Olá, Maria!"
console.log();

// 🔍 Expressões de Função
const calculaArea = function(largura, altura) {
    return largura * altura;
};

console.log('--- Expressões de Função ---');
console.log(calculaArea(5, 3)); // 15
console.log();

// 🎭 Funções Anônimas
console.log('--- Funções Anônimas ---');
setTimeout(function() {
    console.log('Executou após 1 segundo');
}, 1000);
console.log();

// ➡️ Arrow Functions
const soma = (a, b) => {
    return a + b;
};

const multiplica = (a, b) => a * b;
const dobra = n => n * 2;
const horario = () => new Date().toLocaleTimeString();

console.log('--- Arrow Functions ---');
console.log('Soma:', soma(5, 3));
console.log('Multiplica:', multiplica(4, 2));
console.log('Dobra:', dobra(6));
console.log('Horário:', horario());
console.log();

// 🎯 Parâmetros Padrão
function potencia(base, expoente = 2) {
    return Math.pow(base, expoente);
}

console.log('--- Parâmetros Padrão ---');
console.log('Potência (3):', potencia(3));    // 9 (expoente padrão 2)
console.log('Potência (3, 3):', potencia(3, 3)); // 27
console.log();

// 🌟 Rest Parameters
function somaVariadica(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log('--- Rest Parameters ---');
console.log('Soma variádica:', somaVariadica(1, 2, 3, 4, 5)); // 15
console.log();

// 🏷️ Parâmetros Nomeados (Desestruturação)
function criarUsuario({ nome, idade, email }) {
    return {
        nome,
        idade,
        email,
        dataCriacao: new Date()
    };
}

console.log('--- Parâmetros Nomeados ---');
const usuario = criarUsuario({
    nome: 'João',
    idade: 30,
    email: 'joao@exemplo.com'
});
console.log(usuario);
console.log();

// 🔄 Return
function calcularPrecoFinal(preco, desconto = 0) {
    if (desconto < 0 || desconto > 100) {
        return 'Desconto inválido';
    }
    return preco - (preco * desconto / 100);
}

console.log('--- Return ---');
console.log('Preço final:', calcularPrecoFinal(100, 20)); // 80
console.log();

// 🏁 Early Return
function processarDados(dados) {
    if (!dados) return null;
    if (dados.length === 0) return [];
    
    return dados.map(item => item.trim());
}

console.log('--- Early Return ---');
console.log('Dados processados:', processarDados(['  texto  ', '  espaços  ']));
console.log();

// 🏠 Escopo Local & 🌍 Escopo Global
let variavelGlobal = 'Acessível em qualquer lugar';

function exemploEscopo() {
    let variavelLocal = 'Só acessível dentro da função';
    console.log('--- Escopo ---');
    console.log('Local:', variavelLocal);
    console.log('Global:', variavelGlobal);
}

exemploEscopo();
console.log();

// 🔐 Closures
function criarContador() {
    let contador = 0;
    
    return function() {
        contador++;
        return contador;
    };
}

console.log('--- Closures ---');
const contador1 = criarContador();
console.log('Contador 1 - chamada 1:', contador1()); // 1
console.log('Contador 1 - chamada 2:', contador1()); // 2

const contador2 = criarContador();
console.log('Contador 2 - chamada 1:', contador2()); // 1
console.log();

// 📞 Callbacks
function processarArray(array, callback) {
    const resultado = [];
    for (let item of array) {
        resultado.push(callback(item));
    }
    return resultado;
}

console.log('--- Callbacks ---');
const numeros = [1, 2, 3, 4];
const dobrados = processarArray(numeros, n => n * 2);
console.log('Números dobrados:', dobrados); // [2, 4, 6, 8]
console.log();

// 👑 Funções como Cidadãos de Primeira Classe
const operacoes = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => a / b
};

function calculadora(operacao, a, b) {
    return operacoes[operacao](a, b);
}

console.log('--- Funções como Cidadãos de Primeira Classe ---');
console.log('Calculadora soma(5, 3):', calculadora('soma', 5, 3)); // 8
console.log('Calculadora divisao(10, 2):', calculadora('divisao', 10, 2)); // 5
console.log();

// 🔮 Funções com Promises
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

console.log('--- Promises ---');
buscarDados(1)
    .then(dados => console.log('Dados recebidos:', dados))
    .catch(erro => console.error('Erro:', erro));

// ⚡ Async/Await (função auxiliar para o exemplo)
async function buscarPerfil(userId) {
    return { bio: 'Developer', cargo: 'Engenheiro' };
}

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

// Exemplo de async/await
async function demonstrarAsyncAwait() {
    console.log('--- Async/Await ---');
    const usuarioCompleto = await obterUsuarioCompleto(1);
    console.log('Usuário completo:', usuarioCompleto);
}

demonstrarAsyncAwait();

// 🌟 Boas Práticas

// 📚 Nomenclatura Clara
function calcularTotal(item) {
    return item.preco + item.imposto;
}

// 🎯 Princípio da Responsabilidade Única
function salvarUsuario(usuario) {
    // Apenas salva no banco (simulado)
    console.log('Usuário salvo:', usuario.nome);
    return true;
}

function enviarEmailBoasVindas(usuario) {
    // Apenas envia email (simulado)
    console.log('Email enviado para:', usuario.email);
    return true;
}

// 📝 Documentação com JSDoc
/**
 * Calcula o desconto baseado no valor total e no cupom
 * @param {number} valor - Valor total da compra
 * @param {string} cupom - Código do cupom de desconto
 * @returns {number} - Valor do desconto
 */
function calcularDesconto(valor, cupom) {
    const descontos = {
        'PROMO10': 10,
        'PROMO20': 20,
        'PROMO30': 30
    };
    
    const percentual = descontos[cupom] || 0;
    return valor * (percentual / 100);
}

// 🛡️ Tratamento de Erros
function dividir(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não permitida');
    }
    return a / b;
}

// 🔒 Imutabilidade
function adicionarItem(array, item) {
    return [...array, item];
}

console.log('--- Boas Práticas ---');
console.log('Adicionar item (imutável):', adicionarItem([1, 2, 3], 4));

// Tentativa de divisão por zero (comentado para não interromper a execução)
// console.log(dividir(10, 0));

// Exemplo de uso das funções de boas práticas
const itemExemplo = { preco: 100, imposto: 10 };
console.log('Total calculado:', calcularTotal(itemExemplo));
console.log('Desconto calculado:', calcularDesconto(100, 'PROMO20'));

// Exemplo integrado
const userExemplo = { nome: 'Ana', email: 'ana@exemplo.com' };
salvarUsuario(userExemplo);
enviarEmailBoasVindas(userExemplo);
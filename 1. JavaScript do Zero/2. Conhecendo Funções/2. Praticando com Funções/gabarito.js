// BÁSICO

// 1. Função de Saudação
function saudar(nome) {
    return `Olá, ${nome}!`;
  }
  
  // 2. Calculadora Básica
  function calcular(a, b, operacao) {
    switch(operacao) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return "Operação inválida";
    }
  }
  
  // 3. Verificador de Paridade
  function ehPar(numero) {
    return numero % 2 === 0;
  }
  
  // 4. Conversor de Temperatura
  function celsiusParaFahrenheit(celsius) {
    return celsius * 9/5 + 32;
  }
  
  // 5. Contador de Vogais
  function contarVogais(str) {
    const vogais = str.toLowerCase().match(/[aeiou]/g);
    return vogais ? vogais.length : 0;
  }
  
  // INTERMEDIÁRIO
  
  // 6. Funções convertidas para Arrow Functions
  const saudarArrow = (nome) => `Olá, ${nome}!`;
  
  const calcularArrow = (a, b, operacao) => {
    switch(operacao) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return "Operação inválida";
    }
  };
  
  const ehParArrow = (numero) => numero % 2 === 0;
  
  const celsiusParaFahrenheitArrow = (celsius) => celsius * 9/5 + 32;
  
  const contarVogaisArrow = (str) => {
    const vogais = str.toLowerCase().match(/[aeiou]/g);
    return vogais ? vogais.length : 0;
  };
  
  // 7. Funções de Alta Ordem
  function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
  }
  
  // 8. Closure para Contador
  function criarContador() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  // 9. Memoização Simples
  function memoize(fn) {
    const cache = {};
    return function(arg) {
      if (arg in cache) {
        return cache[arg];
      }
      const result = fn(arg);
      cache[arg] = result;
      return result;
    };
  }
  
  // Exemplo de fibonacci com memoização
  const fibonacci = memoize((n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  });
  
  // 10. Promises Básicas
  function buscarDados(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve({ id, dados: `Dados do item ${id}` });
        } else {
          reject("ID inválido");
        }
      }, 1000);
    });
  }
  
  // AVANÇADO
  
  // 11. Currying
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...moreArgs) {
          return curried.apply(this, args.concat(moreArgs));
        }
      }
    };
  }
  
  // 12. Composição de Funções
  function compose(...funcs) {
    return function(x) {
      return funcs.reduceRight((acc, func) => func(acc), x);
    };
  }
  
  // 13. Debounce Implementation
  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // 14. Async/Await com Retry
  async function retryAsync(funcaoAssincrona, tentativas) {
    for (let i = 0; i < tentativas; i++) {
      try {
        return await funcaoAssincrona();
      } catch (error) {
        if (i === tentativas - 1) throw error;
        console.log(`Tentativa ${i + 1} falhou. Tentando novamente...`);
      }
    }
  }
  
  // 15. Generator Pattern
  function* fibonacciGenerator() {
    let prev = 0;
    let curr = 1;
    yield prev;
    yield curr;
    
    while (true) {
      const next = prev + curr;
      yield next;
      prev = curr;
      curr = next;
    }
  }
  
  // EXEMPLOS DE USO
  
  console.log('BÁSICO:');
  console.log(saudar("Maria"));
  console.log(calcular(5, 3, '+'));
  console.log(ehPar(4));
  console.log(celsiusParaFahrenheit(20));
  console.log(contarVogais("javascript"));
  
  console.log('\nINTERMEDIÁRIO:');
  const soma = (a, b) => a + b;
  console.log(aplicarOperacao(5, 3, soma));
  
  const contador = criarContador();
  console.log(contador());
  console.log(contador());
  console.log(contador());
  
  buscarDados(1).then(dados => console.log(dados));
  
  console.log('\nAVANÇADO:');
  const somaOrig = (a, b, c) => a + b + c;
  const somaCurried = curry(somaOrig);
  console.log(somaCurried(1)(2)(3));
  
  const dobrar = x => x * 2;
  const adicionar5 = x => x + 5;
  const funcaoComposta = compose(dobrar, adicionar5);
  console.log(funcaoComposta(3));
  
  const debouncedFunc = debounce(() => console.log('Executado!'), 1000);
  debouncedFunc();
  
  const fib = fibonacciGenerator();
  console.log(fib.next().value);
  console.log(fib.next().value);
  console.log(fib.next().value);
  console.log(fib.next().value);
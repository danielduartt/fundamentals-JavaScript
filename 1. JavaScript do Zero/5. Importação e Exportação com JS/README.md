# 📦 Módulo 5: Importação e Exportação com JavaScript

Neste módulo, vamos aprender a dividir o código JavaScript em vários arquivos e conectá-los usando **importação** e **exportação**. Essa prática torna seu código mais organizado, modular e fácil de manter.

---

## 🧠 Por que usar importação e exportação?

- Melhor organização do código.
- Reutilização de funções, objetos e classes.
- Facilita a manutenção e o trabalho em equipe.
- Torna seu projeto mais escalável.

---

## 🚚 Exportando Dados

Você pode exportar qualquer coisa: funções, objetos, arrays, variáveis ou classes.

### 1. Exportação Nomeada

Você pode exportar várias coisas, dando nome para cada uma:

```js
// arquivo: funcoes.js

export function somar(a, b) {
  return a + b;
}

export const PI = 3.1415;
```

### 2. Exportação Padrão (Default Export)

Você pode ter **apenas uma exportação padrão** por arquivo:

```js
// arquivo: saudacao.js

export default function saudacao(nome) {
  return `Olá, ${nome}!`;
}
```

---

## 📥 Importando Dados

### 1. Importando Exportações Nomeadas

Você deve usar `{}` e o nome exato:

```js
// arquivo: app.js

import { somar, PI } from './funcoes.js';

console.log(somar(2, 3)); // 5
console.log(PI);          // 3.1415
```

### 2. Importando uma Exportação Padrão

Você escolhe o nome que quiser:

```js
// arquivo: app.js

import saudacao from './saudacao.js';

console.log(saudacao('Daniel')); // "Olá, Daniel!"
```

### 3. Importando Tudo de Um Arquivo

```js
// arquivo: app.js

import * as Funcoes from './funcoes.js';

console.log(Funcoes.somar(4, 5)); // 9
console.log(Funcoes.PI);          // 3.1415
```

---

## ⚙️ Importante: Configurações

Para usar `import` e `export` no navegador ou Node.js, você precisa:

- No **HTML**, adicionar `type="module"`:

```html
<script type="module" src="app.js"></script>
```

- No **Node.js**, colocar `"type": "module"` no `package.json`:

```json
{
  "type": "module"
}
```

---

## ⚡ Dicas Rápidas

- Caminhos relativos: sempre use `./` ou `../` para importar arquivos locais.
- Arquivos de módulo são carregados de forma **assíncrona**.
- Cada arquivo `.js` com `import` ou `export` é tratado como **módulo** automaticamente.

---
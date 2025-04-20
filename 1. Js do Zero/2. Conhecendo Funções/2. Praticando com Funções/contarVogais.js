function contarVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (vogais.includes(texto[i])) {
        contador++;
      }
    }
  
    return contador;
  }
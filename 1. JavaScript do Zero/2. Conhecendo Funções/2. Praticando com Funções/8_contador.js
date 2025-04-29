function criarContador() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }

  const contador = criarContador(); 
  console.log(contador());
  console.log(contador());
  console.log(contador());
  console.log(contador());
const preco_combustivel = 5.79;
const gasto_medio = 12;
const dist_km = 1580; 

const res = (dist_km / gasto_medio) * preco_combustivel; 


console.log(res.toFixed(2)); 
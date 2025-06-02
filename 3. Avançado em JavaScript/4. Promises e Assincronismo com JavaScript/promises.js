const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100); 
    resolve(numero); 
})

promessaDeUmNumeroQualquer.then((value) => {
    console.log(value); 
}).catch((error)=> {
    console.error(error); 
}).finally(() => {
    console.log("finalizou"); 
})
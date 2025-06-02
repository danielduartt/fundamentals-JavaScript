const fs = require('fs'); 

const promiseDoArquivo = fs.promises.readFile("tarefas.csv"); 

promiseDoArquivo.then((arq) => arq.toString('utf8'))
    .then((text) => text.split('\n').slice(1))
    .then((text) => text.map((item) => {const [nome, feito ]= item.split(";");
        return {
            nome, 
            feito: feito.trim() == 'true'
        }
    }))
    .then((listaDeTarefas) => {
        console.log(listaDeTarefas); 
    })
    .catch((err) => console.log('Deu ruim!', err)); 


    
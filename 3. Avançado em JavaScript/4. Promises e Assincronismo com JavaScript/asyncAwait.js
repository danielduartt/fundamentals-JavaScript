const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.js')

async function buscarArquivo() {
    // await : leia o arquivo e quando terminar salve
    try{
        const arq =  await fs.promises.readFile(filePath)
        const text = arq.toString('utf8')
        console.log(text) 
    }catch(err){
        console.log(err)
    }finally{
        console.log('finalizou')
    }
    //esperou ler o arq, caso dê sucesso ele executa a linha de código abaixo 
}
 
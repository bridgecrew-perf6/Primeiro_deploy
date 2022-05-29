//modelo
//Ele vai pedir o arquivo "dotenv". Se não estiver no ambiente de produção
//pq aqui estamos no ambiente de desenvolvimento
//então não temos controle sobre o ambiente do servidor

if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.end("Servidor ativo")
})

app.get('/produtos', (req,res)=>{
    res.end("Esta eh a nossa pagina de produtos")
})

app.listen(process.env.PORT, console.log("servidor iniciado"))
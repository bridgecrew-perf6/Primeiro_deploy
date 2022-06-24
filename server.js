//modelo
//Ele vai pedir o arquivo "dotenv". Se não estiver no ambiente de produção
//pq aqui estamos no ambiente de desenvolvimento
//então não temos controle sobre o ambiente do servidor

if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}

const express = require('express')
const app = express() // Esse módulo está sendo executado pelo módulo express 
//pode chamar do nome que quiser, mas é padrão chamar app

//importando router

const indexRouter =  require('./routes/index')
const produtosRouter = require('./routes/produtos')

//habilitando as rotas
app.use(express.static('public'))
app.use('/', indexRouter)
app.use('/produtos', produtosRouter)

//app.get('/', (req,res)=>{
//    res.end("Servidor ativo")
//})

//Iniciando o servidor
app.listen(process.env.PORT, console.log("servidor iniciado"))
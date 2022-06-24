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
const expressLayouts = require('express-ejs-layouts')

//importando router

const indexRouter =  require('./routes/index')
const produtosRouter = require('./routes/produtos')
const servicosRouter = require('/routes/servicos')

//habilitando as rotas
//app.use(express.static('public'))
app.use('/', indexRouter)
app.use('/produtos', produtosRouter)
app.use('/servicos', servicosRouter)

//app.get('/', (req,res)=>{
//    res.end("Servidor ativo")
//})

//Configuração do APP

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

//Arquivos estáticos
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js',express.static(__dirname+'public/js'))


//Iniciando o servidor
app.listen(process.env.PORT, console.log("servidor iniciado"))
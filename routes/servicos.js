const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    //res.end("Servidor ativo - Router implantado")
    res.render('index')
})

router.get('/seguranca',(req,res)=>{
    //res.end("Servidor ativo - router implantado")
    res.render('index')
})
router.get('/limpeza', (req,res)=>{
    //res.end("Servidor ativo - router implantado")
    res.render('index')
})

module.exports = router
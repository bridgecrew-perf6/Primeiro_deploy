const express = require('express')
const router = express.Router()

//retirado do server.js, substituindo app por router
router.get('/', (req,res)=>{
    res.end("Servidor ativo - Produtos - Router implantado")
})

router.get('/camisetas', (req,res)=>{
    res.end("Servidor ativo - Produtos(camisetas) - Router implantado")
})

router.get('/sapatos', (req,res)=>{
    res.end("Servidor ativo - Produtos(sapatos) - Router implantado")
})

modules.exports = router
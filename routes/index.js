const express = require('express')
const router = express.Router()

//retirado do server.js, substituindo app por router
router.get('/', (req,res)=>{
    //res.end("Servidor ativo - Router implantado")
    res.render('index')
})

module.exports = router
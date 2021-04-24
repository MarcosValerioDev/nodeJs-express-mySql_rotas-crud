const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
   return res.send({message:"Tudo bem com o metodo POST da rota user."})
})

router.get('/',(req, res)=>{
    return res.send({message:"Tudo bem com o metodo GET da rota user."})
})

module.exports = router;
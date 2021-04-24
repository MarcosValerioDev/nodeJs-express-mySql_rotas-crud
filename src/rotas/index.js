const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
    return res.send({message:"Tudo bem com a rota post."})
})

router.get('/',(req, res)=>{
    return res.send({message:"Tudo bem com a rota get."})
})

module.exports = router;
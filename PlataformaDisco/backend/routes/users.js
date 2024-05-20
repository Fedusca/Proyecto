const express = require('express');
const router = express.Router();
const Users = require('../models/users'); 

router.get('/', async function(req,res){
    let usuario = await Users.find({});
    if(!usuario){
        res.status(404).send("Usuario no encontrado");
        return;
    }
    res.send(usuario);
})

module.exports = router;
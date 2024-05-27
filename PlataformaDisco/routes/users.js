const express = require('express');
const router = express.Router();
const {User} = require('../models/index'); 

//localhost.3000/user/usuario POST
router.post("/user", async function(req,res){
    let nuevoUsuario = new User(req.body);
    await nuevoUsuario.save();
    res.send("Nuevo usuario creado");
 });
 //localhost.3000/user/usuario/12345123 GET
 router.get("/user/:id", async function(req,res){
     let usuario = await User.findById(req.params.id).select('-contraseña');
     res.send(usuario);
 });
 
 router.put("/:id", async function(req,res){
     try{
         let editUsuario = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});
        res.send("usuario" + editUsuario + "editado"); 
     } catch(error){
         res.status(500).send(error);
     }
 });


module.exports = router;
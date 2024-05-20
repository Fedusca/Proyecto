const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/users");
const Album = require("../models/album");

app.use(express.json());

app.post("/usuario", async function(req,res){
   let nuevoUsuario = new user(req.body);
   await nuevoUsuario.save();
   res.send("Nuevo usuario creado");
});

app.get("/usuario:id", async function(req,res){
    let usuario = await User.findById(req.params.id).select('-contraseña');
    res.send(usuario);
});

app.put("/usuario/:id", async function(req,res){
    try{
        let editUsuario = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});
       res.send("usuario" + editUsuario + "editado"); 
    } catch(error){
        res.status(500).send(error);
    }
});


app.post("/album", async function(req,res){
    let nuevoAlbum = new Album(req.body);
    await nuevoAlbum.save();
    res.send("Nuevo album creado");
});

app.get("/albumes", async function(req,res){
    let albumes = await Album.find({});
    res.send(albumes);
});

app.put("/albumes/:id", async function(req,res){
    try{
        let editAlbumes = await Album.findByIdAndUpdate(req.params.id,req.body, { new : true });
        res.send("Album " + editAlbumes + "editado")
    }catch(error){
        res.status(500).send(error)
    }
});

app.post("/albumes/:id/canciones", async function(req,res){
    try{
        let addCancion = await Album.findById(req.params.id);
        if(!addCancion){
            res.status(404).send("Álbum no encontrado");
            return;
        }
        addCancion.canciones.push(req.body);
        await addCancion.save();
        res.send("Cancion agregada al álbum");
    }catch(error){
        res.status(500).send(error);
    }
});

app.delete("/albumes/:id/canciones/:idCancion", async function(req,res){
    try{
        let delCancion = await Album.findById(req.params.id);
        if(!delCancion){
            res.status(404).send("Álbum no encontrado");
            return;
        }
        let cancion = delCancion.canciones.id(req.params.idCancion);
        if(!cancion){
            res.status(404).send("Canción no encontrada");
            return;
        }
        delCancion.canciones.id(req.params.idCancion).remove();
        await delCancion.save();
        res.send("Cancion eliminada del álbum")
    }catch(error){
        res.status(500).send(error);
    }
});

app.get("/albumes/:id", async function(req, res){
    let album = await Album.findById(req.params.id);
    if(!album){
        res.status(404).send("Álbum no encontrado");
        return;
    }
    res.send(album);
})

app.delete("/albumes/:id", async function(req,res){
    let idAlbum = req.params.id;
    await Album.findByIdAndDelete(idAlbum);
    res.send("Álbum ELIMINADO correctamente");
});
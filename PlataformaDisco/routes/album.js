
const express = require('express');
const router = express.Router();
const {Album} = require('../models/index'); 


router.post("/album", async function(req,res){
    let nuevoAlbum = new Album(req.body);
    await nuevoAlbum.save();
    res.send("Nuevo album creado");
});

router.get("/albumes", async function(req,res){
    let albumes = await Album.find({});
    res.send(albumes);
});

router.put("/albumes/:id", async function(req,res){
    try{
        let editAlbumes = await Album.findByIdAndUpdate(req.params.id,req.body, { new : true });
        res.send("Album " + editAlbumes + "editado")
    }catch(error){
        res.status(500).send(error)
    }
});

router.post("/albumes/:id/canciones", async function(req,res){
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

router.delete("/albumes/:id/canciones/:idCancion", async function(req,res){
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

router.get("/albumes/:id", async function(req, res){
    let album = await Album.findById(req.params.id);
    if(!album){
        res.status(404).send("Álbum no encontrado");
        return;
    }
    res.send(album);
})

router.delete("/albumes/:id", async function(req,res){
    let idAlbum = req.params.id;
    await Album.findByIdAndDelete(idAlbum);
    res.send("Álbum ELIMINADO correctamente");
});


module.exports = router;

const express = require('express');
const router = express.Router();
const {Album} = require('../models/index'); 


router.post("/album", async function(req,res){
    let nuevoAlbum = new Album(req.body);
    await nuevoAlbum.save();
    // res.send("Nuevo album creado");
    res.status(201).json({id: nuevoAlbum._id});
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

router.put("/albumes/:id/canciones", async function(req, res){
    //console.log("¿esta entrando?");
    let disco = album.findById(req.params.id);

    const nuevaCancion = {
        titulo: req.body.titulo,
        duracion: req.body.duracion,
        youtubeLink: req.body.youtubeLink
};
    const updatedAlbum = await album.findByIdAndUpdate(req.params.id,{ $push: { canciones: nuevaCancion } });
    res.send("Cancion agregada al álbum");
});


router.delete("/albumes/:id/canciones/:id", async function(req,res){
    try{
        let albumId = req.params.albumId;
        console.log(albumId)
        let delCancion = await albumId
        if(!delCancion){
            res.status(404).send("Álbum no encontrado");
            return;
        }
        let cancion = delCancion.canciones.findByIdAndDelete(req.params.id);
        if(!cancion){
            res.status(404).send("Canción no encontrada");
            return;
        }
        delCancion.canciones.findByIdAndDelete(req.params.id).remove();
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
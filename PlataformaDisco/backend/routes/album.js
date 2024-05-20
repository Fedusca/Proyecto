
const express = require('express');
const albumRouter = express.Router();
const Album = require('../models/album'); 


router.get('/', async function(req, res) {
    let album = await Album.find({});
    if (!album) {
        res.status(404).send("Álbum no encontrado");
        return;
    }
    res.send(album);
});


module.exports = albumRouter;
const mongoose = require("mongoose")
const Schema = mongoose.Schema;




let Album = new Schema({
    titulo: {
     type: String,
     required:[true, 'El titulo es requerido'] 
    },
    descripcion: {
       type: String,
       required:[true, 'La descripcion es requerida'],
       validator: function(v){
        return v.length >= 2 && v.length <= 200;
       },
       message: 'El campo debe tener entre 2 y 200 caracteres!'
    },     
    canciones: [{
        titulo: String,
        duracion: Number,
        direccion: String,
        youtubeLink: String
    }],
    year: {
        type: Number,
        required:[true, 'El año es requerido'],
        validate: {
         validator: function(v){
             return v > 0;
        },
        message: 'El año no puede ser menor o igual a 0'
       },
     }, 
    portada: String,
    favoritos:{
        type:Boolean,
        default: false
    },
});


module.exports = mongoose.model("discos", Album);
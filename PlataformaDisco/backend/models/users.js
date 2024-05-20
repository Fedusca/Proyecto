const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let users = new Schema({
    nombre: {
        type: String,
        validate: {
            validator: function(v) {
                
                return v.length >= 2;
            },
            message: 'El nombre debe tener al menos 2 caracteres!'
        },
    },
    apellido: {
       type: String,
       validate:{
        validator: function(v){
            return v.length >= 2;
        },
        message: 'El apellido debe tener al menos 2 caracteres!'
       },
    },
    email: {
       type: String,
       required: true,
       validate:{
        valodator: function(v){
            return regex.test(v);
        },
        message: 'debes ingresar un email válido!'
       },
    },
    contraseña: String,
    favoritos: []
});

module.exports = mongoose.model("nuevo usuario", users);

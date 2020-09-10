const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre: { type: String, required: true},
    contrasena: { type: String, required: true},
    foto: { type: String},
    telefono: { type: String},
    num_reportes: { type: Number, required: true}

});

module.exports = mongoose.model('Usuario', usuarioSchema);
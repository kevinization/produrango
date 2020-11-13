const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    provider: { type: String, required: true},
    name: { type: String, required: true},
    email: { type: String, required: true},
    tipo: { type: String},
    foto: { type: String},
    telefono: { type: String},
    num_reportes: { type: Number }

});

module.exports = mongoose.model('Usuario', usuarioSchema);
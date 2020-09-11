const mongoose = require('mongoose');
const { Schema } = mongoose;

const comentarioSchema = new Schema({
    contenido_comentario: { type: String, required: true },
    nombre_usuario: { type: String, required: true }
});

module.exports = mongoose.model('Comentario', comentarioSchema);
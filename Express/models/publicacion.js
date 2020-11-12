const mongoose = require('mongoose');
const { Schema } = mongoose;

const publicacionSchema = new Schema({
    titulo: { type: String, /*required: true*/ },
    fecha: { type: String, /*required: true*/ },
    categoria: { type: String, /*required: true*/ },
    descripcion: { type: String, /*required: true*/ },
    archivos: { type: String },
    ubicacion: { type: String, /*required: true*/ },
    denuncias: { type: Number, /*required: true*/ },
    reincidencias: { type: Number, /*required: true*/ },
    confirmacion_reincidencias: { type: Boolean},
    contenido_comentario: { type: String },
    nombre_usuario: { type: String }

});

module.exports = mongoose.model('Publicacion', publicacionSchema);